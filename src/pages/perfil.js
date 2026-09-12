import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FormDetalhadoDados from '../components/FormDetalhadoDados';
import FormDetalhadoContatoInstitucional from '../components/FormDetalhadoContatoInstitucional';

export default function PaginaPerfil() {
  const router = useRouter();
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [carregando, setCarregando] = useState(true);
  
  // Controle interno das sub-etapas do perfil detalhado
  const [subStep, setSubStep] = useState(1); // 1 = Dados/Endereço, 2 = Contato/Militar
  const [dadosColetadosParte1, setDadosColetadosParte1] = useState(null);

  useEffect(() => {
    const sessaoSalva = localStorage.getItem('usuario_sessao');
    if (sessaoSalva) {
      setUsuarioLogado(JSON.parse(sessaoSalva));
      setCarregando(false);
    } else {
      router.push('/login');
    }
  }, [router]);

  if (carregando) {
    return <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}><p>Verificando autenticação...</p></div>;
  }

  return (
    <div>
      
      {/* Orquestração dos dois sub-componentes */}
      {subStep === 1 ? (
        <FormDetalhadoDados 
          usuarioLogado={usuarioLogado} 
          aoAvancar={(dados) => {
            setDadosColetadosParte1(dados);
            setSubStep(2); // Avança para a segunda parte
          }} 
        />
      ) : (
        <FormDetalhadoContatoInstitucional 
          usuarioLogado={usuarioLogado} 
          dadosParte1={dadosColetadosParte1} 
          aoVoltar={() => setSubStep(1)} // Permite voltar para corrigir dados sem perder o progresso
        />
      )}

      {/* Botão de Logout */}
      <div style={{ maxWidth: '600px', margin: '10px auto', textAlign: 'right', fontFamily: 'sans-serif' }}>
        <button 
          onClick={() => {
            localStorage.removeItem('usuario_sessao');
            router.push('/');
          }}
          style={{ padding: '5px 10px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Sair do Sistema
        </button>
      </div>

    </div>
  );
}
