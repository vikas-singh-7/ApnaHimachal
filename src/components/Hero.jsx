import React from "react";


const Hero = ({ data }) => {
  return (
    <div
      className="h-[80vh] bg-center bg-cover relative"
      style={{ backgroundImage: "url('./images/heroImage.webp')" }}
    >
      <div
        className="absolute left-[50%] rounded-md top-[50%] -translate-y-[50%] -translate-x-[50%] p-2 w-[40%] flex justify-center flex-col items-center backdrop-filter backdrop-blur-none transition duration-300 ease-in-out "
      >
        <h1 className="text-[3.5rem] tracking-tighter font-semibold font-[cursive]">
          {data.name}
        </h1>
        <p className="p-2 rounded-md mt-4 text-[1.5rem] font-[cursive] font-light">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default Hero;
