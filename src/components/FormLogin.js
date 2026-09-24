import { useState } from 'react';
import { useForm } from 'react-hook-form';
import bcrypt from 'bcryptjs';
// 🚀 Importação do cliente unificado do Supabase
import { supabase } from '../lib/supabaseClient'; 

export default function FormLogin({ onLoginSucesso }) {
  const [erroServidor, setErroServidor] = useState('');
  const [carregando, setCarregando] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur"
  });

  const onSubmitLogin = async (data) => {
    setErroServidor('');
    setCarregando(true);
    
    try {
      // Padroniza o texto digitado na tela (remove espaços e força maiúsculas)
      const cpDigitadoStr = String(data.nr_cp ?? '').trim().toUpperCase();

      // 🚀 BUSCA NA NUVEM: Procura na tabela 'usuarios_cadastrados' filtrando exatamente pelo CP
      const { data: listaUsuarios, error: erroSupabase } = await supabase
        .from('usuarios_cadastrados')
        .select('*')
        .eq('nr_cp', cpDigitadoStr);

      if (erroSupabase) {
        setErroServidor(`Erro ao conectar ao banco do Supabase: ${erroSupabase.message}`);
        setCarregando(false);
        return;
      }

      // Se a lista vier vazia, significa que o CP não existe ou não criou senha
      if (!listaUsuarios || listaUsuarios.length === 0) {
        setErroServidor('Número do CP não cadastrado ou senha não criada no primeiro acesso.');
        setCarregando(false);
        return;
      }

      // Como o CP é único, pegamos o primeiro registro retornado
      const usuarioEncontrado = listaUsuarios[0];

      // 🔐 VALIDAÇÃO CRIPTOGRÁFICA: Compara a senha digitada com o Hash do banco
      const senhaValida = bcrypt.compareSync(data.senha, usuarioEncontrado.senha);

      if (senhaValida) {
        // Envia o objeto do usuário autenticado para salvar no localStorage do App.jsx
        onLoginSucesso(usuarioEncontrado);
      } else {
        setErroServidor('Senha incorreta. Tente novamente.');
      }

    } catch (error) {
      console.error('Erro ao tentar fazer login:', error);
      setErroServidor('Não foi possível processar a autenticação na nuvem.');
    } finally {
      setCarregando(false);
    }
  };

    return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', fontFamily: 'sans-serif' }}>
      <h2 style={{ marginTop: 0, borderBottom: '2px solid #eee', paddingBottom: '5px' }}>Acesso ao Sistema</h2>
      
      <form onSubmit={handleSubmit(onSubmitLogin)}>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>Insira suas credenciais cadastradas para atualizar sua ficha.</p>

        {/* 🚨 Mensagem de Erro de Autenticação do Supabase ou Senha Incorreta */}
        {erroServidor && (
          <div style={{ padding: '10px', backgroundColor: '#fee2e2', color: '#991b1b', border: '1px solid #fca5a5', borderRadius: '4px', marginBottom: '15px', fontSize: '13px', fontWeight: 'bold' }}>
            {erroServidor}
          </div>
        )}

        {/* Campo: Número do CP */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', fontSize: '14px' }}>Número do CP:</label>
          <input 
            type="text" 
            disabled={carregando}
            {...register("nr_cp", {
              required: "O Número do CP é obrigatório",
              onChange: (e) => { e.target.value = e.target.value.trim().toUpperCase(); }
            })}
            placeholder="Ex: 0002 ou 1390J"
            style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          {errors.nr_cp && <span style={{ color: 'red', fontSize: '11px', display: 'block', marginTop: '4px' }}>{errors.nr_cp.message}</span>}
        </div>

        {/* Campo: Senha de Acesso */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', fontSize: '14px' }}>Senha:</label>
          <input 
            type="password" 
            disabled={carregando}
            {...register("senha", { 
              required: "A senha é obrigatória"
            })}
            placeholder="Insira sua senha"
            style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          {errors.senha && <span style={{ color: 'red', fontSize: '11px', display: 'block', marginTop: '4px' }}>{errors.senha.message}</span>}
        </div>

        {/* Botão de Envio com Estado de Carregamento */}
        <button 
          type="submit" 
          disabled={carregando}
          style={{ 
            width: '100%', 
            padding: '10px', 
            backgroundColor: carregando ? '#9ca3af' : '#0070f3', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: carregando ? 'not-allowed' : 'pointer', 
            fontWeight: 'bold', 
            fontSize: '16px' 
          }}
        >
          {carregando ? 'Autenticando...' : 'Entrar no Sistema'}
        </button>
      </form>
    </div>
  );
}

