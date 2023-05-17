import Head from 'next/head'
import Card from '@/components/Card'

export default function Home() {
  return <>
    <Head>
      <title>Diretoria Executiva - AsEFEx</title>
    </Head>

    <section id="content-section">
      <span className="hide">Início do conteúdo da página</span>
      <h1 className="documentFirstHeading">DIRETORIA EXECUTIVA</h1>
      <div className="container">

        <div className="row">
          <Card title="Presidente"
            image="images/presidente.png"
            description={<><b>Cel</b> Josué Morisson de Moraes</>}
          />

          <Card title="Vice-Presidente"
            image="images/vicepresidente.png"
            description={<><b>Cel</b> Mauro Benedito Guaraldo Secco</>}
          />
        </div>

        <div className="row">
          <Card title="Diretor Administrativo"
            image="images/DirExec_Generica.png"
            description={<><b>Ten</b> Cleber das Neves Tourinho</>}
          />

          <Card title="Diretor de Planejamento e Controle"
            image="images/diretorplanejamento.png"
            description={<><b>Cel</b> Antonio Fernando Araújo Duarte</>}
          />
        </div>

        <div className="row">
          <Card title="Diretor de Comunicação Social"
            image="images/diretorcomunicacao.png"
            description={<><b>Ten Cel</b> Flavio Gomes Ferreira Pinto</>}
          />

          <Card title="Diretor Cultural"
            image="images/diretorcultural.png"
            description={<><b>Cel</b> Joel Francisco Correa</>}
          />
        </div>

        <div className="row">
          <Card title="Diretor para Esporte e Eventos"
            image="images/diretoresportes.jpg"
            description={<><b>Ten Cel</b> André Valentim Siqueira Rodrigues</>}
          />

          <Card title="Diretor Financeiro e de Patrimônio"
            image="images/diretorfinanceiro.png"
            description={<><b>Cel</b> Mário Vilá Pitaluga Filho</>}
          />
        </div>

        <div className="row">
          <Card title="Assessor"
            image="images/DirExec_Generica.png"
            description={<><b>Cap</b> Ricardo Correa Neves</>}
          />

          <Card title="Assessor"
            image="images/DirExec_Generica.png"
            description={<><b>Ten</b> Augusto Antônio Munck</>}
          />
        </div>

        <div className="row">
          <Card title="Assessor"
            image="images/DirExec_Generica.png"
            description={<><b>Ten</b> Jorge Ferreira da Purificação</>}
          />
        </div>
      </div>
      <span className="hide">Fim do conteúdo da página</span>
    </section>

  </>
}
