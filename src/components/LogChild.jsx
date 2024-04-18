import React from "react";

const LogChild = ({ image, details, logo, data }) => {
  console.log(data);
  return (
    <div className="h-auto">
      <div className="h-[100vh] bg-[#1F7AEB] grid gap-2 grid-cols-2 grid-rows-1 p-5">
        <div
          className="  bg-cover bg-center col-span-1 bg-[url('./images/logs.png')] rounded-md"
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
        <div className="col-span-1 border-2  gap-5 rounded-md grid p-2 grid-cols-1 grid-rows-2">
          <div className="row-span-1">
            <img className="rounded-md" src={image} alt="" />
          </div>
          <div className="row-span-1 text-white font-semibold font-mono px-5 flex justify-center items-center ">
            <div className="h-full w-full ">
              <ol className="text-sm list-outside list-disc">
                {details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
                {/* <li>war wins : {data}</li>
                <li>current win streak {data}</li> */}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogChild;
