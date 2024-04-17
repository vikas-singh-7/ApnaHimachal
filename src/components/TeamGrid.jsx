import React from "react";

const TeamGrid = () => {
  return (
    <div className="flex">
      <div className="h-[100vh] w-full grid grid-cols-10 p-2 grid-rows-12 bg-[#FFB703]">
        <div className="col-span-2 row-span-6 rounded-md p-2 bg-blue-500">
          <div className="h-full hover:cursor-pointer overflow-hidden w-full bg-[url('./images/king1.webp')] bg-cover bg-center rounded-md relative group">
            {/* Details div initially hidden and slides up on hover */}
            <div className="absolute inset-x-0 bottom-[-100%] bg-white bg-opacity-75 p-4 rounded-md group-hover:bottom-0 transition-all duration-300 ease-in-out">
              <div className="text-center font-semibold text-xl">
                <h1>Leader</h1>
                <p>Heer Da Ranjha</p>
                <p>XP: 200</p>
                <p>Attack: Good</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;
