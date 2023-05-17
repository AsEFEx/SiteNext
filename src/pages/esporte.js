import Head from 'next/head'

export default function Home() {
  return <>
    <Head>
      <title>Eventos Esportivos - AsEFEx</title>
    </Head>

    <section id="content-section">
      <span className="hide">Início do conteúdo da página</span>
      <h1 className="documentFirstHeading">ESPORTE</h1>
      <p><em><strong>Eventos esportivos da AsEFEx suspensos por conta da pandemia da COVID-19. As atividades serão retomadas quando for possível realizar eventos com segurança.</strong></em> </p>
      <span className="hide">Fim do conteúdo da página</span>
    </section>
  </>
}
