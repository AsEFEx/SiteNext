import { useState } from 'react';
import { Form, Button, Container, Alert, Spinner } from 'react-bootstrap';
import { supabase } from '../lib/supabaseClient';
import bcrypt from 'bcryptjs';

export default function LoginAdmin() {
  const [cp, setCp] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const lidarComLoginAdmin = async (e) => {
    e.preventDefault();
    setErro('');
    setCarregando(true);

    try {
      const cpLimpo = String(cp ?? '').trim().toUpperCase();

      // 1. Busca o usuário pelo CP digitado na tabela do banco
      const { data: usuario, error: erroBanco } = await supabase
        .from('usuarios_cadastrados')
        .select('*')
        .eq('nr_cp', cpLimpo)
        .single();

      if (erroBanco || !usuario) {
        setErro('Número do CP não cadastrado.');
        setCarregando(false);
        return;
      }

      // 2. Validação simples de senha (substitua pela sua lógica ou hash se houver)
      // 🔐 VALIDAÇÃO CRIPTOGRÁFICA: Compara a senha digitada com o Hash do banco
      const senhaValida = bcrypt.compareSync(senha, usuario.senha);
      
      if (!senhaValida) {
        setErro('Senha incorreta.');
        setCarregando(false);
        return;
      }

      // 3. BARREIRA DE SEGURANÇA: Verifica se o perfil_Id é estritamente igual a 1
      const nivelAcesso = usuario.perfil_id || usuario.perfil_id;
      if (Number(nivelAcesso) !== 1) {
        setErro('Acesso Negado: Você não possui privilégios de administrador.');
        setCarregando(false);
        return;
      }

      // 4. Se passou por tudo, grava a sessão e redireciona para o painel físico correto
      localStorage.setItem('usuario_sessao', JSON.stringify(usuario));
      window.location.href = '/painelAdministrativo';

    } catch (err) {
      console.error(err);
      setErro('Erro técnico ao processar autenticação.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-4 shadow rounded bg-white" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4 text-uppercase">🛡️ Login Admin</h3>
        
        {erro && <Alert variant="danger">{erro}</Alert>}

        <Form onSubmit={lidarComLoginAdmin}>
          <Form.Group className="mb-3">
            <Form.Label>Número do CP</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Ex: 1323J" 
              value={cp} 
              onChange={(e) => setCp(e.target.value)} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Senha de Acesso</Form.Label>
            <Form.Control 
              type="password" 
              value={senha} 
              onChange={(e) => setSenha(e.target.value)} 
              required 
            />
          </Form.Group>

          <Button variant="danger" type="submit" className="w-100 mt-2" disabled={carregando}>
            {carregando ? <Spinner animation="border" size="sm" /> : 'Autenticar no Painel'}
          </Button>
        </Form>
      </div>
    </Container>
  );
}
