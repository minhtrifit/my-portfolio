import { v4 as uuidv4 } from 'uuid';
import { get } from 'lodash';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Tag } from 'antd';
import { useTranslation } from 'react-i18next';
import { useIsMobile } from '@/hooks/useIsMobile';
import { TimelineType } from '@/types';
import { FaPen } from 'react-icons/fa';
import { MdOutlineWork } from 'react-icons/md';

const CarrerSection = () => {
  const { t, i18n } = useTranslation();
  const isMobile = useIsMobile();

  const TIME_LINE: TimelineType[] = [
    {
      title_vi: 'Trường Đại học Khoa Học Tự Nhiên - ĐHQG TPHCM',
      title_en: 'University of Science - VNU HCM',
      date: '2020 - 2024',
      description_vi: 'Cử nhân - Kỹ thuật phần mềm',
      description_en: 'Bachelor degree - Software Engineering',
      skils: [
        'Web Developer',
        'Operating System',
        'Networking',
        'Database',
        'Data structures and Algorithms',
      ],
      icon: <FaPen />,
      logo: '/assets/icons/hcmus.png',
    },
    {
      title_vi: 'Techhaus Vietnam JSC',
      title_en: 'Techhaus Vietnam JSC',
      date: `2025 - ${t('now')}`,
      description_vi: 'Lập trình viên Front-end',
      description_en: 'Front-end developer',
      icon: <MdOutlineWork />,
      skils: ['ReactJS', 'TypeScript', 'TailwindCSS', 'AntDesign'],
      logo: '/assets/icons/techhaus.png',
    },
  ];

  return (
    <section id='process-section' className='w-full flex bg-secondary-gray overflow-x-hidden'>
      <div className='mx-auto w-full max-w-[1024px] px-[16px] my-[100px]'>
        <h2 className='text-center text-primary text-[2rem]'>{t('process')}</h2>

        <VerticalTimeline>
          {TIME_LINE.map((tl) => {
            return (
              <VerticalTimelineElement
                key={uuidv4()}
                date={isMobile ? '' : get(tl, 'date', '')}
                contentStyle={{
                  background: '#0f172a',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'start',
                  gap: '20px',
                }}
                iconStyle={{ background: '#14b3ea', color: '#fff' }}
                icon={get(tl, 'icon', <></>)}
              >
                {!isMobile && <img src={get(tl, 'logo', '')} className='w-[50px]' />}

                <div className='flex flex-col gap-1'>
                  <div className='flex items-start gap-[20px]'>
                    {isMobile && <img src={get(tl, 'logo', '')} className='w-[50px]' />}
                    <h3 className='text-primary my-0'>{get(tl, `title_${i18n.language}`, '')}</h3>
                  </div>

                  {isMobile && (
                    <span className='my-3 text-[0.8rem] text-zinc-400'>{get(tl, 'date', '')}</span>
                  )}

                  <div className='mt-3 flex flex-wrap items-center gap-2'>
                    {tl.skils.map((skill: string) => {
                      return (
                        <Tag key={uuidv4()} color='#1e293b'>
                          {skill}
                        </Tag>
                      );
                    })}
                  </div>

                  <p className='text-zinc-300'>{get(tl, `description_${i18n.language}`, '')}</p>
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default CarrerSection;
