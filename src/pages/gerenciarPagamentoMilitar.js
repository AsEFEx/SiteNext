'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container, Card, Button, Spinner, Form } from 'react-bootstrap';
import { supabase } from '../lib/supabaseClient';

export default function gerenciarPagamentoMilitar() {
  const router = useRouter();
  const { cp } = router.query; // Captura o ?cp=XXXX vindo do painel

  const [militar, setMilitar] = useState(null);
  const [registroPagto, setRegistroPagto] = useState({
    dt_pagto: '',
    dt_venc: '',
    comprov_pagto: ''
  });
  const [arquivoSelecionado, setArquivoSelecionado] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [mensagem, setMensagem] = useState({ tipo: '', texto: '' });

  useEffect(() => {
    if (cp) {
      carregarDadosPagamento(cp);
    }
  }, [cp]);

  // BUSCA OS DADOS DE IDENTIFICAÇÃO E O REGISTRO DE PAGAMENTO EXISTENTE
  // BUSCA OS DADOS FINANCEIROS E INJETA A DATA CORRENTE CASO SEJA UM NOVO CADASTRO
  async function carregarDadosPagamento(cpMilitar) {
    try {
      setCarregando(true);
      const cpLimpo = String(cpMilitar).trim().toUpperCase();

      // Gera a data corrente no formato AAAA-MM-DD (Horário de Brasília)
      const hoje = new Date().toLocaleDateString('pt-BR').split('/').reverse().join('-');

      // 1. Busca os dados de identificação na tabela base
      const { data: usuario, error: erroBase } = await supabase
        .from('usuarios_cadastrados')
        .select('nr_cp, nome')
        .eq('nr_cp', cpLimpo)
        .single();

      if (erroBase) throw erroBase;
      setMilitar(usuario);

      // 2. Busca o registro financeiro na tabela infor_pagamento pelo id_cp
      const { data: pagto, error: erroPagto } = await supabase
        .from('infor_pagamento')
        .select('*')
        .eq('id_cp', cpLimpo)
        .single();

      if (!erroPagto && pagto) {
        setRegistroPagto({
          // Se já existir no banco, usa o que está lá. Se vier em branco, usa hoje.
          dt_pagto: pagto.dt_pagto || hoje, 
          dt_venc: pagto.dt_venc || hoje,
          comprov_pagto: pagto.comprov_pagto || ''
        });
      } else {
        // 🔥 NOVO CADASTRO: Trava o pagamento e sugere o vencimento com a data de hoje
        setRegistroPagto({
          id_cp: cpLimpo,
          dt_pagto: hoje, // Fixado com a data corrente
          dt_venc: hoje,  // Recebe a data corrente, mas editável
          comprov_pagto: ''
        });
      }
    } catch (error) {
      console.error('Erro ao carregar dados financeiros:', error.message);
      setMensagem({ tipo: 'danger', texto: 'Erro ao carregar histórico financeiro.' });
    } finally {
      setCarregando(false);
    }
  }

  // ATUALIZA OS ESTADOS TEXTUAIS DO FORMULÁRIO DINAMICAMENTE
  const lidarComMudancaForm = (e) => {
    const { name, value } = e.target;
    setRegistroPagto((prev) => ({ ...prev, [name]: value }));
  };

  // CAPTURA E VALIDA O ARQUIVO DE COMPROVANTE (IMAGEM OU PDF) DIRECT NO BOTÃO
  const lidarComSelecaoArquivo = (e) => {
    const arquivo = e.target.files[0];
    if (!arquivo) return;

    const extensaoReal = arquivo.name.split('.').pop().toLowerCase();
    const extensoesPermitidas = ['png', 'jpg', 'jpeg', 'pdf'];

    if (!extensoesPermitidas.includes(extensaoReal)) {
      setMensagem({
        tipo: 'danger',
        texto: `Formato inválido (.${extensaoReal}). Selecione apenas arquivos em PDF, PNG, JPG ou JPEG.`
      });
      e.target.value = '';
      setArquivoSelecionado(null);
      return;
    }

    setMensagem({ tipo: '', texto: '' });
    setArquivoSelecionado(arquivo);
  };

  // PERSISTÊNCIA INTEGRADA: FAZ UPLOAD DO ARQUIVO E SALVA OS DADOS NO BANCO
  const salvarDadosFinanceiros = async (e) => {
    e.preventDefault();
    setSalvando(true);
    setMensagem({ tipo: '', texto: '' });

    try {
      const cpLimpo = String(militar.nr_cp).trim().toUpperCase();
      let caminhoStorage = registroPagto.comprov_pagto;

      // 1. Caso o administrador tenha selecionado um novo arquivo, faz o processamento do Storage primeiro
      if (arquivoSelecionado) {
        const extensao = arquivoSelecionado.name.split('.').pop().toLowerCase();
        const nomeArquivo = `${cpLimpo}_comprovante.${extensao}`;

        // Limpa arquivos antigos para evitar acúmulo de lixo com extensões concorrentes
        const extensoesPossiveis = ['png', 'jpg', 'jpeg', 'pdf'];
        const arquivosParaDeletar = extensoesPossiveis.map(ext => `${cpLimpo}_comprovante.${ext}`);
        await supabase.storage.from('comprov_pagto').remove(arquivosParaDeletar);

        // Upload do arquivo físico
        const { error: erroUpload } = await supabase
          .storage
          .from('comprov_pagto')
          .upload(nomeArquivo, arquivoSelecionado, {
            contentType: arquivoSelecionado.type,
            cacheControl: '0',
            upsert: true
          });

        if (erroUpload) throw erroUpload;

        // Recupera e define a URL pública ou caminho textual para salvar na tabela
        const { data: publicData } = supabase.storage.from('comprov_pagto').getPublicUrl(nomeArquivo);
        caminhoStorage = publicData?.publicUrl || nomeArquivo;
      }

      // 2. Prepara o payload para atualizar ou inserir na tabela infor_pagamento
      const payloadPagamento = {
        id_cp: cpLimpo,
        dt_pagto: registroPagto.dt_pagto || null,
        dt_venc: registroPagto.dt_venc || null,
        comprov_pagto: caminhoStorage,
        update_at: new Date().toISOString()
      };

      // Como o id_cp atua como vínculo lógico, usamos o upsert baseado nele
      const { error: erroUpsert } = await supabase
        .from('infor_pagamento')
        .upsert(payloadPagamento, { onConflict: 'id_cp' });

      if (erroUpsert) throw erroUpsert;

      setMensagem({ tipo: 'success', texto: 'Informações de pagamento salvas com sucesso!' });
      setArquivoSelecionado(null);
      await carregarDadosPagamento(cpLimpo);

    } catch (error) {
      console.error('Erro ao persistir informações financeiras:', error.message);
      setMensagem({ tipo: 'danger', texto: 'Erro técnico ao gravar dados de pagamento no Supabase.' });
    } finally {
      setSalvando(false);
    }
  };
  // TELA DE CARREGAMENTO INICIAL
  if (carregando) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="danger" />
        <span className="ms-2 font-weight-bold">Acessando registros financeiros...</span>
      </div>
    );
  }

  return (
    <Container className="mt-4 mb-5 mx-auto" style={{ maxWidth: '850px' }}>
      
      {/* Cabeçalho */}
      <div className="d-flex justify-content-between align-items-center mb-5 border-bottom pb-2">
        <div>
          <h2 className="text-uppercase tracking-wide h4 mb-1">💳 Informações de Pagamento</h2>
          <p className="text-muted small mb-0">Controle de datas e upload de comprovante de taxas</p>
        </div>
        <Button variant="outline-secondary" size="sm" onClick={() => window.location.href = '/painelAdministrativo'}>
          Voltar ao Painel
        </Button>
      </div>

      {/* Alertas Visuais */}
      {mensagem.texto && (
        <div 
          className={`alert alert-${mensagem.tipo} text-center py-2 mx-auto mb-4 small`} 
          style={{ maxWidth: '450px', width: '100%', borderRadius: '6px' }}
        >
          {mensagem.texto}
        </div>
      )}

      {/* Card de Controle Financeiro Centralizado e Blindado */}
      <Card className="shadow-sm border-0 mx-auto bg-white p-4" style={{ maxWidth: '450px', borderRadius: '12px', display: 'block', float: 'none', clear: 'both' }}>
        
        {/* Identificação do Militar */}
        <div className="text-center mb-4 w-100">
          <h5 className="mb-1 text-uppercase font-weight-bold" style={{ letterSpacing: '0.5px' }}>{militar?.nome}</h5>
          <span className="badge bg-light text-secondary border px-2 py-1" style={{ fontSize: '11px' }}>Nº CP: {militar?.nr_cp}</span>
        </div>

        {/* FORMULÁRIO EM FLEXBOX EM PILHA INDEPENDENTE DO BOOTSTRAP ROW */}
        <form onSubmit={salvarDadosFinanceiros} style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
          
          {/* Campo 1: Data de Pagamento */}
          {/* Campo 1: Data de Pagamento - FIXADO COM READONLY E ESTILO BLOQUEADO */}
          <div style={{ width: '100%' }}>
            <Form.Group>
              <Form.Label className="text-muted mb-1" style={{ fontSize: '11px', display: 'block', textAlign: 'left' }}>Data do Pagamento (Fixa):</Form.Label>
              <Form.Control 
                type="date" 
                name="dt_pagto" 
                size="sm" 
                // 🔥 Atributos de segurança: Impede alteração manual e deixa o fundo cinza
                readOnly
                disabled
                style={{ width: '100%', boxSizing: 'border-box', display: 'block', backgroundColor: '#e9ecef', cursor: 'not-allowed' }}
                value={registroPagto.dt_pagto} 
              />
            </Form.Group>
          </div>

          {/* Campo 2: Data de Vencimento - ABERTO PARA ALTERAÇÕES */}
          <div style={{ width: '100%' }}>
            <Form.Group>
              <Form.Label className="text-muted mb-1" style={{ fontSize: '11px', display: 'block', textAlign: 'left' }}>Data de Vencimento (Editável):</Form.Label>
              <Form.Control 
                type="date" 
                name="dt_venc" 
                size="sm" 
                style={{ width: '100%', boxSizing: 'border-box', display: 'block' }}
                value={registroPagto.dt_venc} 
                onChange={lidarComMudancaForm} // Mantém o gatilho para o usuário conseguir alterar
              />
            </Form.Group>
          </div>

          {/* Bloco 3: Upload e Visualização do Comprovante */}
          <div className="border-top pt-3 mt-2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <span className="text-muted mb-2" style={{ fontSize: '11px', display: 'block', width: '100%', textAlign: 'center' }}>
              Comprovante Digital (.PDF, .PNG ou .JPG):
            </span>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', width: '100%' }}>
              
              {/* Botão de Envio (Fundo cinza, ícone preto) */}
              <label 
                htmlFor="upload-comprovante-escondido"
                style={{ 
                  width: '42px', 
                  height: '42px', 
                  backgroundColor: '#e9ecef', 
                  color: '#000000',
                  borderRadius: '50%',
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  margin: '0',
                  fontSize: '18px',
                  border: '1px solid #ced4da'
                }}
                title="Selecionar arquivo de comprovante"
              >
                📂
              </label>

              <input 
                id="upload-comprovante-escondido"
                type="file" 
                accept="application/pdf, image/png, image/jpeg, image/jpg" 
                onChange={lidarComSelecaoArquivo} 
                style={{ position: 'absolute', width: '0px', height: '0px', opacity: '0', display: 'none', visibility: 'hidden' }}
              />

              {/* Botão Visualizar Link Atual (Só aparece se já houver arquivo salvo no banco) */}
              {registroPagto.comprov_pagto && (
                <a 
                  href={registroPagto.comprov_pagto} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    width: '42px', 
                    height: '42px', 
                    backgroundColor: '#e9ecef', 
                    color: '#000000',
                    borderRadius: '50%',
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    fontSize: '16px',
                    border: '1px solid #ced4da',
                    textDecoration: 'none'
                  }}
                  title="Abrir comprovante atual em nova aba"
                >
                  🔍
                </a>
              )}
            </div>

            {/* Texto auxiliar mostrando se há arquivo anexado ou na fila */}
            <div className="mt-2 text-center text-muted" style={{ fontSize: '10px' }}>
              {arquivoSelecionado 
                ? `Fila: ${arquivoSelecionado.name}` 
                : registroPagto.comprov_pagto 
                  ? "✓ Comprovante já armazenado em nuvem." 
                  : "Nenhum documento anexado ainda."}
            </div>
          </div>

          {/* Botão de Persistência Principal */}
          <div className="text-center mt-3 pt-2 border-top">
            <Button 
              variant="success" 
              type="submit" 
              size="sm" 
              className="px-4 font-weight-bold shadow-sm"
              disabled={salvando}
              style={{ width: '100%', maxWidth: '240px', py: '8px' }}
            >
              {salvando ? <Spinner animation="border" size="sm" /> : '💾 Gravar Informações'}
            </Button>
          </div>

        </form>
      </Card>
    </Container>
  );
}

