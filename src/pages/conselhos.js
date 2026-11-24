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
        <li><b>Cel</b>Josué Morisson de Moraes</li>
      </ul>

      <p><strong>Membros Efetivos:</strong> </p>
      <ul className="lista">
        <li><b>Cel</b> Marco Aurélio Souto de Araújo</li>
        <li><b>Cel</b> Carlos Eduardo Ilha dos Santos</li>
        <li><b>Cel</b> Marco Aurélio Baptista</li>
        <li><b>Cel</b> Eduardo Camilo Martinez</li>
        <li><b>Cel</b> Luiz Claudio Romaguera Pontes</li>
        <li><b>Cel</b> José Carlos Pinheiro</li>
      </ul>

      <p><strong>Suplentes:</strong> </p>
      <ul className="lista">
        <li><b>Cel</b> Flavio Guedes</li>
        <li><b>Cel</b> PM Carlos Eduardo Hespanha Matt</li>
        <li><b>Cap</b> Ricardo Correa Neves</li>
      </ul>

      <h2>CONSELHO FISCAL</h2>
      <p><strong>Presidente:</strong></p>
      <ul className="lista">
        <li><b>Cel</b>  Ricardo Calixto</li>
      </ul>

      <p><strong>Membros Efetivos:</strong> </p>
      <ul className="lista">
        <li><b>Ten Cel</b>André Valentim Siqueira Rodrigues</li>
        <li><b>Sr.</b> Adilson Soares Barbosa</li>
      </ul>

      <p><strong>Suplente:</strong> </p>
      <ul className="lista">
        <li><b>1º Ten</b> Cleber das Neves Tourinho</li>
      </ul>
      <span className="hide">Fim do conteúdo da página</span>
    </section>
  </>
}
