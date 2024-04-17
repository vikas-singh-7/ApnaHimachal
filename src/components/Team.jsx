import React, { useEffect } from "react";
import Navbar from "./Navbar";
import TeamGrid from "./TeamGrid";

const TeamMembers = () => {
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
              className=" hover:scale-105 transition-all duration-150 ease-linear"
            />
          </div>
          <div className="row-span-9 border-[2px] border-black col-span-5 rounded-md bg-violet-500 overflow-hidden flex p-2 flex-col items-center">
            <div className="h-full hover:scale-105 transition-all duration-150 ease-linear w-full flex flex-col justify-center items-center">
              <div className="h-[60%] w-[40%] rounded-md flex justify-center items-center">
                <img src="./images/clan-badge.png" alt="" />
              </div>
              <div className="h-[40%] flex justify-center  w-full">
                <h2 className="font-[cursive] text-[2rem] text-white font-semibold">
                  Apna Himachal
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
            <p className="bg-black text-white rounded-md h-[75%] px-3 py-2 hover:bg-zinc-700  transition-all duration-150 ease-linear ">
              Our Team
            </p>
          </div>
        </div>
      </div>
      <TeamGrid />
    </>
  );
};

export default TeamMembers;
