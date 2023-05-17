import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return <>
      <Head>
        <title>Associação - AsEFEx</title>
      </Head>

      <section id="content-section">
        <span className="hide">Início do conteúdo da página</span>
        <h1 className="documentFirstHeading">SEJA ASSOCIADO</h1>
        <p>Torne-se associado preenchendo a ficha de Inscrição de Sócio da AsEFEx no formulário:</p>
        <Link target="_blank" style={{ color: '#0088CC' }} href="https://forms.gle/rrRxbJXLfSrk1DuG8">https://forms.gle/rrRxbJXLfSrk1DuG8</Link>
        <p>Basta preencher e submeter no próprio site.</p>
        <p>Permanecemos à disposição para contatos por e-mail – <Link onClick={(e) => e.preventDefault()} style={{ color: '#0088CC' }} href="asefex1990@gmail.com">asefex1990@gmail.com</Link>- ou pessoalmente na sede da AsEFEx, de segunda à sexta, de 9h às 12h. </p>
        <span className="hide">Fim do conteúdo da página</span>
      </section>
    </>
}
