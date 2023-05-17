import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
// import axios from 'axios'
// SUCCESFULL ALERT POPS UP WHEN FORM IS SUBMITTED, HOWEVER IT IS NOT ACTUALLY SENT (MANY BAD PATTERNS IN THIS CODE)

export default function Home() {
  const [state, setState] = useState({
    nome: "",
    email: "",
    assunto: "Escolha uma opção....",
    texto: "",
    envio: false,
    camposWarning: false
  })

  const [result, setResult] = useState(null);

  const onInputChange = event => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    })
  }

  const mudarAssunto = (e) => {
    setState({
      ...state,
      assunto: e.target.value
    });
  }

  const formSubmit = (e) => {
    e.preventDefault()
    if (state.nome != "" && state.email != "" && state.assunto != "Escolha uma opção...." && state.texto != "") {
      const dataToSubmit = {
        nome: state.nome,
        assunto: state.assunto,
        email: state.email,
        texto: state.texto,
      }
      // axios.post("/api/sendMail", dataToSubmit)
      resetForm()
    }
    else {
      setState({
        ...state,
        camposWarning: true,
        envio: false
      })
    }
  }

  const resetForm = () => {
    setState({
      nome: "", email: "", assunto: "Escolha uma opção....", texto: "", envio: true, camposWarning: false
    })
    setTimeout(() => {
      setState({
        nome: "", email: "", assunto: "Escolha uma opção....", texto: "", envio: true, camposWarning: false, envio: false
      })
    }, 3000)
  }

  return <>
    <Head>
      <title>Fale Conosco - AsEFEx</title>
    </Head>

    <section id="content-section">
      <span className="hide">Início do conteúdo da página</span>
      <div className="module module-box-01">
        <div className="header">
          <h2 className="titulo-box"><strong>Fale Conosco</strong></h2>
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
            <label htmlFor="email">E-mail:</label>
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

          <div className="singleItem">
            <label htmlFor="assunto">Assunto:</label>
            <select name="assunto" id="assunto" className="custom-select" value={state.assunto} onChange={mudarAssunto}>
              <option>Escolha uma opção....</option>
              <option>Dúvida</option>
              <option>Pagamento</option>
              <option>Proposta de Amigo</option>
            </select>
          </div>

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
          <div className={state.camposWarning ? 'alert alert-danger' : 'noAlert2'}>
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
        <Link target="_blank" title="Facebook" href="https://www.facebook.com/asefex1990_desportoexercito-103120284947772/">
          <i className="icon-facebook-sign"><span>Facebook</span></i></Link>
      </div>
      <div className="span4 icones">
        <Link target="_blank" title="Instagram" href="https://www.instagram.com/asefex1990_desportoexercito/">
          <i className="icon-instagram"><span>Instagram</span></i></Link>
      </div>
      <span className="hide">Fim do conteúdo da página</span>
    </section>
  </>
}
