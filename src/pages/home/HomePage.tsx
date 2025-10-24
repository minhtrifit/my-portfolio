import HeroSection from './components/hero-section/HeroSection';
import AboutSection from './components/about-section/AboutSection';
import EduSection from './components/edu-section/EduSection';

export function HomePage() {
  return (
    <div className='w-full flex flex-col'>
      <HeroSection />
      <AboutSection />
      <EduSection />
    </div>
  );
}
