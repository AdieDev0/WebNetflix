import React from 'react';

const Tv = () => {
  return (
    <div>
      {/*First TV*/}
      <div className='bg-neutral-800 w-full h-[550px] flex items-center'>
        <div className='w-full px-64 flex justify-between items-center bg-black py-[149px] '>
          <div className='text-white w-full max-w-md'>
            <p className='text-5xl font-Poppins font-bold mb-4'>Enjoy on your TV</p>
            <p className='text-xl font-Poppins'>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
            </p>
          </div>
          <div className='hidden md:block'>
            <img 
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt="TV Illustration"
              className='w-full max-w-xs scale-150'
            />
          </div>
        </div>
      </div>

      {/*Second Mobile*/}
      <div className='bg-neutral-800 w-full h-[550px] flex items-center'>
        <div className='w-full px-64 flex justify-between items-center bg-black py-[155px] '>
          <div className='hidden md:block'>
              <img 
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                alt="TV Illustration"
                className='w-full max-w-xs scale-150'
              />
          </div>

          <div className='text-white w-full max-w-md'>
            <p className='text-5xl font-Poppins font-bold mb-4'>Download your shows to watch offline</p>
            <p className='text-xl font-Poppins'>
            Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>

      {/*HINDI KO ALAM KUNG ANO ITO*/}
      <div className='bg-neutral-800 w-full h-[420px] flex items-center'>
        <div className='w-full px-64 flex justify-between items-center bg-black py-[120px] '>
          <div className='text-white w-full max-w-md'>
            <p className='text-5xl font-Poppins font-bold mb-4'>Watch everywhere</p>
            <p className='text-xl font-Poppins'>
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
            </p>
          </div>
        </div>
      </div>

      <div className='bg-neutral-800 w-full h-[550px] flex items-center'>
        <div className='w-full px-64 flex justify-between items-center bg-black py-[153px] '>
          <div className='hidden md:block'>
              <img 
                src="https://occ-0-1892-395.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
                alt="TV Illustration"
                className='w-full max-w-xs scale-150'
              />
          </div>

          <div className='text-white w-full max-w-md'>
            <p className='text-5xl font-Poppins font-bold mb-4'>Download your shows to watch offline</p>
            <p className='text-xl font-Poppins'>
            Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Tv;
