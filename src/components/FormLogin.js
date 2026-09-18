import { useState } from 'react';
import { useForm } from 'react-hook-form';
import bcrypt from 'bcryptjs';

export default function FormLogin({ onLoginSucesso }) {
  // Inicializa o React Hook Form para controlar os inputs de login
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  // Estado para exibir mensagens de erro que venham do servidor/validação
  const [erroServidor, setErroServidor] = useState('');

const onSubmitLogin = async (data) => {
  setErroServidor(''); // Limpa erros anteriores
  
  try {
    // 🚀 BURLA A INFERÊNCIA: Busca a lista de cadastrados para processar de forma idêntica no JS
    const resposta = await fetch('http://192.168.0.52:5000/usuarios_cadastrados');
    
    if (!resposta.ok) {
      setErroServidor('Erro ao conectar ao servidor de autenticação.');
      return;
    }

    const todosUsuariosCadastrados = await resposta.json();

    // Trata se o json-server devolveu os dados envelopados ou em array puro
    const listaUsuarios = Array.isArray(todosUsuariosCadastrados) 
      ? todosUsuariosCadastrados 
      : (todosUsuariosCadastrados.data || []);

    // 🔍 COMPARÇÃO ESTRITA DE TEXTO: Ignora qualquer conversão numérica automática do servidor
    const usuarioEncontrado = listaUsuarios.find(usuario => {
      const cpBancoStr = String(usuario.nr_cp ?? '').trim().toUpperCase();
      const cpDigitadoStr = String(data.nr_cp ?? '').trim().toUpperCase();

      // Força a comparação de texto exato, mantendo os zeros à esquerda ("0002" === "0002")
      return cpBancoStr === cpDigitadoStr;
    });

    // 3. Validação do Usuário e da Senha Criptografada
    if (usuarioEncontrado) {
      // Compara a senha digitada com o HASH seguro guardado no db.json
      const senhaValida = bcrypt.compareSync(data.senha, usuarioEncontrado.senha);

      if (senhaValida) {
        // Sucesso! Dispara a sessão
        onLoginSucesso(usuarioEncontrado);
      } else {
        setErroServidor('Senha incorreta. Tente novamente.');
      }
    } else {
      setErroServidor('Número do CP não encontrado. Você já criou sua senha no primeiro acesso?');
    }

  } catch (error) {
    console.error('Erro ao tentar fazer login:', error);
    setErroServidor('Não foi possível processar a autenticação local.');
  }
};

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', fontFamily: 'sans-serif' }}>
      <h2>Acesso ao Sistema</h2>
      
      <form onSubmit={handleSubmit(onSubmitLogin)}>
        
        {/* Campo: Número do CP */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold' }}>Número do CP:</label>
          <input 
            type="text" 
            {...register("nr_cp", {
              required: "O Número do CP é obrigatório",
              onChange: (e) => { e.target.value = String(e.target.value.trim().toUpperCase()); } // 🔥 Transforma em MAIÚSCULO
            })}
            style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
          />
          {errors.nr_cp && <span style={{ color: 'red', fontSize: '12px' }}>{errors.nr_cp.message}</span>}
        </div>

        {/* Campo: Senha */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold' }}>Senha:</label>
          <input 
            type="password" 
            {...register("senha", { required: "A senha é obrigatória" })}
            style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
          />
          {errors.senha && <span style={{ color: 'red', fontSize: '12px' }}>{errors.senha.message}</span>}
        </div>

        {/* Exibição de mensagens de erro coletadas durante a tentativa */}
        {erroServidor && (
          <div style={{ marginBottom: '15px', color: 'red', fontSize: '13px', fontWeight: 'bold' }}>
            {erroServidor}
          </div>
        )}

        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Entrar
        </button>
      </form>
    </div>
  );
}
