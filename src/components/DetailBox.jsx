import React from "react";
import DetailCompo from "./DetailCompo";

const DetailBox = () => {
  const details = [
    {
      image: "./images/detail1.webp",
      para1: "NEWS",
      para2: "Clash Mini Ending Development",
    },
    {
      image: "./images/detail1.webp",
      para1: "NEWS",
      para2: "Clash Mini Ending Development",
    },
    {
      image: "./images/detail1.webp",
      para1: "NEWS",
      para2: "Clash Mini Ending Development",
    },
    {
      image: "./images/detail1.webp",
      para1: "NEWS",
      para2: "Clash Mini Ending Development",
    },
    {
      image: "./images/detail1.webp",
      para1: "NEWS",
      para2: "Clash Mini Ending Development",
    },
    {
      image: "./images/detail1.webp",
      para1: "NEWS",
      para2: "Clash Mini Ending Development",
    },
  ];
  return (
    <div className=" h-auto  px-28 py-8">
      <div className="h-auto w-[100%]  grid grid-cols-12 grid-rows-12 gap-4">
        {details.map((item) => {
          return (
            <div className="row-span-4 col-span-6 hover:cursor-pointer hover:scale-[1.02] transition-all ease-out duration-75 p-2">
              <DetailCompo
                image={item.image}
                para1={item.para1}
                para2={item.para2}
              />
            </div>
          );
        })}
      </div>
      <div className="h-[10vh]  flex justify-center items-center">
        <button className="rounded-md bg-[#2D85F3] mt-5 text-white font-semibold px-3 py-2">
          Core Pillars
        </button>
      </div>
    </div>
  );
};

export default DetailBox;
