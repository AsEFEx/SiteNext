import Link from "next/link"
import styles from './index.module.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return(
        <Slider {...settings}>
            <div>
                <h3>Slide 1</h3>
            </div>
            <div>
                <h3>Slide 2</h3>
            </div>
            <div>
                <h3>Slide 3</h3>
            </div>
      </Slider>
      );
      
// Pra usar css exclusivo nesse component, de o className no arquivo index.module.css como se fosse css normal (deixei um exemplo rolha)
// Ao inves de ser <div className="nome", vira <div className={styles.nome}
// Essa area antes do return vai todas as funcoes puramente js
// Se quiser exemplo de js pode abrir a pagina do filtro_galeria q la tem um pouco
// Lembre, existem muitos tutoriais de carousels na internet, da ate pra meter no chat gpt que sepa ele safa

   
}