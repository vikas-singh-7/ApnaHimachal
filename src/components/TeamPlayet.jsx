import React from "react";
import "./Teamplayer.css";

const TeamPlayet = ({ data, item }) => {

  return (
    <>
      <div
        key={Math.random()}
        className="bg-gradient-to-r flex flex-col team-card hover:scale-[1.01]  transition-all duration-300 ease-in-out  from-blue-500 to-zinc-400 shadow-lg rounded-lg px-4 py-2    border-[2px] border-white font-mono col-span-4  text-white justify-start"
      >
        <div className="flex items-center ">
          <span className="">
            <img src={item.league.iconUrls.small} alt="" />
          </span>
        </div>

        <div className=" font-bold flex gap-1">
          <span className="text-gray-200 ">{item.name}</span>
          <span className="text-sm text-gray-300  ">({item.role})</span>
        </div>

        <div className="flex items-center gap-1">
          <img src="./images/xpLevel.webp" alt="" className="h-[2.5em]" />
          <span className="text-lg">xpLevel: {item.expLevel}</span>
        </div>
        <div className="flex items-center gap-1">
          <img src="./images/th.webp" alt="" className="h-[2.5em]" />
          <span className="text-lg">Town Hall Level: {item.townHallLevel}</span>
        </div>

        <div className="flex  items-center gap-1">
          <img src="./images/trophies.png" alt="" className="h-[2.5em]" />
          <span className="text-lg">Trophies: {item.trophies}</span>
        </div>

        <div className="flex items-center gap-1">
          <img src="./images/troops.webp" alt="" className="h-[2.5em]" />
          <span className="text-lg">Donations: {item.donations}</span>
        </div>

        <div className="flex items-center gap-1">
          <img src="./images/troops1.webp" alt="" className="h-[2.5em]" />
          <span className="text-lg">
            Troops Received: {item.donationsReceived}
          </span>
        </div>
      </div>
    </>
  );
};

export default TeamPlayet;
