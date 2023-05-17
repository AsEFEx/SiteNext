import Link from 'next/link'
import $ from "jquery"
import styles from "./index.module.css"

function handleMenuAccessibility(e) {
   let collapsable = null
   if (e.target.nodeName == "H2") collapsable = e.target.nextSibling
   if (e.target.nodeName == "I") collapsable = e.target.parentNode.nextSibling

   if ($(collapsable).is(':visible')) $(collapsable).slideUp()
   else $(collapsable).slideDown()

   if (e.target.nodeName !== "A") return
   if ($(document).width() > 978) return

   if ($('#navigation-section').is(':visible')) $('#navigation-section').slideUp()
   else $('#navigation-section').slideDown()
}

function Menu() {
   return (
      <>
         <div id="menu">
            <div onClick={(e) => handleMenuAccessibility(e)} id="navigation" className="span3">
               <Link onClick={(e) => e.preventDefault()} href="#" className="visible-phone visible-tablet mainmenu-toggle btn"><i className="icon-list" />&nbsp;Menu</Link>

               <section id="navigation-section">
                  <span className="hide">Início do menu principal</span>

                  <nav className="span9 sobre">
                     <h2 className={styles.title}>Sobre a AsEFEx <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
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
                     <h2 className={styles.title}>Área do Associado <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
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
                     <h2 className={styles.title}>Galeria de Ex-Alunos <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
                     <ul>
                        <li><Link href="/galeria-ex" title="Acessar Galeria">»Acessar Galeria</Link></li>
                     </ul>
                  </nav>

                  <nav className="span9 publicações">
                     <h2 className={styles.title}>Publicações AsEFEx <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
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
                     <h2 className={styles.title}>Atividades <i className="icon-chevron-down visible-phone visible-tablet pull-right" />
                     </h2>
                     <ul>
                        <li>
                           <Link href="/esporte" title="Esporte">»Esporte</Link>
                        </li>
                        <li>
                           <Link href="/cursos" title="Cursos">»Cursos</Link>
                        </li>
                        <li>
                           <Link href="/eventos-sociais" title="Eventos Sociais">»Eventos Sociais </Link>
                        </li>
                        <li>
                           <Link href="/eventos-realizados" title="Galeria de Eventos Realizados">»Galeria de Eventos Realizados</Link>
                        </li>
                        <li>
                           <Link href="/proposta-evento" title="Faça sua Proposta de Evento">»Faça sua Proposta de Evento</Link>
                        </li>
                     </ul>
                  </nav>

                  <nav className="span9 medalha">
                     <h2 className={styles.title}>Medalha Mérito Esportivo AsEFEx <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
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
                     <h2 className={styles.title}>Transparência <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
                     <ul>
                        <li>
                           <Link href="/relatorio-fin" title="Relatórios Financeiros">»Relatórios Financeiros </Link>
                        </li>
                        <li>
                           <Link href="/relatorio-fin-ant" title="Relatórios Financeiros de Anos Anteriores">»Relatórios Financeiros de Anos Anteriores</Link>
                        </li>
                     </ul>
                  </nav>

                  <nav className="span9 central-conteudos">
                     <h2 className={styles.title}>Central de Conteúdos <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
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
                     <h2 className={styles.title}>Fale Conosco <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
                     <ul>
                        <li>
                           <Link href="/fale-conosco" title="Contato">»Contato</Link>
                        </li>
                        <li>
                           <Link href="/perguntas-freq" title="Perguntas Frequentes">»Perguntas Frequentes</Link>
                        </li>
                     </ul>
                  </nav>

                  <span className="hide">Fim do menu principal</span>
               </section>
            </div>
         </div>
      </>
   )
}

export default Menu