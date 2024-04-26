import React from "react";

const Hero = ({ data }) => {
  return (
    <>
    
    <div
      className="md:h-[80vh] w-full max-sm:hidden  max-sm:bg-blue-500 max-sm:text-white   bg-center bg-cover md:relative  "
      style={{ backgroundImage: "url('./images/heroImage.webp')" }}
    >
      <div className="md:hidden bg-blue-500 ">
        <img src={data.badgeUrls.small} alt="" />
      </div>
      <div className="max-sm:-mt-1 md:absolute max-sm:w-[100%]  max-sm:rounded-none max-sm:bg-blue-500 md:left-[50%] rounded-md md:top-[50%] md:-translate-y-[50%] md:-translate-x-[50%] md:p-2 max-sm:p-1 md:w-[40%]  flex md:justify-center flex-col md:items-center backdrop-filter backdrop-blur-none transition duration-300 ease-in-out ">
        <h1 className="md:text-[3.5rem] max-sm:text-[2em] md:tracking-tighter md:font-semibold font-mono max-sm:flex max-sm:justify-start">
          {data.name}
        </h1>
        <p className="md:p-2 rounded-md md:mt-4 text-[1.5rem] ">
          {data.description}
        </p>
        <div className="md:hidden h-[10vh]  w-full font-[cursive] flex  items-center text-[1.7em]">
          <h2>Welcome To Apna Himachal</h2>
        </div>
      </div>
    </div>
    <div
      className="md:hidden pb-4 h-auto w-full bg-[#1F7AEB] max-sm:text-white   bg-center bg-cover md:relative  "
      
    >
      <div className="md:hidden  bg-[#1F7AEB] flex p-1  ">
        <div className="flex  w-full justify-center items-center"><img src={data.badgeUrls.medium} alt="" className="h-[10vh] w-auto " /></div>
      </div>
      <div className="  p-1">
        <h1 className="  flex justify-center items-center max-sm:text-[2em]  font-mono max-sm:flex pb-2 ">
          <p>{data.name}</p>
        </h1>
        <p className="md:p-2 rounded-md md:mt-4 text-[1.5rem] ">
          "{data.description}"
        </p>
       
      </div>
    </div>
    </>
  );
};

export default Hero;
