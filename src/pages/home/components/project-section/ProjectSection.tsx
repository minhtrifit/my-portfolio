import { v4 as uuidv4 } from 'uuid';
import { get, map } from 'lodash';
import { Card, Image } from 'antd';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { useJsonData } from '@/hooks/useJsonData';
import { ProjectType } from '@/types';
import { getTechStackIcon } from '@/helpers';
import { LuCalendarCheck2 } from 'react-icons/lu';
import { FiYoutube } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';

import styles from './styles.module.scss';

interface ProjectCardPropType {
  item: ProjectType;
}

const ProjectCard = (props: ProjectCardPropType) => {
  const { item } = props;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const stacks = get(item, 'stacks', []);

  return (
    <Card
      ref={ref}
      className={`opacity-0 transition-opacity duration-700
                  ${styles.project__card}
                  ${inView ? 'opacity-100 animate__animated animate__zoomIn' : ''}
                `}
      cover={
        <Image
          className='p-[1px] rounded-t-lg'
          src={get(item, 'banner', '')}
          alt={`${get(item, 'name', '')}-banner`}
        />
      }
      actions={[
        <a
          key={`${get(item, 'name', '')}-demo-action`}
          href={get(item, 'demo_url', '')}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='flex items-center justify-center gap-2'>
            <FiYoutube />
            <span>Demo</span>
          </div>
        </a>,
        <a
          key={`${get(item, 'name', '')}-code-action`}
          href={get(item, 'code_url', '')}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='flex items-center justify-center gap-2'>
            <FaCode />
            <span>Code</span>
          </div>
        </a>,
      ]}
    >
      <h3 className='text-center text-primary my-0'>{get(item, 'name', '')}</h3>

      <div className='my-2 flex items-center gap-2'>
        <LuCalendarCheck2 />
        <span className='text-[0.8rem]'>{get(item, 'date', '')}</span>
      </div>

      <div className='w-full h-[40px] my-3 flex items-start flex-wrap gap-4'>
        {map(stacks, (s) => {
          return (
            <img
              key={`${get(item, 'name', '')}-${s}-icon`}
              src={getTechStackIcon(s)}
              alt={`${get(item, 'name', '')}-${s}-icon`}
              className='w-[30px]'
            />
          );
        })}
      </div>

      <p className='h-[70px] text-zinc-300 my-1 line-clamp-3'>{get(item, 'desciption', '')}</p>
    </Card>
  );
};

const ProjectSection = () => {
  const { t, i18n } = useTranslation();

  const { data, loading, error } = useJsonData('/assets/utils/projects.json');

  const projects = get(data, 'data', []);

  return (
    <section id='project-section' className='w-full flex overflow-x-hidden'>
      <div className='mx-auto w-full max-w-[1024px] px-[16px] my-[100px]'>
        <h2 className='text-center text-primary text-[2rem]'>{t('projects')}</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {map(projects, (data) => {
            return <ProjectCard key={uuidv4()} item={data} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
