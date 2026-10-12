'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';

// 1. Organize seus banners aqui. Adicione ou remova itens conforme necessário.
const BANNERS_CONFIG = [
  {
    id: 'dia-educacao-fisica-2026',
    alt: 'Dia do Profissional de Educação Física - 1º de Setembro',
    src: '/images/FotoDiaProfEF2026-11.png',
    title: 'Dia do Profissional de Educação Física - 1º de Setembro.',
    href: '#',
    description: 'Diferenciados pelo Calção Branco, unidos pela missão de preparar o corpo e o espírito da nossa tropa.',
    // Formato: AAAA-MM-DDTHH:MM:SS (Altere para testar, ex: '2026-10-15T23:59:59')
    dataExpiracao: '2030-12-31T23:59:59' 
  },
  {
    id: 'diretoria-AsEFEx-2026',
    alt: 'Diretoria AsEFEx 2026 - 2028',
    src: '/images/DiretoriaExecutiva2026.png',
    title: 'Diretoria AsEFEx 2026 - 2028.',
    href: 'https://asefex.com.br/diretoria-executiva',
    description: 'Equipe para o biênio 2026 - 2028.',
    dataExpiracao: '2030-12-31T23:59:59'
  },

  {
    id: 'Revista-AsEFEx-131',
    alt: 'Revista AsEFEx 131',
    src: '/images/AsEFEx Notícias 131 - carrossel.png',
    title: 'Revista AsEFEx 131.',
    href: 'https://www.calameo.com/read/006435344eedc419c5a29',
    description: 'Confira as matérias da Edição 131 da nossa revista.',
    dataExpiracao: '2030-12-31T23:59:59'
  },
  {
    id: 'Revista-AsEFEx-130',
    alt: 'Revista AsEFEx 130',
    src: '/images/carrossel-Ed130.png',
    title: 'Revista AsEFEx 130.',
    href: 'https://www.calameo.com/read/006435344ad22ffa9ce90',
    description: 'Confira as matérias da Edição 130 da nossa revista.',
    dataExpiracao: '2030-12-31T23:59:59'
  }

];

export default function Garbage() {
  const [bannersValidos, setBannersValidos] = useState([]);

  useEffect(() => {
    const agora = new Date();

    // Filtra o array mantendo apenas os banners que AINDA NÃO expiraram
    const filtrados = BANNERS_CONFIG.filter((banner) => {
      const expiracao = new Date(banner.dataExpiracao);
      return agora < expiracao; 
    });

    setBannersValidos(filtrados);
  }, []);

  // Se todos os banners tiverem expirado, o componente não renderiza nada na tela
  if (bannersValidos.length === 0) return null;

  return (
    <div className="carousel-inner">
      <Carousel>
        {bannersValidos.map((banner) => (
          <Carousel.Item key={banner.id}>
            <Image
              alt={banner.alt}
              src={banner.src}
              width={1000}
              height={1000}
              priority={true}
            />
            
            <div className="galleria-info">
              <div className="galleria-info-text">
                <div className="galleria-info-title">
                  <h3 className="galleria-info-title">
                    <Link href={banner.href}>
                      {banner.title}
                    </Link>
                  </h3>
                </div>
                <div className="galleria-info-description">
                  {banner.description}
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
