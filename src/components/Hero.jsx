import React from "react";

const Hero = ({ data }) => {
  return (
    <div
      className="md:h-[80vh] w-full  max-sm:h-[80vh] max-sm:bg-blue-500 max-sm:text-white   bg-center bg-cover relative md:bg-[url('./images/heroImage.webp')]"
      // style={{ backgroundImage: "url('./images/heroImage.webp')" }}
    >
      <div className="max-sm:h-[30%] bg-red-500 max-sm:w-[100%] md:hidden md:w-[100%]   rounded-md p-2">
        <img src={data.badgeUrls.medium} alt="" />
      </div>
      <div className="absolute max-sm:w-[100%]   md:left-[50%] rounded-md md:top-[50%] md:-translate-y-[50%] md:-translate-x-[50%] p-2  md:w-[40%]  flex md:justify-center flex-col md:items-center backdrop-filter backdrop-blur-none transition duration-300 ease-in-out ">
        <h1 className="md:text-[3.5rem] max-sm:text-[2em] md:tracking-tighter md:font-semibold font-mono max-sm:flex max-sm:justify-start">
          {data.name}
        </h1>
        <p className="md:p-2 rounded-md mt-4 text-[1.5rem] ">
          {data.description}
        </p>
        <div className="md:hidden h-[17vh] max-sm:-mt-4 w-full font-[cursive] flex  items-center text-[1.7em]">
          <h2>Welcome To Apna Himachal</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
