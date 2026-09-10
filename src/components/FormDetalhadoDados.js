import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function FormDetalhadoDados({ usuarioLogado, aoAvancar }) {
  const [registroId, setRegistroId] = useState(null);
  const [carregando, setCarregando] = useState(true);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    const buscarDados = async () => {
      if (!usuarioLogado?.id) return;
      try {
        const resposta = await fetch(`http://localhost:5000/informacoes_adicionais?usuario_id=${usuarioLogado.id}`);
        const dados = await resposta.json();
        
        if (dados.length > 0) {
          setRegistroId(dados[0].id);
          reset(dados[0]);
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
    // Passa os dados coletados e o ID do registro para o componente pai/próxima etapa
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
            <input type="text" {...register("nome", { required: "Nome é obrigatório" })} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
            {errors.nome && <span style={{ color: 'red', fontSize: '11px' }}>{errors.nome.message}</span>}
          </div>
          <div>
            <label style={{ fontSize: '14px', fontWeight: 'bold' }}>CPF:</label>
            <input type="text" {...register("cpf", { required: "CPF é obrigatório" })} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
            {errors.cpf && <span style={{ color: 'red', fontSize: '11px' }}>{errors.cpf.message}</span>}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '15px' }}>
          <div>
            <label style={{ fontSize: '14px' }}>Categoria ID:</label>
            <input type="number" {...register("categoria_id")} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ fontSize: '14px' }}>Situação ID:</label>
            <input type="number" {...register("situacao_id")} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ fontSize: '14px' }}>Posto ID:</label>
            <input type="number" {...register("posto_id")} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
        </div>

        {/* SEÇÃO 2: ENDEREÇO */}
        <h4 style={{ borderBottom: '1px solid #eee', paddingBottom: '5px', marginTop: '20px' }}>Endereço</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px', marginBottom: '10px' }}>
          <div>
            <label style={{ fontSize: '14px' }}>CEP:</label>
            <input type="text" {...register("cep")} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ fontSize: '14px' }}>Rua:</label>
            <input type="text" {...register("rua")} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '10px' }}>
          <div>
            <label style={{ fontSize: '14px' }}>Bairro:</label>
            <input type="text" {...register("bairro")} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ fontSize: '14px' }}>Município:</label>
            <input type="text" {...register("municipio")} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ fontSize: '14px' }}>UF:</label>
            <input type="text" {...register("uf")} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
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
