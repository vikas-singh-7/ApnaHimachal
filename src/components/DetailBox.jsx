import React from "react";
import DetailCompo from "./DetailCompo";

const DetailBox = () => {
  const details = [
    {
      image: "./images/founding.jpg",
      para1: "Fouding Members",
      para2: "your courage and loyalty built our clan's legacy",
    },
    {
      image: "./images/clanDetails3.jpg",
      para1: "Chronicles of Triumph: Clan Logs",
      para2: "Tracking our triumphs, one battle at a time."
    },
    {
      image: "./images/detail1.webp",
      para1: "Our Team",
      para2: "United we stand, together we triumph"
    },
    {
      image: "./images/xp.jpg",
      para1: "XP Titans of the Clan",
      para2: "Masters of experience,your skill lights our path to victory!"
    },
    
  ];
  return (
    <div className=" h-auto bg-[#FFB703] px-28 py-8">
      <div className="h-auto w-[100%]  grid grid-cols-12 grid-rows-8 gap-4">
        {details.map((item) => {
          return (
            <div key={Math.random()} className="row-span-4 col-span-6 hover:cursor-pointer hover:scale-[1.02] transition-all ease-linear duration-75 p-2">
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
        <button className="rounded-md bg-black mt-5 text-white font-semibold px-3 py-2 hover:bg-zinc-700 transition-all duration-150 ease-in-out">
          Core Pillars
        </button>
      </div>
    </div>
  );
};

export default DetailBox;
