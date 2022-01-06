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

      <a class="hide" id="topo" href="#accessibility">Ir direto para menu de acessibilidade.</a>
      <noscript>
        <div class="error minor-font">
          Seu navegador de internet está sem suporte à JavaScript. Por esse motivo algumas funcionalidades do site
          podem não estar acessíveis.
        </div>
      </noscript>

      <div id="barra-brasil">
        <a href="http://brasil.gov.br"
          title="Acesse para conhecer todos os serviços e informações do Governo Brasileiro na Internet.">Portal do
          Governo Brasileiro</a>
      </div>

      <div class="layout">
        <header>
          <Header />
        </header>

        <main>
          <div class="container">
            <div class="row-fluid">
              <Menu />
              <div id="content" className="internas span9">
                <section id="content-section">
                  <span className="hide">Início do conteúdo da página</span>
                  <h1 className="documentFirstHeading">INFORMATIVO AsEFEx</h1>
                  <p>O informativo da AsEFEx tem a finalidade de manter todos atualizados sobre assuntos
                    de interesse e eventos de menor vulto relacionados à atuação de Ex-Alunos e Amigos,
                    ao CCFEx e suas Organizações Militares Diretamente Subordinadas (EsEFEx, IPCFEx e CDE)
                    e ao Sitio Histórico da Fortaleza de São João.</p>
                  <p><a href="/escreva">Faça sua proposta de material para divulgação no informativo da AsEFEx</a></p>
                  <h2>Edições de 2021</h2>
                  <div className="container">
                    <div className="row">
                      <div className="span4">
                        <div className=" card">
                          <a href="https://pt.calameo.com/read/0064353440d972455e25a?authid=7B9aI7IM9Xtj"><img src="images/inf7.jpg" />
                            <h2><strong>Nr 7</strong></h2>
                            <p>Março de 2021</p></a>
                        </div>
                      </div>
                      <div className="span4">
                        <div className=" card">
                          <a href="https://pt.calameo.com/read/0064353449390a814238a?authid=Yp3x6jRywMEz"><img src="images/inf6.jpg" />
                            <h2><strong>Nr 6</strong></h2>
                            <p>Janeiro e Fevereiro de 2021</p></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2>Edições de 2020</h2>
                  <div className="container">
                    <div className="row">
                      <div className="span4">
                        <div className=" card">
                          <a href="https://pt.calameo.com/read/006435344a40c41d3fff8?authid=26lYHD30S0hJ"><img src="images/inf5.jpg" />
                            <h2><strong>Nr 5</strong></h2>
                            <p>Novembro e Dezembro de 2020</p></a>
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
