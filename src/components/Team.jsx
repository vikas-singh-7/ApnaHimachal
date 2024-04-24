import React, { useEffect } from "react";
import Navbar from "./Navbar";
import TeamPlayet from "./TeamPlayet";
import "./Team.css";
import { CgScrollH } from "react-icons/cg";

const TeamMembers = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <>
      <Navbar />
      <div className="h-screen max-sm:hidden bg-[#1F7AEB]  ">
        <div className="grid p-1  gap-2 grid-rows-12 grid-cols-12 h-[100vh] ">
          <div className="row-span-9  overflow-hidden flex border-[2px] rounded-md col-span-7 ">
            <img src="./images/detail1.png" alt="" className="h-full w-full" />
          </div>
          <div className="row-span-9 border-[2px] border-black col-span-5 rounded-md bg-[#FFB703] overflow-hidden flex p-2 flex-col items-center">
            <div className="h-full  transition-all duration-150 ease-linear w-full flex flex-col justify-center items-center">
              <div className="h-[60%] w-[40%] rounded-md flex justify-center items-center">
                <img src={data.badgeUrls.large} alt="" />
              </div>
              <div className=" rounded-lg w-[15em]    flex justify-center  ">
                <h2 className="font-[cursive] text-[2rem] team-card2  transition-all duration-200 text-black font-semibold  leading-none">
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
            <p className="bg-black text-white rounded-md  px-3 py-2 hover:bg-zinc-700 team-card2  transition-all duration-200 ease-linear ">
              we are a team of {data.memberList.length}
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto md:hidden bg-[#1F7AEB]   ">
        <div className="grid p-1  gap-1 grid-rows-12 h-[70vh] grid-cols-12 ">
          <div className="row-span-7  overflow-hidden flex border-[2px] rounded-md col-span-12">
            <img src="./images/detail1.png" alt="" className="h-full w-full" />
          </div>

          <div className="row-span-3 col-span-12 rounded-md flex justify-center items-center">
            <h3 className="text-white font-semibold font-mono text-lg">
              "Thank you for your dedication and teamwork; together, we're
              making our clan stronger and more united every day!"
            </h3>
          </div>
          <div className="flex row-span-1 col-span-12  justify-center items-center ">
            <p className="bg-black text-white rounded-md  px-3 py-2 hover:bg-zinc-700 team-card2  transition-all duration-200 ease-linear ">
              we are a team of {data.memberList.length}
            </p>
          </div>
        </div>
      </div>

      <div className="h-auto max-sm:hidden gap-2 p-2 grid grid-cols-12   bg-yellow-500  w-[100%] ">
        {data.memberList.map((item) => {
          return <TeamPlayet key={Math.random()} item={item} data={data} />;
        })}
      </div>

      {/* Fixed scroll div within the parent container */}

      <div className="md:hidden relative mobile gap-2 p-2  overflow-x-scroll bg-yellow-500 w-[100%]">
        <div className="flex justify-between  items-center gap-2">
          {data.memberList.map((item) => {
            return (
              
                <TeamPlayet key={Math.random()} item={item} data={data} />
             
            );
          })}
        </div>
      </div>
      <div className="md:hidden   mobile flex  justify-center items-center text-lg p-2 text-center">
        <CgScrollH size={30} className="
        text-white animate-pulse animate-infinite  " />
      </div>
    </>
  );
};

export default TeamMembers;
