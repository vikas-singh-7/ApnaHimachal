import React from "react";

const Pillars = ({
  trophies,
  xp,
  donation,
  donationr,
  color,
  townHallLevel,
  image,
  profile,
  name,
  role,
  link,
  character,
}) => {
  console.log(profile);

  return (
    <>
      <div
        className={`bg-[${color}] h-[70vh] flex text-white font-mono font-semibold p-5`}
      >
        <div className="h-[100%] flex">
          <div className="h-[100%] w-full gap-2 p-1 grid grid-cols-12 grid-rows-12 ">
            <div className="col-span-7 flex gap-1  row-span-12   p-1  border-2 rounded-md ">
              <div
                className={`  border-2  flex items-center border-zinc-500 rounded-md bg-cover bg-center h-[100%] w-[60%]`}
              >
                {" "}
                <img src={image} alt="" className="h-[100%] w-[100%]" />
              </div>

              <div
                key={Math.random()}
                className="bg-gradient-to-r flex flex-col team-card hover:scale-[1.01]  transition-all duration-300 ease-in-out w-[40%] h-[100%] from-blue-500 to-zinc-400 shadow-lg rounded-lg px-4 py-2 gap-0  border-[2px] border-white font-mono  text-white"
              >
                <div className=" h-[10%] flex items-center  gap-2  font-bold mb-2  ">
                  <span className="text-gray-200 text-[1.2em] ">{name}</span>
                  <span className="text-sm text-gray-300">({role})</span>
                </div>
                <div className=" h-[10%] flex items-center  gap-2  font-bold mb-2  ">
                  <img
                    src="./images/xpLevel.webp"
                    alt=""
                    className="h-[2.5em]"
                  />

                  <span className="text-gray-200 text-[1.2em] ">
                    expLevel:{xp}
                  </span>
                </div>

                <div className="flex h-[20%] items-center mb-2">
                  <img src="./images/th.webp" alt="" className="h-[2.5em]" />
                  <span className="text-lg">
                    Town Hall Level:{townHallLevel}
                  </span>
                </div>

                <div className="flex h-[20%] items-center mb-2">
                  <img
                    src="./images/trophies.png"
                    alt=""
                    className="h-[2.5em]"
                  />
                  <span className="text-lg">Trophies:{trophies} </span>
                </div>

                <div className="flex h-[20%] items-center mb-2">
                  <img
                    src="./images/troops.webp"
                    alt=""
                    className="h-[2.5em]"
                  />
                  <span className="text-lg">Donations :{donation}</span>
                </div>

                <div className="flex h-[20%] items-center mb-2">
                  <img
                    src="./images/troops1.webp"
                    alt=""
                    className="h-[2.5em]"
                  />
                  <span className="text-lg h-[20%] flex items-center">
                    troops Received:{donationr}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-5 row-span-12 border-2 border-black  rounded-md p-2">
              <div className="h-[90%]   w-[100%] flex  flex-col ">
                <h2 className="text-3xl  font-mono ">{name}</h2>
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
