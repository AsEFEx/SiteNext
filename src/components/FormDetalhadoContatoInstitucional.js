import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// 🚀 Importação do cliente unificado do Supabase
import { supabase } from '../lib/supabaseClient'; 

const formatarCelular = (value) => {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '(\$1) \$2')
    .replace(/(\d{5})(\d)/, '\$1-\$2')
    .substring(0, 15);
};

export default function FormDetalhadoContatoInstitucional({ usuarioLogado, dadosParte1, aoVoltar, aoAtualizarIdPai }) {
  // 🔥 Estado local para controlar o ID do registro em tempo real e evitar clonagem de linhas
  const [registroIdLocal, setRegistroIdLocal] = useState(dadosParte1?.registroId || null);
  const [salvando, setSalvando] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: "onBlur"
  });

  // Preenche os campos da tela com as informações vindas da Parte 1 ou do estado anterior
  useEffect(() => {
    if (dadosParte1) {
      reset({
        email: dadosParte1.email || usuarioLogado?.email || '',
        celular1: dadosParte1.celular1 || '',
        celular2: dadosParte1.celular2 || '',
        curso_id: dadosParte1.curso_id || '',
        ano_formacao: dadosParte1.ano_formacao || '',
        estado_f_aux: dadosParte1.estado_f_aux || '',
        integrante_ex_ccfex: dadosParte1.integrante_ex_ccfex || 'Não',
        matricula: dadosParte1.matricula || '',
        data_admissao: dadosParte1.data_admissao || ''
      });
      
      if (dadosParte1.registroId) {
        setRegistroIdLocal(dadosParte1.registroId);
      }
    }
  }, [dadosParte1, usuarioLogado, reset]);

  // 💾 SALVAMENTO FINAL NA NUVEM
  const onSalvarFichaFinal = async (data) => {
    setSalvando(true);

    // Une os dados tratados da Parte 1 com os novos campos da Parte 2
    const dadosCompletosPerfil = {
      usuario_id: String(usuarioLogado?.id),
      nr_cp: String(usuarioLogado?.nr_cp),
      ...dadosParte1,
      ...data,
      atualizado_em: new Date().toISOString()
    };

    // Remove propriedades de controle local para não corromper as colunas do Supabase
    delete dadosCompletosPerfil.registroId;

    try {
      if (registroIdLocal) {
        // 🚀 CENÁRIO A: Se o ID já existe, faz uma ATUALIZAÇÃO (Update) na linha existente
        const { error: erroUpdate } = await supabase
          .from('informacoes_adicionais')
          .update(dadosCompletosPerfil)
          .eq('id', registroIdLocal);

        if (erroUpdate) throw erroUpdate;

        alert('Ficha cadastral atualizada com sucesso no Supabase!');
      } else {
        // 🚀 CENÁRIO B: Se é a primeira vez salvando na sessão, faz uma INSERÇÃO (Insert)
        // O modificador .select() força o Supabase a devolver a linha criada contendo o ID automático
        const { data: registroCriado, error: erroInsert } = await supabase
          .from('informacoes_adicionais')
          .insert([dadosCompletosPerfil])
          .select();

        if (erroInsert) throw erroInsert;

        if (registroCriado && registroCriado.length > 0) {
          const novoIdGerado = registroCriado[0].id;
          setRegistroIdLocal(novoIdGerado); // Transforma o estado local na mesma hora para evitar duplicidades
          
          // Sincroniza o ID com o componente pai (App.jsx / index.jsx), se a função existir
          if (typeof aoAtualizarIdPai === 'function') {
            aoAtualizarIdPai(novoIdGerado);
          }
        }

        alert('Ficha cadastral salva com sucesso de forma permanente no Supabase!');
      }
    } catch (error) {
      console.error('Erro ao salvar no Supabase:', error);
      alert(`Erro ao salvar as informações no servidor: ${error.message}`);
    } finally {
      setSalvando(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', fontFamily: 'sans-serif' }}>
      <h3 style={{ marginTop: 0 }}>Ficha Cadastral - Parte 2 de 2</h3>
      <p style={{ fontSize: '13px', color: '#666' }}>Vínculo (CP): {usuarioLogado?.nr_cp}</p>

      <form onSubmit={handleSubmit(onSalvarFichaFinal)}>
        
        {/* SEÇÃO 3: CONTATO */}
        <h4 style={{ borderBottom: '1px solid #eee', paddingBottom: '5px' }}>Contato</h4>
        
        {/* 🔐 Campo de E-mail corrigido e robusto */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '14px', fontWeight: 'bold', display: 'block' }}>E-mail para Contato:</label>
          <input 
            type="email" 
            {...register("email", { 
              required: "O e-mail de contato é obrigatório",
              pattern: { 
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                message: "Insira um e-mail válido (exemplo@dominio.com)" 
              }
            })} 
            style={{ width: '100%', padding: '6px', boxSizing: 'border-box', marginTop: '5px' }} 
          />
          {errors.email && <span style={{ color: 'red', fontSize: '11px', display: 'block', marginTop: '4px' }}>{errors.email.message}</span>}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px' }}>
          <div>
            <label style={{ fontSize: '14px', fontWeight: 'bold' }}>Celular 1:</label>
            <input 
              type="text" 
              {...register("celular1", { 
                required: "Pelo menos um celular é obrigatório",
                onChange: (e) => { e.target.value = formatarCelular(e.target.value); }
              })} 
              placeholder="(00) 00000-0000"
              style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} 
            />
            {errors.celular1 && <span style={{ color: 'red', fontSize: '11px' }}>{errors.celular1.message}</span>}
          </div>
          <div>
            <label style={{ fontSize: '14px' }}>Celular 2:</label>
            <input 
              type="text" 
              {...register("celular2", {
                onChange: (e) => { e.target.value = formatarCelular(e.target.value); }
              })} 
              placeholder="(00) 00000-0000"
              style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} 
            />
          </div>
        </div>

        {/* SEÇÃO 4: INFORMAÇÕES MILITARES / ACADÊMICAS */}
        <h4 style={{ borderBottom: '1px solid #eee', paddingBottom: '5px', marginTop: '20px' }}>Dados Militares / Curso</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '10px' }}>
          <div>
            <label style={{ fontSize: '14px', fontWeight: 'bold' }}>Curso:</label>
            <select {...register("curso_id", { required: "Selecione um curso" })} style={{ width: '100%', padding: '6px', height: '32px', boxSizing: 'border-box' }}>
              <option value="">Selecione...</option>
              <option value="1">Curso de Instrutores (CI)</option>
              <option value="2">Curso de Monitores (CM)</option>
              <option value="3">Curso de Mestre DArmas (CMD)</option>
              <option value="4">Curso de Medicina Esportiva (CME)</option>
            </select>
          </div>
          
          <div>
            <label style={{ fontSize: '14px' }}>Ano Formação:</label>
            <input type="number" {...register("ano_formacao")} style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ fontSize: '14px' }}>Estado F. Aux:</label>
            <select {...register("estado_f_aux", { required: "Selecione o estado" })} style={{ width: '100%', padding: '6px', height: '32px', boxSizing: 'border-box' }}>
              <option value="">Selecione...</option>
              {Object.entries({
                AC: 'Acre', AL: 'Alagoas', AP: 'Amapá', AM: 'Amazonas', BA: 'Bahia',
                CE: 'Ceará', DF: 'Distrito Federal', ES: 'Espírito Santo', GO: 'Goiás',
                MA: 'Maranhão', MT: 'Mato Grosso', MS: 'Mato Grosso do Sul', MG: 'Minas Gerais',
                PA: 'Pará', PB: 'Paraíba', PR: 'Paraná', PE: 'Pernambuco', PI: 'Piauí',
                RJ: 'Rio de Janeiro', RN: 'Rio Grande do Norte', RS: 'Rio Grande do Sul',
                RO: 'Rondônia', RR: 'Roraima', SC: 'Santa Catarina', SP: 'São Paulo',
                SE: 'Sergipe', TO: 'Tocantins'
              }).map(([sigla, nome]) => (
                <option key={sigla} value={sigla}>{sigla} - {nome}</option>
              ))}
            </select>
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

        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="button" onClick={aoVoltar} style={{ flex: 1, padding: '12px', backgroundColor: '#9ca3af', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
            ← Voltar
          </button>
          
          <button type="submit" style={{ flex: 2, padding: '12px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}>
            {dadosParte1?.registroId ? 'Confirmar Atualização (Update)' : 'Salvar Ficha Completa (Insert)'}
          </button>
        </div>
      </form>
    </div>
  );
}
