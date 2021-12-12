
import React from 'react';

function MidiasSociais() {
    return (
        <div id="content" className="internas span9">
            <section id="content-section">
                <span className="hide">Início do conteúdo da página</span>
                <h1 className="documentFirstHeading">MÍDIAS SOCIAIS</h1>
                <p><strong>@asefex1990_desportoexercito</strong></p>
                <p>Siga-nos nas redes sociais:</p>
                <div className="container">
                    <div className="row">
                        <div className="span4">
                            <div className=" card">
                                <a href="https://www.facebook.com/asefex1990_desportoexercito-103120284947772/"><img src="images/facebook.png" />
                                    <h2><strong>Facebook</strong></h2>
                                </a>
                            </div>
                        </div>
                        <div className="span4">
                            <div className=" card">
                                <a href="https://www.instagram.com/asefex1990_desportoexercito/"><img src="images/instagram.png" />
                                    <h2><strong>Instagram</strong></h2>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="hide">Fim do conteúdo da página</span>
            </section>
        </div>

    )
}

export default MidiasSociais