import Head from 'next/head'

export default function Home() {
  return <>
    <Head>
      <title>Conselheiros - AsEFEx</title>
    </Head>

    <section id="content-section">
      <span className="hide">Início do conteúdo da página</span>
      <h1 className="documentFirstHeading">CONSELHEIROS AsEFEx</h1>
      <h2>CONSELHO DELIBERATIVO</h2>

      <p><strong>Presidente:</strong></p>
      <ul className="lista">
        <li><b>Cel</b> Rogerio Rodrigues Dias</li>
      </ul>

      <p><strong>Membros Efetivos:</strong> </p>
      <ul className="lista">
        <li><b>Cel</b> Paulo Roberto de Miranda Barros</li>
        <li><b>Cel</b> Jorge Luiz Soares Ribeiro</li>
        <li><b>Cel</b> Marco Aurelio Souto de Araújo</li>
        <li><b>Cel</b> Carlos Eduardo Ilha dos Santos</li>
        <li><b>Cel</b> Luiz Fernando Medeiros Nóbrega</li>
        <li><b>Cel</b> Alexandre Tempesta Lincoln</li>
      </ul>

      <p><strong>Suplentes:</strong> </p>
      <ul className="lista">
        <li><b>Cel</b> Marco Aurélio Baptista</li>
        <li><b>Cel</b> PM Carlos Eduardo Hespanha Matt</li>
      </ul>

      <h2>CONSELHO FISCAL</h2>
      <p><strong>Presidente:</strong></p>
      <ul className="lista">
        <li><b>Cel</b>  Alberto César Álvares Fernandes</li>
      </ul>

      <p><strong>Membros Efetivos:</strong> </p>
      <ul className="lista">
        <li><b>Ten</b> Vicente Pawelec</li>
        <li><b>Sr.</b> Adilson Soares Barbosa</li>
      </ul>

      <p><strong>Suplentes:</strong> </p>
      <ul className="lista">
        <li><b>Sr.</b> Francisco Henrique Fauth</li>
      </ul>
      <span className="hide">Fim do conteúdo da página</span>
    </section>
  </>
}
