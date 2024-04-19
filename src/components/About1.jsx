import React from "react";

const About1 = ({ data, logo, details }) => {
  return (
    <div>
      <div className="h-[100vh] bg-[#1F7AEB] grid gap-2 grid-cols-2 grid-rows-1 p-5">
        <div className="   bg-cover bg-center col-span-1  rounded-md">
          <img src={logo} alt="" />
        </div>
        <div className="col-span-1 border-2  gap-5 rounded-md grid p-2 grid-cols-1 grid-rows-1">
          <div className="row-span-1 bg-zinc-500 rounded-md flex gap-1  flex-col ">
            <div className="h-[95%] w-[100%] flex justify-center gap-1 items-center ">
              <div className=" h-[80%] hover:scale-[1.02] transition-all duration-200 ease-linear w-[32%] rounded-md bg-[url('./images/js.png')] bg-cover bg-center"></div>
              <div className=" h-[80%] hover:scale-[1.02] transition-all duration-300 ease-linear w-[32%] rounded-md bg-[url('./images/react.webp')] bg-cover bg-center"></div>
              <div className=" h-[80%] hover:scale-[1.02] transition-all duration-300 ease-linear w-[32%] rounded-md bg-[url('./images/nodejs.svg')] bg-center bg-cover "></div>
            </div>
            <div className=" p-1">
              <h2 className="text-3xl font-serif  text-white">Stack Used</h2>
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
    </div>
  );
};

export default About1;
