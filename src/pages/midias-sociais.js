import Head from 'next/head'
import Card from '@/components/Card'

export default function Home() {
  return <>
    <Head>
      <title>Mídias Sociais</title>
    </Head>

    <section id="content-section">
      <span className="hide">Início do conteúdo da página</span>
      <h1 className="documentFirstHeading">MÍDIAS SOCIAIS</h1>
      <p><strong>@asefex1990_desportoexercito</strong></p>

      <p>Siga-nos nas redes sociais:</p>
      <div className="container">
        <div className="row">
          <Card title="Facebook" image="/images/facebook.png" alt="Facebook"
            route="https://www.facebook.com/asefex1990_desportoexercito-103120284947772/" />
          <Card title="Instagram" image="/images/instagram.png" alt=""
            route="https://www.instagram.com/asefex1990_desportoexercito/" />
        </div>
      </div>

      <span className="hide">Fim do conteúdo da página</span>
    </section>
  </>
}
