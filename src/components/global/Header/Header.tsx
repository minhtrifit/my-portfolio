import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Drawer } from 'antd';
import { useTranslation } from 'react-i18next';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useScrollToId } from '@/hooks/useScrollToId';
import { useActiveSection } from '@/hooks/useActiveSection';
import { IoMdMenu } from 'react-icons/io';
import { MdHome, MdOutlineTimeline } from 'react-icons/md';
import { FaUserNinja } from 'react-icons/fa6';
import { GrCertificate } from 'react-icons/gr';
import { FaCode } from 'react-icons/fa';
import LanguageToggle from '../LanguageToggle/LanguageToggle';

import styles from './styles.module.scss';

interface NavMenuType {
  key: string;
  name: string;
  id: string;
  icon: React.ReactNode;
}

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollToId = useScrollToId(70);
  const isMobile = useIsMobile(1024);
  const { t } = useTranslation();

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const NAVIGATIONS: NavMenuType[] = [
    {
      key: 'home-navigate',
      name: t('home'),
      id: 'home-section',
      icon: <MdHome size={20} />,
    },
    {
      key: 'about-navigate',
      name: t('about'),
      id: 'about-section',
      icon: <FaUserNinja size={15} />,
    },
    {
      key: 'certificate-navigate',
      name: t('certificate'),
      id: 'certificate-section',
      icon: <GrCertificate size={20} />,
    },
    {
      key: 'process-navigate',
      name: t('process'),
      id: 'process-section',
      icon: <MdOutlineTimeline size={20} />,
    },
    {
      key: 'project-navigate',
      name: t('projects'),
      id: 'project-section',
      icon: <FaCode size={20} />,
    },
  ];

  const handleNavigateHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const handleNavigateItem = (id: string) => {
    scrollToId(id);
  };

  const showMenu = () => {
    setOpenMenu(true);
  };

  const onCloseMenu = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    if (!isMobile && openMenu) onCloseMenu();
  }, [isMobile]);

  return (
    <>
      <Drawer
        className={styles.mobile__drawer}
        closable={{ 'aria-label': 'Close Button' }}
        onClose={onCloseMenu}
        open={openMenu}
        placement='left'
      >
        <ul className='p-0 flex flex-col'>
          {NAVIGATIONS.map((item) => {
            return (
              <li key={item.key} className='list-none'>
                <div
                  className='px-8 py-4 flex items-center gap-3 hover:cursor-pointer'
                  onClick={() => {
                    handleNavigateItem(item.id);
                    onCloseMenu();
                  }}
                >
                  {item.icon}
                  <span className={`text-[0.9rem] font-semibold`}>{item.name}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </Drawer>

      <header className='fixed top-0 left-0 z-[100] w-full h-[70px] flex bg-secondary-gray shadow-md'>
        <div
          className='w-full max-w-[1024px] mx-auto px-[16px] py-[10px]
                    flex items-center justify-between'
        >
          <div className='w-[70px] hover:cursor-pointer' onClick={handleNavigateHome}>
            <img className='w-full' src='/assets/images/logo.png' alt='logo' />
          </div>

          {!isMobile && (
            <ul className='h-full flex gap-8'>
              {NAVIGATIONS.map((item) => {
                return (
                  <li key={item.key} className='list-none'>
                    <div
                      className={
                        'h-full flex items-center gap-2 hover:text-primary hover:cursor-pointer'
                      }
                      onClick={() => {
                        handleNavigateItem(item.id);
                      }}
                    >
                      {item.icon}
                      <span className={`text-[0.9rem] font-semibold`}>{item.name}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}

          <div className='flex items-center gap-5'>
            <LanguageToggle />
            {isMobile && <Button icon={<IoMdMenu size={20} />} onClick={showMenu} />}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
