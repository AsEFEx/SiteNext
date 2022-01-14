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

      <a Name="hide" id="topo" href="#accessibility">Ir direto para menu de acessibilidade.</a>
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
                  <h1 className="documentFirstHeading">CORONEL NOALDO: UM GUERREIRO, UM EXEMPLO</h1>

                  <div className="imglateral">
                    <img src="images/coronel-noaldo.png" />
                    <em>Coronel Noaldo</em>
                  </div>

                  <p>A AsEFEx rende uma justa homenagem ao Cel Noaldo Alves da Silva, nosso
                    antigo presidente e o que mais tempo exerceu este cargo.</p>
                  <p>Incansável no esforço de manter cada vez mais fortes os laços dos
                    associados e a tradição dos Calções Pretos, dignificou os objetivos
                    estatutários da AsEFEx com rara perseverança, o que o coloca na Galeria
                    de Honra dos Ex-alunos e dos Amigos da EsEFEx, com o merecimento a que
                    faz jus e a quem prestamos este reconhecimento. </p>
                  <p>Nascido em São José das Piranhas, Jatobá, no Estado da Paraíba, em 1º de abril
                    de 1932, foi um soldado exemplar, com uma brilhante carreira, iniciada na Escola
                    Preparatória de Cadetes de Fortaleza, Ceará, concluindo sua formação na Academia Militar
                    das Agulhas Negras, em 1954, sendo possuidor de um vasto currículo de excelentes serviços
                    prestados ao Exército e ao País.</p>
                  <p>Calção Preto Nº 3225, realizou todos os cursos de carreira das armas (Formação, Aperfeiçoamento,
                    Estado-Maior e Altos Estudos da Escola Superior de Guerra) e formou-se, também, em Engenharia Civil.</p>
                  <p>Recebeu as mais altas condecorações do Exército, da Força Aérea Brasileira e dos Estados de Pernambuco
                    e Rio de Janeiro, por relevantes serviços prestados, em diversas funções de destaque exercidas na caserna
                    e no meio civil, nos níveis municipais, estaduais e federal da administração pública.</p>
                  <p>Assumiu, pela primeira vez, o cargo de Presidente da AsEFEx em 2007. Desempenhou-o com
                    destacada dedicação nos anos de 2007 a 2010 e de 2012 a 2019, com o firme propósito de unir
                    os Calções Pretos e os Amigos da EsEFEx com alegria e sã camaradagem. Aperfeiçoou a gestão
                    da associação e manteve a nossa revista AsEFEx Notícias em elevado nível, com matérias relevantes,
                    focadas na saúde e no bem-estar, além de sempre render homenagens àqueles que se destacaram, assim
                    como ele, em sua vida esportiva. Com sua excepcional capacidade de trabalho, participou e promoveu
                    ativamente as atividades do CCFEx e das OM subordinadas, particularmente a EsEFEx, mantendo os associados
                    perfeitamente integrados ao santuário da Educação Física no Brasil, a Fortaleza de São João. Até mesmo
                    nos momentos mais difíceis e com a saúde debilitada, jamais deixou transparecer qualquer fragilidade e
                    manteve firme sua alegria contagiante em bem cumprir mais esta missão com rara resiliência, o que o
                    dignificou como um exemplo a ser seguido por todos, tornando-se uma referência na família Calção Preto. </p>
                  <p>Estas breves palavras não são suficientes para prestar todas as homenagens ao Cel Noaldo que, ao seguir
                    deste plano para cumprir sua nova e definitiva missão junto ao Senhor dos Exércitos, receberá todas as
                    honras de que é merecedor e permanecerá sempre em nossa memória como um grande líder, chefe e amigo. </p>
                  <p>Cel Noaldo, receba nossa melhor continência: “AsEFEx Sentido! Apresentar Armas!”</p>

                  <div className="imglateral">
                    <img src="images/noaldoebolsonaro.png" />
                    <em>Cel Noaldo condecorou o recém-eleito Presidente Jair Bolsonaro com a Medalha do Mérito AsEFEx, durante o Encontro dos Calções Pretos, em 2018. </em>
                  </div>

                  <p>Confira essa e outras matérias na <a href="https://pt.calameo.com/read/006435344df915ae2ecbd?authid=PiQe6zOM9Ccw">Revista no 113 da AsEFEx</a></p>

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
