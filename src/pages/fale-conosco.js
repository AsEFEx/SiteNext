import { useState } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Header from '../components/header'
import Menu from '../components/menu'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home() {
  const [state, setState] = useState({
    nome: undefined,
    email: undefined,
    // assunto: 'escolha',
    texto: undefined,
    envio: false,
    campos: false
  })

  const [result, setResult] = useState(null);

  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    })
  }

  // const mudarAssunto = (e) => {
  //     const { value } = e.target;
  //     setState({
  //         ...state,
  //         assunto: value
  //     });
  // }

  const formSubmit = (e) => {
    e.preventDefault()

    if (state.nome != undefined && state.email != undefined && state.texto != undefined) {
      const dataToSubmit = {
        nome: state.nome,
        // assunto: state.assunto,
        email: state.email,
        texto: state.texto,
      }

      axios.post("/api/sendMail", dataToSubmit)

      resetForm()

    }
    else {

      setState({
        campos: true,
        nome: state.nome,
        // assunto: state.assunto,
        email: state.email,
        texto: state.texto,
        envio: false
      })

    }
  }

  const resetForm = () => {
    setState({
      nome: '',
      email: '',
      // assunto: 'escolha',
      texto: '',
      envio: true,
      campos: false
    })
    setTimeout(() => {
      setState({
        envio: false,
        nome: undefined,
        email: undefined,
        texto: undefined
      })
    }, 3000)
  }

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
                <div className="span9 module module-box-01">
                  <div className="header">
                    <h1 className="titulo-box"><strong>Fale Conosco</strong></h1>
                    <p><strong>Envie uma mensagem e receba a resposta por e-mail:</strong></p>
                  </div>
                  <form>
                    <div className="singleItem">
                      <label htmlFor="nome">Nome Completo:</label>
                      <input
                        type="text"
                        name="nome"
                        id="nome"
                        className="nome"
                        placeholder="Escreva seu Nome Completo..."
                        value={state.nome}
                        onChange={onInputChange}
                      />
                    </div>

                    <div className="singleItem">
                      <label htmlFor="email">e-mail:</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="email"
                        placeholder="Escreva seu e-mail..."
                        value={state.email}
                        onChange={onInputChange}
                      />
                    </div>

                    {/* <div className="singleItem">
                        <label htmlFor="assunto">Assunto:</label>
                        <select name="assunto" id="assunto" class="custom-select" defaultValue="escolha" onChange={mudarAssunto}>
                            <option selected value="escolha">Escolha uma opção....</option>
                            <option value="Dúvida">Dúvida</option>
                            <option value="Pagamento">Pagamento</option>
                            <option value="Proposta de Amigo">Proposta de Amigo</option>
                        </select>
                    </div> */}

                    <div className="textArea singleItem">
                      <label htmlFor="texto">Texto:</label>
                      <textarea
                        name="texto"
                        id="texto"
                        rows="5"
                        className="texto"
                        placeholder="Escreva o seu texto..."
                        value={state.texto}
                        onChange={onInputChange}
                      ></textarea>
                    </div>
                    <div className={state.envio ? 'alert alert-success' : 'noAlert1'}>
                      <strong>Mensagem Enviada</strong>
                    </div>
                    <div className={state.campos ? 'alert alert-danger' : 'noAlert2'}>
                      <strong>Todos os campos devem ser preenchidos!</strong>
                    </div>
                    <div>
                      <button variant="primary" className="btn-default" onClick={formSubmit}>Enviar</button>
                    </div>
                  </form>
                </div>
                <div className="internas span9 box">
                  <p><strong>Também nos siga nas redes sociais:</strong></p>
                </div>

                <div className="span4 icones">
                  <a title="Facebook" href="https://www.facebook.com/asefex1990_desportoexercito-103120284947772/">
                    <i className="icon-facebook-sign"><span>Facebook</span></i></a>
                </div>
                <div className="span4 icones">
                  <a title="Instagram" href="https://www.instagram.com/asefex1990_desportoexercito/">
                    <i className="icon-instagram"><span>Instagram</span></i></a>
                </div>

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
