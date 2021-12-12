
import React from 'react';

function Header() {
    return (
        <div>

            <div className="container">
                <div className="row-fluid accessibility-language-actions-container">
                    <div className="span6 accessibility-container">
                        <ul id="accessibility">
                            <li>
                                <a accessKey={1} href="#content" id="link-conteudo">
                                    Ir para o conteúdo
              <span>1</span>
                                </a>
                            </li>
                            <li>
                                <a accessKey={2} href="#navigation" id="link-navegacao">
                                    Ir para o menu
              <span>2</span>
                                </a>
                            </li>
                            <li>
                                <a accessKey={3} href="#portal-searchbox" id="link-buscar">
                                    Ir para a busca
              <span>3</span>
                                </a>
                            </li>
                            <li>
                                <a accessKey={4} href="#footer" id="link-rodape">
                                    Ir para o rodapé
              <span>4</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* fim div.span6 */}
                    <div className="span6 language-and-actions-container">
                        {/* Descomente para inserir menu de exemplo de idiomas no topo */}
                        {/* <ul id="language" class="pull-right">
							<li class="language-en">
								<a href="#">EN</a>
							</li>
							<li class="language-es">
								<a href="#">ES</a>
							</li>
						</ul>	 */}
                        <ul id="portal-siteactions" className="pull-right">
                            <li>
                                <a accessKey={5} href="interna-acessibilidade.html">Acessibilidade</a>
                            </li>
                            <li>
                                <a accessKey={6} href="#" className="toggle-contraste">Alto Contraste</a>
                            </li>
                            <li>
                                <a accessKey={7} href="#">Mapa do Site</a>
                            </li>
                        </ul>
                    </div>
                    {/* fim div.span6 */}
                </div>
                {/* fim .row-fluid */}
                <div className="row-fluid">
                    <div id="logo" className="span8">
                        {/* <div id="logo" class="span8 big"> <div id="logo" class="span8 small"> */}
                        <div id="img_logo" className="span2" style={{ paddingTop: 5 }}>
                            <a href="/" title="Logo do Portal Padrão">
                                <img alt="Logo" src="images/Logo.png" style={{ maxWidth: 100, maxHeight: 100, width: 'auto', height: 'auto' }} />
                            </a>
                        </div>
                        <div id="txt_logo" className="span10">
                            <a href="/" title="Descrição do Portal Padrão">
                                <h1 className="portal-title corto">AsEFEx</h1>
                                <span className="portal-description">Associação dos Ex-Alunos e dos Amigos da Escola de
              Educação Física do Exército</span>
                            </a>
                        </div>
                    </div>
                    {/* fim .span8 */}
                    <div className="span4">
                        <div id="portal-searchbox" className="row">
                            <form action="#" className="pull-right">
                                <fieldset>
                                    <legend className="hide">Busca</legend>
                                    <h2 className="hidden">Buscar no portal</h2>
                                    <div className="input-append">
                                        <label htmlFor="portal-searchbox-field" className="hide">Busca: </label>
                                        <input type="text" id="portal-searchbox-field" className="searchField" placeholder="Buscar no portal" title="Buscar no portal" name="searchterm" />
                                        <button type="button" className="btn searchButton"><span className="hide">Buscar</span><i className="icon-search" /></button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        {/* fim div#portal-searchbox.row */}
                        <div id="social-icons" className="social-icons row">
                            <h2 className="hidden">Redes Sociais</h2>
                            <ul className="pull-right">
                                <li className="portalredes-item">
                                    <a title="Facebook" href="https://www.facebook.com/asefex1990_desportoexercito-103120284947772/">
                                        <i className="icon-facebook-sign"><span>Facebook</span></i></a>
                                </li>
                                <li className="portalredes-item">
                                    <a title="Instagram" href="https://www.instagram.com/asefex1990_desportoexercito/">
                                        <i className="icon-instagram"><span>Instagram</span></i></a>
                                </li>
                            </ul>
                        </div>
                        {/* fim div#social-icons.row */}
                    </div>
                    {/* fim .span4 */}
                </div>
                {/* fim .row-fluid */}
            </div>
            {/* fim div.container */}
            <div className="sobre">
                <div className="container">
                    <nav className="menu-servicos pull-right">
                        <h2 className="hide">Serviços</h2>
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
                            <li className="portalservicos-item">
                                <a title="Contato" href="/fale-conosco">Contato</a>
                            </li>
                            <li className="portalservicos-item">
                                <a title="Acessar Conta" href="/seja-associado">Associe-se</a>
                            </li>
                        </ul>
                        <span className="hide">Fim do menu de serviços</span>
                    </nav>
                    {/* fim #menu-servicos.pull-right */}
                </div>
                {/* .container */}
            </div>
            {/* fim .sobre */}
        </div>
    )
}

export default Header