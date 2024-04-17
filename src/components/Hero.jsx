import React from "react";

const Hero = () => {
  return (
    <div
      className='h-[80vh]  bg-center bg-cover relative'
      style={{ backgroundImage: "url('./images/heroImage.webp')" }}
    >
      <div className="absolute left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] p-2 w-[40%] flex justify-center flex-col items-center ">
        <h1 className="text-[3.5rem]   tracking-tighter  font-semibold font-[cursive]">
          Apna Himachal
        </h1>
        <p className="mt-4 text-[1.5rem] font-[cursive] font-light">
          The nature has so much to offer,{" "}
        </p>
        <p className="text-[1.5rem] font-[cursive] font-light">
          dont chase after the things you want{" "}
        </p>
        <p className="text-[1.5rem] font-[cursive] font-light">
          let them come to you :)
        </p>
      </div>
    </div>
  );
};

export default Hero;
