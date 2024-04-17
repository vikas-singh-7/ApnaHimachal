import React from "react";
import { RiTeamFill } from "react-icons/ri";
import { FaRobot } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { SiLogseq } from "react-icons/si";
import { useNavigate } from "react-router-dom";

import { MdManageAccounts } from "react-icons/md";

const Navbar = () => {
  const navs = [
    {
      link: "/",
      logo: <IoHome size={40} />,
      desc: "Home",
    },
    {
      link: "/pillars",
      logo: <MdManageAccounts size={40} />,
      desc: "Founders",
    },
    {
      link: "/logs",
      logo: <SiLogseq size={40} />,
      desc: "Logs",
    },
    {
      link: "/team",
      logo: <RiTeamFill size={40} />,
      desc: "Team",
    },
    {
      link: "/xp",
      logo: <FaRobot size={40} />,
      desc: "XP Titans",
    },
  ];
  const navigation = useNavigate();

  return (
    <div className="h-[12vh] flex items-center justify-around bg-[#1F7AEB]  ">
      {navs.map((item) => {
        return (
          <div
            key={Math.random()}
            className="flex w-[8%] rounded-md hover:bg-[#3F3F46] hover:text-white transition-all hover:cursor-pointer duration-150 ease-linear   flex-col justify-center items-center"
            onClick={() => {
              navigation(item.link);
            }}
          >
            <div className="flex flex-col justify-center items-center">
              {item.logo}
              <p className="text-md font-mono">{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
