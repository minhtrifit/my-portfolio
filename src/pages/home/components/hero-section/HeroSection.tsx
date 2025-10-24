import Typewriter from 'typewriter-effect';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

const HeroSection = () => {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    triggerOnce: true, // chỉ trigger 1 lần
    threshold: 0.2, // khi 20% phần tử vào viewport
  });

  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className='w-full flex overflow-x-hidden'>
      <div
        className={`mx-auto w-full max-w-[1024px] min-h-[calc(100vh-70px)] px-[16px]
                    flex flex-wrap items-center justify-center sm:justify-between gap-[50px]`}
      >
        <div
          ref={ref}
          className={`opacity-0 transition-opacity duration-700
                        flex flex-col items-center sm:items-start
                        ${inView ? 'opacity-100 animate__animated animate__zoomIn' : ''}
                    `}
        >
          <h1 className='text-primary text-[4rem]'>{t('hello')},</h1>

          <Typewriter
            options={{
              strings: [t('i-am-tri'), t('software-engineer')],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
              wrapperClassName: styles.text, // SCSS module class
              cursorClassName: styles.cursor, // SCSS module class
            }}
          />

          <div className='mt-8 flex flex-wrap items-center gap-2'>
            <a href='https://facebook.com/minhtrifit' target='_blank' rel='noopener noreferrer'>
              <img
                className='w-12 h-auto hover:translate-y-1'
                src='/assets/icons/social-media/facebook.png'
                alt='facebook-icon'
              />
            </a>

            <a href='https://youtube.com/@minhtrifit' target='_blank' rel='noopener noreferrer'>
              <img
                className='w-12 h-auto hover:translate-y-1'
                src='/assets/icons/social-media/youtube.png'
                alt='facebook-icon'
              />
            </a>

            <a
              href='https://linkedin.com/in/lê-minh-trí-89ab94215'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='w-12 h-auto hover:translate-y-1'
                src='/assets/icons/social-media/linkedin.png'
                alt='facebook-icon'
              />
            </a>
          </div>
        </div>

        <img
          ref={imgRef}
          className={`opacity-0 transition-opacity duration-700 w-[350px] ${
            imgInView ? 'opacity-100 animate__animated animate__zoomIn' : ''
          }`}
          src='/assets/images/sword-pose-2.png'
          alt='hero-img'
        />
      </div>
    </section>
  );
};

export default HeroSection;
