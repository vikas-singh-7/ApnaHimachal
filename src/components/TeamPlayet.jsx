import React from "react";
import "./Teamplayer.css";

const TeamPlayet = ({ data, item }) => {
  return (
    <>
      <div
        key={Math.random()}
        className="bg-gradient-to-r team-card hover:scale-[1.01]  transition-all duration-300 ease-in-out col-span-1 h-[55vh] w-[22vw] border-white  border-2  from-blue-500 to-zinc-400 shadow-lg rounded-lg p-7  font-mono max-w-md mx-auto text-white"
      >
        <div className="flex items-center mb-4">
          <span className="text-xl font-semibold">
            <img src={item.league.iconUrls.small} alt="" />
          </span>
        </div>

        <div className="text-2xl font-bold mb-4  ">
          <span className="text-gray-200  ">{item.name}</span>
          <span className="text-sm text-gray-300  ">({item.role})</span>
        </div>

        <div className="flex items-center mb-4">
          <img src="./images/th.webp" alt="" className="h-[2.5em]" />
          <span className="text-lg">Town Hall Level: {item.townHallLevel}</span>
        </div>

        <div className="flex items-center mb-4">
          <img src="./images/trophies.png" alt="" className="h-[2.5em]" />
          <span className="text-lg">Trophies: {item.trophies}</span>
        </div>

        <div className="flex items-center mb-4">
          <img src="./images/troops.webp" alt="" className="h-[2.5em]" />
          <span className="text-lg">Donations Done: {item.donations}</span>
        </div>

        <div className="flex items-center mb-4">
          <img src="./images/troops1.webp" alt="" className="h-[2.5em]" />
          <span className="text-lg">
            Donations Received: {item.donationsReceived}
          </span>
        </div>
      </div>
    </>
  );
};

export default TeamPlayet;
