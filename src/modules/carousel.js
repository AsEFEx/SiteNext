import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-bootstrap";

export default function Garbage() {
  return (
    <div className="carousel-inner">
      <Carousel>
        
        {/* Inicio - by TC Fabio - 01 SET 26 */}
        
        <Carousel.Item>
          
           <Image
              alt="Dia do Profissional de Educação Física - 1º de Setembro"
              src="/images/FotoDiaProfEF2026-4.png"
              width={1000}
              height={1000}
              priority={true}
            />
          
          <div className="galleria-info">
            <div className="galleria-info-text">
              <div className="galleria-info-title">
                <h3 className="galleria-info-title" >
                  <Link
                    //target="_blank"
                    href="#"
                  >
                     Dia do Profissional de Educação Física - 1º de Setembro.
                  </Link>
                </h3>
              </div>
              <div className="galleria-info-description">
                Diferenciados pelo Calção Preto, unidos pela missão de preparar o corpo e o espírito da nossa tropa.
              </div>
              {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                     Nome do autora da imagem</div> */}
            </div>
          </div>
        </Carousel.Item>
        
        
        {/* Inicio - by TC Fabio - 19 AGO 26 */}
        
        <Carousel.Item>
          
           <Image
              alt="AsEFEx - Convite para Feijoada - 12 SET 2026 - 11:30hs - Recanto do Calção Preto"
              src="/images/ConviteFeijoadaAsEFEx.png"
              width={1000}
              height={1000}
              priority={true}
            />
          
          <div className="galleria-info">
            <div className="galleria-info-text">
              <div className="galleria-info-title">
                <h3 className="galleria-info-title" >
                  <Link
                    //target="_blank"
                    href="#"
                  >
                    Feijoada no Recanto do Calção Preto, em 12 SET 2026-11:30hs;
                    <br /> Pagamento: BB-Ag. 287-9|C/C 212.438-6 / Pix 39.126.347/0001-10; e
                    <br /> Confirmação até 09 SET 2026 pelo Email: asefex1990@gmail.com.
                  </Link>
                </h3>
              </div>
              <div className="galleria-info-description">
                A Diretoria da AsEFEx tem o prazer de convidar os Calções Pretos e amigos da EsEFEx para uma Feijoada, a ser realizado no Recanto dos Calções Pretos (EsEFEx), no dia 12 Set 2026, a partir das 8hs, iniciando com atividades desportivas. Será uma excelente oportunidade para reencontrar amigos e fortalecer os laços da nossa família EsEFEx!
              </div>
              {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                     Nome do autora da imagem</div> */}
            </div>
          </div>
        </Carousel.Item>
        
        
        {/* Inicio - by TC Fabio - 12 JUL 26 */}
        
        <Carousel.Item>
          <Link
            target="_blank"
            href="https://www.encontrocalcaopreto.com.br/"
          >
            <Image
              alt="AsEFEx - Convite para Encontro Nacional Calção Preto 2026"
              src="/images/ENCP2026_2.jpg"
              width={1000}
              height={1000}
              priority={true}
            />
          </Link>
          <div className="galleria-info">
            <div className="galleria-info-text">
              <div className="galleria-info-title">
                <h3>
                  <Link
                    target="_blank"
                    href="https://www.encontrocalcaopreto.com.br/"
                  >
                    EsEFEx - Convite para Encontro Nacional Calção Preto 2026 
                  </Link>
                </h3>
              </div>
              <div className="galleria-info-description">
                O Comandante da EsEFEx tem o prazer de convidar toda a Família dos Calções Pretos para nosso Encontro Nacional, que acontecerá no dia 31 de outubro de 2026, a partir das 10h, nas instalações daquela Escola.
              </div>
              {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                     Nome do autora da imagem</div> */}
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <Link
            target="_blank"
            href="https://asefex.com.br/diretoria-executiva"
          >
            <Image
              alt="Diretoria AsEFEx 2026 - 2028"
              src="/images/DiretoriaExecutiva2026.png"
              width={1000}
              height={1000}
              priority={true}
            />
          </Link>
          <div className="galleria-info">
            <div className="galleria-info-text">
              <div className="galleria-info-title">
                <h3>
                  <Link
                    target="_blank"
                    href="https://asefex.com.br/diretoria-executiva"
                  >
                    Diretoria Executiva AsEFEx
                  </Link>
                </h3>
              </div>
              <div className="galleria-info-description">
                Equipe para o biênio 2026 - 2028.
              </div>
              {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                     Nome do autor da imagem</div> */}
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <Link
            target="_blank"
            href="https://www.calameo.com/read/006435344eedc419c5a29"
          >
            <Image
              alt="Revista AsEFEx 131"
              src="/images/AsEFEx Notícias 131 - carrossel.png"
              width={1000}
              height={1000}
              priority={true}
            />
          </Link>
          <div className="galleria-info">
            <div className="galleria-info-text">
              <div className="galleria-info-title">
                <h3>
                  <Link
                    target="_blank"
                    href="https://www.calameo.com/read/006435344eedc419c5a29"
                  >
                    Informativo AsEFEx
                  </Link>
                </h3>
              </div>
              <div className="galleria-info-description">
                Confira as matérias da Edição 131 da nossa revista
              </div>
              {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                     Nome do autor da imagem</div> */}
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <Link
            target="_blank"
            href="https://www.calameo.com/read/006435344ad22ffa9ce90"
          >
            <Image
              alt="Revista AsEFEx 130"
              src="/images/carrossel-Ed130.png"
              width={1000}
              height={1000}
              priority={true}
            />
          </Link>
          <div className="galleria-info">
            <div className="galleria-info-text">
              <div className="galleria-info-title">
                <h3>
                  <Link
                    target="_blank"
                    href="https://www.calameo.com/read/006435344ad22ffa9ce90"
                  >
                    Informativo AsEFEx
                  </Link>
                </h3>
              </div>
              <div className="galleria-info-description">
                Confira as matérias da Edição 130 da nossa revista
              </div>
              {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                     Nome do autor da imagem</div> */}
            </div>
          </div>
        </Carousel.Item>

        {/* Fim - by TC Fabio */}
      </Carousel>
    </div>
  );
}
