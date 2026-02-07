import type { Metadata } from 'next';
import { AboutHero } from '@/components/about/AboutHero';
import { MissionVision } from '@/components/about/MissionVision';
import { ValuesSection } from '@/components/about/ValuesSection';
import { TeamSection } from '@/components/about/TeamSection';

export const metadata: Metadata = {
  title: 'Despre noi',
  description:
    'Povestea Barbershop H – misiune, viziune, valorile noastre și echipa. Frizerie de calitate în București, Aleea Huedin 3.',
};

export default function DespreNoiPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <ValuesSection />
      <TeamSection />
    </>
  );
}
