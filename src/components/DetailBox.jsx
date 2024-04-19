import React from "react";
import DetailCompo from "./DetailCompo";
import { useNavigate } from "react-router-dom";


const DetailBox = () => {
  const navigate = useNavigate();
  const details = [
    {
      image: "./images/founding-min.jpg",
      para1: "Fouding Members",
      para2: "your courage and loyalty built our clan's legacy",
      navigation: "/pillars",
    },
    {
      image: "./images/clanDetails3.jpg",
      para1: "Chronicles of Triumph: Clan Logs",
      para2: "Tracking our triumphs, one battle at a time.",
      navigation: "/logs",
    },
    {
      image: "./images/detail1.webp",
      para1: "Our Team",
      para2: "United we stand, together we triumph",
      navigation: "/Team",
    },
    {
      image: "./images/Xp-min.jpg",
      para1: "About",
      para2: "Me and Tech used",
      navigation: "/about",
    },
  ];
  return (
    <div className=" h-auto bg-[#FFB703] px-28 py-8">
      <div className="h-auto w-[100%]  grid grid-cols-12 grid-rows-8 gap-4">
        {details.map((item) => {
          return (
            <div
              onClick={() => {
                navigate(item.navigation);
              }}
              key={Math.random()}
              className="row-span-4 .inner-content:hover col-span-6 hover:cursor-pointer hover:scale-[1.02] transition-all ease-linear duration-75 p-2 "
            >
              <DetailCompo
                image={item.image}
                para1={item.para1}
                para2={item.para2}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailBox;
