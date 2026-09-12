import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

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

export default function FormDetalhadoDados({ usuarioLogado, aoAvancar }) {
  const [registroId, setRegistroId] = useState(null);
  const [carregando, setCarregando] = useState(true);

  const { register, handleSubmit, reset, setValue, getValues, formState: { errors } } = useForm();

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

  useEffect(() => {
    const buscarDados = async () => {
      if (!usuarioLogado?.id) return;
      try {
        const resposta = await fetch(`http://localhost:5000/informacoes_adicionais?usuario_id=${usuarioLogado.id}`);
        const dados = await resposta.json();
        
        if (dados.length > 0) {
          const fichaExistente = dados[0];
          setRegistroId(fichaExistente.id);
          reset(fichaExistente);
        } else {
          reset({ email: usuarioLogado?.email || '' });
        }
      } catch (error) {
        console.error("Erro ao buscar dados básicos:", error);
      } finally {
        setCarregando(false);
      }
    };
    buscarDados();
  }, [usuarioLogado, reset]);

  const onSubmeterParte1 = (data) => {
    aoAvancar({ ...data, registroId });
  };

  if (carregando) {
    return <p style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>Carregando dados pessoais...</p>;
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
            <input 
              type="text" 
              {...register("cpf", { 
                required: "CPF é obrigatório",
                onChange: (e) => { e.target.value = formatarCPF(e.target.value); }
              })} 
              placeholder="000.000.000-00"
              style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} 
            />
            {errors.cpf && <span style={{ color: 'red', fontSize: '11px' }}>{errors.cpf.message}</span>}
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
            <label style={{ fontSize: '14px' }}>Complemento:</label>
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
