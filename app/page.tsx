import { HeroSection } from '@/components/home/HeroSection';
import { GalleryTeaser } from '@/components/home/GalleryTeaser';
import { StoryTeaser } from '@/components/home/StoryTeaser';
import { ServicesTeaser } from '@/components/home/ServicesTeaser';
import { CtaBlock } from '@/components/home/CtaBlock';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GalleryTeaser />
      <StoryTeaser />
      <ServicesTeaser />
      <CtaBlock />
    </>
  );
}
