import React from 'react';
import Header from '../components/header/header'
import Menu from '../components/menu/menu'

function Informativo() {
    return (
        <div>
            <Header />
            <Menun />

            <div id="content" className="internas span9">
                <section id="content-section">
                    <span className="hide">Início do conteúdo da página</span>
                    <h1 className="documentFirstHeading">INFORMATIVO AsEFEx</h1>
                    <p>O informativo da AsEFEx tem a finalidade de manter todos atualizados sobre assuntos
                    de interesse e eventos de menor vulto relacionados à atuação de Ex-Alunos e Amigos,
                    ao CCFEx e suas Organizações Militares Diretamente Subordinadas (EsEFEx, IPCFEx e CDE)
                        e ao Sitio Histórico da Fortaleza de São João.</p>
                    <p><a href="/escreva">Faça sua proposta de material para divulgação no informativo da AsEFEx</a></p>
                    <h2>Edições de 2021</h2>
                    <div className="container">
                        <div className="row">
                            <div className="span4">
                                <div className=" card">
                                    <a href="https://pt.calameo.com/read/0064353440d972455e25a?authid=7B9aI7IM9Xtj"><img src="images/inf7.jpg" />
                                        <h2><strong>Nr 7</strong></h2>
                                        <p>Março de 2021</p></a>
                                </div>
                            </div>
                            <div className="span4">
                                <div className=" card">
                                    <a href="https://pt.calameo.com/read/0064353449390a814238a?authid=Yp3x6jRywMEz"><img src="images/inf6.jpg" />
                                        <h2><strong>Nr 6</strong></h2>
                                        <p>Janeiro e Fevereiro de 2021</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2>Edições de 2020</h2>
                    <div className="container">
                        <div className="row">
                            <div className="span4">
                                <div className=" card">
                                    <a href="https://pt.calameo.com/read/006435344a40c41d3fff8?authid=26lYHD30S0hJ"><img src="images/inf5.jpg" />
                                        <h2><strong>Nr 5</strong></h2>
                                        <p>Novembro e Dezembro de 2020</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="hide">Fim do conteúdo da página</span>
                </section>
            </div>

            <Footer />
        </div>
    )
}

export default Informativo