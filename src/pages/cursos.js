import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return <>
    <Head>
      <title>Cursos - AsEFEx</title>
    </Head>

    <section id="content-section">
      <span className="hide">Início do conteúdo da página</span>
      <h1 className="documentFirstHeading">CURSOS</h1>
      <div className="description"> CURSOS DE INTERESSE PARA ASSOCIADOS E AMIGOS </div>
      <p> Não há cursos oferecidos pela AsEFEx no momento. </p>
      <p>Os Associados e Amigos podem verificar condições especiais de matrícula nas instituições parceiras da AsEFEx:</p>
      <div style={{ margin: '1cm 6cm 1cm 6cm' }}>
        <Link target="_blank" href="http://www.castelobranco.br/"><img alt="Universidade Castelo Branco" src="images/castelo_branco.png" style={{ maxWidth: 310, maxHeight: 200, width: 'auto', height: 'auto' }} /></Link>
      </div>
      <p>- Mensalidades diferenciadas em cursos de graduação e pós-graduação na Universidade Castelo Branco</p>
      <span className="hide">Fim do conteúdo da página</span>
    </section>
  </>

}
