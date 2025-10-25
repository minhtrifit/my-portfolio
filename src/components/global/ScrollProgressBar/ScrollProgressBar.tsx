import { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // vị trí scroll hiện tại
      const docHeight = document.body.scrollHeight - window.innerHeight; // tổng chiều cao scroll
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='fixed top-[71px] z-[100] left-0 w-full h-1 bg-gray-200'>
      <div
        className='h-1 bg-primary transition-all duration-100'
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
