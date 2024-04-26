import React from "react";

const About1 = ({ data, logo, details }) => {
  return (
    <div>
      <div className="h-[100vh] max-sm:hidden bg-[#1F7AEB] grid gap-2 grid-cols-2 grid-rows-1 p-5">
        <div className="   bg-cover bg-center col-span-1  rounded-md">
          <img src={logo} alt="" />
        </div>
        <div className="col-span-1 border-2  gap-5 rounded-md grid p-2 grid-cols-1 grid-rows-12">
          <div className="row-span-4 h-[90%] rounded-md flex gap-1  flex-col ">
            <div className="h-[100%]  w-[100%] flex justify-center gap-1 items-center ">
              <div className=" h-[90%] hover:scale-[1.02] transition-all duration-200 ease-linear w-[32%] rounded-md flex">
                <img src="./images/js.png" alt="" />
              </div>
              <div className=" h-[90%] hover:scale-[1.02] transition-all duration-300 ease-linear w-[32%] rounded-md flex ">
                <img src="./images/react.webp" alt="" />
              </div>
              <div className=" h-[90%] hover:scale-[1.02] transition-all duration-300 ease-linear w-[32%] rounded-md flex bg-center bg-cover ">
                {" "}
                <img src="./images/nodejs.svg" alt="" />
              </div>
            </div>
            <div className=" p-1 ">
              <h2 className=" font-mono font-semibold text-[1.2em]  text-black">
                Stack Used
              </h2>
            </div>
          </div>

          <div className="row-span-1 text-white font-semibold font-mono px-5 flex justify-center items-center ">
            <div className="h-full w-full ">
              <ol className="list-outside text-md list-disc">
                {details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#1F7AEB] md:hidden flex  flex-col  p-2">
        <div className="h-full w-full  flex flex-col rounded-md border-2 border-white p-2">
          <h2 className=" font-mono font-semibold text-[1.5em]  text-black">
            Stack Used
          </h2>
          <div className="row-span-1 text-white font-semibold font-mono px-5 flex justify-center items-center ">
            <div className="h-full w-full ">
              <ol className="list-outside text-md list-disc">
                {details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default About1;
