import React from "react";
import { RiTeamFill } from "react-icons/ri";
import { FaRobot } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { SiLogseq } from "react-icons/si";
import { NavLink, useLocation } from "react-router-dom";
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
      link: "/about",
      logo: <FaRobot size={40} />,
      desc: "About",
    },
  ];

  const location = useLocation();

  return (
    <>
      <div className=" max-sm:hidden h-[12vh] flex items-center justify-around bg-[#1F7AEB]">
        {navs.map((item) => (
          <div
            key={Math.random()}
            className="flex w-[8%] rounded-md hover:bg-[#3F3F46] hover:text-white transition-all cursor-pointer duration-150 ease-linear flex-col justify-center items-center"
          >
            <NavLink
              className={({ isActive }) => {
                return `  ${
                  isActive && "text-white bg-[#3F3F46]"
                } flex items-center justify-center  hover:text-white transition-all duration-100 ease-in-out  flex-col h-[100%] w-[100%] rounded-md`;
              }}
              to={item.link}
             
            >
              <div className="flex flex-col justify-center items-center">
                {item.logo}

                <p className="text-md font-mono">{item.desc}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
      <div className="h-[10vh] md:hidden flex items-center justify-around bg-[#1F7AEB]">
        {navs.map((item) => (
          <div
            key={Math.random()}
            className="flex  rounded-md hover:bg-[#3F3F46] hover:text-white transition-all cursor-pointer duration-150 ease-linear flex-col justify-center items-center"
          >
            <NavLink
              className={({ isActive }) => {
                return `  ${
                  isActive && "text-white "
                } flex items-center justify-center  hover:text-white transition-all duration-100 ease-in-out  flex-col h-[100%] w-[100%] rounded-md`;
              }}
              to={item.link}
            >
              <div className="flex flex-col justify-center items-center">
                {item.logo}

                <p className="text-md font-mono">{item.desc}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
