import Header from '../components/header'
import Menu from '../components/menu'
import Footer from '../components/footer'

function Construcao() {
    return (
        <div>
            <Header />
            <Menu />
            <div id="content" className="internas span9">
                <section id="content-section">
                    <span className="hide">Início do conteúdo da página</span>
                    <h1 className="documentFirstHeading"><em>Página em Construção...</em></h1>
                    <span className="hide">Fim do conteúdo da página</span>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Construcao