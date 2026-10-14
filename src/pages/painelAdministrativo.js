'use client';

import { useState, useEffect } from 'react';
import { Table, Dropdown, Spinner, Badge } from 'react-bootstrap';
import { supabase } from '../lib/supabaseClient'; // Usando sua importação padrão

export default function PainelAdministrativo() {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [adminNome, setAdminNome] = useState('');

  useEffect(() => {
    verificarAcessoEDados();
  }, []);

  async function verificarAcessoEDados() {
    try {
      // 1. Recupera o administrador logado do localStorage
      const sessaoSalva = localStorage.getItem('usuario_sessao');
      if (!sessaoSalva) {
        window.location.href = '/login';
        return;
      }

      const usuarioLogado = JSON.parse(sessaoSalva);
      const cpAdmin = String(usuarioLogado?.nr_cp ?? '').trim().toUpperCase();

      // 2. Verifica se este usuário realmente é um administrador no banco (perfil_id === 1)
      const { data: perfilData, error: perfilError } = await supabase
        .from('usuarios_cadastrados')
        .select('nome, perfil_id')
        .eq('nr_cp', cpAdmin)
        .single();

      const nivelAcesso = perfilData?.perfil_id || perfilData?.perfil_id;

      if (perfilError || !perfilData || Number(nivelAcesso) !== 1) {
        alert('Acesso negado: Rota exclusiva para administradores.');
        window.location.href = '/';
        return;
      }

      setAdminNome(perfilData.nome);

      // 3. Busca os dados realizando o JOIN através da FK (que aponta para nr_cp)
      // 3. BUSCA SEPARADA: Como não há FK, buscamos as duas tabelas de forma independente
      
      // Busca todos os usuários cadastrados
      const { data: cadastrados, error: erroCadastrados } = await supabase
        .from('usuarios_cadastrados')
        .select('nr_cp, posto, nome, perfil_id');

      if (erroCadastrados) throw erroCadastrados

      // Busca todas as informações adicionais
      const { data: adicionais, error: erroAdicionais } = await supabase
        .from('informacoes_adicionais')
        .select('nr_cp, email');

      if (erroAdicionais) throw erroAdicionais;

      // 4. JOIN MANUAL EM JAVASCRIPT: Une as informações combinando o nr_cp
      const formatados = (cadastrados || []).map((usuario) => {
        // Encontra a linha correspondente na tabela informacoes_adicionais pelo nr_cp
        const infoCorrespondente = (adicionais || []).find(
          (info) => String(info.nr_cp).trim().toUpperCase() === String(usuario.nr_cp).trim().toUpperCase()
        );

        return {
          nr_cp: usuario.nr_cp,
          posto: usuario.posto,
          nome: usuario.nome,
          //email: usuario.email,
          perfil_id: usuario.perfil_id,
          // Se encontrar o registro correspondente, pega o posto, senão preenche o padrão
          email: infoCorrespondente?.email || 'Não Informado'
        };
      });

      setListaUsuarios(formatados);

    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Houve um erro ao carregar os dados de controle.');
    } finally {
      setCarregando(false);
    }
  }

  // Rotinas para tratamento das ações baseadas em nr_cp
  const alternarPerfilAdmin = async (cpUsuario, perfilAtual) => {
    const novoPerfil = Number(perfilAtual) === 1 ? 2 : 1; 
    
    // Altere para o nome exato da coluna do seu banco (perfil_Id ou perfil_id)
    const { error } = await supabase
      .from('usuarios_cadastrados')
      .update({ perfil_id: novoPerfil }) 
      .eq('nr_cp', cpUsuario);

    if (error) alert('Erro ao alterar privilégios.');
    else verificarAcessoEDados(); 
  };

  //campo status não existe, por isso retirado
  /*const alternarStatusConta = async (cpUsuario, statusAtual) => {
     const novoStatus = statusAtual === 'ativo' ? 'inativo' : 'ativo';
    const { error } = await supabase
      .from('usuarios_cadastrados')
      .update({ status: novoStatus })
      .eq('nr_cp', cpUsuario);

    if (error) alert('Erro ao alterar status.');
    else verificarAcessoEDados();
  }; */

  if (carregando) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="danger" />
        <span className="ms-2 font-weight-bold">Autenticando canal administrativo...</span>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-5 border-bottom pb-4">
        <div>
          <h2 className="text-uppercase tracking-wide mb-1">Módulo Administrativo</h2>
          <p className="text-muted text-sm mb-0">Painel Restrito de Informações Adicionais</p>
        </div>
        <Badge bg="danger" className="p-2 fs-6">Admin: {adminNome}</Badge>
      </div>

      <Table striped bordered hover responsive className="align-middle shadow-sm bg-white rounded">
        <thead className="table-dark">
          <tr>
            <th>Nº CP</th>
            <th>Posto/Grad</th>
            <th>Nome Completo</th>
            <th>E-mail Corporativo</th>
            <th>Perfil</th>
            {/* <th>Status</th> */}
            <th className="text-center" style={{ width: '130px' }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {listaUsuarios.map((item) => (
            <tr key={item.nr_cp}>
              <td>{item.nr_cp}</td>
              <td>{item.posto}</td>
              <td><strong>{item.nome}</strong></td>
              <td>{item.email}</td>
              <td>
                <Badge bg={Number(item.perfil_id) === 1 ? 'danger' : 'primary'}>
                  {Number(item.perfil_id) === 1 ? 'ADMIN' : 'USUÁRIO'}
                </Badge>
              </td>
              {/*<td>
                 <Badge bg={item.status === 'ativo' ? 'success' : 'secondary'}>
                  {item.status.toUpperCase()}
                </Badge> 
              </td>*/}
              <td className="text-center">
                <Dropdown align="end">
                  <Dropdown.Toggle variant="outline-secondary" size="sm">
                    Ações
                  </Dropdown.Toggle>

                  {/* Mantém o comportamento nativo de abrir/fechar do Bootstrap */}
                  <Dropdown.Menu style={{ minWidth: '240px' }}>
                    
                    <Dropdown.Item 
                      onClick={() => window.location.href = `/visualizarDetalhes/?cp=${item.nr_cp}`}
                      style={{ 
                        display: 'block', 
                        clear: 'both', 
                        width: '100%', 
                        textAlign: 'left', 
                        padding: '10px 20px',
                        float: 'none' // Anula qualquer float: left do template antigo
                      }}
                    >
                      🔍 Visualizar Detalhes
                    </Dropdown.Item>

                    <Dropdown.Item 
                      onClick={() => window.location.href = `/admin/editar/${item.nr_cp}`}
                      style={{ 
                        display: 'block', 
                        clear: 'both', 
                        width: '100%', 
                        textAlign: 'left', 
                        padding: '10px 20px',
                        float: 'none'
                      }}
                    >
                      ✏️ Editar Informações
                    </Dropdown.Item>

                    <Dropdown.Item 
                      onClick={() => alternarPerfilAdmin(item.nr_cp, item.perfil_id)}
                      style={{ 
                        display: 'block', 
                        clear: 'both', 
                        width: '100%', 
                        textAlign: 'left', 
                        padding: '10px 20px',
                        float: 'none'
                      }}
                    >
                      🎖️ {Number(item.perfil_id) === 1 ? 'Rebaixar para Usuário' : 'Promover a Admin'}
                    </Dropdown.Item>

                    <Dropdown.Item 
                      onClick={() => window.location.href = `/admin/pagamentos/${item.nr_cp}`}
                      style={{ 
                        display: 'block', 
                        clear: 'both', 
                        width: '100%', 
                        textAlign: 'left', 
                        padding: '10px 20px',
                        float: 'none'
                      }}
                    >
                      💳 Informações de Pagamento
                    </Dropdown.Item>

                    <Dropdown.Item 
                      onClick={() => window.location.href = `/admin/foto/${item.nr_cp}`}
                      style={{ 
                        display: 'block', 
                        clear: 'both', 
                        width: '100%', 
                        textAlign: 'left', 
                        padding: '10px 20px',
                        float: 'none'
                      }}
                    >
                      📷 Adicionar/Editar Foto
                    </Dropdown.Item>                    
                    {/* <Dropdown.Divider />
                    <Dropdown.Item 
                      className="text-danger" 
                      onClick={() => alternarStatusConta(item.nr_cp, item.status)}
                    >
                      🚫 {item.status === 'ativo' ? 'Desativar Conta' : 'Reativar Conta'}
                    </Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
