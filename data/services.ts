export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  duration?: string;
  price?: string;
}

export const services: Service[] = [
  {
    slug: 'tuns-clasic',
    title: 'Tuns clasic',
    shortDescription: 'Tunsori de bărbat executate cu grijă, după preferințele tale.',
    description:
      'Tunsorile noastre clasice includ spălare, tuns după preferință, contur barbă și finisare. Folosim produse de calitate și tehnici tradiționale pentru un rezultat curat și plăcut.',
    duration: '~45 min',
    price: '50 lei',
  },
  {
    slug: 'barba',
    title: 'Îngrijire barbă',
    shortDescription: 'Tundere și modelare barbă pentru un look îngrijit.',
    description:
      'Serviciul de îngrijire a bărbei include tundere uniformă, conturare și aplicare de ulei/balm. Rezultatul este o barbă ordonată și confortabilă.',
    duration: '~30 min',
    price: '35 lei',
  },
  {
    slug: 'tuns-si-barba',
    title: 'Tuns + barbă',
    shortDescription: 'Pachet complet: tuns și îngrijire barbă într-o singură ședință.',
    description:
      'Combinăm tunsorile clasice cu îngrijirea bărbei într-o singură vizită. Ideal pentru cei care vor un look complet, rapid și de calitate.',
    duration: '~60 min',
    price: '75 lei',
  },
  {
    slug: 'tuns-copil',
    title: 'Tuns copil',
    shortDescription: 'Tunsori pentru cei mici, într-un mediu prietenos.',
    description:
      'Oferim tunsori adaptate copiilor, într-un ambient relaxat. Durata și stilul se potrivesc nevoilor fiecărui copil.',
    duration: '~30 min',
    price: '30 lei',
  },
];
