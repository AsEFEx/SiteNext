import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Header from '../components/header'
import Menu from '../components/menu'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <title>Associação dos Ex-Alunos e dos Amigos da Escola de Educação Física do Exército - Página Inicial</title>
        {/*<base href="" />*/}
        <meta name="keywords" content="" />
        <meta name="author" content="IME Júnior" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <meta name="generator" content="IME Júnior" />

        {/* manifest.json provides metadata used when your web app is installed on a
        user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/ */}

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        {/* Notice the use of %PUBLIC_URL% in the tags above.
        It will be replaced with the URL of the `public` folder during the build.
        Only files inside the `public` folder can be referenced from the HTML.

        Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
        work correctly both with client-side routing and a non-root public URL.
        Learn how to configure a non-root public URL by running `npm run build`. */}

        {/* <!--[if lt IE 9]><script src="js/html5shiv.js"></script><![endif]--> */}
        <link href="images/Logo.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" />
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" type='text/css' />
        <link rel="stylesheet" href="css/template-verde.css" type='text/css' />
        <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css" type='text/css' />
        {/* <!--[if lt IE 10]><link rel="stylesheet" href="css/ie.css" /><![endif]-->
        <!--[if lt IE 9]><link rel="stylesheet" href="css/ie8.css" /><![endif]-->
        <!--[if lt IE 8]><link rel="stylesheet" href="css/ie7.css" /><link rel="stylesheet" href="font-awesome/css/font-awesome-ie7.min.css" /><![endif]-->
        <!-- chamada de fontes local -->
        <!-- <link rel="stylesheet" href="css/fontes.css" type='text/css' />		 -->
        <!-- chamada de fontes externas --> */}
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,600,800,700' rel='stylesheet'
          type='text/css' />
        <link rel="stylesheet" href="jplayer/skin/portalpadrao01/jplayer.css" type='text/css' />
        <link rel="stylesheet" href="css/css_adicional.css" type='text/css' />
      </Head>

      <a className="hide" id="topo" href="#accessibility">Ir direto para menu de acessibilidade.</a>
      <noscript>
        <div className="error minor-font">
          Seu navegador de internet está sem suporte à JavaScript. Por esse motivo algumas funcionalidades do site
          podem não estar acessíveis.
        </div>
      </noscript>

      <div id="barra-brasil">
        <a href="http://brasil.gov.br"
          title="Acesse para conhecer todos os serviços e informações do Governo Brasileiro na Internet.">Portal do
          Governo Brasileiro</a>
      </div>

      <div className="layout">
        <header>
          <Header />
        </header>

        <main>
          <div className="container">
            <div className="row-fluid">
              <Menu />
              <div id="content" className="internas span9">
                <section id="content-section">
                  <span className="hide">Início do conteúdo da página</span>
                  <h1 className="documentFirstHeading">REVISTA AsEFEx</h1>
                  <p>A revista da AsEFEx tem a finalidade de divulgar matérias nas áreas
                    do ensino e pesquisa em capacitação física e áreas correlatas, desporto,
                    cultura e divulgação de fatos e eventos relacionados à atuação de Ex-Alunos e Amigos,
                    ao CCFEx e suas Organizações Militares Diretamente Subordinadas (EsEFEx, IPCFEx e CDE)
                    e ao Sitio Histórico da Fortaleza de São João. </p>
                  <p><a href="/escreva">Faça sua proposta de matéria para publicação na Revista da AsEFEx.</a></p>
                  <h2>Edições 2021</h2>
                  <div className="container">
                    <div className="row">
                      <div className="span4">
                        <div className=" card">
                          <a href="https://pt.calameo.com/read/006435344d3a13a215c69?authid=G7WRiQYJICNf"><img src="images/ed114.jpg" />
                            <h2><strong>Nr 114</strong></h2>
                            <p>Abril e Junho de 2021</p></a>
                        </div>
                      </div>
                      <div className="span4">
                        <div className=" card">
                          <a href="https://pt.calameo.com/read/006435344df915ae2ecbd?authid=PiQe6zOM9Ccw"><img src="images/ed113.jpg" />
                            <h2><strong>Nr 113</strong></h2>
                            <p>Dezembro de 2020</p></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2>Edições 2020</h2>
                  <div className="container">
                    <div className="row">
                      <div className="span4">
                        <div className=" card">
                          <a href="https://pt.calameo.com/read/00643534419b2d0f41807?authid=4GXev9E6EqlB"><img src="images/ed112.jpg" />
                            <h2><strong>Nr 112</strong></h2>
                            <p>Novembro e Dezembro de 2020</p></a>
                        </div>
                      </div>
                      <div className="span4">
                        <div className=" card">
                          <a href="https://pt.calameo.com/read/006435344e04bab2bf544?authid=lZcaNNaCa7AH"><img src="images/ed111.jpg" />
                            <h2><strong>Nr 111</strong></h2>
                            <p>Setembro e Outubro de 2020</p></a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="span4">
                        <div className=" card">
                          <a href="https://pt.calameo.com/read/0064353445b120d4cc41d?authid=y3M87gniA4Ak"><img src="images/ed110.jpg" />
                            <h2><strong>Nr 110</strong></h2>
                            <p>Julho e Agosto de 2020</p></a>
                        </div>
                      </div>
                      <div className="span4">
                        <div className=" card">
                          <a href="https://pt.calameo.com/read/006435344f44950abb34f?authid=y35kiMz3yHMJ"><img src="images/ed109.jpg" />
                            <h2><strong>Nr 109</strong></h2>
                            <p>Dezembro de 2019 a Junho de 2020</p></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="hide">Fim do conteúdo da página</span>
                </section>
              </div>
            </div>
          </div>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      />
      <Script src="http://barra.brasil.gov.br/barra.js?cor=verde" type="text/javascript" /><noscript>&nbsp;
      </noscript>
    </div>
  )
}
