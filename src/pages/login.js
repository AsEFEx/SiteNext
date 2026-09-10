import { useRouter } from 'next/router';
import Link from 'next/link'; // 👈 Certifique-se de ter essa importação
import FormLogin from '../components/FormLogin';

export default function PaginaLogin() {
  const router = useRouter();

  const lidarComLoginSucesso = (usuarioLogado) => {
    // Salva a sessão no localStorage
    localStorage.setItem('usuario_sessao', JSON.stringify(usuarioLogado));
    // Redireciona para o perfil
    router.push('/perfil');
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* 1. Aqui renderiza o formulário com os inputs de CP e Senha */}
      <FormLogin onLoginSucesso={lidarComLoginSucesso} />
      
      {/* 2. 🔥 ESTE É O BLOCO DO PRIMEIRO ACESSO QUE DEVE FICAR AQUI NA PÁGINA */}
      <div style={{ textAlign: 'center', marginTop: '15px', fontFamily: 'sans-serif' }}>
        <Link href="/paginaCadastro" style={{ color: '#0070f3', fontSize: '14px', textDecoration: 'underline', cursor: 'pointer' }}>
          Primeiro acesso? Crie sua senha aqui.
        </Link>
      </div>
    </div>
  );
}

