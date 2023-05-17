import Head from 'next/head'

export default function Home() {
  return <>
    <Head>
      <title>Medalha Mérito Desportivo AsEFEx</title>
    </Head>

    <section id="content-section">
      <span className="hide">Início do conteúdo da página</span>
      <h1 className="documentFirstHeading">MEDALHA MÉRITO DESPORTIVO AsEFEx</h1>
      <div className="imglateral">
        <img src="images/medalha.png" />
      </div>

      <p>A Medalha Mérito Desportivo AsEFEx, é a manifestação de apreço e de gratidão
        por relevantes serviços prestados à Educação Física e ao Esporte Brasileiro e,
        será outorgada às pessoas singulares na expressão de reconhecimento. Esta Medalha
        e respectivo Diploma visa preencher uma lacuna na participação direta de feitos esportivos
        pelo pessoal do Exército Brasileiro, demais Forças Armadas, Forças Auxiliares e Civis,
        em atividades desportivas nacionais e internacionais. </p>
      <p>Excepcionalmente, a Medalha Mérito Desportivo AsEFEx é concedida a qualquer autoridade
        ou dirigente desportivo que tenha produzido relevantes serviços ao Desporto Nacional.</p>
      {/* <p><strng>As normas para a concessão da Medalha Mérito Desportivo AsEFEx podem ser acessadas
                <Link href="#">nesse link.</Link></strng></p> */}
      <span className="hide">Fim do conteúdo da página</span>
    </section>
  </>
}
