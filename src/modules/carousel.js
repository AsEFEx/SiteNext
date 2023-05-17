import Link from "next/link"
import { Carousel } from "react-bootstrap"

export default function Garbage() {

   return <div className="carousel-inner">
      <Carousel>
         <Carousel.Item>
            <Link target="_blank" href="https://pt.calameo.com/read/006435344567665a09633?authid=e15gBQsiCu7E">
               <img alt="Informativo AsEFEx" src="images/carrossel0.png" />
            </Link>
            <div className="galleria-info">
               <div className="galleria-info-text">
                  <div className="galleria-info-title">
                     <h3><Link target="_blank" href="https://pt.calameo.com/read/006435344567665a09633?authid=e15gBQsiCu7E">Informativo AsEFEx</Link></h3>
                  </div>
                  <div className="galleria-info-description">Confira as matérias da Edição 117 nossa revista</div>
                  {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                     Nome do autor da imagem</div> */}
               </div>
            </div>
         </Carousel.Item>

         <Carousel.Item>
            <Link target="_blank" href="https://asefex.com.br/diretoria-executiva">
               <img alt="Diretoria Executiva AsEFEx" src="images/carrossel1.png" />
            </Link>
            <div className="galleria-info">
               <div className="galleria-info-text">
                  <div className="galleria-info-title">
                     <h3><Link target="_blank" href="https://asefex.com.br/diretoria-executiva">Diretoria Executiva AsEFEx</Link></h3>
                  </div>
                  <div className="galleria-info-description">Equipe para o biênio 2022 - 2023.</div>
                  {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                     Nome do autor da imagem</div> */}
               </div>
            </div>
         </Carousel.Item>

         <Carousel.Item>
            <Link target="_blank" href="http://www.esefex.eb.mil.br/ultimas-noticias/294-esefex-100-anos">
               <img alt="Encontro Nacional dos Calções Pretos 2022" src="images/carrossel2.png" />
            </Link>
            <div className="galleria-info">
               <div className="galleria-info-text">
                  <div className="galleria-info-title">
                     <h3><Link target="_blank" href="http://www.esefex.eb.mil.br/ultimas-noticias/294-esefex-100-anos">Encontro Nacional dos Calções Pretos 2022</Link></h3>
                  </div>
                  <div className="galleria-info-description">Venha celebrar conosco o centenário da EsEFEx - 17 DEZ 22.</div>
                  {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                     Nome do autor da imagem</div> */}
               </div>
            </div>
         </Carousel.Item>

         <Carousel.Item>
            <Link target="_blank" href="https://pt.calameo.com/read/006435344e3ff145ebcc5?authid=IcwOmLTWn2AD">
               <img alt="Revista AsEFEx 115" src="images/carrossel3.png" />
            </Link>
            <div className="galleria-info">
               <div className="galleria-info-text">
                  <div className="galleria-info-title">
                     <h3><Link target="_blank" href="https://pt.calameo.com/read/006435344e3ff145ebcc5?authid=IcwOmLTWn2AD">Informativo AsEFEx</Link></h3>
                  </div>
                  <div className="galleria-info-description">Confira as matérias da Edição 116 nossa revista.</div>
                  {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                     Nome do autor da imagem</div> */}
               </div>
            </div>
         </Carousel.Item>

         <Carousel.Item>
            <Link target="_blank" href="https://pt.calameo.com/read/006435344f848ad6cf41a?authid=s9AUDEJk0ONc">
               <img alt="Informativo AsEFEx" src="images/carrossel4.png" />
            </Link>
            <div className="galleria-info">
               <div className="galleria-info-text">
                  <div className="galleria-info-title">
                     <h3><Link target="_blank" href="https://pt.calameo.com/read/006435344f848ad6cf41a?authid=s9AUDEJk0ONc">Informativo AsEFEx</Link></h3>
                  </div>
                  <div className="galleria-info-description">Confira as matérias da Edição 115 nossa revista.</div>
                  {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                     Nome do autor da imagem</div> */}
               </div>
            </div>
         </Carousel.Item>
      </Carousel>
   </div>
}