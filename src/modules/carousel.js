import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-bootstrap";

export default function Garbage() {
  return (
    <div className="carousel-inner">
      <Carousel>
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
