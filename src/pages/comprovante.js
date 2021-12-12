import Header from '../components/header'
import Menu from '../components/menu'
import Footer from '../components/footer'

function Comprovante() {
    return (
        <div>
            <Header />
            <Menu />
            <div id="content" className="internas span9">
                <section id="content-section">
                    <span className="hide">Início do conteúdo da página</span>
                    <h1 className="documentFirstHeading">COMPROVANTE DE PAGAMENTO</h1>
                    <p>Os dados bancários para a transferência de valores visando à quitação da anuidade são os seguintes:</p>
                    <p><strong>ASEFEX - Banco do Brasil - Agência: 287-9 - C/C: 212438-6 - CNPJ: 39.126.347/0001-10</strong></p>
                    <p>O comprovante da transferência deve ser encaminhado pelo link:</p>
                    <p><a href="https://forms.gle/M6BYJbDJFn8NfgNS7 ">https://forms.gle/M6BYJbDJFn8NfgNS7 </a></p>
                    <p>Permanecemos à disposição para contatos por e-mail – <a href="asefex1990@gmail.com">asefex1990@gmail.com</a>- ou pessoalmente na sede da AsEFEx, de segunda à sexta, de 9h às 12h. </p>
                    <span className="hide">Fim do conteúdo da página</span>
                </section>
            </div>
            <Footer />
        </div>

    )
}

export default Comprovante