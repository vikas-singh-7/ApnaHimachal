import React from "react";
import Button from "./Button";

const GirlBox = () => {
  return (
    <div className="md:h-[100vh] max-sm:p-3  bg-[#003A96] md:p-10 max-sm:flex max-sm:h-auto">
      <div className="md:h-full md:w-full flex  md:justify-center md:items-center max-sm:flex max-sm:flex-col md:gap-2">
        <div className="md:h-full w-[50%] max-sm:w-[100%] flex flex-col justify-center items-center md:ml-10">
          <div className=" md:h-[20%] w-full flex items-center">
            <h1 className="font-semibold text-white font-mono text-[2rem] leading-none tracking-tight ">
              Our Aim
            </h1>
          </div>
          <div className=" w-full flex max-sm:pt-5 items-center">
            <h1 className="font-semibold text-white font-mono max-sm:text-[1.2em] md:text-[1rem]  ">
              "Welcome to Apna Himachal! We are a friendly and competitive clan
              focused on teamwork, communication, and growth. We participate in
              regular clan wars and clan games, and are always looking to
              improve our skills and strategies. New members are welcome, but
              please be active, respectful, and contribute to the clan's
              success. Donations are encouraged and reciprocated. Let's build a
              strong community and achieve victory together! Join us and be part
              of the journey!"
            </h1>
          </div>
          <div className="w-full max-sm:hidden mt-5">
            {" "}
            <Button  />
          </div>
        </div>
        <div
          className=" max-sm:flex   md:w-[50%]   flex justify-center items-center "
          
        > <img src="./images/Girl.png" alt="" /></div>
            <div className="w-full md:hidden mt-5">
            {" "}
            <Button  />
          </div>

      </div>
    </div>
  );
};

export default GirlBox;
