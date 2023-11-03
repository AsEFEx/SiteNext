import Head from "next/head";
import Tabela_adminBD from "../modules/Tabela_adminBD"

export default function admin_BD() {

  return <>
    <Head>
      <title>Área de admnistração - AsEFEx</title>
    </Head>
    <section id="content-section">
      <span className="hide">Início do conteúdo da página</span>
      <div className="span9 module module-box-01" style={{ paddingBottom: "1em", marginLeft: "0", width: "100%", minWidth: "fit-content" }}>
        <Tabela_adminBD />  
      </div>
      <span className="hide">Fim do conteúdo da página</span>
    </section>
  </>
}