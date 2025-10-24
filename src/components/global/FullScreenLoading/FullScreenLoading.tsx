const FullScreenLoading = () => {
  return (
    <div className='bg-primary-gray w-full h-screen flex items-center justify-center'>
      <div className='w-[160px] h-[160px] flex items-center justify-center rounded-full bg-secondary-gray'>
        <img className='w-[150px]' src='/assets/images/logo.png' alt='logo' />
      </div>
    </div>
  );
};

export default FullScreenLoading;
