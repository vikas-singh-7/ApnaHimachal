import React from "react";

const Log2 = ({ image, details, logo }) => {
  return (
    <div className="h-auto">
      <div className="h-[100vh] bg-[#FFB703] grid gap-2 grid-cols-2 grid-rows-1 p-5">
        <div className="col-span-1 border-2 border-black  gap-5 rounded-md grid p-2 grid-cols-1 grid-rows-2">
          <div className="row-span-1">
            <img className="rounded-md" src={image} alt="" />
          </div>
          <div className="row-span-1  font-semibold font-mono px-5 flex justify-center items-center ">
            <div className="h-full w-full ">
              <ol className="text-sm list-outside list-disc">
                {details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
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