import React from "react";
import Navbar from "./Navbar";
import LogChild from "./LogChild";
import About1 from "./About1";

const About = ({ data }) => {
  const details = [
    {
      logo: "./images/pekka.webp",
      detail: [
        "HTML",
        "Css",
        "javaScript",
        "ReactJs",
        "express",
        "nodeJs",
        "TailwindCss",
        "React Router Dom",
        "React Icons",
        "Vite",
        "Locomotive Scroll",
        "Coc API",
      ],
    },
  ];
  return (
    <>
      <Navbar />
      {details.map((item) => {
        return (
          <About1
            key={Math.random()}
            data={data}
            logo={item.logo}
            details={item.detail}
          />
        );
      })}
      <div className="h-[15vh] w-[100%] bg-[#1F7AEB]  flex items-center justify-around">
        <div className="h-[15vh] w-[40%]  p-2 flex justify-around items-center">
          <a
            href="https://github.com/vikas-singh-7/ApnaHimachal"
            className="hover:cursor-pointer h-[95%] w-[70%] hover:bg-slate-200  bg-white flex justify-center items-center rounded-md text-black"
            target="blank"
          >
            <h2 className="text-[2em] font-mono ">View Source Code</h2>
          </a>
        </div>

        <div className="w-[50%] ">
          <h3 className="text-xl font-mono text-white font-semibold">
            Feel Free To Make Out Your Modifications and Contributions :)
          </h3>
        </div>
      </div>
      <div className="h-[70vh] bg-yellow-500 p-2 flex justify-center items-center">
        <div className="h-[100%] w-[100%] grid gap-2 rounded-md  grid-cols-12 grid-rows-12">
          <div className="col-span-6 row-span-12 flex justify-center items-center">
            <div className="h-[80%] w-[80%]  border-2 rounded-md border-black p-8">
              <div className="h-[30%] flex flex-col ">
                <h2 className="text-violet-500 text-[1.8em] font-mono font-semibold">
                  About Me
                </h2>
                <h3 className="text-xl mt-4 text-[1.5em] text-zinc-600 font-semibold font-[cursive]">
                  Vikas Singh,FrontEnd Engineer
                </h3>
              </div>
              <div className="h-[40%]  justify-center items-center  font-mono font-semibold flex">
                <h3 className="text-[1.3em]">
                  A Noob FrontEnd Enginner Who hate and love to code,I hold
                  Graduation Degree in Computer Science ,I would say (Covid
                  Graduation )💀
                </h3>
              </div>
              <div className="flex h-[30%] w-full justify-start items-center ">
                <div className=" h-[60%] hover:bg-zinc-800  transition-all duration-150 ease-linear hover:cursor-pointer flex  justify-center items-center rounded-md w-[30%] bg-black text-white text-lg">
                  <a
                    href="https://drive.google.com/file/d/13XRHpjpFnZ5msA-bxjH61mgjn-_9MBBq/view?usp=drivesdk"
                    target="blank"
                  >
                    View Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6 row-span-12 flex justify-center items-center  ">
            <div className="h-[100%] flex justify-center  w-[100%] rounded-md  bg-cover bg-center ">
              <img src="./images/Girl.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
