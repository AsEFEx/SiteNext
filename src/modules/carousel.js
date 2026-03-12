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
        {/* Fim - by TC Fabio */}
        <Carousel.Item>
          <Link
            target="_blank"
            href="https://www.calameo.com/read/00643534438982bb28291"
          >
            <Image
              alt="Revista AsEFEx 121"
              src="/images/carrossel1.png"
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
                    href="https://www.calameo.com/read/00643534438982bb28291"
                  >
                    Informativo AsEFEx
                  </Link>
                </h3>
              </div>
              <div className="galleria-info-description">
                Confira as matérias da Edição 121 nossa revista
              </div>
              {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                     Nome do autor da imagem</div> */}
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <Link
            target="_blank"
            href="https://pt.calameo.com/read/006435344e3ff145ebcc5?authid=IcwOmLTWn2AD"
          >
            <Image
              alt="Revista AsEFEx 116"
              src="/images/carrossel3.png"
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
                    href="https://pt.calameo.com/read/006435344e3ff145ebcc5?authid=IcwOmLTWn2AD"
                  >
                    Informativo AsEFEx
                  </Link>
                </h3>
              </div>
              <div className="galleria-info-description">
                Confira as matérias da Edição 116 nossa revista.
              </div>
              {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                     Nome do autor da imagem</div> */}
            </div>
          </div>
        </Carousel.Item>

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
