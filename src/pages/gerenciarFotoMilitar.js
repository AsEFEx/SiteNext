'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container, Card, Button, Spinner, Alert, Form } from 'react-bootstrap';
import { supabase } from '../lib/supabaseClient';

export default function GerenciarFotoMilitar() {
  const router = useRouter();
  const { cp } = router.query; // Captura o CP vindo da URL (?cp=XXXX)

  const [militar, setMilitar] = useState(null);
  const [urlFoto, setUrlFoto] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [enviando, setEnviando] = useState(false);
  const [mensagem, setMensagem] = useState({ tipo: '', texto: '' });

  useEffect(() => {
    if (cp) {
      carregarDadosEFoto(cp);
    }
  }, [cp]);

  // FUNÇÃO QUE BUSCA OS DADOS DO MILITAR E CONFERE SE ELE JÁ TEM FOTO NO STORAGE
  // 1. CARREGAMENTO ATUALIZADO: Procura pelo arquivo independente da extensão (.png, .jpg ou .jpeg)
  // CARREGAMENTO CORRIGIDO: Acessa a propriedade .data.publicUrl correta do SDK do Supabase
  async function carregarDadosEFoto(cpMilitar) {
    try {
      setCarregando(true);
      const cpLimpo = String(cpMilitar).trim().toUpperCase();

      const { data: usuario, error: erroBase } = await supabase
        .from('usuarios_cadastrados')
        .select('nr_cp, nome')
        .eq('nr_cp', cpLimpo)
        .single();

      if (erroBase) throw erroBase;
      setMilitar(usuario);

      // Lista as extensões comuns para buscar o arquivo real
      const extensoes = ['png', 'jpg', 'jpeg'];
      let urlEncontrada = null;

      for (const ext of extensoes) {
        // 🔥 CORREÇÃO: O SDK retorna a resposta dentro do nó { data }
        const { data } = supabase
          .storage
          .from('fotos-militares')
          .getPublicUrl(`${cpLimpo}.${ext}`);
        
        // Verifica se a URL pública foi gerada com sucesso
        if (data?.publicUrl) {
          // Faz um teste rápido para ver se o arquivo com essa extensão realmente existe no bucket
          const test = await fetch(data.publicUrl, { method: 'HEAD' });
          if (test.ok) {
            // Se existir, adiciona o timestamp para limpar o cache do navegador e para o loop
            urlEncontrada = `${data.publicUrl}?t=${new Date().getTime()}`;
            break;
          }
        }
      }

      setUrlFoto(urlEncontrada);
    } catch (error) {
      console.error('Erro ao carregar dados da foto:', error.message);
    } finally {
      setCarregando(false);
    }
  }


  const lidarComUploadFoto = async (e) => {
    // Captura a lista de arquivos com índice zero
    const arquivo = e.target.files[0]; 
    if (!arquivo) return;

    // Extrai a extensão real do arquivo
    const nomeOriginal = arquivo.name || '';
    const extensaoReal = nomeOriginal.split('.').pop().toLowerCase();
    const extensoesPermitidas = ['png', 'jpg', 'jpeg'];

    // 🔥 VALIDAÇÃO FORÇADA: Se for inválido, emite o alerta imediatamente e aborta
    if (!extensoesPermitidas.includes(extensaoReal) || !arquivo.type.startsWith('image/')) {
      setMensagem({ 
        tipo: 'danger', 
        texto: `Formato de arquivo inválido (.${extensaoReal}). Selecione apenas imagens nos formatos PNG, JPG ou JPEG.` 
      });
      
      // Reseta o input para limpar o arquivo inválido e para a execução
      e.target.value = ''; 
      return;
    }

    // Se passou na validação, limpa mensagens antigas e inicia o processo
    setEnviando(true);
    setMensagem({ tipo: '', texto: '' });

    try {
      const cpLimpo = String(militar.nr_cp).trim().toUpperCase();
      const nomeArquivo = `${cpLimpo}.${extensaoReal}`;

      // Remove arquivos antigos com outras extensões do storage
      const arquivosParaRemover = extensoesPermitidas.map(ext => `${cpLimpo}.${ext}`);
      await supabase.storage.from('fotos-militares').remove(arquivosParaRemover);

      // Faz o upload com o Content-Type correto correspondente à extensão real
      const { error: erroUpload } = await supabase
        .storage
        .from('fotos-militares')
        .upload(nomeArquivo, arquivo, {
          contentType: arquivo.type,
          cacheControl: '0',
          upsert: true
        });

      if (erroUpload) throw erroUpload;

      setMensagem({ tipo: 'success', texto: 'Foto cadastrada e sincronizada com sucesso!' });
      await carregarDadosEFoto(cpLimpo);

    } catch (error) {
      console.error('Erro ao realizar upload:', error.message);
      setMensagem({ tipo: 'danger', texto: 'Erro técnico ao persistir o arquivo no Supabase Storage.' });
    } finally {
      setEnviando(false);
      e.target.value = ''; // Limpa o input
    }
  };





  // FUNÇÃO COMPLEMENTAR PARA EXCLUIR A FOTO ATUAL
  const removerFotoExistente = async () => {
    const confirmar = window.confirm('Tem certeza de que deseja remover permanentemente a foto deste militar?');
    if (!confirmar) return;

    setEnviando(true);
    try {
      const cpLimpo = String(militar.nr_cp).trim().toUpperCase();
      const nomeArquivo = `${cpMilitares}.png`;

      const { error: erroRemover } = await supabase
        .storage
        .from('fotos-militares')
        .remove([nomeArquivo]);

      if (erroRemover) throw erroRemover;

      setUrlFoto(null);
      setMensagem({ tipo: 'success', texto: 'Foto removida com sucesso do servidor.' });

    } catch (error) {
      console.error('Erro ao remover foto:', error.message);
      setMensagem({ tipo: 'danger', texto: 'Não foi possível apagar o arquivo de imagem.' });
    } finally {
      setEnviando(false);
    }
  };

  // TELA DE CARREGAMENTO INICIAL
  // TELA DE CARREGAMENTO INICIAL
  // TELA DE CARREGAMENTO INICIAL
  if (carregando) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="danger" />
        <span className="ms-2 font-weight-bold">Acessando central de imagens...</span>
      </div>
    );
  }

  return (
    <Container className="mt-4 mb-5 mx-auto" style={{ maxWidth: '850px' }}>
      
      {/* Cabeçalho */}
      <div className="d-flex justify-content-between align-items-center mb-5 border-bottom pb-2">
        <div>
          <h2 className="text-uppercase tracking-wide h4 mb-1">📷 Gerenciar Foto do Militar</h2>
          <p className="text-muted small mb-0">Upload, substituição ou remoção de imagem no Storage</p>
        </div>
        <Button variant="outline-secondary" size="sm" onClick={() => window.location.href = '/painelAdministrativo'}>
          Voltar ao Painel
        </Button>
      </div>

      {/* Contêiner de Mensagem de Erro/Sucesso */}
      {mensagem.texto && (
        <div 
          className={`alert alert-${mensagem.tipo} text-center py-2 mx-auto mb-4 small`} 
          style={{ maxWidth: '400px', width: '100%', borderRadius: '6px' }}
        >
          {mensagem.texto}
        </div>
      )}

      {/* Card Principal */}
      <Card className="shadow-sm border-0 mx-auto bg-white p-4" style={{ maxWidth: '400px', borderRadius: '12px', display: 'block', float: 'none', clear: 'both' }}>
        
        {/* Bloco de Texto Superior */}
        <div className="text-center mb-4 w-100">
          <h5 className="mb-1 text-uppercase font-weight-bold" style={{ letterSpacing: '0.5px' }}>{militar?.nome}</h5>
          <span className="badge bg-light text-secondary border px-2 py-1" style={{ fontSize: '11px' }}>Nº CP: {militar?.nr_cp}</span>
        </div>
        <p></p>
        {/* CONTÊINER DA MOLDURA: ALINHAMENTO VERTICAL COMPACTO */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', float: 'none', clear: 'both' }}>
          
          {/* 🟥 MOLDURA RETANGULAR ALINHADA */}
          <div 
            style={{ 
              width: '150px', 
              height: '180px', 
              border: '2px solid #dee2e6',
              borderRadius: '8px',
              backgroundColor: '#f8f9fa',
              overflow: 'hidden',
              boxSizing: 'border-box',
              padding: '0',
              margin: '0'
            }}
          >
            {urlFoto ? (
              <img 
                src={urlFoto} 
                alt={`Foto de ${militar?.nome}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#6c757d', fontSize: '11px' }}>
                <div style={{ fontSize: '44px', marginBottom: '5px' }}>👤</div>
                <span>Sem Foto</span>
              </div>
            )}
          </div>

          {/* 🔘 BOTÕES ABAIXO DA FOTO COM ESPAÇAMENTO (FUNDO CINZA E IMAGEM PRETA) */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', width: '100%' }}>
            
            {/* GATILHO PARA ADICIONAR/ALTERAR */}
            <label 
              htmlFor="upload-foto-escondido"
              style={{ 
                width: '42px', 
                height: '42px', 
                backgroundColor: '#e9ecef', // Cinza padrão
                color: '#000000',           // Imagem/Ícone preto
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
              title="Adicionar ou alterar foto"
            >
              {enviando ? <Spinner animation="border" size="sm" variant="dark" /> : '📷'}
            </label>

            {/* INPUT INVISÍVEL COBERTO CONTRA DUPLICIDADE */}
            <input 
              id="upload-foto-escondido"
              type="file" 
              accept="image/png, image/jpeg, image/jpg" 
              onChange={lidarComUploadFoto} 
              disabled={enviando}
              style={{
                position: 'absolute',
                width: '0px',
                height: '0px',
                opacity: '0',
                overflow: 'hidden',
                display: 'none',
                visibility: 'hidden'
              }}
            />

            {/* BOTAO PARA REMOVER (Só renderiza se houver foto ativa) */}
            {urlFoto && (
              <div 
                style={{ 
                  width: '42px', 
                  height: '42px', 
                  backgroundColor: '#e9ecef', // Cinza padrão
                  color: '#000000',           // Imagem/Ícone preto
                  borderRadius: '50%',
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  fontSize: '16px',
                  border: '1px solid #ced4da'
                }}
                onClick={removerFotoExistente}
                title="Remover foto atual"
              >
                🗑️
              </div>
            )}
          </div>

        </div>

        {/* Rodapé do Card */}
        <p></p>
        <div className="text-center text-muted mt-4 pt-2 border-top" style={{ fontSize: '10px', width: '100%', clear: 'both' }}>
          Formatos suportados pelo sistema: <strong>PNG, JPG ou JPEG</strong>.
        </div>
      </Card>
    </Container>
  );
}




