import { useForm } from 'react-hook-form';
import bcrypt from 'bcryptjs';

export default function FormSenha({ usuarioValidado, onCadastroCompleto }) {
  // Inicializa o React Hook Form
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  // Monitora o campo de senha em tempo real para validar a confirmação
  const senhaDigitada = watch("senha");

  const onSenhaSubmit = async (data) => {
    try {
      // 🔒 1. Gera a criptografia (Hash) da senha de forma segura
      const salt = bcrypt.genSaltSync(10);
      const senhaCriptografada = bcrypt.hashSync(data.senha, salt);

      // 2. Une os dados validados do Excel com o hash seguro da senha criada
      const novoUsuarioCompleto = {
        ...usuarioValidado, 
        senha: senhaCriptografada, 
        data_cadastro: new Date().toISOString(),
      };

      // 3. Faz o POST para salvar o usuário definitivo na rota do json-server
      const resposta = await fetch('http://192.168.0.52:5000/usuarios_cadastrados', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoUsuarioCompleto),
      });

      if (resposta.ok) {
        alert('Cadastro realizado com segurança! Sua senha foi criptografada e salva.');
        
        // 🚀 4. Executa a função recebida por parâmetro para avisar a página pai (cadastro.jsx)
        // que o cadastro terminou, disparando o redirecionamento para o login.
        if (onCadastroCompleto) {
          onCadastroCompleto();
        }
      } else {
        alert('Erro ao registrar as credenciais no servidor.');
      }
    } catch (error) {
      console.error('Erro ao salvar cadastro:', error);
      alert('Não foi possível conectar ao servidor para concluir o cadastro.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSenhaSubmit)}>
      <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.5' }}>
        Olá, <strong>{usuarioValidado?.nome_completo}</strong> ({usuarioValidado?.posto} de {usuarioValidado?.arma}).
      </p>
      <p style={{ fontSize: '14px', color: '#555', marginBottom: '20px' }}>
        Crie sua senha de acesso abaixo para futuros logins:
      </p>
      
      {/* Campo: Nova Senha */}
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', fontWeight: 'bold', fontSize: '14px' }}>Nova Senha:</label>
        <input 
          type="password" 
          {...register("senha", { 
            required: "A senha é obrigatória",
            minLength: { value: 6, message: "A senha deve ter no mínimo 6 caracteres" }
          })}
          style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        {errors.senha && <span style={{ color: 'red', fontSize: '12px', display: 'block', marginTop: '5px' }}>{errors.senha.message}</span>}
      </div>

      {/* Campo: Confirme a Senha */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', fontWeight: 'bold', fontSize: '14px' }}>Confirme a Senha:</label>
        <input 
          type="password" 
          {...register("confirmarSenha", { 
            required: "A confirmação de senha é obrigatória",
            validate: (value) => value === senhaDigitada || "As senhas não coincidem"
          })}
          style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        {errors.confirmarSenha && <span style={{ color: 'red', fontSize: '12px', display: 'block', marginTop: '5px' }}>{errors.confirmarSenha.message}</span>}
      </div>

      <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#22c55e', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '15px' }}>
        Concluir Cadastro
      </button>
    </form>
  );
}
