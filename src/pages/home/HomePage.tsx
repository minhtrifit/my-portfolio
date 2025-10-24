import HeroSection from './components/hero-section/HeroSection';
import AboutSection from './components/about-section/AboutSection';
import EduSection from './components/edu-section/EduSection';
import CarrerSection from './components/carrer-section/CarrerSection';
import ProjectSection from './components/project-section/ProjectSection';

export function HomePage() {
  return (
    <div className='w-full flex flex-col'>
      <HeroSection />
      <AboutSection />
      <EduSection />
      <CarrerSection />
      <ProjectSection />
    </div>
  );
}
