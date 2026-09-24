import { useForm } from 'react-hook-form';
import bcrypt from 'bcryptjs';
// 🚀 Importação do cliente unificado do Supabase
import { supabase } from '../lib/supabaseClient'; 

export default function FormSenha({ usuarioValidado, aoSucessoCadastro }) {
  const { 
    register, 
    handleSubmit, 
    watch, 
    formState: { errors } 
  } = useForm({ mode: "onBlur" });

  // Monitora o campo de senha em tempo real para validar a confirmação
  const senhaDigitada = watch("senha");

  // 2️⃣ ETAPA 2: Aplicar Hash Criptográfico e persistir no Supabase
  const onSenhaSubmit = async (data) => {
    try {
      // 🔒 Gera o "salt" (fator de custo de segurança de 10 rodadas) e cria o Hash único
      const salt = bcrypt.genSaltSync(10);
      const senhaCriptografada = bcrypt.hashSync(data.senha, salt);

      // Une as informações validadas da planilha com o Hash seguro da nova senha
      // O Supabase gerará o ID sequencial automaticamente (começando do 10, conforme configuramos!)
      const novoUsuarioCompleto = {
        nr_cp: String(usuarioValidado.nr_cp ?? usuarioValidado.NR_CP ?? '').trim().toUpperCase(),
        curso: String(usuarioValidado.curso ?? usuarioValidado.CURSO ?? '').trim().toUpperCase(),
        nome: String(usuarioValidado.nome_completo ?? usuarioValidado.NOME_COMPLETO ?? usuarioValidado.nome ?? usuarioValidado.NOME ?? '').trim().toUpperCase(),
        arma: String(usuarioValidado.arma ?? usuarioValidado.ARMA ?? '').trim().toUpperCase(),
        senha: senhaCriptografada, // O hash vai para a nuvem no lugar da senha limpa
        data_cadastro: new Date().toISOString()
      };

      // 🚀 GRAVAÇÃO SEGURA NA NUVEM: Insere o registro na tabela do Supabase
      const { error: erroInsercao } = await supabase
        .from('usuarios_cadastrados')
        .insert([novoUsuarioCompleto]);

      if (erroInsercao) {
        alert(`Erro ao salvar credenciais no banco do Supabase: ${erroInsercao.message}`);
        return;
      }

      alert('Cadastro realizado com segurança! Sua senha foi salva de forma criptografada na nuvem.');
      
      // Dispara a função de sucesso para redirecionar para a tela de login
      if (typeof aoSucessoCadastro === 'function') {
        aoSucessoCadastro();
      }

    } catch (error) {
      console.error('Erro ao salvar cadastro no Supabase:', error);
      alert('Não foi possível concluir o salvamento do seu cadastro.');
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
        Concluir e Salvar Cadastro
      </button>
    </form>
  );
}
