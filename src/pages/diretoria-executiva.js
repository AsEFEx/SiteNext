
import React from 'react';

function Diretoria() {
    return (
        <div id="content" className="internas span9">
            <section id="content-section">
                <span className="hide">Início do conteúdo da página</span>
                <h1 className="documentFirstHeading">DIRETORIA EXECUTIVA</h1>
                <div className="container">

                    <div className="row">
                        <div className="span4">
                            <div className=" card">
                                <img src="images/presidente.png" />
                                <h2><strong>Presidente</strong></h2>
                                <p>Cel Josué Morisson de Moraes</p>
                            </div>
                        </div>
                        <div className="span4">
                            <div className=" card">
                                <img src="images/vicepresidente.png" />
                                <h2><strong>Vice-Presidente</strong></h2>
                                <p>Cel Mauro Benedito Guaraldo Secco</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="span4">
                            <div className=" card">
                                <img src="images/diretoradministrativo.png" />
                                <h2><strong>Diretor Administrativo</strong></h2>
                                <p>Sr Adilson Soares Barbosa</p>
                            </div>
                        </div>
                        <div className="span4">
                            <div className=" card">
                                <img src="images/diretorplanejamento.png" />
                                <h2><strong>Diretor de Planejamento e Controle</strong></h2>
                                <p>Cel Antonio Fernando Araújo Duarte</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="span4">
                            <div className=" card">
                                <img src="images/diretorcomunicacao.png" />
                                <h2><strong>Diretor de Comunicação Social</strong></h2>
                                <p>Ten Cel Flavio Gomes Ferreira Pinto</p>
                            </div>
                        </div>
                        <div className="span4">
                            <div className=" card">
                                <img src="images/diretorcultural.png" />
                                <h2><strong>Diretor Cultural</strong></h2>
                                <p>Cel Joel Francisco Corrêa</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="span4">
                            <div className=" card">
                                <img src="images/diretoresportes.jpg" />
                                <h2><strong>Diretor para Esporte e Eventos</strong></h2>
                                <p>TC André Valentim Siqueira Rodrigues</p>
                            </div>
                        </div>
                        <div className="span4">
                            <div className=" card">
                                <img src="images/diretorfinanceiro.png" />
                                <h2><strong>Diretor Financeiro e de Patrimônio</strong></h2>
                                <p>Cel Mário Vilá Pitaluga Filho</p>
                            </div>
                        </div>
                    </div>

                </div>
                <span className="hide">Fim do conteúdo da página</span>
            </section>
        </div>
    )
}

export default Diretoria