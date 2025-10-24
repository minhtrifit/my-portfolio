import { useLocation, useNavigate } from 'react-router-dom';
import LanguageToggle from '../LanguageToggle/LanguageToggle';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

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

  return (
    <header className='fixed top-0 left-0 z-[100] w-full h-[70px] flex bg-secondary-gray shadow-md'>
      <div
        className='w-full max-w-[1024px] mx-auto px-[16px] py-[10px]
                    flex items-center justify-between'
      >
        <div className='w-[70px] hover:cursor-pointer' onClick={handleNavigateHome}>
          <img className='w-full' src='/assets/images/logo.png' alt='logo' />
        </div>

        <LanguageToggle />
      </div>
    </header>
  );
};

export default Header;
