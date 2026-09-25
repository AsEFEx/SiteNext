import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// 🚀 Importação do cliente unificado do Supabase
import { supabase } from '../lib/supabaseClient'; 


// Aplica a máscara padrão de CPF: 000.000.000-00
const formatarCPF = (value) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    .substring(0, 14);
};

// Limpa qualquer caractere não numérico do CEP
const limpaCEP = (value) => {
  if (!value) return '';
  return value.replace(/\D/g, '').substring(0, 8);
};

// 🔒 FUNÇÃO CORRIGIDA: Validação matemática infalível de CPF
// 🔒 FUNÇÃO CORRIGIDA: Validação matemática oficial sem interferência de pontos/traços
// 🔒 FUNÇÃO CORRIGIDA: Validação matemática oficial com os índices corrigidos
// 🔒 VALIDADOR DEFINITIVO E CORRIGIDO (Sem risco de ocultar código)
// 🔒 ALGORITMO INFALÍVEL: Utiliza charAt para evitar falhas de renderização de código no chat
// Algoritmo matemático oficial com charAt (Sem perda de código no chat)
const algoritmoValidarCPF = (strCPF) => {
  if (!strCPF) return false;
  const cpfLimpo = strCPF.replace(/\D/g, '');

  if (cpfLimpo.length !== 11 || /^(\d)\1+$/.test(cpfLimpo)) return false;

  let soma = 0;
  for (let i = 1; i <= 9; i++) {
    soma = soma + parseInt(cpfLimpo.charAt(i - 1)) * (11 - i);
  }
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpfLimpo.charAt(9))) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma = soma + parseInt(cpfLimpo.charAt(i - 1)) * (12 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpfLimpo.charAt(10))) return false;

  return true;
};

export default function FormDetalhadoDados({ usuarioLogado, aoAvancar }) {
  const [registroId, setRegistroId] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erroCPF, setErroCPF] = useState('');

  // 🛠️ Incluído o 'formState: { errors }' para sanar o ReferenceError
  const { register, handleSubmit, reset, setValue, getValues, formState: { errors } } = useForm({
    mode: "onBlur"
  });

  // 🔍 VEJA AQUI: A função precisa estar exatamente neste escopo interno
  // Função que roda ao sair do campo CPF
  // 🔥 CORREÇÃO: Agora a função recebe o evento 'e' e lê diretamente o valor digitado na tela
  // 🔥 CORREÇÃO: Agora a função recebe o evento 'e' e lê diretamente o valor digitado na tela
   const verificarCpfNoBlur = (e) => {
    const valorDigitado = e.target.value;
    
    if (!valorDigitado) {
      setErroCPF('CPF é obrigatório');
      return;
    }
    
    const ehValido = algoritmoValidarCPF(valorDigitado);
    if (!ehValido) {
      setErroCPF('CPF inválido');
    } else {
      setErroCPF('');
    }
  };

  // 🔥 Função disparada ao sair do campo CEP (onBlur)
  const lidarComBuscaCEP = async () => {
    const valorCep = getValues("cep");
    const cepNumerico = limpaCEP(valorCep);

    if (cepNumerico.length === 8) {
      try {
        // 🚀 Linha corrigida com a sintaxe correta da variável: ${cepNumerico}
        const resposta = await fetch(`https://viacep.com.br/ws/${cepNumerico}/json/`);
        
        if (!resposta.ok) throw new Error("Erro na rede");
        
        const dados = await resposta.json();
        
        if (!dados.erro) {
          setValue('rua', dados.logradouro);
          setValue('bairro', dados.bairro);
          setValue('municipio', dados.localidade);
          setValue('uf', dados.uf);
          setValue('cidade_res', dados.localidade);
          setValue('estado_res', dados.uf);
        } else {
          alert("CEP não encontrado na base de dados do ViaCEP.");
        }
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
        alert("Não foi possível conectar ao serviço de CEP. Verifique sua conexão com a internet.");
      }
    }
  };

  // 🚀 BUSCA NA NUVEM: Carrega a ficha existente do Supabase se o militar já tiver salvo algo antes
  // 🚀 BUSCA NA NUVEM CORRIGIDA: Varredura segura com tratamento de erros que impede o travamento da tela
  // 🚀 CARREGAMENTO SEGURO POR CP: Busca os dados na nuvem usando o 'nr_cp' como chave principal
  useEffect(() => {
    const buscarDadosFicha = async () => {
      // Garante que temos o Número do CP do usuário logado na sessão
      if (!usuarioLogado?.nr_cp) {
        setCarregando(false);
        return;
      }
      
      try {
        // Padroniza o CP para garantir que a busca seja precisa e em maiúsculas
        const cpMilitar = String(usuarioLogado.nr_cp).trim().toUpperCase();

        // 🎯 MUDANÇA AQUI: Filtramos a tabela 'informacoes_adicionais' pela coluna 'nr_cp'
        const { data: listaFichas, error: erroFicha } = await supabase
          .from('informacoes_adicionais')
          .select('*')
          .eq('nr_cp', cpMilitar);

        if (erroFicha) {
          console.error("Erro técnico retornado pelo Supabase:", erroFicha.message);
        }

        // Se o militar já tiver uma ficha salva na nuvem com esse CP
        if (listaFichas && listaFichas.length > 0) {
          const fichaExistente = listaFichas[0]; // Pega a ficha encontrada
          setRegistroId(fichaExistente.id); // Guarda o ID interno do Supabase para o posterior UPDATE (PUT)
          reset(fichaExistente); // Preenche automaticamente todos os inputs da tela com os dados salvos
        } else {
          // Se for a primeira vez que ele entra, inicia a ficha usando o e-mail da conta dele
          reset({ email: usuarioLogado?.email || '' });
        }
      } catch (error) {
        console.error("Erro crítico no carregamento da ficha:", error);
        alert("Não foi possível carregar seus dados salvos. O formulário foi iniciado em branco.");
      } finally {
        setCarregando(false); // Destrava a tela tirando o letreiro de carregamento
      }
    };
    
    buscarDadosFicha();
  }, [usuarioLogado, reset]);

  // 🔥 LÓGICA DO SUBMIT CORRIGIDA: Usa o validador definitivo com charAt
  // 💾 AVANÇAR ETAPA: Transmite os dados salvos da Parte 1 para a memória do App
  const onSubmeterParte1 = (data) => {
    if (erroCPF || !algoritmoValidarCPF(data.cpf)) {
      setErroCPF('CPF inválido');
      return;
    }
    // Repassa os dados da primeira etapa e o ID do registro (caso já exista no banco)
    aoAvancar({ ...data, registroId });
  };

  if (carregando) {
    return <p style={{ textAlign: 'center', fontFamily: 'sans-serif', marginTop: '5px' }}>Carregando dados pessoais da nuvem...</p>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', fontFamily: 'sans-serif' }}>
      <h3 style={{ marginTop: 0 }}>Ficha Cadastral - Parte 1 de 2</h3>
      <p style={{ fontSize: '13px', color: '#666' }}>Vínculo (CP): {usuarioLogado?.nr_cp}</p>

      <form onSubmit={handleSubmit(onSubmeterParte1)}>
        {/* SEÇÃO 1: DADOS PESSOAIS */}
        <h4 style={{ borderBottom: '1px solid #eee', paddingBottom: '5px' }}>Dados Pessoais</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '10px', marginBottom: '15px' }}>
          <div>
            <label style={{ fontSize: '14px', fontWeight: 'bold' }}>Nome:</label>
            <input type="text" {...register("nome", { 
              required: "Nome é obrigatório",
              onChange: (e) => { e.target.value = e.target.value.toUpperCase(); } // 🔥 Transforma em MAIÚSCULO
              })} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
            {errors.nome && <span style={{ color: 'red', fontSize: '11px' }}>{errors.nome.message}</span>}
          </div>
          <div>
            <label style={{ fontSize: '14px', fontWeight: 'bold' }}>CPF:</label>
              {/* 🔒 Input de CPF com onBlur nativo e controlado */}
              {/* 🔒 Input de CPF sincronizado forçadamente com o setValue do Hook Form */}
              <input 
                type="text" 
                {...register("cpf", { required: "CPF é obrigatório" })}
                onBlur={(e) => verificarCpfNoBlur(e)}
                onChange={(e) => {
                  const valorFormatado = formatarCPF(e.target.value);
                  e.target.value = valorFormatado;
                  setValue("cpf", valorFormatado); // 🔥 Sincroniza o valor digitado diretamente com o hook-form (data do onSubmit)
                  if (erroCPF) setErroCPF(''); 
                }}
                placeholder="000.000.000-00"
                style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} 
              />           
            {/* 🚨 Exibição imediata do erro de validação do CPF */}
            {erroCPF && <span style={{ color: 'red', fontSize: '11px', display: 'block', marginTop: '4px', fontWeight: 'bold' }}>{erroCPF}</span>}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '15px' }}>
          {/* Categoria Select */}
          <div>
            <label style={{ fontSize: '14px', fontWeight: 'bold' }}>Categoria:</label>
            <select {...register("categoria_id", { required: "Selecione uma categoria" })} style={{ width: '100%', padding: '6px', height: '32px', boxSizing: 'border-box' }}>
              <option value="">Selecione...</option>
              <option value="1">Ex-aluno - Exército</option>
              <option value="2">Amigo do CCFEx/FSJ (EsEFEx, IPCFEx ou CDE)</option>
              <option value="3">Ex-aluno - Marinha</option>
              <option value="4">Ex-aluno - Força Aérea</option>
              <option value="5">Ex-aluno - Polícia Militar</option>
              <option value="6">Ex-aluno - Corpo de Bombeiros Militar</option>
              <option value="7">Ex-aluno - Nação Amiga</option>
              <option value="8">Integrante do CCFEx/FSJ ou OMDS</option>
            </select>
          </div>
          
          {/* Situação Select */}
          <div>
            <label style={{ fontSize: '14px', fontWeight: 'bold' }}>Situação:</label>
            <select {...register("situacao_id", { required: "Selecione uma situação" })} style={{ width: '100%', padding: '6px', height: '32px', boxSizing: 'border-box' }}>
              <option value="">Selecione...</option>
              <option value="1">Militar da ativa</option>
              <option value="2">Militar da reserva</option>
              <option value="3">Civil</option>
            </select>
          </div>
          
          {/* Posto Select */}
          <div>
            <label style={{ fontSize: '14px', fontWeight: 'bold' }}>Posto / Graduação:</label>
            <select {...register("posto_id", { required: "Selecione o posto/graduação" })} style={{ width: '100%', padding: '6px', height: '32px', boxSizing: 'border-box' }}>
              <option value="">Selecione...</option>
              <option value="1">Gen Ex / Alte Esq / Ten Brig</option>
              <option value="2">Gen Div / V Alte / Maj Brig</option>
              <option value="3">Gen Bda / C Alte / Brig</option>
              <option value="4">Cel / CMG / Cel</option>
              <option value="5">TC / CF / TC</option>
              <option value="6">Maj / CC / Maj</option>
              <option value="7">Cap / CT / Cap</option>
              <option value="8">1º Ten</option>
              <option value="9">2º Ten</option>
              <option value="10">Asp / GM / Asp</option>
              <option value="11">ST / SO / SO</option>
              <option value="12">1º Sgt / 1º SG / 1S</option>
              <option value="13">2º Sgt / 2º SG / 2S</option>
              <option value="14">3º Sgt / 3º SG / 3S</option>
              <option value="15">Cb</option>
              <option value="16">Sd</option>
            </select>
          </div>
        </div>

        {/* SEÇÃO 2: ENDEREÇO */}
        <h4 style={{ borderBottom: '1px solid #eee', paddingBottom: '5px', marginTop: '20px' }}>Endereço</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px', marginBottom: '10px' }}>
          <div>
            <label style={{ fontSize: '14px' }}>CEP:</label>
            <input 
              type="text" 
              {...register("cep", {
                onBlur: lidarComBuscaCEP,
                onChange: (e) => { e.target.value = limpaCEP(e.target.value); }
              })} 
              placeholder="Apenas números"
              style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} 
            />
          </div>
          <div>
            <label style={{ fontSize: '14px' }}>Rua:</label>
            <input disabled type="text" {...register("rua")} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '10px' }}>
          <div>
            <label style={{ fontSize: '14px' }}>Bairro:</label>
            <input disabled type="text" {...register("bairro")} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ fontSize: '14px' }}>Município:</label>
            <input disabled type="text" {...register("municipio")} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ fontSize: '14px' }}>UF:</label>
            <input disabled type="text" {...register("uf")} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '10px', marginBottom: '20px' }}>
          <div>
            <label style={{ fontSize: '14px' }}>Nr/Complemento:</label>
            <input type="text" {...register("complemento")} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ fontSize: '14px' }}>Cidade Res.:</label>
            <input type="text" {...register("cidade_res")} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ fontSize: '14px' }}>Estado Res.:</label>
            <input type="text" {...register("estado_res")} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Avançar para Contatos e Dados Militares →
        </button>
      </form>
    </div>
  );
}
