'use client';

import { useState, useEffect } from 'react';
import { Table, Dropdown, Spinner, Badge } from 'react-bootstrap';
import { supabase } from '../lib/supabaseClient'; // Ou seu arquivo de configuração centralizado

export default function PainelAdministrativo() {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [adminNome, setAdminNome] = useState('');

  useEffect(() => {
    verificarAcessoEDados();
  }, []);

  async function verificarAcessoEDados() {
    try {
      // 1. Obtém o usuário atualmente autenticado no Supabase Auth
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      
      if (authError || !user) {
        window.location.href = '/login';
        return;
      }

      // 2. Verifica na tabela se o perfil_Id deste usuário é estritamente igual a 1
      const { data: perfilData, error: perfilError } = await supabase
        .from('usuarios_cadastrados')
        .select('nome, perfil_Id')
        .eq('id', user.id) // Presumindo que o ID do Auth vincula com o ID da tabela
        .single();

      if (perfilError || !perfilData || perfilData.perfil_Id !== 1) {
        alert('Acesso negado: Rota exclusiva para administradores.');
        window.location.href = '/';
        return;
      }

      setAdminNome(perfilData.nome);

      // 3. Busca os dados reduzidos realizando um JOIN entre as duas tabelas
      const { data: dadosTabela, error: dadosError } = await supabase
        .from('usuarios_cadastrados')
        .select(`
          id,
          nome,
          email,
          perfil_Id,
          status,
          informacoes_adicionais (
            posto_graduacao
          )
        `);

      if (dadosError) throw dadosError;

      // Formata os dados para simplificar o mapeamento da tabela
      const formatados = (dadosTabela || []).map((u) => ({
        id: u.id,
        nome: u.nome,
        email: u.email,
        perfil_Id: u.perfil_Id,
        status: u.status || 'ativo',
        posto_graduacao: u.informacoes_adicionais?.posto_graduacao || 'Não Informado'
      }));

      setListaUsuarios(formatados);
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Houve um erro ao carregar os dados de controle.');
    } finally {
      setCarregando(false);
    }
  }

  // Rotinas para tratamento das ações disparadas pelo menu flutuante
  const alternarPerfilAdmin = async (idUsuario, perfilAtual) => {
    const novoPerfil = perfilAtual === 1 ? 2 : 1; // Alterna entre admin (1) e usuário (2)
    const { error } = await supabase
      .from('usuarios_cadastrados')
      .update({ perfil_Id: novoPerfil })
      .eq('id', idUsuario);

    if (error) alert('Erro ao alterar privilégios.');
    else verificarAcessoEDados(); // Atualiza a tabela em tela
  };

  const alternarStatusConta = async (idUsuario, statusAtual) => {
    const novoStatus = statusAtual === 'ativo' ? 'inativo' : 'ativo';
    const { error } = await supabase
      .from('usuarios_cadastrados')
      .update({ status: novoStatus })
      .eq('id', idUsuario);

    if (error) alert('Erro ao alterar status.');
    else verificarAcessoEDados();
  };

  if (carregando) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="danger" />
        <span className="ms-2 font-weight-bold">Segurança Supabase: Autenticando canal...</span>
      </div>
    );
  }
  
 
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
        <div>
          <h2 className="text-uppercase tracking-wide">Módulo Administrativo</h2>
          <p className="text-muted text-sm">Painel Restrito de Informações Adicionais</p>
        </div>
        <Badge bg="danger" className="p-2 fs-6">Admin: {adminNome}</Badge>
      </div>

      <Table striped bordered hover responsive className="align-middle shadow-sm bg-white rounded">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Posto/Grad</th>
            <th>Nome Completo</th>
            <th>E-mail Corporativo</th>
            <th>Perfil</th>
            <th>Status</th>
            <th className="text-center" style={{ width: '130px' }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {listaUsuarios.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.posto_graduacao}</td>
              <td><strong>{item.nome}</strong></td>
              <td>{item.email}</td>
              <td>
                <Badge bg={item.perfil_Id === 1 ? 'danger' : 'primary'}>
                  {item.perfil_Id === 1 ? 'ADMIN' : 'USUÁRIO'}
                </Badge>
              </td>
              <td>
                <Badge bg={item.status === 'ativo' ? 'success' : 'secondary'}>
                  {item.status.toUpperCase()}
                </Badge>
              </td>
              <td className="text-center">
                <Dropdown align="end">
                  <Dropdown.Toggle variant="outline-secondary" size="sm">
                    Gerenciar
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => window.location.href = `/admin/visualizar/${item.id}`}>
                      🔍 Visualizar Detalhes
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => window.location.href = `/admin/editar/${item.id}`}>
                      ✏️ Editar Informações
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => alternarPerfilAdmin(item.id, item.perfil_Id)}>
                      🎖️ {item.perfil_Id === 1 ? 'Rebaixar para Usuário' : 'Promover a Admin'}
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => window.location.href = `/admin/pagamentos/${item.id}`}>
                      💳 Informações de Pagamento
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => window.location.href = `/admin/foto/${item.id}`}>
                      📷 Adicionar/Editar Foto
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item 
                      className="text-danger" 
                      onClick={() => alternarStatusConta(item.id, item.status)}
                    >
                      🚫 {item.status === 'ativo' ? 'Desativar Conta' : 'Reativar Conta'}
                    </Dropdown.Item>
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
