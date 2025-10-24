import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // chỉ trigger 1 lần
    threshold: 0.2, // khi 20% phần tử vào viewport
  });

  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className='w-full flex'>
      <div
        className='mx-auto w-full max-w-[1200px] px-[16px] py-[100px]
                    flex flex-wrap items-center justify-center sm:justify-between gap-[30px]'
      >
        <div
          ref={ref}
          className={`opacity-0 transition-opacity duration-700 ${
            inView ? 'opacity-100 animate__animated animate__zoomIn' : ''
          }`}
        >
          <h2 className='text-2xl font-bold'>Xin chào, tôi vừa được animate!</h2>
          <p>Phần tử này chỉ hiện animation khi bạn scroll tới.</p>
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
