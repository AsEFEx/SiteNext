
import React from 'react';

function Cursos() {
    return (
        <div id="content" className="internas span9">
            <section id="content-section">
                <span className="hide">Início do conteúdo da página</span>
                <h1 className="documentFirstHeading">CURSOS</h1>
                <div className="description"> CURSOS DE INTERESSE PARA ASSOCIADOS E AMIGOS </div>
                <p> Não há cursos oferecidos pela AsEFEx no momento. </p>
                <p>Os Associados e Amigos podem verificar condições especiais de matrícula nas instituições parceiras da AsEFEx:</p>
                <div style={{ margin: '1cm 6cm 1cm 6cm' }}>
                    <a href="http://www.castelobranco.br/"><img alt="Universidade Castelo Branco" src="images/castelo_branco.png" style={{ maxWidth: 310, maxHeight: 200, width: 'auto', height: 'auto' }} /></a>
                </div>
                <p>- Mensalidades diferenciadas em cursos de graduação e pós-graduação na Universidade Castelo Branco</p>
                <span className="hide">Fim do conteúdo da página</span>
            </section>
        </div>
    )
}

export default Cursos