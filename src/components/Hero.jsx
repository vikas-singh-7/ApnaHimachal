import React from 'react'

const Hero = () => {
  return (
   
         <div className='md:h-[80vh] max-sm:h-[50vh]  bg-[url("./images/heroImage.webp")]  bg-center bg-cover relative max-sm:bg-[url("./images/heromobile.webp")]'>
        <div className="absolute left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] p-2 w-[40%] flex justify-center flex-col items-center ">
          <h1 className="text-[4rem]  leading-none tracking-tight  font-semibold font-mono">
            Apna Himachal
          </h1>
          <p className="mt-4 text-[1.5rem] font-serif font-light">
            The nature has so much to offer,{" "}
          </p>
          <p className="text-[1.5rem] font-serif font-light">
            dont chase after the things you want{" "}
          </p>
          <p className="text-[1.5rem] font-serif font-light">
            let them come to you :)
          </p>
        </div>
        
      </div>
    
  )
}

export default Hero