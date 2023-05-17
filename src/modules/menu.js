import React from 'react'
import Link from 'next/link'

function Menu() {
   return (
      <div id="menu">
         <div id="navigation" className="span3">
            <Link href="#" className="visible-phone visible-tablet mainmenu-toggle btn"><i className="icon-list" />&nbsp;Menu</Link>
            <section id="navigation-section">
               <span className="hide">Início do menu principal</span>
               <nav className="span9 sobre">
                  <h2>Sobre a AsEFEx <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
                  <ul>
                     <li>
                        <Link href="/historico" title="Histórico">»Histórico</Link>
                     </li>
                     <li>
                        <Link href="/institucional" title="Institucional">»Institucional</Link>
                     </li>
                     <li>
                        <Link href="/diretoria-executiva" title="Diretoria Executiva">»Diretoria Executiva</Link>
                     </li>
                     <li>
                        <Link href="/conselhos" title="Conselheiros">»Conselheiros</Link>
                     </li>
                     <li>
                        <Link href="/estatuto" title="Estatuto">»Estatuto</Link>
                     </li>
                     <li>
                        <Link href="/sede" title="Sede">»Sede</Link>
                     </li>
                  </ul>
               </nav>
               <nav className="span9 associado">
                  <h2>Área do Associado <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
                  <ul>
                     <li>
                        <Link href="/galeria-as" title="Galeria de Associados">»Galeria de Associados</Link>
                     </li>
                     <li>
                        <Link href="/cadastro" title="Atualize seu Cadastro">»Atualize seu Cadastro</Link>
                     </li>
                     <li>
                        <Link href="/seja-associado" title="Seja um Associado">»Seja um Associado</Link>
                     </li>
                     <li>
                        <Link href="/comprovante" title="Envio do Comprovante de Pagamento">»Envio do Comprovante de Pagamento</Link>
                     </li>
                  </ul>
               </nav>
               <nav className="span9 galeria-ex">
                  <h2>Galeria de Ex-Alunos <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
                  <ul>
                     <li><Link href="/galeria-ex" title="Acessar Galeria">»Acessar Galeria</Link></li>
                  </ul>
               </nav>
               <nav className="span9 publicações">
                  <h2>Publicações AsEFEx <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
                  <ul>
                     <li>
                        <Link href="/revista" title="Revista AsEFEx">»Revista AsEFEx</Link>
                     </li>
                     <li>
                        <Link href="/informativo" title="Informativo AsEFEx">»Informativo AsEFEx</Link>
                     </li>
                     <li>
                        <Link href="/escreva" title="Escreva na Revista da AsEFEx">»Escreva na Revista da AsEFEx</Link>
                     </li>
                  </ul>
               </nav>
               <nav className="span9 atividades">
                  <h2>Atividades <i className="icon-chevron-down visible-phone visible-tablet pull-right" />
                  </h2>
                  <ul>
                     <li>
                        <Link href="/esporte" title="Esporte">»Esporte</Link>
                     </li>
                     <li>
                        <Link href="/cursos" title="Cursos">»Cursos</Link>
                     </li>
                     <li>
                        <Link href="/eventos_sociais_2021" title="Eventos Sociais">»Eventos Sociais </Link>
                     </li>
                     <li>
                        <Link href="/eventos_realizados" title="Galeria de Eventos Realizados">»Galeria de Eventos Realizados</Link>
                     </li>
                     <li>
                        <Link href="/proposta_evento" title="Faça sua Proposta de Evento">»Faça sua Proposta de Evento</Link>
                     </li>
                  </ul>
               </nav>
               <nav className="span9 medalha">
                  <h2>Medalha Mérito Esportivo AsEFEx <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
                  <ul>
                     <li>
                        <Link href="/medalha" title="A Medalha">»A Medalha</Link>
                     </li>
                     <li>
                        <Link href="/galeria-medalha" title="Galeria de Agraciados">»Galeria de Agraciados</Link>
                     </li>
                  </ul>
               </nav>
               <nav className="span9 transparencia">
                  <h2>Transparência <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
                  <ul>
                     <li>
                        <Link href="/relatorio_fin" title="Relatórios Financeiros">»Relatórios Financeiros </Link>
                     </li>
                     <li>
                        <Link href="/relatorio_fin_ant" title="Relatórios Financeiros de Anos Anteriores">»Relatórios Financeiros de Anos Anteriores</Link>
                     </li>
                  </ul>
               </nav>
               <nav className="span9 central-conteudos">
                  <h2>Central de Conteúdos <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
                  <ul>
                     <li>
                        <Link href="/downloads" className="audios" title="Downloads">
                           <span className="icon-li icon-stack">
                              <i className="icon-circle icon-stack-base"><span className="hide">&nbsp;</span></i>
                              <i className="icon-arrow-down icon-light"><span className="hide">&nbsp;</span></i>
                           </span>Downloads
                        </Link>
                     </li>
                     <li>
                        <Link href="/links" className="publicacoes" title="Links">
                           <span className="icon-li icon-stack">
                              <i className="icon-circle icon-stack-base"><span className="hide">&nbsp;</span></i>
                              <i className="icon-list icon-light"><span className="hide">&nbsp;</span></i>
                           </span>Links Úteis
                        </Link>
                     </li>
                  </ul>
               </nav>
               <nav className="span9 contato">
                  <h2>Fale Conosco <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
                  <ul>
                     <li>
                        <Link href="/fale-conosco" title="Contato">»Contato</Link>
                     </li>
                     <li>
                        <Link href="/perguntas_freq" title="Perguntas Frequentes">»Perguntas Frequentes</Link>
                     </li>
                  </ul>
               </nav>
               <span className="hide">Fim do menu principal</span>
            </section>
         </div>
      </div>
   )
}

export default Menu