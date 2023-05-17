import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return <>
    <Head>
      <title>Links Úteis - AsEFEx</title>
    </Head>

    <section id="content-section">
      <span className="hide">Início do conteúdo da página</span>
      <h1 className="documentFirstHeading">LINKS ÚTEIS</h1>
      <ul className="lista">
        <li>
          <Link target="_blank" title="Exército Brasileiro" href="http://www.eb.mil.br/">Exército Brasileiro</Link>
        </li>
        <li>
          <Link target="_blank" title="CCFEx" href="http://www.ccfex.eb.mil.br/">CCFEx</Link>
        </li>
        <li>
          <Link target="_blank" title="EsEFEx" href="http://www.esefex.eb.mil.br/">EsEFEx</Link>
        </li>
        <li>
          <Link target="_blank" title="IPCFEx" href="http://www.ipcfex.eb.mil.br/">IPCFEx</Link>
        </li>
        <li>
          <Link target="_blank" title="CDE" href="http://www.cde.eb.mil.br/">CDE</Link>
        </li>
      </ul>
      <span className="hide">Fim do conteúdo da página</span>
    </section>
  </>
}
