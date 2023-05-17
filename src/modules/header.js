import BarraGov from '@/components/BarraGov';
import Image from 'next/image';
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Header() {
  const [contraste, setContraste] = useState(false);

  // Verifica localStorage ao carregar a pagina pra ver se contraste armazenado == true
  useEffect(() => {
    var storedContraste = JSON.parse(localStorage.getItem('contraste'))
    if (storedContraste == true) {
      document.querySelector("body").classList.add("contraste")
      setContraste(true)
    }
  }, [])

  function handleContraste(contraste) {
    var bodyComponent = document.querySelector("body")
    if (contraste == false) bodyComponent.classList.add("contraste")
    else bodyComponent.classList.remove("contraste")
    window.localStorage.setItem('contraste', !contraste)
    setContraste(!contraste)
  }

  return <>
    <BarraGov />
    <header>
      <div className="container">
        <div className="row-fluid accessibility-language-actions-container">
          <div className="span6 accessibility-container">
            <ul id="accessibility">
              <li>
                <Link accessKey={1} href="#content" id="link-conteudo">Ir para o conteúdo <span>1</span></Link>
              </li>
              <li>
                <Link accessKey={2} href="#navigation" id="link-navegacao">Ir para o menu <span>2</span></Link>
              </li>
              <li>
                <Link accessKey={3} href="#portal-searchbox" id="link-buscar">Ir para a busca <span>3</span></Link>
              </li>
              <li>
                <Link accessKey={4} href="#footer" id="link-rodape">Ir para o rodapé <span>4</span></Link>
              </li>
            </ul>
          </div>
          {/* fim div.span6 */}

          <div className="span6 language-and-actions-container">
            {/* Descomente para inserir menu de exemplo de idiomas no topo */}
            {/* <ul id="language" className="pull-right">
							<li className="language-en">
                     <Link href="#">EN</Link>
							</li>
							<li className="language-es">
                     <Link href="#">ES</Link>
							</li>
						</ul>	 */}
            <ul id="portal-siteactions" className="pull-right">
              <li>
                <Link accessKey={5} href="acessibilidade">Acessibilidade</Link>
              </li>
              <li>
                <Link onClick={() => { handleContraste(contraste) }} accessKey={6} href="#" className="toggle-contraste">Alto Contraste</Link>
              </li>
              <li>
                <Link accessKey={7} href="#">Mapa do Site</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* fim .row-fluid */}

        <div className="row-fluid">
          <div id="logo" className="span8">
            {/* <div id="logo" className="span8 big"> <div id="logo" className="span8 small"> */}
            <div id="img_logo" className="span2" style={{ paddingTop: 5 }}>
              <Link href="/" title="Logo do Portal Padrão">
                <Image alt="Logo" src="/images/Logo.png" style={{ maxWidth: 100, maxHeight: 100, width: 'auto', height: 'auto' }} width={1000} height={1000} />
              </Link>
            </div>
            <div id="txt_logo" className="span10">
              <Link href="/" title="Descrição do Portal Padrão">
                <h1 className="portal-title corto">AsEFEx</h1>
                <span className="portal-description">Associação dos Ex-Alunos e dos Amigos da Escola de
                  Educação Física do Exército</span>
              </Link>
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
                  <Link target="_blank" title="Facebook" href="https://www.facebook.com/asefex1990_desportoexercito-103120284947772/">
                    <i className="icon-facebook-sign"><span>Facebook</span></i>
                  </Link>
                </li>
                <li className="portalredes-item">
                  <Link target="_blank" title="Instagram" href="https://www.instagram.com/asefex1990_desportoexercito/">
                    <i className="icon-instagram"><span>Instagram</span></i>
                  </Link>
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
                <Link target="_blank" title="Exército Brasileiro" href="http://www.eb.mil.br/">Exército Brasileiro</Link>
              </li>
              <li className="portalservicos-item">
                <Link target="_blank" title="CCFEx" href="http://www.ccfex.eb.mil.br/">CCFEx</Link>
              </li>
              <li className="portalservicos-item">
                <Link target="_blank" title="EsEFEx" href="http://www.esefex.eb.mil.br/">EsEFEx</Link>
              </li>
              <li className="portalservicos-item">
                <Link target="_blank" title="IPCFEx" href="http://www.ipcfex.eb.mil.br/">IPCFEx</Link>
              </li>
              <li className="portalservicos-item">
                <Link target="_blank" title="CDE" href="http://www.cde.eb.mil.br/">CDE</Link>
              </li>
              <li className="portalservicos-item">
                <Link href="/fale-conosco" title="Contato">Contato</Link>
              </li>
              <li className="portalservicos-item">
                <Link href="/seja-associado" title="Acessar Conta">Associe-se</Link>
              </li>
            </ul>
            <span className="hide">Fim do menu de serviços</span>
          </nav>
          {/* fim #menu-servicos.pull-right */}
        </div>
        {/* .container */}
      </div>
      {/* fim .sobre */}
    </header>
  </>
}

export default Header