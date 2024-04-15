import React from "react";
import DetailCompo from "./DetailCompo";

const DetailBox = () => {
  return (
    <div className=" h-auto w-[100vw] px-28 py-8">
      <div className="h-auto w-full  grid grid-cols-12 grid-rows-12 gap-4">
        <div
          className="row-span-4 col-span-6 hover:cursor-pointer hover:scale-[1.02] transition-all ease-out duration-75 p-2"
          
        >
          <DetailCompo />
        </div>
        <div className="row-span-4 col-span-6 hover:cursor-pointer p-2 hover:scale-[1.02] transition-all ease-in-out duration-100 ">
          <DetailCompo />
        </div>
        <div className="row-span-4 col-span-6 hover:cursor-pointer p-2 hover:scale-[1.02] transition-all ease-in-out duration-100">
          <DetailCompo />
        </div>
        <div className="row-span-4 col-span-6 hover:cursor-pointer p-2 hover:scale-[1.02] transition-all ease-in-out duration-100">
          <DetailCompo />
        </div>
        <div className="row-span-4 col-span-6 hover:cursor-pointer p-2 hover:scale-[1.02] transition-all ease-in-out duration-100">
          <DetailCompo />
        </div>
        <div className="row-span-4 col-span-6 hover:cursor-pointer p-2 hover:scale-[1.02] transition-all ease-in-out duration-100">
          <DetailCompo />
        </div>
      </div>
      <div className="h-[10vh] w-full flex justify-center items-center">
        <button className="rounded-md bg-[#2D85F3] mt-5 text-white font-semibold px-3 py-2">Core Pillars</button>
      </div>
    </div>
  );
};

export default DetailBox;
