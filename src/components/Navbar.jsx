import React from "react";
import { RiTeamFill } from "react-icons/ri";
import { FaRobot } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { SiLogseq } from "react-icons/si";
import { useNavigate } from "react-router-dom";

import { MdManageAccounts } from "react-icons/md";

const Navbar = () => {
  const navigation = useNavigate();

  return (
    <div className="h-[12vh] flex items-center justify-around bg-zinc-300  ">
      <div className="flex flex-col justify-center items-center">
        <button
          className="flex flex-col justify-center items-center"
          onClick={() => {
            navigation("/");
          }}
        >
          <IoHome size={40} />
          <p className="text-md font-mono">Home</p>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button onClick={() => {
            navigation("/pillars");
          }} className="flex flex-col justify-center items-center">
          <MdManageAccounts size={40} />
          <p className="text-md font-mono">Founders</p>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button onClick={() => {
            navigation("/logs");
          }} className="flex flex-col justify-center items-center">
          <SiLogseq size={40} />
          <p className="text-md font-mono">Logs</p>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button className="flex flex-col justify-center items-center">
          <RiTeamFill size={40} />
          <p className="text-md font-mono">Team</p>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button className="flex flex-col justify-center items-center">
          <FaRobot size={40} />
          <p className="text-md font-mono">XP titans</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
