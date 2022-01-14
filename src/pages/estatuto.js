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

                  <h1>Estatuto</h1>
                  <h3>Capítulo I- Da Associação e Suas Finalidades</h3>
                  <p>&nbsp; Art. 1º - A ASSOCIAÇÃO DOS EX – ALUNOS E DOS AMIGOS DA ESCOLA DE EDUCAÇÃO
                    FÍSICA DO EXÉRCITO, fundada aos quinze dias do mês de março de 1990, associação
                    civil sem fins lucrativos, de natureza cultural, educacional e filantrópica,
                    comprometida a observar os princípios da legalidade, impessoalidade, moralidade,
                    publicidade e eficiência, previstos no Art. 37 da Constituição Federal, regida pelo
                    presente Estatuto e pela legislação pertinente, em vigor, destina-se: ao estudo, à
                    pesquisa, à difusão, ao apoio e ao incentivo à Educação Física, ao Desporto, ao
                    Lazer e ao Patrimônio Histórico, Artístico e Cultural.</p>
                  <p>&nbsp; Art. 2º - A Associação, de duração ilimitada, tem sede e foro na cidade do RIO
                    DE JANEIRO e seu atual endereço em dependências cedidas pela DIRETORIA DE PESQUISA E
                    ESTUDOS DE PESSOAL (DPEP) – na FORTALEZA DE SÃO JOÃO – URCA, CEP 22291 – 120, RIO DE
                    JANEIRO.</p>
                  <p>&nbsp; Art.3º - A Associação poderá criar sub-sedes nos Estados, designar
                    Representantes em cidades, ou Delegados, onde e quando for julgado conveniente, a
                    critério da Diretoria Executiva e mediante aprovação da Assembléia Geral.</p>
                  <p>&nbsp; Art. 4º - A Associação tem personalidade jurídica distinta das pessoas que a
                    compõem, não respondendo pelas obrigações por elas contraídas, e vice-versa.</p>
                  <p>&nbsp; Art. 5º - Para efeitos internos e atos não oficiais o nome da Associação será
                    abreviado para AsEFEx.</p>
                  <p>&nbsp; Art. 6º - A AsEFEx tem por objetivos:</p>
                  <p>&nbsp; I - Solidificar e manter laços de sã camaradagem entre seus integrantes;</p>
                  <p>&nbsp; II - Manter, permanentemente, ligações com o DIRETORIA DE PESQUISA E ESTUDOS DE
                    PESSOAL (DPEP) - antigo CENTRO DE CAPACITAÇÃO FÍSICA DO EXÉRCITO (CCFEx) - e com a
                    ESCOLA DE EDUCAÇÃO FÍSICA DO EXÉRCITO, apoiando as iniciativas e atividades que os
                    seus Comandantes julgarem convenientes;</p>
                  <p>&nbsp; III - Incentivar o gosto pela prática da atividade física, que tenha como metas
                    a saúde e o bem-estar do ser humano;</p>
                  <p>&nbsp; IV - Estimular a pesquisa científica e o intercâmbio de informações;</p>
                  <p>&nbsp; V - Organizar eventos, congressos, convenções, competições, clínicas,
                    seminários, simpósios, estágios e conferências;</p>
                  <p>&nbsp; VI – Elaborar, desenvolver e gerenciar projetos nos campos da Educação Física,
                    dos Desportos, da Medicina Esportiva, do Lazer e do Patrimônio Histórico, Artístico
                    e Cultural.</p>
                  <p>&nbsp; VII – Promover atividades esportivas, recreativas e sociais.</p>
                  <p><em>Para ler o restante do estatuto, clique <a href="documentos/estatuto.pdf">aqui</a>.</em></p>
                  <h1>Regimento Interno</h1>
                  <h3>Capítulo-I Da Finalidade, do Objetivo, do Foro, da Obediência</h3>
                  <h4>Secão I- Da Finalidade</h4>
                  <p>&nbsp; Art. 1° - O presente Regimento Interno (R.I.) da AsEFEx, tem por finalidade
                    regulamentar e disciplinar o seu funcionamento, bem como o desempenho das funções de
                    seus componentes. </p>
                  <p>&nbsp; Art. 2° - Fundada em 15 de março de 1990, como associação civil sem fins
                    lucrativos, é regida por seu Estatuto aprovado em Assembléia de 1994 e com
                    atualizações em AGE de 15 de março de 2002 e, com última atualização em Assembléia
                    Geral Extraordinária, de 24 de março de 2009, estando este em vigor. </p>
                  <p>&nbsp; Art. 3° - Considerando-se que a AsEFEx poderá criar sub-sedes em outros Estados
                    Brasileiros, designar Representantes ou Delegados em cidades ou onde e quando for
                    conveniente, estas deverão ser regidas pelo mesmo conteúdo do Estatuto da AsEFEx ,
                    do presente R.I. e de normas baixadas de acordo com o Estatuto em vigor.</p>
                  <p>&nbsp; Art. 4° - Tendo personalidade jurídica distinta dos componentes da AsEFEx,
                    estas pessoas não responderão, ordinária ou subsidiariamente pelas obrigações
                    contraídas por esta Associação; respondendo contudo, pessoalmente, pelos danos ou
                    prejuízos a que derem causa. </p>
                  <p>&nbsp; Art. 5° - Para efeitos internos e atos não oficiais, o nome da Associação será
                    abreviado pela sigla AsEFEx. </p>
                  <p>&nbsp; Art. 6° - Por ser uma entidade de incentivo ao Desporto e ao Esporte, que tenha
                    como meta a saúde e o bem estar do ser humano, serão aceitos em seus quadros de
                    associados, todos e quaisquer praticantes de qualquer religião, credo político e
                    preferência de clubes. Não havendo qualquer tipo de discriminação de religião, raça,
                    credo político ou desportivo. </p>
                  <p><em>Para conferir o restante do regimento interno clique <a href="documentos/regimento-interno.pdf">aqui</a>.</em></p>
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
