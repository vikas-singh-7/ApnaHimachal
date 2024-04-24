import React from "react";

const LogChild = ({ image, details, logo, data }) => {
  return (
    <>
    
    <div className="h-auto max-sm:hidden ">
      <div className="h-[100vh] bg-[#1F7AEB] grid gap-2 grid-cols-2 grid-rows-1 p-5">
        <div className=" flex p-20 bg-cover bg-center col-span-1  rounded-md">
          <img src={logo} alt="" />
        </div>
        <div className="col-span-1 border-2   gap-5 rounded-md grid p-2 grid-cols-1 grid-rows-12 ">
          <div className="row-span-2 flex rounded-md  justify-start  items-center ">
            <div className="  p-1 flex  items-center w-[60%] ">
              <h2 className="font-mono   text-white font-semibold text-[1.2em]">
                War Logs And Details
              </h2>
              <div className=" w-[25%] h-[100%]  flex">
                <img src="./images/warLogo.png" alt="" />
              </div>
            </div>
          </div>

          <div className="row-span-10 text-white font-semibold font-mono px-5 flex justify-center items-center ">
            <div className="h-full w-full ">
              <ol className="list-outside text-md list-disc">
                <li>Name :{data.name}</li>
                <li> Clan Level :{data.clanLevel}</li>
                <li>RequiredTownhallLevel :{data.requiredTownhallLevel}</li>
                <li>requiredTrophies :{data.requiredTrophies}</li>
                <li>Language :{data.chatLanguage.name}</li>
                <li>War Wons : {data.warWins}</li>
                <li>War Win streak : {data.warWinStreak}</li>
                <li>War League : {data.warLeague.name}</li>
                <li>capitalHallLevel: {data.clanCapital.capitalHallLevel}</li>
                {details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="h-auto md:hidden ">
      <div className=" bg-[#1F7AEB] gap-2 p-2 flex flex-col ">
      <div className="h-[30vh] flex ">
          <img src={logo} alt="" className="w-[full]" />
        </div>
        <div className="border-2  rounded-md grid p-1 grid-cols-1 grid-rows-12 ">
          <div className="row-span-2 flex rounded-md  justify-start  items-center ">
            <div className="  p-1 flex justify-around items-center w-[100%] ">
              <h2 className="font-mono   text-white font-semibold text-[1.5em]">
                War Logs And Details
              </h2>
              <div className=" w-[20%] h-[50%] flex  ">
                <img src="./images/warLogo.png" alt="" />
              </div>
            </div>
          </div>

          <div className="row-span-10 p-2 text-white font-semibold font-mono px-5 flex justify-center items-center ">
            <div className="h-full w-full ">
              <ol className="list-outside text-md list-disc">
                <li>Name :{data.name}</li>
                <li>
                  {" "}
                  Clan Level : 
                  {data.clanLevel}
                </li>
                <li>RequiredTownhallLevel :{data.requiredTownhallLevel}</li>
                <li>requiredTrophies :{data.requiredTrophies}</li>
                <li>Language :{data.chatLanguage.name}</li>
                <li>War Wons : {data.warWins}</li>
                <li>War Win streak : {data.warWinStreak}</li>
                <li>War League : {data.warLeague.name}</li>
                <li>capitalHallLevel: {data.clanCapital.capitalHallLevel}</li>
                {details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LogChild;
