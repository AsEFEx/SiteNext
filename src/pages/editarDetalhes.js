'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container, Button, Spinner, Card } from 'react-bootstrap';
import { supabase } from '../lib/supabaseClient';
// Importação dos componentes modulares divididos anteriormente
import { FormIdentificacao, FormContato, FormEndereco, FormAcademico } from '../components/FormEdicaoMilitar';
export default function EditarDetalhes() {
  const router = useRouter();
  const { cp } = router.query;

  const [dadosForm, setDadosForm] = useState({});
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);

  useEffect(() => {
    if (cp) {
      carregarFichaParaEdicao(cp);
    }
  }, [cp]);

  // FUNÇÃO DE CARREGAMENTO DOS VALORES ATUAIS DO MILITAR
  async function carregarFichaParaEdicao(cpMilitar) {
    try {
      setCarregando(true);
      const cpLimpo = String(cpMilitar).trim().toUpperCase();

      // 1. Busca os dados de identificação na tabela base
      const { data: usuario, error: erroBase } = await supabase
        .from('usuarios_cadastrados')
        .select('nr_cp, nome, perfil_id')
        .eq('nr_cp', cpLimpo)
        .single();

      if (erroBase) throw erroBase;

      // 2. Busca todas as informações adicionais
      const { data: adicionais, error: erroAdicionais } = await supabase
        .from('informacoes_adicionais')
        .select('*')
        .eq('nr_cp', cpLimpo)
        .single();

      // Consolida tudo em um único estado para o formulário
      setDadosForm({
        nr_cp: usuario.nr_cp,
        nome: usuario.nome,
        perfil_id: usuario.perfil_id,
        ...(adicionais || {}) // Se não houver dados, inicia em branco
      });

    } catch (error) {
      console.error('Erro ao carregar dados para edição:', error.message);
      alert('Não foi possível carregar o cadastro deste militar.');
    } finally {
      setCarregando(false);
    }
  }
  // FUNÇÃO DE PERSISTÊNCIA: GRAVA AS ALTERAÇÕES NO SUPABASE
  const salvarAlteracoesFicha = async (e) => {
    e.preventDefault();
    setSalvando(true);

    try {
      const cpChave = dadosForm.nr_cp;

      // 1. Atualiza o nome na tabela base "usuarios_cadastrados"
      const { error: erroBase } = await supabase
        .from('usuarios_cadastrados')
        .update({ nome: dadosForm.nome })
        .eq('nr_cp', cpChave);

      if (erroBase) throw erroBase;

      // 2. Isola o payload de informações adicionais para dar o upsert por nr_cp
      const payloadAdicionais = {
        nr_cp: cpChave,
        posto_id: dadosForm.posto_id || '',
        email: dadosForm.email || '',
        celular1: dadosForm.celular1 || '',
        celular2: dadosForm.celular2 || '',
        rua: dadosForm.rua || '',
        complemento: dadosForm.complemento || '',
        bairro: dadosForm.bairro || '',
        municipio: dadosForm.municipio || '',
        uf: dadosForm.uf || '',
        cep: dadosForm.cep || '',
        curso_id: dadosForm.curso_id || '',
        ano_formacao: dadosForm.ano_formacao || '',
        matricula: dadosForm.matricula || '',
        data_admissao: dadosForm.data_admissao || null,
        integrante_ex_ccfex: dadosForm.integrante_ex_ccfex || 'Não',
        atualizado_em: new Date().toISOString()
      };

      // Executa a sincronização baseada na PK nr_cp
      const { error: erroAdicionais } = await supabase
        .from('informacoes_adicionais')
        .upsert(payloadAdicionais, { onConflict: 'nr_cp' });

      if (erroAdicionais) throw erroAdicionais;

      alert('Cadastro do militar atualizado com sucesso!');
      window.location.href = '/painelAdministrativo';

    } catch (error) {
      console.error('Erro ao salvar alterações:', error.message);
      alert('Erro técnico ao persistir as modificações.');
    } finally {
      setSalvando(false);
    }
  };
  // BLOCO DE CARREGAMENTO VISUAL
  if (carregando) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="danger" />
        <span className="ms-2 font-weight-bold">Abrindo editor cadastral...</span>
      </div>
    );
  }

  return (
    <Container className="mt-4 mb-5 mx-auto" style={{ maxWidth: '850px' }}>
      
      {/* Cabeçalho do Editor */}
      <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
        <div>
          <h2 className="text-uppercase tracking-wide h4 mb-1">✏️ Editar Ficha do Militar</h2>
          <p className="text-muted small mb-0">Alteração cadastral com persistência em lote</p>
        </div>
        <Button variant="outline-secondary" size="sm" onClick={() => window.location.href = '/painelAdministrativo'}>
          Cancelar
        </Button>
      </div>

      {/* Formulário com Gatilho de Envio */}
      <form onSubmit={salvarAlteracoesFicha}>
        
        {/* Chamada dos quatro sub-blocos modulares */}
        <FormIdentificacao dadosForm={dadosForm} setDadosForm={setDadosForm} />
        <FormContato dadosForm={dadosForm} setDadosForm={setDadosForm} />
        <FormEndereco dadosForm={dadosForm} setDadosForm={setDadosForm} />
        <FormAcademico dadosForm={dadosForm} setDadosForm={setDadosForm} />

        {/* Botão de Envio Centralizado */}
        <div className="text-center mt-4">
          <Button 
            variant="success" 
            type="submit" 
            size="md" 
            className="px-5 shadow-sm font-weight-bold"
            disabled={salvando}
          >
            {salvando ? <Spinner animation="border" size="sm" /> : '💾 Salvar Alterações'}
          </Button>
        </div>
      </form>
    </Container>
  );
}
