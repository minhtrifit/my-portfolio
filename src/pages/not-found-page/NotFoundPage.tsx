import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export function NotFoundPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className='w-full h-screen bg-primary-gray text-[#FFF] flex items-center justify-center'>
      <div className='flex flex-col gap-5 items-center justify-center'>
        <img className='w-[300px]' src='/assets/images/typing-2.png' />
        <h2 className='my-0'>404</h2>
        <span className='text-zinc-300 text-[0.9rem]'>{t('page-not-found')}</span>

        <Button
          type='primary'
          onClick={() => {
            navigate('/');
          }}
        >
          {t('back-homepage')}
        </Button>
      </div>
    </div>
  );
}
