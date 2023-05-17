import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return <>
    <Head>
      <title>Homenagem ao Coronel Noaldo</title>
    </Head>

    <section id="content-section">
      <span className="hide">Início do conteúdo da página</span>
      <h1 className="documentFirstHeading">CORONEL NOALDO: UM GUERREIRO, UM EXEMPLO</h1>

      <div className="imglateral">
        <Image src="/images/coronel-noaldo.png" alt="Foto do Coronel Noaldo" style={{width: 'auto', height: 'auto'}} width={275} height={300}/>
        <br></br>
        <em>Coronel Noaldo</em>
      </div>

      <p>A AsEFEx rende uma justa homenagem ao Cel Noaldo Alves da Silva, nosso
        antigo presidente e o que mais tempo exerceu este cargo.</p>
      <p>Incansável no esforço de manter cada vez mais fortes os laços dos
        associados e a tradição dos Calções Pretos, dignificou os objetivos
        estatutários da AsEFEx com rara perseverança, o que o coloca na Galeria
        de Honra dos Ex-alunos e dos Amigos da EsEFEx, com o merecimento a que
        faz jus e a quem prestamos este reconhecimento. </p>
      <p>Nascido em São José das Piranhas, Jatobá, no Estado da Paraíba, em 1º de abril
        de 1932, foi um soldado exemplar, com uma brilhante carreira, iniciada na Escola
        Preparatória de Cadetes de Fortaleza, Ceará, concluindo sua formação na Academia Militar
        das Agulhas Negras, em 1954, sendo possuidor de um vasto currículo de excelentes serviços
        prestados ao Exército e ao País.</p>
      <p>Calção Preto Nº 3225, realizou todos os cursos de carreira das armas (Formação, Aperfeiçoamento,
        Estado-Maior e Altos Estudos da Escola Superior de Guerra) e formou-se, também, em Engenharia Civil.</p>
      <p>Recebeu as mais altas condecorações do Exército, da Força Aérea Brasileira e dos Estados de Pernambuco
        e Rio de Janeiro, por relevantes serviços prestados, em diversas funções de destaque exercidas na caserna
        e no meio civil, nos níveis municipais, estaduais e federal da administração pública.</p>
      <p>Assumiu, pela primeira vez, o cargo de Presidente da AsEFEx em 2007. Desempenhou-o com
        destacada dedicação nos anos de 2007 a 2010 e de 2012 a 2019, com o firme propósito de unir
        os Calções Pretos e os Amigos da EsEFEx com alegria e sã camaradagem. Aperfeiçoou a gestão
        da associação e manteve a nossa revista AsEFEx Notícias em elevado nível, com matérias relevantes,
        focadas na saúde e no bem-estar, além de sempre render homenagens àqueles que se destacaram, assim
        como ele, em sua vida esportiva. Com sua excepcional capacidade de trabalho, participou e promoveu
        ativamente as atividades do CCFEx e das OM subordinadas, particularmente a EsEFEx, mantendo os associados
        perfeitamente integrados ao santuário da Educação Física no Brasil, a Fortaleza de São João. Até mesmo
        nos momentos mais difíceis e com a saúde debilitada, jamais deixou transparecer qualquer fragilidade e
        manteve firme sua alegria contagiante em bem cumprir mais esta missão com rara resiliência, o que o
        dignificou como um exemplo a ser seguido por todos, tornando-se uma referência na família Calção Preto. </p>
      <p>Estas breves palavras não são suficientes para prestar todas as homenagens ao Cel Noaldo que, ao seguir
        deste plano para cumprir sua nova e definitiva missão junto ao Senhor dos Exércitos, receberá todas as
        honras de que é merecedor e permanecerá sempre em nossa memória como um grande líder, chefe e amigo. </p>
      <p>Cel Noaldo, receba nossa melhor continência: “AsEFEx Sentido! Apresentar Armas!”</p>

      <div className="imglateral">
        <Image src="/images/noaldoebolsonaro.png" alt="Coronel Noaldo com o então Presidente Jair Bolsonaro" style={{width: 'auto', height: 'auto'}} width={320} height={320}/>
        <br></br>
        <em>Cel Noaldo condecorou o recém-eleito Presidente Jair Bolsonaro com a Medalha do Mérito AsEFEx, durante o Encontro dos Calções Pretos, em 2018. </em>
      </div>

      <p>Confira essa e outras matérias na <Link target="_blank" style={{ color: '#0088CC' }} href="https://pt.calameo.com/read/006435344df915ae2ecbd?authid=PiQe6zOM9Ccw">Revista no 113 da AsEFEx</Link></p>

      <span className="hide">Fim do conteúdo da página</span>
    </section>
  </>
}
