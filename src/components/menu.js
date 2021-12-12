
import React from 'react';


function Menu() {
    return (
        <div id="navigation" className="span3">
            <a href="#" className="visible-phone visible-tablet mainmenu-toggle btn"><i className="icon-list" />&nbsp;Menu</a>
            <section id="navigation-section">
                <span className="hide">Início do menu principal</span>
                <nav className="span9 sobre">
                    <h2>Sobre a AsEFEx <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
                    <ul>
                        <li><a href="/historico" title="Histórico">»Histórico</a></li>
                        <li><a href="/institucional" title="Institucional">»Institucional</a>
                        </li>
                        <li><a href="/diretoria-executiva" title="Diretoria Executiva">»Diretoria Executiva</a></li>
                        <li><a href="/conselhos" title="Conselheiros">»Conselheiros</a></li>
                        <li><a href="/estatuto" title="Estatuto">»Estatuto</a></li>
                        <li><a href="/sede" title="Sede">»Sede</a></li>
                    </ul>
                </nav>
                <nav className="span9 associado">
                    <h2>Área do Associado <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
                    <ul>
                        <li><a href="/galeria-as" title="Galeria de Associados">»Galeria de Associados</a></li>
                        <li><a href="/cadastro" title="Atualize seu Cadastro">»Atualize seu Cadastro</a></li>
                        <li><a href="/seja-associado" title="Seja um Associado">»Seja um Associado</a></li>
                        <li><a href="/comprovante" title="Envio do Comprovante de Pagamento">»Envio do Comprovante de
            Pagamento</a></li>
                    </ul>
                </nav>
                <nav className="span9 galeria-ex">
                    <h2>Galeria de Ex-Alunos <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
                    <ul>
                        <li><a href="/galeria-ex" title="Acessar Galeria">»Acessar Galeria</a></li>
                    </ul>
                </nav>
                <nav className="span9 publicações">
                    <h2>Publicações AsEFEx <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
                    <ul>
                        <li><a href="/revista" title="Revista AsEFEx">»Revista AsEFEx</a></li>
                        <li><a href="/informativo" title="Informativo AsEFEx">»Informativo AsEFEx</a></li>
                        <li><a href="/escreva" title="Escreva na Revista da AsEFEx">»Escreva na Revista da
            AsEFEx</a></li>
                    </ul>
                </nav>
                <nav className="span9 atividades">
                    <h2>Atividades <i className="icon-chevron-down visible-phone visible-tablet pull-right" />
                    </h2>
                    <ul>
                        <li><a href="/esporte" title="Esporte">»Esporte</a></li>
                        <li><a href="/cursos" title="Cursos">»Cursos</a></li>
                        <li><a href="/eventos_sociais_2021" title="Eventos Sociais">»Eventos Sociais </a></li>
                        <li><a href="/eventos_realizados" title="Galeria de Eventos Realizados">»Galeria de Eventos
            Realizados</a></li>
                        <li><a href="/proposta_evento" title="Faça sua Proposta de Evento">»Faça sua Proposta de Evento</a>
                        </li>
                    </ul>
                </nav>
                <nav className="span9 medalha">
                    <h2>Medalha Mérito Esportivo AsEFEx <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
                    <ul>
                        <li><a href="/medalha" title="A Medalha">»A Medalha</a></li>
                        <li><a href="/galeria-medalha" title="Galeria de Agraciados">»Galeria de Agraciados</a></li>
                    </ul>
                </nav>
                <nav className="span9 transparencia">
                    <h2>Transparência <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
                    <ul>
                        <li><a href="/relatorio_fin" title="Relatórios Financeiros">»Relatórios Financeiros </a>
                        </li>
                        <li><a href="/relatorio_fin_ant" title="Relatórios Financeiros de Anos Anteriores">»Relatórios
            Financeiros de Anos Anteriores</a></li>
                    </ul>
                </nav>
                <nav className="span9 central-conteudos">
                    <h2>Central de Conteúdos <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
                    <ul>
                        <li>
                            <a href="/downloads" className="audios" title="Downloads">
                                <span className="icon-li icon-stack">
                                    <i className="icon-circle icon-stack-base"><span className="hide">&nbsp;</span></i>
                                    <i className="icon-arrow-down icon-light"><span className="hide">&nbsp;</span></i>
                                </span>
            Downloads</a>
                        </li>
                        <li>
                            <a href="/links" className="publicacoes" title="Links">
                                <span className="icon-li icon-stack">
                                    <i className="icon-circle icon-stack-base"><span className="hide">&nbsp;</span></i>
                                    <i className="icon-list icon-light"><span className="hide">&nbsp;</span></i>
                                </span>
            Links Úteis</a>
                        </li>
                    </ul>
                </nav>
                <nav className="span9 contato">
                    <h2>Fale Conosco <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
                    <ul>
                        <li><a href="/fale-conosco" title="Contato">»Contato</a></li>
                        <li><a href="/perguntas_freq" title="Perguntas Frequentes">»Perguntas Frequentes</a></li>
                    </ul>
                </nav>
                <span className="hide">Fim do menu principal</span>
            </section>
        </div>

    )
}

export default Menu