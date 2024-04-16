import React from "react";
import Button from "./Button";

const GirlBox = () => {
  return (
    <div className="h-[100vh]  bg-[#003A96] p-10">
      <div className="h-full w-full flex justify-center items-center gap-2">
        <div className="h-full w-[50%]  flex flex-col justify-center items-center ml-10">
          <div className=" h-[20%] w-full flex items-center">
            <h1 className="font-semibold text-white font-mono text-[2rem] leading-none tracking-tight ">
              Our Aim
            </h1>
          </div>
          <div className=" w-full flex items-center">
            <h1 className="font-semibold text-white font-mono text-[1rem]  ">
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
          <div className="w-full mt-5">
            {" "}
            <Button />
          </div>
        </div>
        <div className="h-full bg-[url('./images/Girl.webp')] bg-cover bg-center w-[50%]  flex justify-center items-center "></div>
      </div>
    </div>
  );
};

export default GirlBox;
