import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-bootstrap";

export default function Garbage() {
  return (
    <div className="carousel-inner">
      <Carousel>
        {/* Inicio - by TC Fabio */}
        <Carousel.Item>
          <Link
            target="_blank"
            href="/documentos/Edital-AGO-eleicao-2026-2028.pdf"
          >
            <Image
              alt="Assembléia Geral Ordinária"
              src="/images/carrossel5.png"
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
                    href="/documentos/Edital-AGO-eleicao-2026-2028.pdf"
                  >
                    Assembléia Geral Ordinária
                  </Link>
                </h3>
              </div>
              <div className="galleria-info-description">
                Será realizada em duas modalidades, PRESENCIAL E VIRTUAL, pelo
                aplicativo Meet. O link será disponibilizado oportunamente.
                Confira o Edital.
              </div>
              {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                     Nome do autora da imagem</div> */}
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

        <Carousel.Item>
          <Link
            target="_blank"
            href="https://www.calameo.com/read/0064353445805a31fe524"
          >
            <Image
              alt="Revista AsEFEx 129"
              src="/images/carrossel-Ed129.png"
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
                    href="https://www.calameo.com/read/0064353445805a31fe524"
                  >
                    Informativo AsEFEx
                  </Link>
                </h3>
              </div>
              <div className="galleria-info-description">
                Confira as matérias da Edição 129 da nossa revista.
              </div>
              {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                     Nome do autor da imagem</div> */}
            </div>
          </div>
        </Carousel.Item>
        {/* Fim - by TC Fabio */}
        <Carousel.Item>
          <Link
            target="_blank"
            href="https://asefex.com.br/diretoria-executiva"
          >
            <Image
              alt="Diretoria AsEFEx 2022 - 2023"
              src="/images/carrossel4.png"
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
                Equipe para o biênio 2022 - 2023.
              </div>
              {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                     Nome do autor da imagem</div> */}
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
