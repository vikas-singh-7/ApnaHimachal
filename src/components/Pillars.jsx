import React from "react";

const Pillars = ({
  data,
  color,
  image,
  profile,
  name,
  role,
  link,
  character,
  name2,
}) => {
  return (
    <>
      <div
        className={`bg-[${color}] h-auto text-white font-mono font-semibold p-5`}
      >
        <div className="h-auto flex flex-col">
          <div className="h-[60vh] w-full gap-2 p-1 grid grid-cols-12 grid-rows-12 ">
            <div className="col-span-7 row-span-12 grid grid-cols-7 grid-rows-1 p-1  border-2 rounded-md ">
              <div
                className={`col-span-4 border-2  border-zinc-500 rounded-md bg-cover bg-center h-full w-full`}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              <>
                <div
                  key={Math.random()}
                  className="bg-gradient-to-r team-card hover:scale-[1.01]  transition-all duration-300 ease-in-out w-[20em]    col-span-3   from-blue-500 to-zinc-400 shadow-lg rounded-lg p-7  font-mono max-w-md mx-auto text-white"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-xl font-semibold">
                      <img src={data.badgeUrls.small} alt="" />
                    </span>
                  </div>

                  <div className="text-2xl font-bold mb-4  ">
                    <span className="text-gray-200  ">vikas</span>
                    <span className="text-sm text-gray-300  ">role</span>
                  </div>

                  <div className="flex items-center mb-4">
                    <img src="./images/th.webp" alt="" className="h-[2.5em]" />
                    <span className="text-lg">Town Hall Level:</span>
                  </div>

                  <div className="flex items-center mb-4">
                    <img
                      src="./images/trophies.png"
                      alt=""
                      className="h-[2.5em]"
                    />
                    <span className="text-lg">Trophies: </span>
                  </div>

                  <div className="flex items-center mb-4">
                    <img
                      src="./images/troops.webp"
                      alt=""
                      className="h-[2.5em]"
                    />
                    <span className="text-lg">Donations Done:</span>
                  </div>

                  <div className="flex items-center mb-4">
                    <img
                      src="./images/troops1.webp"
                      alt=""
                      className="h-[2.5em]"
                    />
                    <span className="text-lg">Donations Received:</span>
                  </div>
                </div>
              </>
            </div>
            <div className="col-span-5 row-span-12 border-2 border-black  rounded-md p-2">
              <div className="h-[90%]   w-[100%] flex  flex-col ">
                <h2 className="text-3xl  font-mono">{name2}</h2>
                <ol className=" list-outside mt-10 ">
                  {character.map((item) => {
                    return <li key={Math.random()}>{item}</li>;
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pillars;
