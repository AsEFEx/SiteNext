import Header from '../components/header'
import Menu from '../components/menu'
import Footer from '../components/footer'

function Cadastro() {
    return (
        <div>
            <Header />
            <Menu />
            <div id="content" className="internas span9">
                <section id="content-section">
                    <span className="hide">Início do conteúdo da página</span>
                    <h1 className="documentFirstHeading">ATUALIZE SEU CADASTRO</h1>
                    <p>Mantenha seus dados atualizados preenchendo a ficha de Inscrição de Sócio da AsEFEx no formulário:</p>
                    <a href="https://forms.gle/nxcm7XvqrRXDuNvK8">https://forms.gle/nxcm7XvqrRXDuNvK8</a>
                    <p>Basta preencher e submeter no próprio site.</p>
                    <p>Permanecemos à disposição para contatos por e-mail – <a href="asefex1990@gmail.com">asefex1990@gmail.com</a>- ou pessoalmente na sede da AsEFEx, de segunda à sexta, de 9h às 12h. </p>
                    <span className="hide">Fim do conteúdo da página</span>
                </section>
            </div>
            <Footer />
        </div>

    )
}

export default Cadastro