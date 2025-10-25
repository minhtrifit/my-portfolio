import { v4 as uuidv4 } from 'uuid';
import { get } from 'lodash';
import { Button } from 'antd';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { CertificateType } from '@/types';

interface CardPropType {
  item: CertificateType;
}

const Card = (props: CardPropType) => {
  const { item } = props;

  const { t, i18n } = useTranslation();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`opacity-0 transition-opacity duration-700 secondary-card
                    flex items-center gap-[30px]
                    ${inView ? 'opacity-100 animate__animated animate__zoomIn' : ''}
                `}
    >
      <img src={get(item, 'img', '')} className='w-[80px]' />

      <div className='flex flex-col items-start'>
        <h3 className='text-[1rem] my-0'>{get(item, `name_${i18n.language}`, '')}</h3>
        <p className='text-[0.9rem] text-zinc-300'>
          {get(item, `description_${i18n.language}`, '')}
        </p>
      </div>
    </div>
  );
};

const EduSection = () => {
  const CERTIFICATES: CertificateType[] = [
    {
      name_vi: 'Bằng cử nhân Công Nghệ Thông Tin',
      name_en: 'Bachelor of Information Technology',
      description_vi: 'Trường Đại học Khoa Học Tự Nhiên - ĐHQG TPHCM, Hạng: Giỏi',
      description_en: 'University of Science - VNU HCM, Rank: Good',
      img: '/assets/icons/bachelor.png',
    },
    {
      name_vi: 'Chứng chỉ ETS TOEIC',
      name_en: 'ETS TOEIC Certificate',
      description_vi: 'Nghe & Đọc, Điểm: 600',
      description_en: 'Listening & Reading, Total: 600',
      img: '/assets/icons/ets-toeic.png',
    },
  ];

  const { t, i18n } = useTranslation();

  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section id='certificate-section' className='w-full flex overflow-x-hidden'>
      <div
        className='mx-auto w-full max-w-[1024px] px-[16px] my-[100px]
                    grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-[50px]'
      >
        <div>
          <h2 className='text-[2rem] text-primary text-center lg:text-left'>{t('edu-certi')}</h2>

          <div className='flex flex-col gap-5'>
            {CERTIFICATES.map((certi) => {
              return <Card key={uuidv4()} item={certi} />;
            })}
          </div>
        </div>

        <img
          ref={imgRef}
          className={`opacity-0 transition-opacity duration-700 w-[350px] mx-auto
                        ${imgInView ? 'opacity-100 animate__animated animate__fadeInRight' : ''}
                    `}
          src='/assets/images/edu.png'
          alt='edu-img'
        />
      </div>
    </section>
  );
};

export default EduSection;
