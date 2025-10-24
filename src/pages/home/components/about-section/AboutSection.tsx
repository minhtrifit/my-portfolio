import { v4 as uuidv4 } from 'uuid';
import Marquee from 'react-fast-marquee';
import { Button } from 'antd';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { FaPhone } from 'react-icons/fa';

const AboutSection = () => {
  const TECH_STACK = [
    { name: 'html', logo: '/assets/icons/technicals/html.png' },
    { name: 'css', logo: '/assets/icons/technicals/css.png' },
    { name: 'javascript', logo: '/assets/icons/technicals/javascript.png' },
    { name: 'typescript', logo: '/assets/icons/technicals/typescript.png' },
    { name: 'reactjs', logo: '/assets/icons/technicals/reactjs.png' },
    { name: 'nextjs', logo: '/assets/icons/technicals/nextjs.png' },
    { name: 'tailwindcss', logo: '/assets/icons/technicals/tailwindcss.png' },
    { name: 'nodejs', logo: '/assets/icons/technicals/nodejs.png' },
    { name: 'nestjs', logo: '/assets/icons/technicals/nestjs.png' },
    { name: 'postgresql', logo: '/assets/icons/technicals/postgresql.png' },
    { name: 'mongo', logo: '/assets/icons/technicals/mongo.png' },
  ];

  const { t } = useTranslation();

  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className='w-full flex bg-secondary-gray'>
      <div
        className='mx-auto w-full max-w-[1024px] px-[16px] my-[100px]
                    grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-[50px]'
      >
        <img
          ref={imgRef}
          className={`opacity-0 transition-opacity duration-700 w-[350px] mx-auto
                        ${imgInView ? 'opacity-100 animate__animated animate__fadeInLeft' : ''}
                    `}
          src='/assets/images/typing-1.png'
          alt='about-img'
        />

        <div
          className={`opacity-0 transition-opacity duration-700 primary-card
                        ${imgInView ? 'opacity-100 animate__animated animate__fadeInRight' : ''}
                    `}
        >
          <h2 className='text-primary'>{t('introduction')}</h2>
          <p className='text-[0.95rem] text-justify leading-loose'>{t('detail-introduction')}</p>

          <div className='w-full flex justify-end'>
            <Button type='primary' icon={<FaPhone />}>
              {t('contact')}
            </Button>
          </div>
        </div>

        <div className='mt-10 col-span-full'>
          <h2 className='text-[2rem] text-primary text-center'>{t('tech-stack')}</h2>

          <Marquee autoFill>
            {TECH_STACK.map((tech: { name: string; logo: string }) => {
              return (
                <div key={uuidv4()} className='mx-10 h-[100px]'>
                  <div className='w-full h-full bg-primary-gray px-6 rounded-md flex items-center justify-center '>
                    <img src={tech.logo} className='w-[60px]' alt={`${tech.name}-logo`} />
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
