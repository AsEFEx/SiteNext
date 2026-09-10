import { useState } from 'react';
import { useRouter } from 'next/router';
import FormValidacao from '../components/FormValidacao';
import FormSenha from '../components/FormSenha';

export default function PaginaCadastro() {
  const [step, setStep] = useState(1);
  const [usuarioValidado, setUsuarioValidado] = useState(null);
  const router = useRouter();

  const lidarComSucessoValidacao = (dadosDoUsuario) => {
    setUsuarioValidado(dadosDoUsuario);
    setStep(2); // Avança para a criação de senha
  };

  const lidarComFimCadastro = () => {
    // Após salvar a senha no json-server, redireciona o usuário para a rota de login
    router.push('/login');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', fontFamily: 'sans-serif' }}>
      <h2>Criar Nova Conta</h2>
      
      {step === 1 ? (
        <FormValidacao onSucesso={lidarComSucessoValidacao} />
      ) : (
        <FormSenha usuarioValidado={usuarioValidado} onCadastroCompleto={lidarComFimCadastro} />
      )}
    </div>
  );
}
