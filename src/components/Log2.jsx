import React from "react";

const Log2 = ({ image, details, logo, data }) => {
  
  return (
    <>
    <div className="h-auto max-sm:hidden">
      <div className="h-[100vh] bg-[#FFB703] grid gap-2 grid-cols-2 grid-rows-1 p-5">
        <div className="col-span-1 border-2 border-black  gap-5 rounded-md grid p-2 grid-cols-1 grid-rows-2">
          <div className="  font-semibold font-mono px-5 flex justify-center items-center ">
            <div className="h-full w-full ">
              <ol className=" list-outside list-disc text-lg">
                <li> Clan Level :{data.clanLevel}</li>
                <li>
                  {" "}
                  Clan CapitalHall Level :{data.clanCapital.capitalHallLevel}
                </li>
                <li> Clan clanCapitalPoints :{data.clanCapitalPoints}</li>
                {details.map((item) => (
                  <li key={item} >
                    {item}
                  </li>
                ))}
                <li>Clan Description : {data.description}</li>
              </ol>
            </div>
          </div>
        </div>
        <div
          className=" justify-end flex   bg-cover  bg-center col-span-1 "
          //   style={{ backgroundImage: `url(${logo})` }}
        >
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
    <div className="h-auto md:hidden">
      <div className=" bg-[#FFB703] flex flex-col gap-2 p-2">
        <div className="h-[30vh]   flex ">
          <img src={logo} alt="" className="w-[full]" />
        </div>  
        <div className="border-2 border-black  gap-5 rounded-md ">
          <div className="  font-semibold font-mono px-5 flex justify-center items-center ">
            <div className="h-full w-full p-2 ">
              <ol className=" list-outside list-disc text-lg">
                <li> Clan Level :{data.clanLevel}</li>
                <li>
                  {" "}
                  Clan CapitalHall Level :{data.clanCapital.capitalHallLevel}
                </li>
                <li> Clan clanCapitalPoints :{data.clanCapitalPoints}</li>
                {details.map((item) => (
                  <li key={item} >
                    {item}
                  </li>
                ))}
                <li>Clan Description : {data.description}</li>
              </ol>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </>
  );
};

export default Log2;
