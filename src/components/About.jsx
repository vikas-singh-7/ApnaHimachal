import React from "react";
import Navbar from "./Navbar";
import LogChild from "./LogChild";

const About = () => {
  const details = [
    {
      logo: "./images/pekka.webp",
      details: [
        "HTML",
        "Css",
        "ReactJs",
        "TailwindCss",
        "React Router Dom",
        "React Icons",
        "Vite",
        "Locomotive Scroll",
      ],
      image: "./images/tech1.png",
    },
  ];
  return (
    <>
      <Navbar />
      {details.map((item) => {
        return (
          <LogChild
            key={Math.random()}
            logo={item.logo}
            image={item.image}
            details={item.details}
          />
        );
      })}
      <div className="h-[15vh] bg-[#1F7AEB] p-2 flex justify-around items-center">
        <div className="w-[30%] h-[100%] hover:cursor-pointer hover:bg-slate-300  bg-white flex justify-center items-center rounded-md ">
          <h2 className="text-xl font-mono">View Source Code</h2>
        </div>
        <div className="">
          <h3 className="text-xl font-mono text-white font-semibold">
            Feel Free To Make Out Your Modifications and Contributions :)
          </h3>
        </div>
      </div>
      <div className="h-[70vh] bg-yellow-500 p-2 flex justify-center items-center">
        <div className="h-[100%] w-[100%] grid gap-2 rounded-md  grid-cols-12 grid-rows-12">
          <div className="col-span-6 row-span-12 flex justify-center items-center">
            <div className="h-[80%] w-[80%]  border-2 rounded-md border-black p-10">
              <div className="  h-auto">
                <h2 className="text-violet-500 text-xl font-mono font-semibold">
                  About Me
                </h2>
                <h3 className="text-xl text-zinc-600 font-semibold font-mono">
                  Vikas Singh,FrontEnd Engineer
                </h3>
              </div>
              <div className="  h-[50%] justify-center items-center  font-mono font-semibold flex">
                <h3>
                  A Noob FrontEnd Enginner Who hate and love to code,I holds
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
