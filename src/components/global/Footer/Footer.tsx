const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-secondary-gray px-[16px] py-[5px]'>
      <div className='mx-auto w-full max-w-[1024px] flex items-center justify-center'>
        <span className='flex flex-wrap items-center justify-center sm:justify-start gap-2'>
          © Copyright {year} & built with ❤️ by
          <p className='text-primary'>minhtrifit</p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
