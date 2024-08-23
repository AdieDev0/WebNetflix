import React from 'react';
import Netflix from '../assets/Netflix.png';

const NavHero = () => {
  return (
    <div className='relative'>
        {/* Background Photo */}
        <img 
            src={Netflix} 
            alt="Background" 
            className='w-full h-auto object-cover bg-black'
        />

        {/* Black Overlay */}
      <div className='absolute inset-0 bg-black/40'></div>

        {/* Logo and Button Container */}
        <div className='absolute top-1 left-4 right-4 flex justify-between items-center px-40 h-[90px]'>
            {/* Logo */}
            <img 
                src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" 
                alt="Netflix Logo" 
                className='h-[85px]' // Adjust height as needed
            />

            {/* Sign In Button */}
            <button className='text-white text-sm bg-[#FF1C0B] border-2 border-red-700 px-3 py-1 rounded hover:bg-red-800 duration-300'>
                Sign In
            </button>

            <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white mt-[400px]'>
              <p className='text-5xl font-bold mb-4 font-Poppins'>Unlimited movies, TV shows, and more</p>
              <p className='text-2xl mb-4'>Watch anywhere. Cancel anytime.</p>
              <p className='text-xl mb-6'>Ready to watch? Enter your email to create or restart your membership.</p>
              <div className='flex'>
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className='pr-48 px-4  rounded-md border-2 border-gray-600 outline-none mr-2 bg-black/40'
                />
                <button className='bg-[#FF1C0B] text-white px-6 py-3 rounded-md border-none hover:bg-red-700 text-2xl'>
                  Get Started
                </button>
              </div>
            </div>

        </div>
    </div>
  );
}

export default NavHero;
