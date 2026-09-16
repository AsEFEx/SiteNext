import { useState } from 'react';
import { useForm } from 'react-hook-form';
import bcrypt from 'bcryptjs'; // 🔒 Importação da biblioteca de criptografia
import Head from 'next/head'
import { useRouter } from 'next/router';
import Link from 'next/link'


export default function Cadastro() {
  const [step, setStep] = useState(1); // 1 = Validação, 2 = Criação de senha
  const [usuarioValidado, setUsuarioValidado] = useState(null);
  const router = useRouter();

  // Form da Etapa 1 (Validação de Dados no arquivo original do Excel)
  const { 
    register: registerValidacao, 
    handleSubmit: handleSubmitValidacao, 
    formState: { errors: errorsValidacao } 
  } = useForm();

  // Form da Etapa 2 (Criação de Senha Segura)
  const { 
    register: registerSenha, 
    handleSubmit: handleSubmitSenha, 
    watch, 
    formState: { errors: errorsSenha } 
  } = useForm();

  // Monitora o campo de senha para validar a confirmação
  const senhaDigitada = watch("senha");

  // 1️⃣ ETAPA 1: Validar se consta na lista permitida do Excel
 const onValidarSubmit = async (data) => {
    try {
      // 🚀 Fazemos o fetch direto para o json-server, igualzinho você faz no Login e Perfil
      const resposta = await fetch('http://127.0.0.1:5000/usuarios_validos');
      
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

      // Filtragem rigorosa baseada no que você digitou na tela
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
        setStep(2); // Avança com sucesso para a Etapa 2
      } else {
        alert('Dados não encontrados. Verifique se o Número do CP, Curso, Nome Completo e Arma foram digitados exatamente como constam na lista pré-autorizada.');
      }

    } catch (error) {
      console.error('Erro detalhado de execução:', error);
      alert('Erro interno ao tentar validar as informações.');
    }
  };

  // 2️⃣ ETAPA 2: Aplicar Criptografia e Salvar o Cadastro Definitivo
  const onSenhaSubmit = async (data) => {
    try {
      // 🔒 Gera o "salt" (fator de custo de segurança) e depois cria o Hash único
      const salt = bcrypt.genSaltSync(10);
      const senhaCriptografada = bcrypt.hashSync(data.senha, salt);

      // Une as informações do Excel com o Hash seguro da nova senha
      const novoUsuarioCompleto = {
        ...usuarioValidado, 
        senha: senhaCriptografada, // <- O hash vai para o "banco" no lugar da senha limpa
        data_cadastro: new Date().toISOString(),
      };

      const resposta = await fetch('http://127.0.0.1:5000/usuarios_cadastrados', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoUsuarioCompleto),
      });

      if (resposta.ok) {
        alert('Cadastro realizado com segurança! Sua senha foi salva de forma criptografada.');
        // Opcional: Resetar estados ou redirecionar para página de login aqui
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
          <h1 className="documentFirstHeading">ATUALIZE SEU CADASTRO</h1>
          <p style={{ textAlign: 'justify' }} >Para você mesmmo manter suas informações atualizadas preencha os dados solicitados a seguir, para validação e em seguida será direcionado para um formulário onde criará uma senha de acesso.</p>
          {/* <Link target="_blank" style={{ color: '#0088CC' }} href="https://forms.gle/KsQsW8hpMG9HQ1HV8">https://forms.gle/KsQsW8hpMG9HQ1HV8</Link>
          <p style={{ textAlign: 'justify' }} >Permanecemos à disposição para contatos por e-mail – <Link onClick={(e) => e.preventDefault()} style={{ color: '#0088CC' }} href="asefex1990@gmail.com">asefex1990@gmail.com</Link>- ou pessoalmente na sede da AsEFEx, de segunda à sexta, de 9h às 12h. </p>
 */}          <span className="hide">Fim do conteúdo da página</span>
        </section>
      </>
          
      <h2>Cadastro do Sistema</h2>

      {step === 1 ? (
        /* 📋 FORMULÁRIO ETAPA 1: VALIDAÇÃO */
        <form onSubmit={handleSubmitValidacao(onValidarSubmit)}>
          <p style={{ fontSize: '14px', color: '#555' }}>Insira seus dados pré-autorizados para iniciar.</p>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontWeight: 'bold' }}>Número do CP:</label>
            <input 
              type="text" 
              {...registerValidacao("nr_cp", { required: "O Número do CP é obrigatório" })}
              style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
            />
            {errorsValidacao.nr_cp && <span style={{ color: 'red', fontSize: '12px' }}>{errorsValidacao.nr_cp.message}</span>}
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontWeight: 'bold' }}>Curso:</label>
            <input 
              type="text" 
              {...registerValidacao("curso", { required: "O curso é obrigatório" })}
              style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
            />
            {errorsValidacao.curso && <span style={{ color: 'red', fontSize: '12px' }}>{errorsValidacao.curso.message}</span>}
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontWeight: 'bold' }}>Nome completo:</label>
            <input 
              type="text" 
              {...registerValidacao("nome", { required: "O nome é obrigatório" })}
              style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
            />
            {errorsValidacao.nome && <span style={{ color: 'red', fontSize: '12px' }}>{errorsValidacao.nome.message}</span>}
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontWeight: 'bold' }}>Arma:</label>
            <input 
              type="text" 
              {...registerValidacao("arma", { required: "A Arma é obrigatória" })}
              style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
            />
            {errorsValidacao.arma && <span style={{ color: 'red', fontSize: '12px' }}>{errorsValidacao.arma.message}</span>}
          </div>

          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Validar Dados
          </button>
        </form>
      ) : (
        /* 🔒 FORMULÁRIO ETAPA 2: CRIAÇÃO DE SENHA CRIPTOGRAFADA */
        <form onSubmit={handleSubmitSenha(onSenhaSubmit)}>
          <p style={{ fontSize: '14px', color: '#555' }}>
            Olá, <strong>{usuarioValidado?.nome}</strong> ({usuarioValidado?.posto} de {usuarioValidado?.arma}).
          </p>
          <p style={{ fontSize: '14px', color: '#555' }}>Crie sua senha de acesso abaixo:</p>
          
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

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontWeight: 'bold' }}>Confirme a Senha:</label>
            <input 
              type="password" 
              {...registerSenha("confirmarSenha", { 
                required: "A confirmação de senha é obrigatória",
                validate: (value) => value === senhaDigitada || "As senhas não coincidem"
              })}
              style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
            />
            {errorsSenha.confirmarSenha && <span style={{ color: 'red', fontSize: '12px' }}>{errorsSenha.confirmarSenha.message}</span>}
          </div>

          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#22c55e', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Concluir Cadastro
          </button>
        </form>
      )}
    </div>
  );
}
