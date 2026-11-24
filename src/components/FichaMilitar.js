import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';


const LISTA_POSTOS = {
  1: 'Gen Ex / Alte Esq / Ten Brig',
  2: 'Gen Div / V Alte / Maj Brig',
  3: 'Gen Bda / C Alte / Brig',
  4: 'Cel / CMG / Cel',
  5: 'TC / CF / TC',
  6: 'Maj / CC / Maj',
  7: 'Cap / CT / Cap',
  8: '1º Ten',
  9: '2º Ten',
  10: 'Asp / GM / Asp',
  11: 'ST / SO / SO',
  12: '1º Sgt / 1º SG / 1S',
  13: '2º Sgt / 2º SG / 2S',
  14: '3º Sgt / 3º SG / 3S',
  15: 'Cb',
  16: 'Sd'
};

const LISTA_CURSOS = {
  1: 'Curso de Instrutores (CI)',
  2: 'Curso de Monitores (CM)',
  3: 'Curso de Mestre DArmas (CMD)',
  4: 'Curso de Medicina Esportiva (CME)'
};

const LISTA_SITUACAO = {
  1: 'Militar da ativa',
  2: 'Militar da reserva',
  3: 'Civil'
};

const LISTA_CATEGORIAS = {
  1: 'Ex-aluno - Exército',
  2: 'Amigo do CCFEx/FSJ (EsEFEx, IPCFEx ou CDE)',
  3: 'Ex-aluno - Marinha',
  4: 'Ex-aluno - Força Aérea',
  5: 'Ex-aluno - Polícia Militar'
};

export function CardIdentificacao({ militar, infoAdicionais }) {
  return (
    <Card className="shadow-sm border-0 mb-3 mx-auto" style={{ maxWidth: '650px'  }}>
      <Card.Header className="bg-dark text-white text-uppercase py-2 small font-weight-bold" style={{ color: '#0056b3', fontWeight: 'bold' }}>
        🎖️ Identificação e Status
      </Card.Header>
      <p></p>
      <Card.Body className="bg-light py-3">
        <Row className="g-3">
          <Col xs={12} sm={6} md={2}>
            <span className="text-muted d-block small">Nº CP: </span>
            <strong>{militar.nr_cp}</strong>
            
          </Col>
          <Col xs={12} sm={6} md={2}>
            <span className="text-muted d-block small">Posto: </span>
            
            <strong>
              {/* Busca a descrição na lista usando o ID. Se não achar, mostra o próprio ID ou 'Não Informado' */}
              {LISTA_POSTOS[infoAdicionais?.posto_id] || infoAdicionais?.posto_id || 'Não Informado'}
            </strong>
          
          </Col>
          <Col xs={12} sm={12} md={5}>
            <span className="text-muted d-block small">Nome Completo: </span>
            <strong>{militar.nome}</strong>
          </Col>
          <Col xs={6} sm={6} md={1.5} className="text-md-center">
            <span className="text-muted d-block small">Perfil: </span>
            <Badge bg={Number(militar.perfil_id) === 1 ? 'danger' : 'primary'}>
              {Number(militar.perfil_id) === 1 ? 'ADMIN' : 'USUÁRIO'}
            </Badge>
          </Col>
          
        </Row>
      </Card.Body>
    </Card>
  );
}

export function CardContato({ militar, infoAdicionais }) {
  return (
    <Card className="shadow-sm border-0 mb-3 mx-auto" style={{ maxWidth: '650px' }}>
      <Card.Header className="bg-secondary text-white text-uppercase py-2 small font-weight-bold" style={{ color: '#0056b3', fontWeight: 'bold' }}>
        📞 Informações de Contato 
        <p></p>
      </Card.Header>
      <Card.Body className="py-3">
        <Row className="g-3">
          <Col xs={12} sm={12} md={4}>
            <span className="text-muted d-block small">E-mail Corporativo:  </span>
            <strong className="text-truncate">{militar.email || 'Não informado'}</strong>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <span className="text-muted d-block small">E-mail Alternativo:  </span>
            <strong className="text-truncate">{infoAdicionais?.email || 'Não informado'}</strong>
          </Col>
          <Col xs={12} sm={6} md={2}>
            <span className="text-muted d-block small">Celular 1:  </span>
            <strong>{infoAdicionais?.celular1 || 'Não informado'}</strong>
          </Col>
          <Col xs={12} sm={6} md={2}>
            <span className="text-muted d-block small">Celular 2:  </span>
            <strong>{infoAdicionais?.celular2 || 'Não informado'}</strong>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export function CardEndereco({ infoAdicionais }) {
  return (
    <Card className="shadow-sm border-0 mb-3 mx-auto" style={{ maxWidth: '650px' }}>
      <Card.Header className="bg-secondary text-white text-uppercase py-2 small font-weight-bold" style={{ color: '#0056b3', fontWeight: 'bold' }}>
        📍 Endereço Residencial
      </Card.Header>
      <p></p>
      <Card.Body className="py-3">
        <Row className="g-3 mb-2">
          <Col xs={12} sm={8} md={6}>
            <span className="text-muted d-block small">Logradouro (Rua, Av.):  </span>
            <strong className="text-truncate">{infoAdicionais?.endereco || infoAdicionais?.rua || 'Não informado'}</strong>
          </Col>
          <Col xs={6} sm={4} md={2}>
            <span className="text-muted d-block small">Número:  </span>
            <strong>{infoAdicionais?.numero || 'S/N'}</strong>
          </Col>
          <Col xs={6} sm={12} md={4}>
            <span className="text-muted d-block small">Complemento:  </span>
            <strong>{infoAdicionais?.complemento || 'Nenhum'}</strong>
          </Col>
        </Row>
        <Row className="g-3">
          <Col xs={12} sm={5} md={4}>
            <span className="text-muted d-block small">Bairro:  </span>
            <strong>{infoAdicionais?.bairro || 'Não informado'}</strong>
          </Col>
          <Col xs={12} sm={5} md={4}>
            <span className="text-muted d-block small">Cidade:  </span>
            <strong>{infoAdicionais?.cidade || 'Não informado'}</strong>
          </Col>
          <Col xs={4} sm={2} md={1}>
            <span className="text-muted d-block small">UF:  </span>
            <strong>{infoAdicionais?.uf || infoAdicionais?.estado || '--'}</strong>
          </Col>
          <Col xs={8} sm={12} md={3}>
            <span className="text-muted d-block small">CEP:  </span>
            <strong>{infoAdicionais?.cep || '00000-000'}</strong>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export function CardAcademico({ infoAdicionais }) {
  return (
    <Card className="shadow-sm border-0 mb-3 mx-auto" style={{ maxWidth: '650px' }}>
      <Card.Header className="bg-secondary text-white text-uppercase p-2 small font-weight-bold" style={{ color: '#0056b3', fontWeight: 'bold' }}>
        🎓 Dados de Formação e Histórico
      </Card.Header>
      <p></p>
      <Card.Body className="py-2">
        <Row className="g-3">
          <Col xs={12} sm={6} md={3}>
            <span className="text-muted d-block small">Categoria:  </span>
           <strong>
              {/* Busca a descrição na lista usando o ID. Se não achar, mostra o próprio ID ou 'Não Informado' */}
              {LISTA_CATEGORIAS[infoAdicionais?.categoria_id] || infoAdicionais?.categoria_id || 'Não Informado'}
            </strong>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <span className="text-muted d-block small">Situação:  </span>
           <strong>
              {/* Busca a descrição na lista usando o ID. Se não achar, mostra o próprio ID ou 'Não Informado' */}
              {LISTA_SITUACAO[infoAdicionais?.situacao_id] || infoAdicionais?.situacao_id || 'Não Informado'}
            </strong>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <span className="text-muted d-block small">Curso de Formação:  </span>
            <strong>
              {/* Busca a descrição na lista usando o ID. Se não achar, mostra o próprio ID ou 'Não Informado' */}
              {LISTA_CURSOS[infoAdicionais?.curso_id] || infoAdicionais?.curso_id || 'Não Informado'}
            </strong>
          </Col>
          <Col xs={12} sm={6} md={2}>
            <span className="text-muted d-block small">Ano de Formação:  </span>
            <strong>{infoAdicionais?.ano_formacao || 'Não informado'}</strong >
          </Col>
          <Col xs={12} sm={6} md={2}>
            <span className="text-muted d-block small">Matrícula / Identidade:  </span>
            <strong>{infoAdicionais?.matricula || 'Não informado'}</strong>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <span className="text-muted d-block small">Data de Admissão:  </span>
            <strong>
              {infoAdicionais?.data_admissao 
                ? new Date(infoAdicionais.data_admissao).toLocaleDateString('pt-BR') 
                : 'Não informado'}
            </strong>
          </Col>
          <Col xs={12} sm={12} md={2}>
            <span className="text-muted d-block small">Integrante Ex-CCFEx: </span>
            <Badge bg={infoAdicionais?.integrante_ex_ccfex === 'Sim' ? 'info' : 'light'} className="text-dark">
              {infoAdicionais?.integrante_ex_ccfex || 'Não'}
            </Badge>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
