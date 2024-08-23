import React from 'react'

const TheLast = () => {
  return (
    <div className='bg-neutral-800 w-full h-[930px] '>
        <div className='flex bg-black justify-center w-full'>
            <div className='text-white py-7 '>
                <p className='text-5xl font-Poppins font-bold text-center p-10'>
                Frequently Asked Questions</p>
                <p className='border-2 border-transparent bg-neutral-800 m-2 text-2xl font-Poppins hover:bg-neutral-700 duration-300 p-6 w-[1150px]'>What is Netflix?</p>
                <p className='border-2 border-transparent bg-neutral-800 m-2 text-2xl font-Poppins hover:bg-neutral-700 duration-300 p-6 w-[1150px]'>How much does Netflix cost?</p>
                <p className='border-2 border-transparent bg-neutral-800 m-2 text-2xl font-Poppins hover:bg-neutral-700 duration-300 p-6 w-[1150px]'>Where can I watch?</p>
                <p className='border-2 border-transparent bg-neutral-800 m-2 text-2xl font-Poppins hover:bg-neutral-700 duration-300 p-6 w-[1150px]'>How do I cancel?</p>
                <p className='border-2 border-transparent bg-neutral-800 m-2 text-2xl font-Poppins hover:bg-neutral-700 duration-300 p-6 w-[1150px]'>What can I watch on Netflix?</p>
                <p className='border-2 border-transparent bg-neutral-800 m-2 text-2xl font-Poppins hover:bg-neutral-700 duration-300 p-6 w-[1150px]'>Is Netflix good for kids?</p>

                <div className='p-7'>
                    <p className='text-center text-lg font-Poppins p-5'>
                        Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className='items-center flex justify-center'>
                        <input type="text"
                        placeholder='Email Address'
                        className='border-2 border-neutral-800 bg-neutral-900 rounded-sm w-[400px] h-14 p-3' />
                        <button className='border-2 border-[#FF1C0B] bg-[#FF1C0B] hover:bg-red-700 hover:border-red-700 duration-300 ml-2 h-14 w-52 rounded-sm text-3xl'>
                            Get Started</button>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default TheLast