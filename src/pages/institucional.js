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
              <div>
                <div id="content" className="internas span9">
                  <section id="content-section">
                    <span className="hide">Início do conteúdo da página</span>
                    <h1 className="documentFirstHeading">
                      O QUE É AsEFEx?
                    </h1>
                    <div className="description">
                      ASSOCIAÇÃO DOS EX-ALUNOS E DOS AMIGOS DA ESCOLA DE EDUCAÇÃO FÍSICA DO EXÉRCITO – AsEFEx
                    </div>
                    <p>
                      Fundada em 15 de março de 1990, a AsEFEx é uma associação civil de fins não econômicos, de natureza cultural, educacional e filantrópica, regida por Estatuto e pela legislação pertinente, em vigor, tendo por objeto social o estudo, a pesquisa, a difusão, o apoio e o incentivo à Educação Física, ao Desporto, ao Lazer e ao Patrimônio Histórico, Artístico e Cultural.
                    </p>
                    <p>
                      Sua sede fica na Fortaleza de São João, no bairro das Urca, no Rio de Janeiro, em dependências sob cessão do Centro de Capacitação Física do Exército Brasileiro.
                    </p>
                    <h2>Objetivos </h2>
                    <dl>
                      <dd> I - solidificar e manter laços de sã camaradagem entre seus integrantes; </dd>
                      <dd> II - Manter, permanentemente, ligações com o CENTRO DE CAPACITAÇÃO FÍSICA DO EXÉRCITO (CCFEx) e com suas Organizações Militares Subordinadas, apoiando as iniciativas e atividades que os seus Comandantes julgarem convenientes;  </dd>
                      <dd> III - incentivar o gosto pela prática da atividade física, que tenha como metas a saúde e o bem-estar do ser humano; </dd>
                      <dd> IV - estimular a pesquisa científica e o intercâmbio de informações; </dd>
                      <dd> V - organizar eventos, competições, clínicas, seminários, estágios e conferências;&nbsp;</dd>
                      <dd> VI - elaborar, desenvolver e gerenciar projetos nos campos da Educação Física, dos Desportos, da Medicina Desportiva, do Lazer e do Patrimônio Histórico, Artístico e Cultural. </dd>
                      <dd> VII - Promover atividades esportivas, recreativas e sociais.</dd>
                    </dl>
                    <h2>Visão de Futuro </h2>
                    <p>Ser a melhor Associação de Ex-Alunos do Brasil, prestando apoio com excelência de gestão e atingindo o reconhecimento da sociedade.
                    </p>
                    <h2>Valores </h2>
                    <ul>
                      <li> Busca pela excelência </li>
                      <li> Ética profissional </li>
                      <li> Valorização das pessoas </li>
                      <li> Inovação e aperfeiçoamento contínuo </li>
                      <li> Transparência </li>
                    </ul>
                  </section></div>
                {/* fim .row-fluid */}
                <span className="hide">Fim do conteúdo da página</span>
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
