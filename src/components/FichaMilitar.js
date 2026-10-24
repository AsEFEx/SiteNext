import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';

export function CardIdentificacao({ militar, infoAdicionais }) {
  return (
    <Card className="shadow-sm border-0 mb-3 mx-auto" style={{ maxWidth: '650px' }}>
      <Card.Header className="bg-dark text-white text-uppercase py-2 small font-weight-bold">
        🎖️ Identificação e Status Militar
      </Card.Header>
      <Card.Body className="bg-light py-3">
        <Row className="g-3">
          <Col xs={12} sm={6} md={2}>
            <span className="text-muted d-block small">Nº CP:</span>
            <strong>{militar.nr_cp}</strong>
          </Col>
          <Col xs={12} sm={6} md={2}>
            <span className="text-muted d-block small">Posto:</span>
            <strong>{infoAdicionais?.posto_id || 'Não Informado'}</strong>
          </Col>
          <Col xs={12} sm={12} md={5}>
            <span className="text-muted d-block small">Nome Completo:</span>
            <strong>{militar.nome}</strong>
          </Col>
          <Col xs={6} sm={6} md={1.5} className="text-md-center">
            <span className="text-muted d-block small">Perfil:</span>
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
      <Card.Header className="bg-secondary text-white text-uppercase py-2 small font-weight-bold">
        📞 Informações de Contato
      </Card.Header>
      <Card.Body className="py-3">
        <Row className="g-3">
          <Col xs={12} sm={12} md={4}>
            <span className="text-muted d-block small">E-mail Corporativo:</span>
            <div className="text-truncate">{militar.email || 'Não informado'}</div>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <span className="text-muted d-block small">E-mail Alternativo:</span>
            <div className="text-truncate">{infoAdicionais?.email || 'Não informado'}</div>
          </Col>
          <Col xs={12} sm={6} md={2}>
            <span className="text-muted d-block small">Celular 1:</span>
            <div>{infoAdicionais?.celular1 || 'Não informado'}</div>
          </Col>
          <Col xs={12} sm={6} md={2}>
            <span className="text-muted d-block small">Celular 2:</span>
            <div>{infoAdicionais?.celular2 || 'Não informado'}</div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export function CardEndereco({ infoAdicionais }) {
  return (
    <Card className="shadow-sm border-0 mb-3 mx-auto" style={{ maxWidth: '650px' }}>
      <Card.Header className="bg-secondary text-white text-uppercase py-2 small font-weight-bold">
        📍 Endereço Residencial
      </Card.Header>
      <Card.Body className="py-3">
        <Row className="g-3 mb-2">
          <Col xs={12} sm={8} md={6}>
            <span className="text-muted d-block small">Logradouro (Rua, Av.):</span>
            <div className="text-truncate">{infoAdicionais?.endereco || infoAdicionais?.rua || 'Não informado'}</div>
          </Col>
          <Col xs={6} sm={4} md={2}>
            <span className="text-muted d-block small">Número:</span>
            <div>{infoAdicionais?.numero || 'S/N'}</div>
          </Col>
          <Col xs={6} sm={12} md={4}>
            <span className="text-muted d-block small">Complemento:</span>
            <div>{infoAdicionais?.complemento || 'Nenhum'}</div>
          </Col>
        </Row>
        <Row className="g-3">
          <Col xs={12} sm={5} md={4}>
            <span className="text-muted d-block small">Bairro:</span>
            <div>{infoAdicionais?.bairro || 'Não informado'}</div>
          </Col>
          <Col xs={12} sm={5} md={4}>
            <span className="text-muted d-block small">Cidade:</span>
            <div>{infoAdicionais?.cidade || 'Não informado'}</div>
          </Col>
          <Col xs={4} sm={2} md={1}>
            <span className="text-muted d-block small">UF:</span>
            <div>{infoAdicionais?.uf || infoAdicionais?.estado || '--'}</div>
          </Col>
          <Col xs={8} sm={12} md={3}>
            <span className="text-muted d-block small">CEP:</span>
            <div>{infoAdicionais?.cep || '00000-000'}</div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export function CardAcademico({ infoAdicionais }) {
  return (
    <Card className="shadow-sm border-0 mb-3 mx-auto" style={{ maxWidth: '650px' }}>
      <Card.Header className="bg-secondary text-white text-uppercase p-2 small font-weight-bold">
        🎓 Dados de Formação e Histórico
      </Card.Header>
      <Card.Body className="py-2">
        <Row className="g-3">
          <Col xs={12} sm={6} md={3}>
            <span className="text-muted d-block small">Categoria:</span>
            <div>{infoAdicionais?.categoria_id || 'Não informado'}</div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <span className="text-muted d-block small">Situação:</span>
            <div>{infoAdicionais?.situacao_id || 'Não informado'}</div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <span className="text-muted d-block small">Curso de Formação (ID):</span>
            <div>{infoAdicionais?.curso_id || 'Não informado'}</div>
          </Col>
          <Col xs={12} sm={6} md={2}>
            <span className="text-muted d-block small">Ano de Formação:</span>
            <div>{infoAdicionais?.ano_formacao || 'Não informado'}</div>
          </Col>
          <Col xs={12} sm={6} md={2}>
            <span className="text-muted d-block small">Matrícula / Identidade:</span>
            <div>{infoAdicionais?.matricula || 'Não informado'}</div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <span className="text-muted d-block small">Data de Admissão:</span>
            <div>
              {infoAdicionais?.data_admissao 
                ? new Date(infoAdicionais.data_admissao).toLocaleDateString('pt-BR') 
                : 'Não informado'}
            </div>
          </Col>
          <Col xs={12} sm={12} md={2}>
            <span className="text-muted d-block small">Integrante Ex-CCFEx:</span>
            <Badge bg={infoAdicionais?.integrante_ex_ccfex === 'Sim' ? 'info' : 'light'} className="text-dark">
              {infoAdicionais?.integrante_ex_ccfex || 'Não'}
            </Badge>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
