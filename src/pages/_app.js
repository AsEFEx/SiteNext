import '../styles/globals.css'
import '../styles/carousel.css'
import Footer from '@/modules/footer'
import Header from '@/modules/header'
import Menu from '@/modules/Menu'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="keywords" content="" />
      <meta name="author" content="IME Júnior" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="" />
      <meta name="generator" content="IME Júnior" />
    </Head>

    <div className="layout">
      <a className="hide" id="topo" href="#accessibility">Ir direto para menu de acessibilidade.</a>
      <noscript>
        <div className="error minor-font">
          Seu navegador de internet está sem suporte à JavaScript. Por esse motivo algumas funcionalidades do site
          podem não estar acessíveis.
        </div>
      </noscript>

      <Header />

      <main><div className="container"><div className="row-fluid">
        <Menu />
        <div id="content" className="internas span9">
          <Component {...pageProps} />
        </div>
      </div></div></main>

      <Footer />

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      />
      <script src="js/jquery.min.js" type="text/javascript" async/>
      <Script src="/js/template.js" type="text/javascript" />
      <Script src="js/jquery-noconflict.js" type="text/javascript" />
      <Script src="http://barra.brasil.gov.br/barra.js?cor=verde" type="text/javascript" />
    </div>
  </>
}

export default MyApp
