import React from "react";
import Navbar from "./Navbar";

const Log = () => {
  return (
    <>
      <Navbar />
      <div className="h-auto">
        <div className="h-[100vh] bg-[#1F7AEB] grid gap-2 grid-cols-2 grid-rows-1 p-5">
          <div className="  bg-cover bg-center col-span-1 bg-[url('./images/logs.png')]"></div>
          <div className="col-span-1 border-2  gap-5 rounded-md grid p-2 grid-cols-1 grid-rows-2">
            <div className="row-span-1">
              <img className="rounded-md" src="./images/warLog.jpg" alt="" />
            </div>
            <div className="row-span-1 bg-violet-500"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Log;
