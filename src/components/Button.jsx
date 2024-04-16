import React from "react";

const Button = () => {
  return (
    <div className="h-[10vh]  flex justify-start items-center">
      <a
        href="https://link.clashofclans.com/en?action=OpenClanProfile&tag=Q8CLCGYP"
        target="blank"
      >
        <button className="rounded-md w-[7.5rem] bg-black  text-white font-semibold px-3 py-2 hover:bg-zinc-700 transition-all duration-150 ease-in-out">
          Join Us
        </button>
      </a>
    </div>
  );
};

export default Button;
