import { useState } from 'react';
import { useForm } from 'react-hook-form';
import bcrypt from 'bcryptjs'; 
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Cadastro() {
  const [step, setStep] = useState(1); // 1 = Validação, 2 = Criação de senha
  const [usuarioValidado, setUsuarioValidado] = useState(null);
  const router = useRouter();

  const { 
    register: registerValidacao, 
    handleSubmit: handleSubmitValidacao, 
    formState: { errors: errorsValidacao } 
  } = useForm({ mode: "onBlur" });

  const { 
    register: registerSenha, 
    handleSubmit: handleSubmitSenha, 
    watch, 
    formState: { errors: errorsSenha } 
  } = useForm({ mode: "onBlur" });

  const senhaDigitada = watch("senha");

  // 1️⃣ ETAPA 1: Validar se consta na lista permitida do Excel (DIRETO NO CLIENTE)
  const onValidarSubmit = async (data) => {
    try {
      // 🚀 Chamada direta ao json-server (idêntica ao funcionamento do seu Login e Perfil)
      const resposta = await fetch('http://192.168.0.52:5000/usuarios_validos');
      
      if (!resposta.ok) {
        alert(`O servidor retornou um status de erro: ${resposta.status}`);
        return;
      }

      const corpoResposta = await resposta.json();

      // Trata se o json-server devolveu os dados envelopados ou em array puro
      const todosUsuariosValidos = Array.isArray(corpoResposta) 
        ? corpoResposta 
        : (corpoResposta.data || []);

      if (todosUsuariosValidos.length === 0) {
        alert("A lista de usuários válidos está vazia no servidor.");
        return;
      }

      // 🔍 FILTRAGEM RIGOROSA: Procura o usuário ignorando espaços e forçando maiúsculas
      const usuarioEncontrado = todosUsuariosValidos.find(usuario => {
        const nrCpBanco = String(usuario.nr_cp ?? usuario.NR_CP ?? '').trim().toUpperCase();
        const cursoBanco = String(usuario.curso ?? usuario.CURSO ?? '').trim().toUpperCase();
        const nomeBanco = String(usuario.nome_completo ?? usuario.NOME_COMPLETO ?? usuario.nome ?? usuario.NOME ?? '').trim().toUpperCase();
        const armaBanco = String(usuario.arma ?? usuario.ARMA ?? '').trim().toUpperCase();
        
        const nrCpDigitado = String(data.nr_cp ?? '').trim().toUpperCase();
        const cursoDigitado = String(data.curso ?? '').trim().toUpperCase();
        const nomeDigitado = String(data.nome ?? '').trim().toUpperCase();
        const armaDigitado = String(data.arma ?? '').trim().toUpperCase();

        return nrCpBanco === nrCpDigitado && 
               cursoBanco === cursoDigitado && 
               nomeBanco === nomeDigitado && 
               armaBanco === armaDigitado;
      });

      if (usuarioEncontrado) {
        setUsuarioValidado(usuarioEncontrado);
        setStep(2); // Avança com sucesso para a Etapa 2 (Criação de Senha)
      } else {
        alert('Dados não encontrados. Verifique se o Número do CP, Curso, Nome Completo e Arma foram digitados exatamente como constam na lista pré-autorizada.');
      }

    } catch (error) {
      alert(`Erro na requisição: ${error.message}`);
      console.error('Erro ao processar validação:', error);
    }
  };


  // 2️⃣ ETAPA 2: Aplicar Criptografia e Salvar o Cadastro Definitivo
  const onSenhaSubmit = async (data) => {
    try {
      const salt = bcrypt.genSaltSync(10);
      const senhaCriptografada = bcrypt.hashSync(data.senha, salt);

      const novoUsuarioCompleto = {
        ...usuarioValidado, 
        senha: senhaCriptografada, 
        data_cadastro: new Date().toISOString(),
      };

      const resposta = await fetch('http://192.168.0.52:5000/usuarios_cadastrados', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoUsuarioCompleto),
      });

      if (resposta.ok) {
        alert('Cadastro realizado com segurança! Sua senha foi salva de forma criptografada.');
        router.push('/login');
      } else {
        alert('Erro ao registrar as credenciais no servidor.');
      }
    } catch (error) {
      console.error('Erro ao salvar cadastro:', error);
      alert('Não foi possível salvar o seu cadastro.');
    }
  };


  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', fontFamily: 'sans-serif' }}>
      
      <>
        <Head>
          <title>Cadastro - AsEFEx</title>
        </Head>

        <section id="content-section">
          <span className="hide">Início do conteúdo da página</span>
          <h2>1º Passo: Validação de suas informações</h2>
          <p style={{ textAlign: 'justify', fontSize: '18px', fontWeight: 'bold', color: '#555', lineHeight: '1.5' }}>
            Para você validar suas informações preencha os campos a seguir e em seguida será redirecionado para um formulário para criar a senha de acesso ao sistema de atualização.
          </p>
          <span className="hide">Fim do conteúdo da página</span>
        </section>
      </>
          
      <h2>Cadastro do Sistema</h2>

      {step === 1 ? (
        /* 📋 FORMULÁRIO ETAPA 1: VALIDAÇÃO */
        <form onSubmit={handleSubmitValidacao(onValidarSubmit)}>
          <p style={{ fontSize: '14px', color: '#555' }}>Insira seus dados pré-autorizados para iniciar.</p>
          
          {/* Campo: Número do CP */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontWeight: 'bold' }}>Número do CP:</label>
            <input 
              type="text" 
              {...registerValidacao("nr_cp", {
                required: "O Número do CP é obrigatório",
                onChange: (e) => { e.target.value = e.target.value.trim().toUpperCase(); }
              })}
              style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
            />
            {errorsValidacao.nr_cp && <span style={{ color: 'red', fontSize: '12px' }}>{errorsValidacao.nr_cp.message}</span>}
          </div>

          {/* Campo: Curso */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontWeight: 'bold' }}>Curso:</label>
            <input 
              type="text" 
              {...registerValidacao("curso", { 
                required: "O curso é obrigatório",
                onChange: (e) => { e.target.value = e.target.value.trim().toUpperCase(); }
              })}
              style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
            />
            {errorsValidacao.curso && <span style={{ color: 'red', fontSize: '12px' }}>{errorsValidacao.curso.message}</span>}
          </div>

          {/* Campo: Nome Completo */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontWeight: 'bold' }}>Nome completo:</label>
            <input 
              type="text" 
              {...registerValidacao("nome", {
                required: "O nome é obrigatório",
                onChange: (e) => { e.target.value = e.target.value.trim().toUpperCase(); }
              })}
              style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
            />
            {errorsValidacao.nome && <span style={{ color: 'red', fontSize: '12px' }}>{errorsValidacao.nome.message}</span>}
          </div>

          {/* Campo: Arma */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: 'bold' }}>Arma:</label>
            <input 
              type="text" 
              {...registerValidacao("arma", {
                required: "A Arma é obrigatória",
                onChange: (e) => { e.target.value = e.target.value.trim().toUpperCase(); }
              })}
              style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
            />
            {errorsValidacao.arma && <span style={{ color: 'red', fontSize: '12px' }}>{errorsValidacao.arma.message}</span>}
          </div>

          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}>
            Validar Informações
          </button>
        </form>
      ) : (
        /* 🔒 FORMULÁRIO ETAPA 2: CRIAÇÃO DE SENHA */
        <form onSubmit={handleSubmitSenha(onSenhaSubmit)}>
          <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.4' }}>
            Olá, <strong>{usuarioValidado?.NOME_COMPLETO || usuarioValidado?.NOME || usuarioValidado?.nome_completo || usuarioValidado?.nome || 'Usuário'}</strong>. Seus dados foram validados com sucesso!
          </p>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>Defina sua senha de acesso abaixo:</p>
          
          {/* Campo: Nova Senha */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontWeight: 'bold' }}>Nova Senha:</label>
            <input 
              type="password" 
              {...registerSenha("senha", { 
                required: "A senha é obrigatória",
                minLength: { value: 6, message: "A senha deve ter no mínimo 6 caracteres" }
              })}
              style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
            />
            {errorsSenha.senha && <span style={{ color: 'red', fontSize: '12px' }}>{errorsSenha.senha.message}</span>}
          </div>

          {/* Campo: Confirmar Senha */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: 'bold' }}>Confirme a Senha:</label>
            <input 
              type="password" 
              {...registerSenha("confirmarSenha", { 
                required: "A confirmation de senha é obrigatória",
                validate: (value) => value === senhaDigitada || "As senhas não coincidem"
              })}
              style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
            />
            {errorsSenha.confirmarSenha && <span style={{ color: 'red', fontSize: '12px' }}>{errorsSenha.confirmarSenha.message}</span>}
          </div>

          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#22c55e', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}>
            Concluir e Salvar Conta
          </button>
        </form>
      )}
    </div>
  );
}
