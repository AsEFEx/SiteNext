'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container, Button, Spinner, Card } from 'react-bootstrap';
import { supabase } from '../lib/supabaseClient';
// Importação dos componentes separados:
import { CardIdentificacao, CardContato, CardEndereco, CardAcademico } from '../components/FichaMilitar';
//import { CardIdentificacao } from '../components/FichaMilitar';

export default function VisualizarDetalhes() {
  const router = useRouter();
  const { cp } = router.query;

  const [militar, setMilitar] = useState(null);
  const [infoAdicionais, setInfoAdicionais] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (cp) {
      buscarDadosCompletos(cp);
    }
  }, [cp]);

  async function buscarDadosCompletos(cpMilitar) {
    try {
      setCarregando(true);
      const cpLimpo = String(cpMilitar).trim().toUpperCase();

      const { data: dadosBase, error: erroBase } = await supabase
        .from('usuarios_cadastrados')
        .select('nr_cp, nome, email, perfil_id')
        .eq('nr_cp', cpLimpo)
        .single();

      if (erroBase) throw erroBase;
      setMilitar(dadosBase);

      const { data: dadosAdicionais, error: erroAdicionais } = await supabase
        .from('informacoes_adicionais')
        .select('*')
        .eq('nr_cp', cpLimpo)
        .single();

      if (!erroAdicionais) {
        setInfoAdicionais(dadosAdicionais);
      }
    } catch (error) {
      console.error('Erro ao buscar ficha:', error.message);
    } finally {
      setCarregando(false);
    }
  }

  if (carregando) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="danger" />
        <span className="ms-2 font-weight-bold">Carregando ficha...</span>
      </div>
    );
  }

  if (!militar) {
    return (
      <Container className="mt-5 text-center">
        <Card className="p-5 border-danger shadow-sm">
          <h3 className="text-danger">Militar não encontrado</h3>
          <Button variant="secondary" onClick={() => router.push('/painelAdministrativo')} className="mx-auto mt-3">
            Voltar ao Painel
          </Button>
        </Card>
      </Container>
    );
  }

  return (
    <Container className="mt-4 mb-4">
      {/* Cabeçalho */}
      <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
        <div>
          <h2 className="text-uppercase tracking-wide h4 mb-1">Ficha Cadastral Individual</h2>
          <p className="text-muted small mb-0">Visualização limpa e segmentada do militar</p>
        </div>
        <Button variant="outline-secondary" size="sm" onClick={() => router.push('/painelAdministrativo')}>
          ⬅️ Voltar ao Painel
        </Button>
      </div>

      {/* Renderização dos componentes modulares organizados de forma fluida */}
      <CardIdentificacao militar={militar} infoAdicionais={infoAdicionais} />
      <CardContato militar={militar} infoAdicionais={infoAdicionais} />
      <CardEndereco infoAdicionais={infoAdicionais} />
      <CardAcademico infoAdicionais={infoAdicionais} />

      {/* Rodapé */}
      <div className="text-end text-muted small px-2">
        Sincronização: {infoAdicionais?.atualizado_em 
          ? new Date(infoAdicionais.atualizado_em).toLocaleString('pt-BR') 
          : 'Nenhum log encontrado'}
      </div>
    </Container>
  );
}