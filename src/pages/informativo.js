import Head from 'next/head'
import Link from 'next/link'
import Card from '@/components/Card'

export default function Home() {
  return <>
    <Head>
      <title>Informativos AsEFEx</title>
    </Head>

    <section id="content-section">
      <span className="hide">Início do conteúdo da página</span>

      <h1 className="documentFirstHeading">INFORMATIVO AsEFEx</h1>
      <p>O informativo da AsEFEx tem a finalidade de manter todos atualizados sobre assuntos
        de interesse e eventos de menor vulto relacionados à atuação de Ex-Alunos e Amigos,
        ao CCFEx e suas Organizações Militares Diretamente Subordinadas (EsEFEx, IPCFEx e CDE)
        e ao Sitio Histórico da Fortaleza de São João.</p>
      <p><Link style={{ color: '#0088CC' }} href="/escreva">Faça sua proposta de material para divulgação no informativo da AsEFEx</Link></p>

      <h2>Edições de 2021</h2>
      <div className="container">
        <div className="row">
          <Card title="Nr 7" image="images/inf7.jpg" description="Março de 2021"
            route="https://pt.calameo.com/read/0064353440d972455e25a?authid=7B9aI7IM9Xtj" />

          <Card title="Nr 6" image="images/inf6.jpg" description="Janeiro e Fevereiro de 2021"
            route="https://pt.calameo.com/read/0064353449390a814238a?authid=Yp3x6jRywMEz" />
        </div>
      </div>

      <h2>Edições de 2020</h2>
      <div className="container">
        <div className="row">
          <Card title="Nr 5" image="images/inf5.jpg" description="Novembro e Dezembro de 2020"
            route="https://pt.calameo.com/read/006435344a40c41d3fff8?authid=26lYHD30S0hJ" />
        </div>
      </div>

      <span className="hide">Fim do conteúdo da página</span>
    </section>
  </>
}
