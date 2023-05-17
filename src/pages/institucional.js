import Head from 'next/head'

export default function Home() {
  return <>
    <Head>
      <title>Página Institucional - AsEFEx</title>
    </Head>

    <section id="content-section">
      <span className="hide">Início do conteúdo da página</span>
      <h1 className="documentFirstHeading">
        O QUE É AsEFEx?
      </h1>
      <div className="description">
        ASSOCIAÇÃO DOS EX-ALUNOS E DOS AMIGOS DA ESCOLA DE EDUCAÇÃO FÍSICA DO EXÉRCITO – AsEFEx
      </div>
      <p>
        Fundada em 15 de março de 1990, a AsEFEx é uma associação civil de fins não econômicos, de natureza cultural, educacional e filantrópica, regida por Estatuto e pela legislação pertinente, em vigor, tendo por objeto social o estudo, a pesquisa, a difusão, o apoio e o incentivo à Educação Física, ao Desporto, ao Lazer e ao Patrimônio Histórico, Artístico e Cultural.
      </p>
      <p>
        Sua sede fica na Fortaleza de São João, no bairro das Urca, no Rio de Janeiro, em dependências sob cessão do Centro de Capacitação Física do Exército Brasileiro.
      </p>
      <h2>Objetivos </h2>
      <dl>
        <dd> I - solidificar e manter laços de sã camaradagem entre seus integrantes; </dd>
        <dd> II - Manter, permanentemente, ligações com o CENTRO DE CAPACITAÇÃO FÍSICA DO EXÉRCITO (CCFEx) e com suas Organizações Militares Subordinadas, apoiando as iniciativas e atividades que os seus Comandantes julgarem convenientes;  </dd>
        <dd> III - incentivar o gosto pela prática da atividade física, que tenha como metas a saúde e o bem-estar do ser humano; </dd>
        <dd> IV - estimular a pesquisa científica e o intercâmbio de informações; </dd>
        <dd> V - organizar eventos, competições, clínicas, seminários, estágios e conferências;&nbsp;</dd>
        <dd> VI - elaborar, desenvolver e gerenciar projetos nos campos da Educação Física, dos Desportos, da Medicina Desportiva, do Lazer e do Patrimônio Histórico, Artístico e Cultural. </dd>
        <dd> VII - Promover atividades esportivas, recreativas e sociais.</dd>
      </dl>
      <h2>Visão de Futuro </h2>
      <p>Ser a melhor Associação de Ex-Alunos do Brasil, prestando apoio com excelência de gestão e atingindo o reconhecimento da sociedade.
      </p>
      <h2>Valores </h2>
      <ul>
        <li> Busca pela excelência </li>
        <li> Ética profissional </li>
        <li> Valorização das pessoas </li>
        <li> Inovação e aperfeiçoamento contínuo </li>
        <li> Transparência </li>
      </ul>
      <span className="hide">Fim do conteúdo da página</span>
    </section>
  </>
}
