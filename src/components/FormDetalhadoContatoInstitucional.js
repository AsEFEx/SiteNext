import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
// 🚀 Importação do cliente do Supabase
import { supabase } from '../lib/supabaseClient'; 

// 🚀 CORREÇÃO: Cole esta função no topo do arquivo (FORA e ACIMA do componente)
const formatarCelular = (value) => {
  if (!value) return "";
  return value
    .replace(/\D/g, '') // Remove tudo o que não for número
    .replace(/^(\d{2})(\d)/, '($1) $2') // Adiciona os parênteses no DDD
    .replace(/(\d{5})(\d)/, '$1-$2') // Adiciona o hífen no número celular
    .substring(0, 15); // Limita o tamanho máximo do campo
};

export default function FormDetalhadoContatoInstitucional({ usuarioLogado, dadosParte1, aoVoltar }) {

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: "onBlur"
  });

  // Carrega os dados na tela vindos da Parte 1 ou do estado anterior
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
    }
  }, [dadosParte1, usuarioLogado, reset]);

  // 🔥 SALVAMENTO INTELIGENTE: Usa UPSERT baseado no nr_cp como Chave Primária
  const onSalvarFichaFinal = async (data) => {
    try {
      // Garante a extração e padronização do Número do CP da sessão do login
      const cpMilitar = String(usuarioLogado?.nr_cp ?? '').trim().toUpperCase();

      if (!cpMilitar) {
        alert("Erro: Sessão do usuário inválida ou Número do CP não encontrado.");
        return;
      }

      // Junta as informações inseridas na Parte 1 e na Parte 2
      const dadosCompletosPerfil = {
        nr_cp: cpMilitar, // 🔑 Esta é a chave primária que o Supabase usará de âncora
        ...dadosParte1,
        ...data,
        atualizado_em: new Date().toISOString()
      };

      // 🔒 LIMPEZA ESTRITA: Remove qualquer resquício de chaves antigas do json-server
      delete dadosCompletosPerfil.registroId;
      delete dadosCompletosPerfil.id;
      delete dadosCompletosPerfil.usuario_id;

      // 🚀 OPERAÇÃO UPSERT: Insere se for novo ou atualiza se o nr_cp já existir na tabela
      const { error: erroUpsert } = await supabase
        .from('informacoes_adicionais')
        .upsert(dadosCompletosPerfil, { onConflict: 'nr_cp' }); // 🔥 Avisa o banco para usar o nr_cp para checar conflitos

      if (erroUpsert) {
        alert(`Erro de persistência no Supabase: ${erroUpsert.message}`);
        return;
      }

      // Feedback único e limpo para o militar
      alert('Ficha cadastral salva e sincronizada com sucesso na nuvem!');

    } catch (error) {
      console.error('Erro técnico na persistência do Supabase:', error);
      alert('Não foi possível processar a persistência dos dados.');
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
           <input 
              type="number" 
              {...register("ano_formacao")} 
              placeholder="Ex: 2005"
              style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }} 
            />
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
            Salvar Ficha Completa
          </button>
        </div>
      </form>
    </div>
  );
}
