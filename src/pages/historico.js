import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return <>
    <Head>
      <title>História - AsEFEx</title>
    </Head>

    <section id="content-section">
      <span className="hide">Início do conteúdo da página</span>
      <h1 className="documentFirstHeading">Breve Histórico Sobre a Criação da AsEFEx</h1>
      <Image src="/images/historico.png" alt="Primeira Edição Histórica do AsEFEx Notícias" width={1000} height={200}/>
      <span className="caption"><em>Reprodução da Primeira Edição Histórica do AsEFEx
        Notícias</em></span>
      <p>
        Nestes 30 anos de vida, nós da AsEFEx, temos a alegria e a satisfação de recordar
        para os mais jovens ou mais modernos, a pequena, porém marcante História de Criação da
        Nossa Associação.</p>
      <p>O assunto da conversa era nossa Escola! Por que não se criar uma Associação de Ex-alunos?
      </p>
      <p>Tudo surgiu dessa simples indagação do Cel R1 Vicente Leitão da Rocha aos professores
        Leduc e Henrique Fauth, quando num “papo”, sob a amendoeira, próximo ao marco de
        fundação da cidade do Rio de Janeiro.</p>
      <p>Era 25 de Fevereiro de 1990, data da passagem de comando do Cel Arthur Kramer Ribeiro ao
        Cel Paulo Roberto Laranjeiras Caldas.</p>
      <p>O assunto continuou, após a cerimônia, em um dos cantos do então sexagenário ginásio
        Leite de Castro, quando, ali mesmo começaram uma rápida pesquisa com alguns
        companheiros, passantes de fim de festa. O retorno foi entusiasmante! Nas despedidas, o
        Vicente comprometeu-se a dar andamento aos contatos, o Leduc voltava à Brasília.</p>
      <p>Foi marcada uma reunião com o comandante da Escola, para conhecermos a sua posição e
        estudarmos os primeiros passos; a esta compareceram : Gen R1 Glênio, Gen R1 Acrísio, o
        Cel R1 Osiris, Cel R1 Malta, Cel R1 Vicente, Maj PM Senna e o Cap Saraiva (RP da Escola
        que funcionaria como oficial de ligação). Tudo ficou acertado.</p>
      <p>Iniciaríamos a montagem do Estatuto, entre outras providências iniciais. Uma segunda
        reunião ocorreu dias depois no auditório da EsEFEx com a participação de 20
        companheiros, ocasião em que se decidiu realizar a Assembléia de Fundação e eleição dos
        Conselhos e da Diretoria em 15 de Março de 1990.</p>
      <p>Com a surpreendente presença de 122 companheiros, entre militares das forças armadas,
        forças auxiliares e civis, de todas as épocas que cursaram a Escola, a Assembléia de
        Fundação se desenrolou na recém criada sala Cel Ramires, na EsEFEx. Presentes,
        personalidades de expressão que apuseram suas assinaturas no Livro de Ata e, como os
        demais, constituíram-se em Sócios Fundadores. Presidindo a mesa o Exmo. Sr. Gen R1 José
        Ferraz da Rocha, ex-ministro chefe do EMFA - - maior graduado presente, aluno da Escola
        nos idos de 1940.</p>
      <p>Na oportunidade, além da aprovação do Estatuto, foram eleitos os Conselhos e a Diretoria
        Executiva, conforme segue:</p>
      <h6>Conselho Deliberativo</h6>
      <p><strong>Presidente:</strong> Gen. R1 Glênio Pinheiro;</p>
      <p><strong>Vice-Presidente:</strong> Gen. R1 Acrísio Figueiras;</p>
      <p><strong>Membros:</strong> Dr. Maurício Rocha, Cel R1 Helio Vieira, Cel R1 Armindo
        Carvalho, Cel Med. R1 Rogério Baptista, 1º Ten R1 Fernando Lima;</p>
      <p><strong>Suplente:</strong> 1º Ten Jorge Purificação(EsEFEx).</p>
      <h6>Conselho Fiscal</h6>
      <p><strong>Presidente: </strong>Maj PM Lindberg Senna;</p>
      <p><strong>Membros: </strong>Ten Cel R1 Henrique Ibeas e Ten R1 Abdias Gurgel.</p>
      <h6>Diretoria Executiva</h6>
      <p><strong>Presidente: </strong>Cel R1 Osires Cardoso Labatut Rodrigues;</p>
      <p><strong>Vice-Presidente: </strong>Cel R1 Wenceslau Malta;</p>
      <p><strong>Diretor Técnico: </strong>Cel R1 Vincente de Leitão da Rocha;</p>
      <p><strong>Dir. de Com. Social: </strong>Dr. Helio Vigio (Del. Pol.);</p>
      <p><strong> Dir. Admnistrativo: </strong>Cel R1 João Belém.</p>
      <p><em><strong>Assim nascia a nossa querida e tricentenária Associação, com o firme
        propósito de UNIR SEMPRE OS “CALÇÕES PRETOS”, seja por todo o Brasil e fora dele
        também.</strong></em> </p>
      <p>Ainda no ano de 1990, o Presidende da AsEFEx, Coronel Osires Cardoso Labatut Rodrigues,
        escreveu o artigo <Link href="https://revistadeeducacaofisica.emnuvens.com.br/revista/article/view/2572/2748">“Surge
          a AsEFEx - Uma Aliada Leal”</Link>, deixando o registro histórico da criação da
        Associação na <Link href="https://www.revistadeeducacaofisica.com/">Revista de Educação
          Física</Link>, relevante publicação na área da Educação Física no Brasil, desde 1932.
      </p>
      <span className="hide">Fim do conteúdo da página</span>
    </section>
  </>
}
