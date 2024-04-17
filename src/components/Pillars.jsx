import React from "react";

const Pillars = ({
  color,
  image,
  profile,
  name,
  role,
  link,
  character,
  name2,
}) => {
  return (
    <>
      <div
        className={`bg-[${color}] h-auto text-white font-mono font-semibold p-5`}
      >
        <div className="h-auto flex flex-col">
          <div className="h-[60vh] w-full gap-2 p-1 grid grid-cols-12 grid-rows-12 ">
            <div className="col-span-7 row-span-12 grid grid-cols-7 grid-rows-1 p-1  gap-1 border-2 rounded-md ">
              <div
                className={`col-span-3 border-2  border-zinc-500 rounded-md bg-cover bg-center h-full w-full`}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              <div className=" bg-[#7B8EB5] col-span-4 rounded-md  grid grid-cols-1 grid-rows-5 ">
                <div className="row-span-3 h-full w-full ">
                  <img src={profile} className="h-[100%] rounded-md" alt="" />
                </div>
                <div className="row-span-1  flex justify-start items-center p-2">
                  <h2 className="text-[1.7rem] mt-4"> {role}</h2>
                </div>
                <div className="row-span-1 grid grid-cols-7  ">
                  <h3 className="px-3  text-xl col-span-4   ">{name}</h3>
                  <a
                    className="col-span-3 flex justify-start  "
                    target="blank"
                    href={link}
                  >
                    <button className="rounded-md transition-all duration-150 ease-linear hover:bg-zinc-700 w-[65%] h-[70%] bg-zinc-900 col-span-3 -mt-5">
                      Connect
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-5 row-span-12 border-2 border-black  rounded-md p-2">
              <div className="h-[90%]   w-[100%] flex  flex-col ">
                <h2 className="text-3xl  font-mono">{name2}</h2>
                <ol className=" list-outside mt-10 ">
                  {character.map((item) => {
                    return <li key={Math.random()}>{item}</li>;
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pillars;
