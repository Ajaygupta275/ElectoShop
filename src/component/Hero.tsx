import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[E3edf6] mt-4'>
        <div className='container grid md:grid-cols-2 py-8'>
            <div className='flex items-center'>
                <div className='max-w-[450px] space-y-4'>


                
                <p className='text-topHeadingSecondary'>
                       Starting At <span className='font-bold'>$999.00</span>
                </p>
              <h2 className='text-topHeadingPrimary font-bold text-4xl md:text-5xl'>
                  The Best Note bOOK Collection 2024
              </h2>
              <h3 className='text-2xl'>Exclusive offer <span className='text-red-600'>-10%</span>off this Week</h3>
              <a className='inline-block bg-white rounded-md px-6 py-3 hover:bg-accent hover:text-white' href='#' >Shop Now</a>
              </div>
            </div>

        </div>
        
        
        </div>
  )
}

export default Hero