import Image from "next/image"
import Link from "next/link"
import { Carousel } from "react-bootstrap"

export default function Garbage() {

   return <div className="carousel-inner">
      <Carousel>
         <Carousel.Item>
            <Link target="_blank" href="https://www.asefex.com.br/">
               <Image alt="Confraternização AsEFEx" src="/images/Carrossel0.jpg" width={1000} height={1000} priority={true}/>
            </Link>
            <div className="galleria-info">
               <div className="galleria-info-text">
                  <div className="galleria-info-title">
                     <h3><Link target="_blank" href="https://www.asefex.com.br/">Confraternização AsEFEx - 1o SET 2023</Link></h3>
                  </div>
                  <div className="galleria-info-description">Venha se confraternizar com a comunidade do Calção Preto!!</div>
                  {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                     Nome do autor da imagem</div> */}
               </div>
            </div>
         </Carousel.Item>

         <Carousel.Item>
            <Link target="_blank" href="https://www.calameo.com/read/00643534438982bb28291">
               <Image alt="Revista AsEFEx 121" src="/images/carrossel1.png" width={1000} height={1000} priority={true}/>
            </Link>
            <div className="galleria-info">
               <div className="galleria-info-text">
                  <div className="galleria-info-title">
                     <h3><Link target="_blank" href="https://www.calameo.com/read/00643534438982bb28291">Informativo AsEFEx</Link></h3>
                  </div>
                  <div className="galleria-info-description">Confira as matérias da Edição 121 nossa revista</div>
                  {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                     Nome do autor da imagem</div> */}
               </div>
            </div>
         </Carousel.Item>

         <Carousel.Item>
            <Link target="_blank" href="https://fpcs.edu.br/especializacao-em-educacao-fisica-e-saude-da-promocao-de-saude-a-internacao/">
               <Image alt="Curso Ed Física e Saúde FPCS 2023" src="/images/carrossel2.png" width={1000} height={1000} priority={true}/>
            </Link>
            <div className="galleria-info">
               <div className="galleria-info-text">
                  <div className="galleria-info-title">
                     <h3><Link target="_blank" href="https://fpcs.edu.br/especializacao-em-educacao-fisica-e-saude-da-promocao-de-saude-a-internacao/">Curso Ed Física e Saúde FPSC 2023</Link></h3>
                  </div>
                  <div className="galleria-info-description">Aproveite o desconto e a oportunidade de se especializar! Mais informações: https://fpcs.edu.br/especializacao-em-educacao-fisica-e-saude-da-promocao-de-saude-a-internacao/</div>
                  {/* <div data-index={0} style={{ display: 'block' }} className="rights">
                     Nome do autor da imagem</div> */}
               </div>
            </div>
         </Carousel.Item>
         
         <Carousel.Item>
            <Link target="_blank" href="https://pt.calameo.com/read/006435344e3ff145ebcc5?authid=IcwOmLTWn2AD">
               <Image alt="Revista AsEFEx 116" src="/images/carrossel3.png" width={1000} height={1000} priority={true}/>
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
            <Link target="_blank" href="https://asefex.com.br/diretoria-executiva">
               <Image alt="Diretoria AsEFEx 2022 - 2023" src="/images/carrossel4.png" width={1000} height={1000} priority={true}/>
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
      </Carousel>
   </div>
}