import Link from 'next/link'
import Head from 'next/head'

export default function Acessibilidade() {
  return <>
    <Head>
      <title>Acessibilidade - AsEFEx</title>
    </Head>

    <section id="content-section">
      <span className="hide">Início do conteúdo da página</span>
      <div className="row-fluid module">
        <h1 className="documentFirstHeading">Acessibilidade</h1>
      </div>
      <div className="description">
        <p>Este portal segue as diretrizes do e-MAG (Modelo de Acessibilidade em Governo Eletrônico), conforme as normas do Governo Federal, em obediência ao Decreto 5.296, de 2.12.2004</p>
      </div>

      <p>O termo acessibilidade significa incluir a pessoa com deficiência na participação de atividades como o uso de produtos, serviços e informações. Alguns exemplos são os prédios com rampas de acesso para cadeira de rodas e banheiros adaptados para deficientes.</p>
      <p>Na internet, acessibilidade refere-se principalmente às recomendações do WCAG (World Content Accessibility Guide) do W3C e no caso do Governo Brasileiro ao e-MAG (Modelo de Acessibilidade em Governo Eletrônico). O e-MAG está alinhado as recomendações internacionais, mas estabelece padrões de comportamento acessível para sites governamentais.</p>
      <p>Na parte superior do portal existe uma barra de acessibilidade onde se encontra atalhos de navegação padronizados e a opção para alterar o contraste. Essas ferramentas estão disponíveis em todas as páginas do portal.</p>
      <p>Os atalhos padrões do governo federal são:</p>

      <ul>
        <li>Teclando-se Alt + 1 em qualquer página do portal, chega-se diretamente ao começo do conteúdo principal da página.</li>
        <li>Teclando-se Alt + 2 em qualquer página do portal, chega-se diretamente ao início do menu principal.</li>
        <li>Teclando-se Alt + 3 em qualquer página do portal, chega-se diretamente em sua busca interna.</li>
        <li>Teclando-se Alt + 4 em qualquer página do portal, chega-se diretamente ao rodapé do site.</li>
      </ul>

      <p>Esses atalhos valem para o navegador Chrome, mas existem algumas variações para outros navegadores.</p>
      <p>Quem prefere utilizar o Internet Explorer é preciso apertar o botão Enter do seu teclado após uma das combinações acima. Portanto, para chegar ao campo de busca de interna é preciso pressionar Alt+3 e depois Enter.</p>
      <p>No caso do Firefox, em vez de Alt + número, tecle simultaneamente Alt + Shift + número.</p>
      <p>Sendo Firefox no Mac OS, em vez de Alt + Shift + número, tecle simultaneamente Ctrl + Alt + número.</p>
      <p>No Opera, as teclas são Shift + Escape + número. Ao teclar apenas Shift + Escape, o usuário encontrará uma janela com todas as alternativas de ACCESSKEY da página.</p>
      <p>Ao final desse texto, você poderá baixar alguns arquivos que explicam melhor o termo acessibilidade e como deve ser implementado nos sites da Internet.</p>

      <h2>
        Leis e decretos sobre acessibilidade:
      </h2>

      <ul>
        <li><Link href="http://www.planalto.gov.br/ccivil_03/_Ato2004-2006/2004/Decreto/D5296.htm" target="_self" title="">Decreto nº 5.296 de 02 de dezembro de 2004 </Link>(link externo)</li>
        <li><Link href="http://www.planalto.gov.br/ccivil_03/_ato2007-2010/2009/decreto/d6949.htm" target="_self" title="">Decreto nº 6.949, de 25 de agosto de 2009</Link> (link externo) - Promulga a Convenção Internacional sobre os Direitos das Pessoas com Deficiência e seu Protocolo Facultativo, assinados em Nova York, em 30 de março de 2007.</li>
        <li><Link href="http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/Decreto/D7724.htm" target="_self" title="">Decreto nº 7.724, de 16 de Maio de 2012</Link> (link externo) - Regulamenta a Lei No 12.527, que dispõe sobre o acesso a informações.</li>
        <li><Link href="http://www.governoeletronico.gov.br/acoes-e-projetos/e-MAG" target="_self" title="">Modelo de Acessibilidade de Governo Eletrônico</Link> (link externo) </li>
        <li><Link href="http://www.governoeletronico.gov.br/biblioteca/arquivos/portaria-no-03-de-07-05-2007" target="_self" title="">Portaria nº 03, de 07 de Maio de 2007 - formato .pdf (35,5Kb)</Link> (link externo) - Institucionaliza o Modelo de Acessibilidade em Governo Eletrônico – e-MAG.</li>
      </ul>
      <h2>Dúvidas, sugestões e críticas:</h2>
      <p>
        No caso de problemas com a acessibilidade do portal, favor acessar a <Link title="" href="http://portalpadrao.plone.org.br/../fale-conosco" target="_self">Página de contato</Link><span>.</span>
      </p>
      <h2>Dicas, links e recursos úteis: </h2>
      <ul>
        <li><Link href="http://acessibilidadelegal.com/" target="_self" title="">Acessibilidade Legal</Link> (link externo)</li>
        <li><Link href="http://acessodigital.net/links.html" target="_self" title="">Acesso Digital</Link> (link externo)</li>
      </ul>
      <span className="hide">Fim do conteúdo da página</span>
    </section>
  </>
}
