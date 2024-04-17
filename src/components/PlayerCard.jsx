import React from "react";

const PlayerCard = ({ image, Xp, attack, role, name }) => {
  return (
    <>
      <div className="col-span-2 row-span-6 border-[2px] flex justify-center rounded-md p-2">
        <div
          className="h-[100%] bg-[#8F9BA3] hover:cursor-pointer overflow-hidden w-full  bg-cover  rounded-md relative group"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div
            className={`absolute inset-x-0 bottom-[-100%] bg-white bg-opacity-75 p-4 rounded-md group-hover:bottom-0 transition-all duration-300 ease-in-out`}
          >
            <div className="text-center font-semibold text-xl">
              <p>{name}</p>
              <p>Xp:{Xp}</p>
              <p>Attack:{attack}</p>
              <h1>{role}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerCard;
