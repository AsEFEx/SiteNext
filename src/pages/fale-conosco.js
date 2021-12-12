import React, { useState } from 'react';
import axios from 'axios';
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();


const E_mail = () => {

    const [state, setState] = useState({
        nome: undefined,
        email: undefined,
        // assunto: 'escolha',
        texto: undefined,
        envio: false,
        campos: false
    });

    const [result, setResult] = useState(null);


    const onInputChange = event => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value
        });
    }

    // const mudarAssunto = (e) => {
    //     const { value } = e.target;
    //     setState({
    //         ...state,
    //         assunto: value
    //     });
    // }

    const formSubmit = (e) => {
        e.preventDefault();

        if (state.nome != undefined && state.email != undefined && state.texto != undefined) {

            const dataToSubmit = {
                nome: state.nome,
                // assunto: state.assunto,
                email: state.email,
                texto: state.texto,
            }

            axios.post("/api/sendMail", dataToSubmit)

            resetForm();

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

    );
};

export default E_mail