import HeroSection from './components/hero-section/HeroSection';
import AboutSection from './components/about-section/AboutSection';

export function HomePage() {
  return (
    <div className='w-full flex flex-col'>
      <HeroSection />
      <AboutSection />
    </div>
  );
}
