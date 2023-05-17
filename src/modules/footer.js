import Link from 'next/link'

function Footer() {
   return <footer>
      <div className="footer-atalhos"><div className="container">
         <div className="pull-right voltar-ao-topo"><Link href="#portal-siteactions"><i className="icon-chevron-up" />&nbsp;Voltar para o topo</Link></div>
      </div></div>

      <div className="container container-menus">
         <div id="footer" className="row footer-menus">
            <span className="hide">Início da navegação de rodapé</span>
            <div className="span2">
               <nav className="row institucional nav">
                  <h2>Institucional</h2>
                  <ul>
                     <li><Link href="/historico">»Histórico</Link></li>
                     <li><Link href="/institucional">»Institucional</Link></li>
                     <li><Link href="/diretoria-executiva">»Diretoria Executiva</Link></li>
                     <li><Link href="/conselhos">»Conselheiros</Link></li>
                     <li><Link href="/estatuto">»Estatuto</Link></li>
                     <li><Link href="/sede">»Sede</Link></li>
                  </ul>
               </nav>
            </div>

            <div className="span2">
               <nav className="row links nav">
                  <h2>Links Importantes</h2>
                  <ul>
                     <li className="portalservicos-item"><Link target="_blank" title="Exército Brasileiro" href="http://www.eb.mil.br/">Exército Brasileiro</Link></li>
                     <li className="portalservicos-item"><Link target="_blank" title="CCFEx" href="http://www.ccfex.eb.mil.br/">CCFEx</Link></li>
                     <li className="portalservicos-item"><Link target="_blank" title="EsEFEx" href="http://www.esefex.eb.mil.br/">EsEFEx</Link></li>
                     <li className="portalservicos-item"><Link target="_blank" title="IPCFEx" href="http://www.ipcfex.eb.mil.br/">IPCFEx</Link></li>
                     <li className="portalservicos-item"><Link target="_blank" title="CDE" href="http://www.cde.eb.mil.br/">CDE</Link></li>
                  </ul>
               </nav>
            </div>

            <div className="span2">
               <nav className="row redes-sociais nav">
                  <h2>Redes Sociais</h2>
                  <ul>
                     <li className="portalredes-item"><Link target="_blank" title="Twitter" href="https://twitter.com/Asefex1?s=20">Twitter</Link></li>
                     <li className="portalredes-item"><Link target="_blank" title="Facebook" href="https://www.facebook.com/asefex1990_desportoexercito-103120284947772/">Facebook</Link></li>
                     <li className="portalredes-item"><Link target="_blank" title="Instagram" href="https://www.instagram.com/asefex1990_desportoexercito/">Instagram</Link></li>
                  </ul>
               </nav>
            </div>

            <div className="span2">
               <nav className="row sobre nav">
                  <h2>Sobre o Site</h2>
                  <ul>
                     <li><Link href="acessibilidade" title="Acessibilidade">Acessibilidade</Link></li>
                     <li><Link href="/construcao">Mapa do Site</Link></li>
                  </ul>
               </nav>
            </div>

            <div className="span2">
               <nav className="row localizacao nav">
                  <h2>Localização</h2>
                  <Link target="_blank" href="https://www.google.com.br/maps/place/Fortaleza+de+S%C3%A3o+Jo%C3%A3o/@-22.9443784,-43.1591347,17.5z/data=!4m5!3m4!1s0x99803866859f89:0x91edb2d4aaed033!8m2!3d-22.9438372!4d-43.1586339"><img src="images/local.png" alt="imagem decorativa" style={{ maxWidth: 200, maxHeight: 200, height: 'auto', width: 'auto' }} /></Link>
                  <Link target="_blank" href="https://www.google.com.br/maps/place/Fortaleza+de+S%C3%A3o+Jo%C3%A3o/@-22.9443784,-43.1591347,17.5z/data=!4m5!3m4!1s0x99803866859f89:0x91edb2d4aaed033!8m2!3d-22.9438372!4d-43.1586339" title="Localização">»Venha nos Conhecer</Link>
               </nav>
            </div>
            <span className="hide">Fim da navegação de rodapé</span>
         </div>
         {/* fim .row */}

         <div className="container">
            <nav className="apoio nav">
               <h2>Apoio:</h2>
               <div className="span2" style={{ margin: '3%' }}>
                  <Link target="_blank" href="https://www.facebook.com/pg/POINT-DO-MILITAR-697220160321225/posts/"><img alt="Point do Militar" src="images/apoio4.png" style={{ maxWidth: 180, maxHeight: 150, width: 'auto', height: 'auto' }} /></Link>
               </div>
               <div className="span2" style={{ margin: '3%' }}>
                  <Link target="_blank" href="http://barurca.com.br/"><img alt="Bar Urca" src="images/apoio2.png" style={{ maxWidth: 180, maxHeight: 150, width: 'auto', height: 'auto' }} /></Link>
               </div>
               <div className="span2" style={{ margin: '3%' }}>
                  <Link target="_blank" href="https://www.castelobranco.br/ucb/"><img alt="UCB" src="images/apoio3.png" style={{ maxWidth: 130, maxHeight: 100, width: 'auto', height: 'auto' }} /></Link>
               </div>
               <div className="span3" style={{ margin: '3%' }}>
                  <Link target="_blank" href="http://www.poupex.com.br/"><img alt="Poupex" src="images/apoio1.png" style={{ maxWidth: 310, maxHeight: 200, width: 'auto', height: 'auto' }} /></Link>
               </div>
            </nav>
         </div>
      </div>
      {/* fim .container */}


      <div className="footer-logos">
         <div className="container">
            <Link target="_blank" href="http://www.acessoainformacao.gov.br/" className="logo-acesso pull-left"><img src="images/acesso-a-informacao.png" alt="Acesso a Informação" /></Link>
            {/* separador para fins de acessibilidade */}<span className="hide">&nbsp;</span>
            {/* fim separador para fins de acessibilidade */}
            <Link target="_blank" href="http://www.brasil.gov.br/" className="brasil pull-right"><img src="images/brasil.png" alt="Brasil - Governo Federal" /></Link>
         </div>
      </div>

      <div className="footer-ferramenta">
         <div className="container">
            <p>Site desenvolvido em parceria com a empresa júnior
               <Link target="_blank" style={{ color: '#0088CC' }} href="https://imejunior.com.br/?gclid=CjwKCAiAo5qABhBdEiwAOtGmbunns7N22hr1ixaTe6DrGL9vlz8M_DndcTc0pQr53zk_-ddVIBDX5xoCXG4QAvD_BwE">
                  IME Júnior
               </Link>
            </p>
         </div>
      </div>

      <div className="footer-atalhos visible-phone">
         <div className="container">
            <span className="hide">Fim do conteúdo da página</span>
            <div className="pull-right voltar-ao-topo"><Link href="#portal-siteactions"><i className="icon-chevron-up" />&nbsp;Voltar para o topo</Link></div>
         </div>
      </div>
   </footer>
}

export default Footer