import React from 'react'
import Link from 'next/link'

function Menu() {
  return (
    <div id="navigation" className="span3">
      <a href="#" className="visible-phone visible-tablet mainmenu-toggle btn"><i className="icon-list" />&nbsp;Menu</a>
      <section id="navigation-section">
        <span className="hide">Início do menu principal</span>
        <nav className="span9 sobre">
          <h2>Sobre a AsEFEx <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
          <ul>
            <li>
               <Link href="/historico">
                  <a title="Histórico">»Histórico</a>
               </Link>
            </li>
            <li>
               <Link href="/institucional">
                  <a title="Institucional">»Institucional</a>
               </Link>
            </li>
            <li>
               <Link href="/diretoria-executiva">
                  <a title="Diretoria Executiva">»Diretoria Executiva</a>
               </Link>
            </li>
            <li>
               <Link href="/conselhos">
                  <a title="Conselheiros">»Conselheiros</a>
               </Link>
            </li>
            <li>
               <Link href="/estatuto">
                  <a title="Estatuto">»Estatuto</a>
               </Link>
            </li>
            <li>
               <Link href="/sede">
                  <a title="Sede">»Sede</a>
               </Link>
            </li>
          </ul>
        </nav>
        <nav className="span9 associado">
          <h2>Área do Associado <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
          <ul>
            <li>
               <Link href="/galeria-as">
                  <a title="Galeria de Associados">»Galeria de Associados</a>
               </Link>
            </li>
            <li>
               <Link href="/cadastro">
                  <a title="Atualize seu Cadastro">»Atualize seu Cadastro</a>
               </Link>
            </li>
            <li>
               <Link href="/seja-associado">
                  <a title="Seja um Associado">»Seja um Associado</a>
               </Link>
            </li>
            <li>
               <Link href="/comprovante">
                  <a title="Envio do Comprovante de Pagamento">»Envio do Comprovante de Pagamento</a>
               </Link>
            </li>
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
            <li>
               <Link href="/revista">
                  <a title="Revista AsEFEx">»Revista AsEFEx</a>
               </Link>
            </li>
            <li>
               <Link href="/informativo">
                  <a title="Informativo AsEFEx">»Informativo AsEFEx</a>
               </Link>
            </li>
            <li>
               <Link href="/escreva">
                  <a title="Escreva na Revista da AsEFEx">»Escreva na Revista da AsEFEx</a>
               </Link>
            </li>
          </ul>
        </nav>
        <nav className="span9 atividades">
          <h2>Atividades <i className="icon-chevron-down visible-phone visible-tablet pull-right" />
          </h2>
          <ul>
            <li>
               <Link href="/esporte">
                  <a title="Esporte">»Esporte</a>
               </Link>
            </li>
            <li>
               <Link href="/cursos">
                  <a title="Cursos">»Cursos</a>
               </Link>
            </li>
            <li>
               <Link href="/eventos_sociais_2021">
                  <a title="Eventos Sociais">»Eventos Sociais </a>
               </Link>
            </li>
            <li>
               <Link href="/eventos_realizados">
                  <a title="Galeria de Eventos Realizados">»Galeria de Eventos Realizados</a>
               </Link>
            </li>
            <li>
               <Link href="/proposta_evento">
                  <a title="Faça sua Proposta de Evento">»Faça sua Proposta de Evento</a>
               </Link>
            </li>
          </ul>
        </nav>
        <nav className="span9 medalha">
          <h2>Medalha Mérito Esportivo AsEFEx <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
          <ul>
            <li>
               <Link href="/medalha">
                  <a title="A Medalha">»A Medalha</a>
               </Link>
            </li>
            <li>
               <Link href="/galeria-medalha">
                  <a title="Galeria de Agraciados">»Galeria de Agraciados</a>
               </Link>
            </li>
          </ul>
        </nav>
        <nav className="span9 transparencia">
          <h2>Transparência <i className="icon-chevron-down visible-phone visible-tablet pull-right" /></h2>
          <ul>
            <li>
               <Link href="/relatorio_fin">
                  <a title="Relatórios Financeiros">»Relatórios Financeiros </a>
               </Link>
            </li>
            <li>
               <Link href="/relatorio_fin_ant">
                  <a title="Relatórios Financeiros de Anos Anteriores">»Relatórios Financeiros de Anos Anteriores</a>
               </Link>
            </li>
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
            <li>
               <Link href="/fale-conosco">
                  <a title="Contato">»Contato</a>
               </Link>
            </li>
            <li>
               <Link href="/perguntas_freq">
                  <a title="Perguntas Frequentes">»Perguntas Frequentes</a>
               </Link>
            </li>
          </ul>
        </nav>
        <span className="hide">Fim do menu principal</span>
      </section>
    </div>

  )
}

export default Menu