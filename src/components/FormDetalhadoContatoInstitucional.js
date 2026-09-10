import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function FormDetalhadoContatoInstitucional({ usuarioLogado, dadosParte1, aoVoltar }) {
  // Inicializa o formulário capturando os dados que já possam ter vindo da Parte 1 (auto-fill)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    // Se a Parte 1 já carregou dados pré-existentes do banco, preenche eles aqui também
    if (dadosParte1) {
      reset({
        celular1: dadosParte1.celular1 || '',
        celular2: dadosParte1.celular2 || '',
        curso_id: dadosParte1.curso_id || '',
        ano_formacao: dadosParte1.ano_formacao || dadosParte1.anor_formacao || '',
        estado_f_aux: dadosParte1.estado_f_aux || '',
        integrante_ex_ccfex: dadosParte1.integrante_ex_ccfex || 'Não',
        matricula: dadosParte1.matricula || '',
        data_admissao: dadosParte1.data_admissao || ''
      });
    }
  }, [dadosParte1, reset]);

  const onSalvarFichaFinal = async (data) => {
    // 🔀 Junta os dados da Parte 1 com os dados novos da Parte 2
    const dadosCompletosPerfil = {
      usuario_id: usuarioLogado?.id,
      nr_cp: usuarioLogado?.nr_cp,
      ...dadosParte1, // Traz Nome, CPF, Endereço, etc.
      ...data,        // Traz Celulares, Matrícula, etc.
      atualizado_em: new Date().toISOString()
    };

    // Remove a propriedade temporária 'registroId' do corpo do JSON que vai pro banco
    const idDoRegistro = dadosParte1?.registroId;
    delete dadosCompletosPerfil.registroId;

    // Se temos um ID de registro existente, faz um UPDATE (PUT), senão faz um INSERT (POST)
    const url = idDoRegistro 
      ? `http://localhost:5000/informacoes_adicionais/${idDoRegistro}`
      : 'http://localhost:5000/informacoes_adicionais';
      
    const metodo = idDoRegistro ? 'PUT' : 'POST';

    try {
      const resposta = await fetch(url, {
        method: metodo,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dadosCompletosPerfil)
      });

      if (resposta.ok) {
        alert(idDoRegistro ? 'Ficha cadastral atualizada com sucesso!' : 'Ficha cadastral salva com sucesso!');
      } else {
        alert('Erro ao salvar as informações no servidor.');
      }
    } catch (error) {
      console.error('Erro na requisição final:', error);
      alert('Não foi possível conectar ao servidor.');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', fontFamily: 'sans-serif' }}>
      <h3 style={{ marginTop: 0 }}>Ficha Cadastral - Parte 2 de 2</h3>
      <p style={{ fontSize: '13px', color: '#666' }}>Vínculo (CP): {usuarioLogado?.nr_cp}</p>

      <form onSubmit={handleSubmit(onSalvarFichaFinal)}>
        
        {/* SEÇÃO 3: CONTATO */}
        <h4 style={{ borderBottom: '1px solid #eee', paddingBottom: '5px' }}>Contato</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px' }}>
          <div>
            <label style={{ fontSize: '14px', fontWeight: 'bold' }}>Celular 1:</label>
            <input type="text" {...register("celular1", { required: "Pelo menos um celular é obrigatório" })} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
            {errors.celular1 && <span style={{ color: 'red', fontSize: '11px' }}>{errors.celular1.message}</span>}
          </div>
          <div>
            <label style={{ fontSize: '14px' }}>Celular 2:</label>
            <input type="text" {...register("celular2")} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
        </div>

        {/* SEÇÃO 4: INFORMAÇÕES MILITARES / ACADÊMICAS */}
        <h4 style={{ borderBottom: '1px solid #eee', paddingBottom: '5px', marginTop: '20px' }}>Dados Militares / Curso</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '10px' }}>
          <div>
            <label style={{ fontSize: '14px' }}>Curso ID:</label>
            <input type="number" {...register("curso_id")} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ fontSize: '14px' }}>Ano Formação:</label>
            <input type="number" {...register("ano_formacao")} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ fontSize: '14px' }}>Estado F. Aux:</label>
            <input type="text" {...register("estado_f_aux")} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '25px' }}>
          <div>
            <label style={{ fontSize: '14px' }}>Ex-CCFEx?</label>
            <select {...register("integrante_ex_ccfex")} style={{ width: '100%', padding: '6px', height: '32px', boxSizing: 'border-box' }}>
              <option value="Não">Não</option>
              <option value="Sim">Sim</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: '14px' }}>Matrícula:</label>
            <input type="text" {...register("matricula")} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ fontSize: '14px' }}>Data Admissão:</label>
            <input type="date" {...register("data_admissao")} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
        </div>

        {/* Botões de Ação */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="button" onClick={aoVoltar} style={{ flex: 1, padding: '12px', backgroundColor: '#9ca3af', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
            ← Voltar
          </button>
          
          <button type="submit" style={{ flex: 2, padding: '12px', backgroundColor: '#22c55e', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}>
            {dadosParte1?.registroId ? 'Confirmar Atualização (Update)' : 'Salvar Ficha Completa (Insert)'}
          </button>
        </div>
      </form>
    </div>
  );
}
