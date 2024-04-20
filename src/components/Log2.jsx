import React from "react";

const Log2 = ({ image, details, logo, data }) => {
  console.log(data);
  return (
    <div className="h-auto">
      <div className="h-[100vh] bg-[#FFB703] grid gap-2 grid-cols-2 grid-rows-1 p-5">
        <div className="col-span-1 border-2 border-black  gap-5 rounded-md grid p-2 grid-cols-1 grid-rows-2">
          <div className="row-span-1  font-semibold font-mono px-5 flex justify-center items-center ">
            <div className="h-full w-full ">
              <ol className=" list-outside list-disc">
                <li> Clan Level :{data.clanLevel}</li>
                <li>
                  {" "}
                  Clan CapitalHall Level :{data.clanCapital.capitalHallLevel}
                </li>
                <li> Clan clanCapitalPoints :{data.clanCapitalPoints}</li>
                {details.map((item) => (
                  <li key={item} className="text-[1.16em] ">
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
  );
};

export default Log2;
