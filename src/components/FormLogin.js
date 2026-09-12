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
      // 1. Busca no json-server se existe algum usuário cadastrado definitiva com este Número do CP
      const resposta = await fetch(`http://localhost:5000/usuarios_cadastrados?nr_cp=${data.nr_cp}`);
      const usuarios = await resposta.json();

      if (usuarios.length > 0) {
        // Como o json-server sempre retorna uma lista [], pegamos o primeiro usuário encontrado
        const usuarioEncontrado = usuarios[0];

        // 2. 🔒 Compara a senha em texto limpo digitada com o HASH seguro guardado no db.json
        const senhaValida = bcrypt.compareSync(data.senha, usuarioEncontrado.senha);

        if (senhaValida) {
          // 3. Sucesso! Dispara a função que avisa a página que o login deu certo
          onLoginSucesso(usuarioEncontrado);
        } else {
          setErroServidor('Senha incorreta. Tente novamente.');
        }
      } else {
        setErroServidor('Número do CP não encontrado. Você já criou sua senha no primeiro acesso?');
      }
    } catch (error) {
      console.error('Erro ao tentar fazer login:', error);
      setErroServidor('Erro ao conectar ao servidor de autenticação.');
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
              onChange: (e) => { e.target.value = e.target.value.toUpperCase(); } // 🔥 Transforma em MAIÚSCULO
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
