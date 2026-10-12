import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-bootstrap";
import { useState, useEffect } from 'react';

export default function Garbage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dataInicio = new Date('2026-10-01T00:00:00');
    const dataFim = new Date('2030-12-31T23:59:59');
    const dataAtual = new Date();

    // Exibe o banner apenas se estiver dentro do período agendado
    if (dataAtual >= dataInicio && dataAtual <= dataFim) {
      setIsVisible(true);
    }
  }, []);  
  
  if (!isVisible) return null;

  return (
    <div className="carousel-inner">
      <Carousel>
        
        {/* Inicio - by TC Fabio - 01 SET 26 */}
        
        {isVisible && (
        <Carousel.Item>
          
           <Image
              alt="Dia do Profissional de Educação Física - 1º de Setembro"
              src="/images/FotoDiaProfEF2026-11.png"
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
        )}
        
        {/* Inicio - by TC Fabio - 12 JUL 26 */}
        {isVisible && (
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
        )}
        
        {isVisible && (

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
        )}

        {isVisible && (

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
        )}
        {/* Fim - by TC Fabio */}
      
      </Carousel>
    </div>
  );
}
