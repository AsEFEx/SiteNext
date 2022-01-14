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
                  <h1 className="documentFirstHeading">Breve Histórico Sobre a Criação da AsEFEx</h1>
                  <img src="images/historico.png" />
                  <span className="caption"><em>Reprodução da Primeira Edição Histórica do AsEFEx
                    Notícias</em></span>
                  <p>
                    Nestes 30 anos de vida, nós da AsEFEx, temos a alegria e a satisfação de recordar
                    para os mais jovens ou mais modernos, a pequena, porém marcante História de Criação da
                    Nossa Associação.</p>
                  <p>O assunto da conversa era nossa Escola! Por que não se criar uma Associação de Ex-alunos?
                  </p>
                  <p>Tudo surgiu dessa simples indagação do Cel R1 Vicente Leitão da Rocha aos professores
                    Leduc e Henrique Fauth, quando num “papo”, sob a amendoeira, próximo ao marco de
                    fundação da cidade do Rio de Janeiro.</p>
                  <p>Era 25 de Fevereiro de 1990, data da passagem de comando do Cel Arthur Kramer Ribeiro ao
                    Cel Paulo Roberto Laranjeiras Caldas.</p>
                  <p>O assunto continuou, após a cerimônia, em um dos cantos do então sexagenário ginásio
                    Leite de Castro, quando, ali mesmo começaram uma rápida pesquisa com alguns
                    companheiros, passantes de fim de festa. O retorno foi entusiasmante! Nas despedidas, o
                    Vicente comprometeu-se a dar andamento aos contatos, o Leduc voltava à Brasília.</p>
                  <p>Foi marcada uma reunião com o comandante da Escola, para conhecermos a sua posição e
                    estudarmos os primeiros passos; a esta compareceram : Gen R1 Glênio, Gen R1 Acrísio, o
                    Cel R1 Osiris, Cel R1 Malta, Cel R1 Vicente, Maj PM Senna e o Cap Saraiva (RP da Escola
                    que funcionaria como oficial de ligação). Tudo ficou acertado.</p>
                  <p>Iniciaríamos a montagem do Estatuto, entre outras providências iniciais. Uma segunda
                    reunião ocorreu dias depois no auditório da EsEFEx com a participação de 20
                    companheiros, ocasião em que se decidiu realizar a Assembléia de Fundação e eleição dos
                    Conselhos e da Diretoria em 15 de Março de 1990.</p>
                  <p>Com a surpreendente presença de 122 companheiros, entre militares das forças armadas,
                    forças auxiliares e civis, de todas as épocas que cursaram a Escola, a Assembléia de
                    Fundação se desenrolou na recém criada sala Cel Ramires, na EsEFEx. Presentes,
                    personalidades de expressão que apuseram suas assinaturas no Livro de Ata e, como os
                    demais, constituíram-se em Sócios Fundadores. Presidindo a mesa o Exmo. Sr. Gen R1 José
                    Ferraz da Rocha, ex-ministro chefe do EMFA - - maior graduado presente, aluno da Escola
                    nos idos de 1940.</p>
                  <p>Na oportunidade, além da aprovação do Estatuto, foram eleitos os Conselhos e a Diretoria
                    Executiva, conforme segue:</p>
                  <h6>Conselho Deliberativo</h6>
                  <p><strong>Presidente:</strong> Gen. R1 Glênio Pinheiro;</p>
                  <p><strong>Vice-Presidente:</strong> Gen. R1 Acrísio Figueiras;</p>
                  <p><strong>Membros:</strong> Dr. Maurício Rocha, Cel R1 Helio Vieira, Cel R1 Armindo
                    Carvalho, Cel Med. R1 Rogério Baptista, 1º Ten R1 Fernando Lima;</p>
                  <p><strong>Suplente:</strong> 1º Ten Jorge Purificação(EsEFEx).</p>
                  <h6>Conselho Fiscal</h6>
                  <p><strong>Presidente: </strong>Maj PM Lindberg Senna;</p>
                  <p><strong>Membros: </strong>Ten Cel R1 Henrique Ibeas e Ten R1 Abdias Gurgel.</p>
                  <h6>Diretoria Executiva</h6>
                  <p><strong>Presidente: </strong>Cel R1 Osires Cardoso Labatut Rodrigues;</p>
                  <p><strong>Vice-Presidente: </strong>Cel R1 Wenceslau Malta;</p>
                  <p><strong>Diretor Técnico: </strong>Cel R1 Vincente de Leitão da Rocha;</p>
                  <p><strong>Dir. de Com. Social: </strong>Dr. Helio Vigio (Del. Pol.);</p>
                  <p><strong> Dir. Admnistrativo: </strong>Cel R1 João Belém.</p>
                  <p><em><strong>Assim nascia a nossa querida e tricentenária Associação, com o firme
                    propósito de UNIR SEMPRE OS “CALÇÕES PRETOS”, seja por todo o Brasil e fora dele
                    também.</strong></em> </p>
                  <p>Ainda no ano de 1990, o Presidende da AsEFEx, Coronel Osires Cardoso Labatut Rodrigues,
                    escreveu o artigo <a href="https://revistadeeducacaofisica.emnuvens.com.br/revista/article/view/2572/2748">“Surge
                      a AsEFEx - Uma Aliada Leal”</a>, deixando o registro histórico da criação da
                    Associação na <a href="https://www.revistadeeducacaofisica.com/">Revista de Educação
                      Física</a>, relevante publicação na área da Educação Física no Brasil, desde 1932.
                  </p>
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
