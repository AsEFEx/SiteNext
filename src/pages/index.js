import Head from 'next/head'
import Link from 'next/link'
import Carousel from '@/modules/carousel'


export default function Home() {
  return <>
    <Head>
      <title>AsEFEx</title>
    </Head>

    <section id="content-section">
      <span className="hide">Início do conteúdo da página</span>

      <div className="row-fluid module">
        <div className="outstanding-header">
          <h2 className="outstanding-title">Principais Notícias</h2>
        </div>
        <div className="module module-box-01 module-box-01-top-adjust">
          <div className="gallery-pane"> <Carousel /> </div>
        </div>
      </div>


      <div className="row-fluid">
        <div className="span4 module variacao-module-01">
          <div className="outstanding-header">
            <h2 className="outstanding-title">Homenagem</h2>
          </div>
          <Link href="../homenagem" className="img-rounded"><img src="images/noticia1.jpg" alt="Homenagem" /></Link>
          <h2><Link href="/homenagem"><strong>Cel Noaldo: um Guerreiro, um Exemplo</strong></Link></h2>
          <p>A AsEFEx rende uma justa homenagem ao Cel Noaldo Alves da Silva</p>
        </div>

        <div className="span4 module variacao-module-02">
          <div className="outstanding-header">
            <h2 className="outstanding-title">EsEFEx</h2>
          </div>
          <Link target="_blank" href="http://www.esefex.eb.mil.br/complementacao-academica" className="img-rounded"><img src="images/noticia2.png" alt="EsEFEx" /></Link>
          <h2><Link target="_blank" href="http://www.esefex.eb.mil.br/complementacao-academica"><strong>Complementação Acadêmica</strong></Link></h2>
          <p>Confira as principais atividades que serão desenvolvidas.</p>
        </div>

        <div className="span4 module variacao-module-03">
          <div className="outstanding-header">
            <h2 className="outstanding-title">CCFEx</h2>
          </div>
          <Link target="_blank" href="http://www.ccfex.eb.mil.br/ultimas-noticias/917-aniversario-de-402-anos-da-fortaleza-de-sao-joao-24-jun-1618" className="img-rounded"><img src="images/noticia3.png" alt="CCFEx" /></Link>
          <h2><Link target="_blank" href="http://www.ccfex.eb.mil.br/ultimas-noticias/917-aniversario-de-402-anos-da-fortaleza-de-sao-joao-24-jun-1618"><strong>Aniversário de 402 anos da Fortaleza de São João</strong></Link></h2>
          <p>Saiba um pouco mais sobre esse pedaço da história nacional.</p>
        </div>
      </div>


      <div className="row-fluid">
        <div className="span6 module variacao-module-03">
          <div className="outstanding-header">
            <h2 className="outstanding-title">100 Anos EsEFEx</h2>
          </div>
          <Link target="_blank" href="http://www.esefex.eb.mil.br/centario-itemmenu"><img src="images/100EsEFEx.png" alt="100 anos EsEFEx" style={{ maxWidth: 345, maxHeight: 204, height: 'auto', width: 'auto' }} /></Link>
          <h2><Link target="_blank" href="http://www.esefex.eb.mil.br/centario-itemmenu"><strong>Centenário da EsEFEx</strong></Link></h2>
          <p>Confira o conteúdo comemorativo do centenário!</p>
        </div>

        <div className="span6 module variacao-module-01">
          <div className="outstanding-header">
            <h2 className="outstanding-title">Seja um Associado da AsEFEx</h2>
          </div>
          <Link href="/seja-associado"><img src="images/associar.png" alt="Associe-se" style={{ maxWidth: 345, maxHeight: 204, height: 'auto', width: 'auto' }} /></Link>
          <h2><Link href="/seja-associado"><strong>Associe-se</strong></Link></h2>
          <p>Preenchimento da ficha de inscrição.</p>
        </div>
      </div>


      <div className="row-fluid">
        <div className="span6 module">
          <div className="outstanding-header">
            <h2 className="outstanding-title">Mídias sociais AsEFEx</h2>
          </div>
          <Link href="/midias-sociais"><img src="images/midias-sociais.png" alt="Mídias Sociais" style={{ maxWidth: 345, maxHeight: 204, height: 'auto', width: 'auto' }} /></Link>
          <h2><Link href="/midias-sociais"><strong>A AsEFEx nas Redes Sociais</strong></Link></h2>
          <p>Siga nossas mídias sociais!</p>
        </div>

        <div className="span6 module variacao-module-02">
          <div className="outstanding-header">
            <h2 className="outstanding-title">Inauguração</h2>
          </div>
          <Link target="_blank" href="https://www.youtube.com/watch?v=-pSSHYJCgSc&ab_channel=CCFExCCFEx"><img src="images/youtubeccfex.png" alt="Canal CCFEx" style={{ maxWidth: 345, maxHeight: 204, height: 'auto', width: 'auto' }} /></Link>
          <h2><Link target="_blank" href="https://www.youtube.com/watch?v=-pSSHYJCgSc&ab_channel=CCFExCCFEx"><strong>Inauguração do Museu do Desporto do Exército</strong></Link></h2>
          <p>Se inscreva no canal!</p>
        </div>
      </div>


      <div className="row-fluid module">
        <div className="outstanding-header">
          <h2 className="outstanding-title">Acesse as páginas do CCFEx e suas Organizações Militares Diretamente Subordinadas</h2>
        </div>
        <div className="span3 logos">
          <Link target="_blank" href="http://www.ccfex.eb.mil.br/"><img src="images/ccfex.png" alt="CCFEx" /></Link>
          <Link target="_blank" href="http://www.ccfex.eb.mil.br/"><h3>CCFEx</h3></Link>
        </div>
        <div className="span2 logos">
          <Link target="_blank" href="http://www.esefex.eb.mil.br/"><img src="images/esefex.png" alt="EsEFEx" /></Link>
          <Link target="_blank" href="http://www.esefex.eb.mil.br/"><h3>EsEFEx</h3></Link>
        </div>
        <div className="span3 logos">
          <Link target="_blank" href="http://www.ipcfex.eb.mil.br/"><img src="images/ipcfex.png" alt="IPCFEx" /></Link>
          <Link target="_blank" href="http://www.ipcfex.eb.mil.br/"><h3>IPCFEx</h3></Link>
        </div>
        <div className="span2 logos">
          <Link target="_blank" href="http://www.cde.eb.mil.br/"><img src="images/cde.png" alt="CDE" /></Link>
          <Link target="_blank" href="http://www.cde.eb.mil.br/"><h3>CDE</h3></Link>
        </div>
      </div>

      <span className="hide">Fim do conteúdo da página</span>
    </section>
  </>
}
