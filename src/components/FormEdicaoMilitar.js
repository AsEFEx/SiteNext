import React from 'react';
import { Card, Form } from 'react-bootstrap';

// Função utilitária para capturar e sincronizar as mudanças dos inputs
const gerarLidarComMudanca = (setDadosForm) => (e) => {
  const { name, value } = e.target;
  setDadosForm((prev) => ({ ...prev, [name]: value }));
};

// 🔥 BLINDAGEM COMPLETA E INTELIGENTE CONTRA O TEMPLATE ANTIGO
const estiloContainerBloco = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
  margin: '0',
  padding: '0',
  width: '100%',
  clear: 'both',
  float: 'none'
};

const estiloInputBlindado = {
  width: '100%',
  maxWidth: '100%',
  margin: '0',
  padding: '6px 12px',
  boxSizing: 'border-box',
  display: 'block',
  float: 'none',
  clear: 'both'
};

// 1. COMPONENTE DE IDENTIFICAÇÃO MILITAR
export function FormIdentificacao({ dadosForm, setDadosForm }) {
  const lidarComMudanca = gerarLidarComMudanca(setDadosForm);

  return (
    <Card className="shadow-sm border-0 mb-3 mx-auto" style={{ maxWidth: '850px', marginLeft: 'auto', marginRight: 'auto', float: 'none', clear: 'both' }}>
      <Card.Header className="bg-dark text-white text-uppercase py-1 px-3 small font-weight-bold" style={{ fontSize: '12px' }}>
        Identificação Militar
      </Card.Header>
      <Card.Body className="bg-light py-2 px-3 small">
        {/* Substituído a tag Row nativa por uma Div Flex controlada para não herdar as margens negativas do CSS velho */}
        <div style={estiloContainerBloco}>
          <div style={{ flex: '1 1 200px', maxWidth: '100%' }}>
            <Form.Group>
              <Form.Label className="text-muted mb-1" style={{ fontSize: '11px', display: 'block', textAlign: 'left' }}>Posto:</Form.Label>
              <Form.Select 
                name="posto_id" 
                size="sm" 
                style={{ width: '100%', boxSizing: 'border-box', display: 'block' }}
                value={dadosForm.posto_id || ''} 
                onChange={lidarComMudanca}
              >
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
              </Form.Select>              
              
            </Form.Group>
          </div>
          <div style={{ flex: '3 1 450px', maxWidth: '100%' }}>
            <Form.Group>
              <Form.Label className="text-muted mb-1" style={{ fontSize: '11px', display: 'block', textAlign: 'left' }}>Nome Completo (Base):</Form.Label>
              <Form.Control 
                type="text" 
                name="nome" 
                size="sm" 
                style={estiloInputBlindado}
                value={dadosForm.nome || ''} 
                onChange={lidarComMudanca} 
                required
              />
            </Form.Group>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

// 2. COMPONENTE DE CANAIS DE CONTATO
export function FormContato({ dadosForm, setDadosForm }) {
  const lidarComMudanca = gerarLidarComMudanca(setDadosForm);

  return (
    <Card className="shadow-sm border-0 mb-3 mx-auto" style={{ maxWidth: '850px', marginLeft: 'auto', marginRight: 'auto', float: 'none', clear: 'both' }}>
      <Card.Header className="bg-secondary text-white text-uppercase py-1 px-3 small font-weight-bold" style={{ fontSize: '12px' }}>
        Canais de Contato
      </Card.Header>
      <Card.Body className="py-2 px-3 small">
        <div style={estiloContainerBloco}>
          <div style={{ flex: '1 1 250px', maxWidth: '100%' }}>
            <Form.Group>
              <Form.Label className="text-muted mb-1" style={{ fontSize: '11px', display: 'block', textAlign: 'left' }}>E-mail Alternativo:</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                size="sm" 
                style={estiloInputBlindado}
                value={dadosForm.email || ''} 
                onChange={lidarComMudanca} 
              />
            </Form.Group>
          </div>
          <div style={{ flex: '1 1 180px', maxWidth: '100%' }}>
            <Form.Group>
              <Form.Label className="text-muted mb-1" style={{ fontSize: '11px', display: 'block', textAlign: 'left' }}>Celular 1:</Form.Label>
              <Form.Control 
                type="text" 
                name="celular1" 
                size="sm" 
                style={estiloInputBlindado}
                value={dadosForm.celular1 || ''} 
                onChange={lidarComMudanca} 
              />
            </Form.Group>
          </div>
          <div style={{ flex: '1 1 180px', maxWidth: '100%' }}>
            <Form.Group>
              <Form.Label className="text-muted mb-1" style={{ fontSize: '11px', display: 'block', textAlign: 'left' }}>Celular 2:</Form.Label>
              <Form.Control 
                type="text" 
                name="celular2" 
                size="sm" 
                style={estiloInputBlindado}
                value={dadosForm.celular2 || ''} 
                onChange={lidarComMudanca} 
              />
            </Form.Group>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
// 3. COMPONENTE DE ENDEREÇO RESIDENCIAL (BLINDADO CONTRA MARGENS NEGATIVAS)
export function FormEndereco({ dadosForm, setDadosForm }) {
  const lidarComMudanca = (e) => {
    const { name, value } = e.target;
    setDadosForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card className="shadow-sm border-0 mb-3 mx-auto" style={{ maxWidth: '850px', marginLeft: 'auto', marginRight: 'auto', float: 'none', clear: 'both' }}>
      <Card.Header className="bg-secondary text-white text-uppercase py-1 px-3 small font-weight-bold" style={{ fontSize: '12px' }}>
        Endereço Residencial
      </Card.Header>
      <Card.Body className="py-2 px-3 small">
        
        {/* Linha 1 do Endereço */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', width: '100%', marginBottom: '12px' }}>
          
          <div style={{ flex: '1 1 150px', maxWidth: '100%' }}>
            <Form.Group>
              <Form.Label className="text-muted mb-1" style={{ fontSize: '11px', display: 'block', textAlign: 'left' }}>CEP:</Form.Label>
              <Form.Control 
                type="text" 
                name="cep" 
                size="sm" 
                style={{ width: '100%', boxSizing: 'border-box', display: 'block' }}
                value={dadosForm.cep || ''} 
                onChange={lidarComMudanca} 
              />
            </Form.Group>
          </div>
          
          <div style={{ flex: '3 1 350px', maxWidth: '100%' }}>
            <Form.Group>
              <Form.Label className="text-muted mb-1" style={{ fontSize: '11px', display: 'block', textAlign: 'left' }}>Logradouro (Rua, Av.):</Form.Label>
              <Form.Control 
                type="text" 
                name="rua" 
                size="sm" 
                style={{ width: '100%', boxSizing: 'border-box', display: 'block' }}
                value={dadosForm.rua || ''} 
                onChange={lidarComMudanca} 
              />
            </Form.Group>
          </div>
          <div style={{ flex: '1 1 100px', maxWidth: '100%' }}>
            <Form.Group>
              <Form.Label className="text-muted mb-1" style={{ fontSize: '11px', display: 'block', textAlign: 'left' }}>Número:</Form.Label>
              <Form.Control 
                type="text" 
                name="complemento" 
                size="sm" 
                style={{ width: '100%', boxSizing: 'border-box', display: 'block' }}
                value={dadosForm.complemento || ''} 
                onChange={lidarComMudanca} 
              />
            </Form.Group>
          </div>
        </div>

        {/* Linha 2 do Endereço */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', width: '100%' }}>
          <div style={{ flex: '2 1 200px', maxWidth: '100%' }}>
            <Form.Group>
              <Form.Label className="text-muted mb-1" style={{ fontSize: '11px', display: 'block', textAlign: 'left' }}>Bairro:</Form.Label>
              <Form.Control 
                type="text" 
                name="bairro" 
                size="sm" 
                style={{ width: '100%', boxSizing: 'border-box', display: 'block' }}
                value={dadosForm.bairro || ''} 
                onChange={lidarComMudanca} 
              />
            </Form.Group>
          </div>
          <div style={{ flex: '2 1 200px', maxWidth: '100%' }}>
            <Form.Group>
              <Form.Label className="text-muted mb-1" style={{ fontSize: '11px', display: 'block', textAlign: 'left' }}>Cidade:</Form.Label>
              <Form.Control 
                type="text" 
                name="municipio" 
                size="sm" 
                style={{ width: '100%', boxSizing: 'border-box', display: 'block' }}
                value={dadosForm.municipio || ''} 
                onChange={lidarComMudanca} 
              />
            </Form.Group>
          </div>
          <div style={{ flex: '0 1 70px', maxWidth: '100%' }}>
            <Form.Group>
              <Form.Label className="text-muted mb-1" style={{ fontSize: '11px', display: 'block', textAlign: 'left' }}>UF:</Form.Label>
              <Form.Control 
                type="text" 
                name="uf" 
                size="sm" 
                style={{ width: '100%', boxSizing: 'border-box', display: 'block' }}
                value={dadosForm.uf || ''} 
                onChange={lidarComMudanca} 
              />
            </Form.Group>
          </div>
        </div>

      </Card.Body>
    </Card>
  );
}
// 4. COMPONENTE DE HISTÓRICO E FORMAÇÃO ACADÊMICA (BLINDADO CONTRA MARGENS NEGATIVAS)
export function FormAcademico({ dadosForm, setDadosForm }) {
  const lidarComMudanca = (e) => {
    const { name, value } = e.target;
    setDadosForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card className="shadow-sm border-0 mb-3 mx-auto" style={{ maxWidth: '850px', marginLeft: 'auto', marginRight: 'auto', float: 'none', clear: 'both' }}>
      <Card.Header className="bg-secondary text-white text-uppercase py-1 px-3 small font-weight-bold" style={{ fontSize: '12px' }}>
        Histórico e Formação Acadêmica
      </Card.Header>
      <Card.Body className="py-2 px-3 small">
        
        {/* Linha Única de Dados Acadêmicos em Flexbox */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', width: '100%' }}>
          
          <div style={{ flex: '2 1 200px', maxWidth: '100%' }}>
            <Form.Group>
              <Form.Label className="text-muted mb-1" style={{ fontSize: '11px', display: 'block', textAlign: 'left' }}>Curso de Formação (ID):</Form.Label>

                <Form.Select 
                    name="curso_id" 
                    size="sm" 
                    style={{ width: '100%', boxSizing: 'border-box', display: 'block' }}
                    value={dadosForm.curso_id || ''} 
                    onChange={lidarComMudanca}
                >
                    <option value="">Selecione...</option>
                    <option value="1">Curso de Instrutores (CI)</option>
                    <option value="2">Curso de Monitores (CM)</option>
                    <option value="3">Curso de Mestre DArmas (CMD)</option>
                    <option value="4">Curso de Medicina Esportiva (CME)</option>
                </Form.Select>            
            </Form.Group>
          </div>

          <div style={{ flex: '1 1 100px', maxWidth: '100%' }}>
            <Form.Group>
              <Form.Label className="text-muted mb-1" style={{ fontSize: '11px', display: 'block', textAlign: 'left' }}>Ano Formação:</Form.Label>
              <Form.Control 
                type="text" 
                name="ano_formacao" 
                size="sm" 
                style={{ width: '100%', boxSizing: 'border-box', display: 'block' }}
                value={dadosForm.ano_formacao || ''} 
                onChange={lidarComMudanca} 
              />
            </Form.Group>
          </div>

          <div style={{ flex: '1 1 120px', maxWidth: '100%' }}>
            <Form.Group>
              <Form.Label className="text-muted mb-1" style={{ fontSize: '11px', display: 'block', textAlign: 'left' }}>Matrícula:</Form.Label>
              <Form.Control 
                type="text" 
                name="matricula" 
                size="sm" 
                style={{ width: '100%', boxSizing: 'border-box', display: 'block' }}
                value={dadosForm.matricula || ''} 
                onChange={lidarComMudanca} 
              />
            </Form.Group>
          </div>

          <div style={{ flex: '2 1 180px', maxWidth: '100%' }}>
            <Form.Group>
              <Form.Label className="text-muted mb-1" style={{ fontSize: '11px', display: 'block', textAlign: 'left' }}>Data Admissão:</Form.Label>
              <Form.Control 
                type="date" 
                name="data_admissao" 
                size="sm" 
                style={{ width: '100%', boxSizing: 'border-box', display: 'block' }}
                value={dadosForm.data_admissao || ''} 
                onChange={lidarComMudanca} 
              />
            </Form.Group>
          </div>

          <div style={{ flex: '1 1 100px', maxWidth: '100%' }}>
            <Form.Group>
              <Form.Label className="text-muted mb-1" style={{ fontSize: '11px', display: 'block', textAlign: 'left' }}>Ex-CCFEx:</Form.Label>
              <Form.Select 
                name="integrante_ex_ccfex" 
                size="sm" 
                style={{ width: '100%', boxSizing: 'border-box', display: 'block' }}
                value={dadosForm.integrante_ex_ccfex || 'Não'} 
                onChange={lidarComMudanca}
              >
                <option value="Não">Não</option>
                <option value="Sim">Sim</option>
              </Form.Select>
            </Form.Group>
          </div>

        </div>

      </Card.Body>
    </Card>
  );
}
