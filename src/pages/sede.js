
import React from 'react';

function sede() {
  return (
    <div id="content" className="span9">
      <section id="content-section">
        <span className="hide">Início do conteúdo da página</span>
        <div className="row-fluid module">
          <h1 className="documentFirstHeading">
            Sede - AsEFEx
    </h1>
          <section className="module-section">
            <div className="span4 no-margin">
              <h2>
                <a href="#">Sobre a Sede</a>
              </h2>
              <p>A sede da AsEFEx - Associação dos Ex-Alunos e dos Amigos da Escola de Educação Física do Exército fica na Fortaleza de São João, no bairro das Urca, no Rio de Janeiro-RJ, em dependências sob cessão do Centro de Capacitação Física do Exército Brasileiro.</p>
              <p>Para saber mais sobre a localização da AsEFEx, <a href="https://goo.gl/maps/N53Y6ugWhxis7Lmm7">clique aqui </a>.</p>
            </div>
            {/* fim .span4 */}
            <div className="span8">
              <object width={480} height={246}> <img src="images/local.png" /></object>
            </div>
            {/* fim .span8 */}
          </section>
        </div>
        <div className="row-fluid">
          <div className="span4 module variacao-module-01">
            <h2>Telefone:</h2>
            <p><strong>Tel. </strong>(21) 2585-2290</p>
          </div>
          <div className="span4 module variacao-module-02">
            <h2>E-mail:</h2>
            <p><strong>E-mail:</strong> asefex1990@gmail.com</p>
          </div>
        </div>
        {/* fim .row-fluid */}
      </section>
    </div>

  )
}

export default sede
