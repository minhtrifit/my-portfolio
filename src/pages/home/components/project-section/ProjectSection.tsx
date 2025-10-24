import { v4 as uuidv4 } from 'uuid';
import { get } from 'lodash';
import { Card } from 'antd';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const ProjectSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className='w-full flex overflow-x-hidden'>
      <div className='mx-auto w-full max-w-[1024px] px-[16px] my-[100px]'>
        <h2 className='text-center text-primary text-[2rem]'>{t('projects')}</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          <Card
            cover={
              <img
                draggable={false}
                alt='example'
                src='/assets/images/projects/windows-11-clone.png'
              />
            }
            actions={[<div key={uuidv4()}>Demo</div>, <div key={uuidv4()}>Code</div>]}
          >
            <h3 className='text-primary my-0'>Windows 11 Clone</h3>
            <p className='text-zinc-300 my-1'>
              Web application simulate operating system inspired from Windows 11
            </p>
          </Card>

          <Card
            cover={
              <img
                draggable={false}
                alt='example'
                src='/assets/images/projects/discord-clone.png'
              />
            }
            actions={[<div key={uuidv4()}>Demo</div>, <div key={uuidv4()}>Code</div>]}
          >
            <h3 className='text-primary my-0'>Discord Clone</h3>
            <p className='text-zinc-300 my-1'>
              Web application simulate operating system inspired from Windows 11
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
