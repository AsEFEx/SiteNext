
// import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'

// function Filtro() {

//     const history = useHistory();

//     const [state, setState] = useState({
//         decada: "escolha",
//         ano: "escolha",
//         dados: true,
//         preenchimento: true
//     });

//     const anoSelecionado = () => {
//         if ((state.ano == "escolha") || (state.decada == "escolha")) {
//             setState({
//                 decada: state.ano,
//                 ano: state.ano,
//                 dados: true,
//                 preenchimento: false
//             });
//         }
//         else {
//             switch (state.decada) {
//                 case "1920":
//                     switch (state.ano) {
//                         case "0":
//                             setState({
//                                 decada: state.ano,
//                                 ano: state.ano,
//                                 dados: false,
//                                 preenchimento: true
//                             });
//                             break;

//                         case "1":
//                             setState({
//                                 decada: state.ano,
//                                 ano: state.ano,
//                                 dados: false,
//                                 preenchimento: true
//                             });
//                             break;

//                         case "2":
//                             setState({
//                                 decada: state.ano,
//                                 ano: state.ano,
//                                 dados: false,
//                                 preenchimento: true
//                             });
//                             break;

//                         case "3":
//                             setState({
//                                 decada: state.ano,
//                                 ano: state.ano,
//                                 dados: false,
//                                 preenchimento: true
//                             });
//                             break;

//                         case "4":
//                             setState({
//                                 decada: state.ano,
//                                 ano: state.ano,
//                                 dados: false,
//                                 preenchimento: true
//                             });
//                             break;

//                         case "5":
//                             setState({
//                                 decada: state.ano,
//                                 ano: state.ano,
//                                 dados: false,
//                                 preenchimento: true
//                             });
//                             break;

//                         case "6":
//                             setState({
//                                 decada: state.ano,
//                                 ano: state.ano,
//                                 dados: false,
//                                 preenchimento: true
//                             });
//                             break;

//                         case "7":
//                             setState({
//                                 decada: state.ano,
//                                 ano: state.ano,
//                                 dados: false,
//                                 preenchimento: true
//                             });
//                             break;

//                         case "8":
//                             setState({
//                                 decada: state.ano,
//                                 ano: state.ano,
//                                 dados: false,
//                                 preenchimento: true
//                             });
//                             break;

//                         case "9":
//                             history.push("/1929");
//                             break;

//                         default:

//                             break;
//                     }

//                     break;

//                 case "1930":
//                     switch (state.ano) {
//                         case "0":
//                             history.push("/1930");
//                             break;

//                         case "1":
//                             history.push("/1931");
//                             break;

//                         case "2":
//                             history.push("/1932");
//                             break;

//                         case "3":
//                             history.push("/1933");
//                             break;

//                         case "4":
//                             history.push("/1934");
//                             break;

//                         case "5":
//                             history.push("/1935");
//                             break;

//                         case "6":
//                             history.push("/1936");
//                             break;

//                         case "7":
//                             history.push("/1937");
//                             break;

//                         case "8":
//                             history.push("/1938");
//                             break;

//                         case "9":
//                             history.push("/1939");
//                             break;

//                         default:

//                             break;
//                     }

//                     break;

//                 case "1940":
//                     switch (state.ano) {
//                         case "0":
//                             history.push("/1940");
//                             break;

//                         case "1":
//                             history.push("/1941");
//                             break;

//                         case "2":
//                             history.push("/1942");
//                             break;

//                         case "3":
//                             history.push("/1943");
//                             break;

//                         case "4":
//                             history.push("/1944");
//                             break;

//                         case "5":
//                             history.push("/1945");
//                             break;

//                         case "6":
//                             history.push("/1946");
//                             break;

//                         case "7":
//                             history.push("/1947");
//                             break;

//                         case "8":
//                             history.push("/1948");
//                             break;

//                         case "9":
//                             history.push("/1949");
//                             break;

//                         default:

//                             break;
//                     }

//                     break;

//                 case "1950":
//                     switch (state.ano) {
//                         case "0":
//                             history.push("/1950");
//                             break;

//                         case "1":
//                             history.push("/1951");
//                             break;

//                         case "2":
//                             history.push("/1952");
//                             break;

//                         case "3":
//                             history.push("/1953");
//                             break;

//                         case "4":
//                             history.push("/1954");
//                             break;

//                         case "5":
//                             history.push("/1955");
//                             break;

//                         case "6":
//                             history.push("/1956");
//                             break;

//                         case "7":
//                             history.push("/1957");
//                             break;

//                         case "8":
//                             history.push("/1958");
//                             break;

//                         case "9":
//                             history.push("/1959");
//                             break;

//                         default:

//                             break;
//                     }

//                     break;

//                 case "1960":
//                     switch (state.ano) {
//                         case "0":
//                             history.push("/1960");
//                             break;

//                         case "1":
//                             history.push("/1961");
//                             break;

//                         case "2":
//                             history.push("/1962");
//                             break;

//                         case "3":
//                             history.push("/1963");
//                             break;

//                         case "4":
//                             history.push("/1964");
//                             break;

//                         case "5":
//                             history.push("/1965");
//                             break;

//                         case "6":
//                             history.push("/1966");
//                             break;

//                         case "7":
//                             history.push("/1967");
//                             break;

//                         case "8":
//                             history.push("/1968");
//                             break;

//                         case "9":
//                             history.push("/1969");
//                             break;

//                         default:

//                             break;
//                     }

//                     break;

//                 case "1970":
//                     switch (state.ano) {
//                         case "0":
//                             history.push("/1970");
//                             break;

//                         case "1":
//                             history.push("/1971");
//                             break;

//                         case "2":
//                             history.push("/1972");
//                             break;

//                         case "3":
//                             history.push("/1973");
//                             break;

//                         case "4":
//                             history.push("/1974");
//                             break;

//                         case "5":
//                             history.push("/1975");
//                             break;

//                         case "6":
//                             history.push("/1976");
//                             break;

//                         case "7":
//                             history.push("/1977");
//                             break;

//                         case "8":
//                             history.push("/1978");
//                             break;

//                         case "9":
//                             history.push("/1979");
//                             break;

//                         default:

//                             break;
//                     }

//                     break;

//                 case "1980":
//                     switch (state.ano) {
//                         case "0":
//                             history.push("/1980");
//                             break;

//                         case "1":
//                             history.push("/1981");
//                             break;

//                         case "2":
//                             history.push("/1982");
//                             break;

//                         case "3":
//                             history.push("/1983");
//                             break;

//                         case "4":
//                             history.push("/1984");
//                             break;

//                         case "5":
//                             history.push("/1985");
//                             break;

//                         case "6":
//                             history.push("/1986");
//                             break;

//                         case "7":
//                             history.push("/1987");
//                             break;

//                         case "8":
//                             history.push("/1988");
//                             break;

//                         case "9":
//                             history.push("/1989");
//                             break;

//                         default:

//                             break;
//                     }

//                     break;

//                 case "1990":
//                     switch (state.ano) {
//                         case "0":
//                             history.push("/1990");
//                             break;

//                         case "1":
//                             history.push("/1991");
//                             break;

//                         case "2":
//                             history.push("/1992");
//                             break;

//                         case "3":
//                             history.push("/1993");
//                             break;

//                         case "4":
//                             history.push("/1994");
//                             break;

//                         case "5":
//                             history.push("/1995");
//                             break;

//                         case "6":
//                             history.push("/1996");
//                             break;

//                         case "7":
//                             history.push("/1997");
//                             break;

//                         case "8":
//                             history.push("/1998");
//                             break;

//                         case "9":
//                             history.push("/1999");
//                             break;

//                         default:
//                             break;
//                     }

//                     break;

//                 case "2000":
//                     switch (state.ano) {
//                         case "0":
//                             history.push("/2000");
//                             break;

//                         case "1":
//                             history.push("/2001");
//                             break;

//                         case "2":
//                             history.push("/2002");
//                             break;

//                         case "3":
//                             history.push("/2003");
//                             break;

//                         case "4":
//                             history.push("/2004");
//                             break;

//                         case "5":
//                             history.push("/2005");
//                             break;

//                         case "6":
//                             history.push("/2006");
//                             break;

//                         case "7":
//                             history.push("/2007");
//                             break;

//                         case "8":
//                             history.push("/2008");
//                             break;

//                         case "9":
//                             history.push("/2009");
//                             break;

//                         default:
//                             break;
//                     }

//                     break;

//                 case "2010":
//                     switch (state.ano) {
//                         case "0":
//                             history.push("/2010");
//                             break;

//                         case "1":
//                             history.push("/2011");
//                             break;

//                         case "2":
//                             history.push("/2012");
//                             break;

//                         case "3":
//                             history.push("/2013");
//                             break;

//                         case "4":
//                             history.push("/2014");
//                             break;

//                         case "5":
//                             history.push("/2015");
//                             break;

//                         case "6":
//                             history.push("/2016");
//                             break;

//                         case "7":
//                             history.push("/2017");
//                             break;

//                         case "8":
//                             history.push("/2018");
//                             break;

//                         case "9":
//                             history.push("/2019");
//                             break;

//                         default:
//                             break;
//                     }

//                     break;

//                 case "2020":
//                     switch (state.ano) {
//                         case "0":
//                             setState({
//                                 decada: state.ano,
//                                 ano: state.ano,
//                                 dados: false,
//                                 preenchimento: true
//                             });
//                             break;

//                         case "1":
//                             setState({
//                                 decada: state.ano,
//                                 ano: state.ano,
//                                 dados: false,
//                                 preenchimento: true
//                             });
//                             break;

//                         case "2":
//                             setState({
//                                 decada: state.ano,
//                                 ano: state.ano,
//                                 dados: false,
//                                 preenchimento: true
//                             });
//                             break;

//                         case "3":
//                             setState({
//                                 decada: state.ano,
//                                 ano: state.ano,
//                                 dados: false,
//                                 preenchimento: true
//                             });
//                             break;

//                         case "4":
//                             setState({
//                                 decada: state.ano,
//                                 ano: state.ano,
//                                 dados: false,
//                                 preenchimento: true
//                             });
//                             break;

//                         case "5":
//                             setState({
//                                 decada: state.ano,
//                                 ano: state.ano,
//                                 dados: false,
//                                 preenchimento: true
//                             });
//                             break;

//                         case "6":
//                             setState({
//                                 decada: state.ano,
//                                 ano: state.ano,
//                                 dados: false,
//                                 preenchimento: true
//                             });
//                             break;

//                         case "7":
//                             setState({
//                                 decada: state.ano,
//                                 ano: state.ano,
//                                 dados: false,
//                                 preenchimento: true
//                             });
//                             break;

//                         case "8":
//                             setState({
//                                 decada: state.ano,
//                                 ano: state.ano,
//                                 dados: false,
//                                 preenchimento: true
//                             });
//                             break;

//                         case "9":
//                             setState({
//                                 decada: state.ano,
//                                 ano: state.ano,
//                                 dados: false,
//                                 preenchimento: true
//                             });
//                             break;

//                         default:
//                             break;
//                     }

//                     break;

//                 default:

//                     break;
//             }
//         }
//     }

//     const mudarDecada = (e) => {
//         const { value } = e.target;
//         setState({
//             ...state,
//             decada: value
//         });
//     }

//     const mudarAno = (e) => {
//         const { value } = e.target;
//         setState({
//             ...state,
//             ano: value
//         });
//     }

//     return (
//         <div className="container">
//             <div className="row-fluid">
//                 <div className="span9 module module-box-01">
//                     <div className="header">
//                         <h2 className="titulo-box"><strong>Filtro</strong></h2>
//                     </div>
//                     <form>
//                         <div className="form-group span5">
//                             <label htmlFor="decada">Década:</label>
//                             <select className="form-control" id="decada" onChange={mudarDecada}>
//                                 <option selected value="escolha">Escolha uma década....</option>
//                                 <option value="1920">1920</option>
//                                 <option value="1930">1930</option>
//                                 <option value="1940">1940</option>
//                                 <option value="1950">1950</option>
//                                 <option value="1960">1960</option>
//                                 <option value="1970">1970</option>
//                                 <option value="1980">1980</option>
//                                 <option value="1990">1990</option>
//                                 <option value="2000">2000</option>
//                                 <option value="2010">2010</option>
//                                 <option value="2020">2020</option>
//                             </select>
//                         </div>
//                         <div className="form-group span5">
//                             <label htmlFor="ano">Ano:</label>
//                             <select className="form-control" id="ano" onChange={mudarAno}>
//                                 <option selected value="escolha">Escolha um ano....</option>
//                                 <option value="0">0</option>
//                                 <option value="1">1</option>
//                                 <option value="2">2</option>
//                                 <option value="3">3</option>
//                                 <option value="4">4</option>
//                                 <option value="5">5</option>
//                                 <option value="6">6</option>
//                                 <option value="7">7</option>
//                                 <option value="8">8</option>
//                                 <option value="9">9</option>
//                             </select>
//                         </div>
//                         <div className="span2">
//                             <button variant="primary" className="btn-default" onClick={anoSelecionado}>Buscar</button>
//                         </div>
//                     </form>
//                 </div>
//                 <div className="span9">
//                     <div className={state.dados ? 'noAlert1' : 'alert alert-danger'}>
//                         <strong>Esse ano não consta na galeria</strong>
//                     </div>
//                     <div className={state.preenchimento ? 'noAlert2' : 'alert alert-danger'}>
//                         <strong>Todos os campos devem ser preenchidos!</strong>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Filtro