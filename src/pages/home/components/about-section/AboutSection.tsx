import { v4 as uuidv4 } from 'uuid';
import { get } from 'lodash';
import Marquee from 'react-fast-marquee';
import { Button, Card } from 'antd';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { FaPhone } from 'react-icons/fa';
import { TechStackType } from '@/types';

import styles from './styles.module.scss';

const AboutSection = () => {
  const TECH_STACK: TechStackType[] = [
    { name: 'html', logo: '/assets/icons/technicals/html.png' },
    { name: 'css', logo: '/assets/icons/technicals/css.png' },
    { name: 'javascript', logo: '/assets/icons/technicals/javascript.png' },
    { name: 'typescript', logo: '/assets/icons/technicals/typescript.png' },
    { name: 'git', logo: '/assets/icons/technicals/git.png' },
    { name: 'reactjs', logo: '/assets/icons/technicals/reactjs.png' },
    { name: 'nextjs', logo: '/assets/icons/technicals/nextjs.png' },
    { name: 'tailwindcss', logo: '/assets/icons/technicals/tailwindcss.png' },
    { name: 'bootstrap', logo: '/assets/icons/technicals/bootstrap.png' },
    { name: 'nodejs', logo: '/assets/icons/technicals/nodejs.png' },
    { name: 'nestjs', logo: '/assets/icons/technicals/nestjs.png' },
    { name: 'postgresql', logo: '/assets/icons/technicals/postgresql.png' },
    { name: 'mongo', logo: '/assets/icons/technicals/mongo.png' },
  ];

  const { t } = useTranslation();

  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: skillRef1, inView: skillInView1 } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: skillRef2, inView: skillInView2 } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: skillRef3, inView: skillInView3 } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section id='about-section' className='w-full flex bg-secondary-gray overflow-x-hidden'>
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
          ref={ref}
          className={`opacity-0 transition-opacity duration-700 primary-card
                        ${inView ? 'opacity-100 animate__animated animate__fadeInRight' : ''}
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

        {/* Skills Block */}
        <div className='mt-10 col-span-full'>
          <h2 className='text-[2rem] text-primary text-center'>{t('skills')}</h2>

          <div className='mt-5 mb-10 flex items-center justify-center'>
            <span className='text-center'>{t('skills-description')}</span>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <Card
              ref={skillRef1}
              className={`opacity-0 transition-opacity duration-700 delay-[0ms]
                          ${styles.skill__card}
                          ${skillInView1 ? 'opacity-100 animate__animated animate__fadeInLeft' : ''}
                        `}
            >
              <img
                className='w-full h-[300px] rounded-t-md object-cover'
                src='/assets/images/working.png'
                alt='about-working-img'
              />

              <div className='flex flex-col p-3'>
                <h3 className='my-0 h-[56px] line-clamp-2 text-center text-primary font-semibold text-lg'>
                  {t('skills-list.title-1')}
                </h3>
                <p className='text-center text-sm text-gray-600 h-[60px] line-clamp-3'>
                  {t('skills-list.description-1')}
                </p>
              </div>
            </Card>

            <Card
              ref={skillRef2}
              className={`opacity-0 transition-opacity duration-700 delay-[300ms]
                          ${styles.skill__card}
                          ${skillInView2 ? 'opacity-100 animate__animated animate__fadeInLeft' : ''}
                        `}
            >
              <img
                className='w-full h-[300px] rounded-t-md object-cover'
                src='/assets/images/coding.png'
                alt='about-coding-img'
              />

              <div className='flex flex-col p-3'>
                <h3 className='my-0 h-[56px] line-clamp-2 text-center text-primary font-semibold text-lg'>
                  {t('skills-list.title-2')}
                </h3>
                <p className='text-center text-sm text-gray-600 h-[60px] line-clamp-3'>
                  {t('skills-list.description-2')}
                </p>
              </div>
            </Card>

            <Card
              ref={skillRef3}
              className={`opacity-0 transition-opacity duration-700 delay-[600ms]
                          ${styles.skill__card}
                          ${skillInView3 ? 'opacity-100 animate__animated animate__fadeInLeft' : ''}
                        `}
            >
              <img
                className='w-full h-[300px] rounded-t-md object-cover'
                src='/assets/images/study.png'
                alt='about-eat-study-img'
              />

              <div className='flex flex-col p-3'>
                <h3 className='my-0 h-[56px] line-clamp-2 text-center text-primary font-semibold text-lg'>
                  {t('skills-list.title-3')}
                </h3>
                <p className='text-center text-sm text-gray-600 h-[60px] line-clamp-3'>
                  {t('skills-list.description-3')}
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Tech Stack Block */}
        <div className='mt-10 col-span-full'>
          <h2 className='text-[2rem] text-primary text-center'>{t('tech-stack')}</h2>

          <div className='mt-5 mb-10 flex items-center justify-center'>
            <span className='text-center'>{t('tech-description')}</span>
          </div>

          <Marquee autoFill>
            {TECH_STACK.map((tech: { name: string; logo: string }) => {
              return (
                <div key={uuidv4()} className='mx-10 h-[80px]'>
                  <div className='w-full h-full bg-primary-gray px-6 rounded-md flex items-center justify-center'>
                    <img
                      src={get(tech, 'logo', '')}
                      className='w-[50px]'
                      alt={`${get(tech, 'name', '')}-logo`}
                    />
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
