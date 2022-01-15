import React from 'react'
import Link from 'next/link'

function Footer() {
   return (
      <div>
         <div className="footer-atalhos">
            <div className="container">
               <div className="pull-right voltar-ao-topo"><a href="#portal-siteactions"><i className="icon-chevron-up" />&nbsp;Voltar para o topo</a></div>
            </div>
         </div>
         <div className="container container-menus">
            <div id="footer" className="row footer-menus">
               <span className="hide">Início da navegação de rodapé</span>
               <div className="span2">
                  <nav className="row institucional nav">
                     <h2>Institucional</h2>
                     <ul>
                        <li>
                           <Link href="/historico">
                              <a title="Histórico">»Histórico</a>
                           </Link>
                        </li>
                        <li>
                           <a href="/institucional" title="Institucional">»Institucional</a>
                        </li>
                        <li>
                           <Link href="/diretoria-executiva">
                              <a title="Diretoria Executiva">»Diretoria Executiva</a>
                           </Link>
                        </li>
                        <li>
                           <Link href="/conselhos">
                              <a title="Conselhos">»Conselheiros</a>
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
               </div>
               <div className="span2">
                  <nav className="row links nav">
                     <h2>Links Importantes</h2>
                     <ul>
                        <li className="portalservicos-item">
                           <a title="Exército Brasileiro" href="http://www.eb.mil.br/">Exército Brasileiro</a>
                        </li>
                        <li className="portalservicos-item">
                           <a title="CCFEx" href="http://www.ccfex.eb.mil.br/">CCFEx</a>
                        </li>
                        <li className="portalservicos-item">
                           <a title="EsEFEx" href="http://www.esefex.eb.mil.br/">EsEFEx</a>
                        </li>
                        <li className="portalservicos-item">
                           <a title="IPCFEx" href="http://www.ipcfex.eb.mil.br/">IPCFEx</a>
                        </li>
                        <li className="portalservicos-item">
                           <a title="CDE" href="http://www.cde.eb.mil.br/">CDE</a>
                        </li>
                     </ul>
                  </nav>
               </div>
               <div className="span2">
                  <nav className="row redes-sociais nav">
                     <h2>Redes Sociais</h2>
                     <ul>
                        <li className="portalredes-item"><a title="Twitter" href="https://twitter.com/Asefex1?s=20">
                           Twitter</a>
                        </li>
                        <li className="portalredes-item"><a title="Facebook" href="https://www.facebook.com/asefex1990_desportoexercito-103120284947772/">
                           Facebook</a>
                        </li>
                        <li className="portalredes-item"><a title="Instagram" href="https://www.instagram.com/asefex1990_desportoexercito/">
                           Instagram</a>
                        </li>
                     </ul>
                  </nav>
               </div>
               <div className="span2">
                  <nav className="row sobre nav">
                     <h2>Sobre o Site</h2>
                     <ul>
                        <li><a href="interna-acessibilidade.html" title="Acessibilidade">Acessibilidade</a></li>
                        <li>
                           <Link href="/construcao">
                              <a title="Mapa do Site">Mapa do Site</a>
                           </Link>
                        </li>
                     </ul>
                  </nav>
               </div>
               <div className="span2">
                  <nav className="row localizacao nav">
                     <h2>Localização</h2>
                     <a href="https://www.google.com.br/maps/place/Fortaleza+de+S%C3%A3o+Jo%C3%A3o/@-22.9443784,-43.1591347,17.5z/data=!4m5!3m4!1s0x99803866859f89:0x91edb2d4aaed033!8m2!3d-22.9438372!4d-43.1586339"><img src="images/local.png" alt="imagem decorativa" style={{ maxWidth: 200, maxHeight: 200, height: 'auto', width: 'auto' }} /></a>
                     <a href="https://www.google.com.br/maps/place/Fortaleza+de+S%C3%A3o+Jo%C3%A3o/@-22.9443784,-43.1591347,17.5z/data=!4m5!3m4!1s0x99803866859f89:0x91edb2d4aaed033!8m2!3d-22.9438372!4d-43.1586339" title="Localização">»Venha nos Conhecer</a>
                  </nav>
               </div>
               <span className="hide">Fim da navegação de rodapé</span>
            </div>
            {/* fim .row */}
            <div className="container">
               <nav className="apoio nav">
                  <h2>Apoio:</h2>
                  <div className="span2" style={{ margin: '3%' }}>
                     <a href="https://www.facebook.com/pg/POINT-DO-MILITAR-697220160321225/posts/"><img alt="Point do Militar" src="images/apoio4.png" style={{ maxWidth: 180, maxHeight: 150, width: 'auto', height: 'auto' }} /></a>
                  </div>
                  <div className="span2" style={{ margin: '3%' }}>
                     <a href="http://barurca.com.br/"><img alt="Bar Urca" src="images/apoio2.png" style={{ maxWidth: 180, maxHeight: 150, width: 'auto', height: 'auto' }} /></a>
                  </div>
                  <div className="span2" style={{ margin: '3%' }}>
                     <a href="https://www.castelobranco.br/ucb/"><img alt="UCB" src="images/apoio3.png" style={{ maxWidth: 130, maxHeight: 100, width: 'auto', height: 'auto' }} /></a>
                  </div>
                  <div className="span3" style={{ margin: '3%' }}>
                     <a href="http://www.poupex.com.br/"><img alt="Poupex" src="images/apoio1.png" style={{ maxWidth: 310, maxHeight: 200, width: 'auto', height: 'auto' }} /></a>
                  </div>
               </nav>
            </div>
         </div>
         {/* fim .container */}
         <div className="footer-logos">
            <div className="container">
               <a href="http://www.acessoainformacao.gov.br/" className="logo-acesso pull-left"><img src="images/acesso-a-informacao.png" alt="Acesso a Informação" /></a>
               {/* separador para fins de acessibilidade */}<span className="hide">&nbsp;</span>
               {/* fim separador para fins de acessibilidade */}
               <a href="http://www.brasil.gov.br/" className="brasil pull-right"><img src="images/brasil.png" alt="Brasil - Governo Federal" /></a>
            </div>
         </div>
         <div className="footer-ferramenta">
            <div className="container">
               <p>Site desenvolvido em parceria com a empresa júnior <a href="https://imejunior.com.br/?gclid=CjwKCAiAo5qABhBdEiwAOtGmbunns7N22hr1ixaTe6DrGL9vlz8M_DndcTc0pQr53zk_-ddVIBDX5xoCXG4QAvD_BwE">IME
                  Júnior</a></p>
            </div>
         </div>
         <div className="footer-atalhos visible-phone">
            <div className="container">
               <span className="hide">Fim do conteúdo da página</span>
               <div className="pull-right voltar-ao-topo"><a href="#portal-siteactions"><i className="icon-chevron-up" />&nbsp;Voltar para o topo</a></div>
            </div>
         </div>
      </div>
   )
}

export default Footer