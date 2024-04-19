import React, { useEffect } from "react";
import Navbar from "./Navbar";
import TeamGrid from "./TeamGrid";
import TeamPlayet from "./TeamPlayet";

const TeamMembers = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="h-screen bg-[#1F7AEB] ">
        <div className="grid p-1  gap-2 grid-rows-12 grid-cols-12 h-[100vh] ">
          <div className="row-span-9 overflow-hidden flex border-[2px] rounded-md col-span-7 ">
            <img
              src="./images/teamlast.jpg"
              alt=""
              className="  transition-all duration-150 ease-linear"
            />
          </div>
          <div className="row-span-9 border-[2px] border-black col-span-5 rounded-md bg-violet-500 overflow-hidden flex p-2 flex-col items-center">
            <div className="h-full  transition-all duration-150 ease-linear w-full flex flex-col justify-center items-center">
              <div className="h-[60%] w-[40%] rounded-md flex justify-center items-center">
                <img src={data.badgeUrls.large} alt="" />
              </div>
              <div className=" rounded-lg w-[20em] team-card2 bg-[#FFC100]  flex justify-center  ">
                <h2 className="font-[cursive] text-[2rem]   transition-all duration-200 text-black font-semibold">
                  {data.name}
                </h2>
              </div>
            </div>
          </div>
          <div className="row-span-2  col-span-12 rounded-md flex justify-center items-center">
            <h3 className="text-white font-semibold font-mono text-lg">
              "Thank you for your dedication and teamwork; together, we're
              making our clan stronger and more united every day!"
            </h3>
          </div>
          <div className="flex  col-span-12 row-span-1 justify-center items-center ">
            <p className="bg-black text-white rounded-md h-[75%] px-3 py-2 hover:bg-zinc-700 team-card2  transition-all duration-200 ease-linear ">
              we are a team of {data.memberList.length}
            </p>
          </div>
        </div>
      </div>
      {/* <TeamGrid /> */}
      <div className="grid grid-cols-4 h-auto gap-2 p-2 bg-yellow-500 flex-col w-full ">
        {data.memberList.map((item) => {
          return <TeamPlayet key={Math.random()} item={item} data={data} />;
        })}
      </div>
    </>
  );
};

export default TeamMembers;
