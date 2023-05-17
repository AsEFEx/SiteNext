import Head from 'next/head'
import Link from 'next/link'

export default function Comprovante() {
  return <>
    <Head>
      <title>Comprovante de Pagamento - AsEFEx</title>
    </Head>

    <section id="content-section">
      <span className="hide">Início do conteúdo da página</span>
      <h1 className="documentFirstHeading">COMPROVANTE DE PAGAMENTO</h1>
      <p>Os dados bancários para a transferência de valores visando à quitação da anuidade são os seguintes:</p>
      <p><strong>ASEFEX - Banco do Brasil - Agência: 287-9 - C/C: 212438-6 - CNPJ: 39.126.347/0001-10</strong></p>
      <p>PIX (CNPJ): 39.126.347/0001-10</p>
      <p>O comprovante da transferência deve ser encaminhado pelo link:</p>
      <p><Link target="_blank" style={{ color: '#0088CC' }} href="https://forms.gle/rrRxbJXLfSrk1DuG8">https://forms.gle/rrRxbJXLfSrk1DuG8</Link></p>
      <p>Permanecemos à disposição para contatos por e-mail – <Link onClick={(e) => e.preventDefault()} style={{ color: '#0088CC' }} href="asefex1990@gmail.com">asefex1990@gmail.com</Link>- ou pessoalmente na sede da AsEFEx, de segunda à sexta, de 9h às 12h. </p>
      <span className="hide">Fim do conteúdo da página</span>
    </section>
  </>
}
