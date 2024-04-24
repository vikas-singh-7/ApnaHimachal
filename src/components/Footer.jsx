import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const address = [, "rajput vikas", "Lehroon", "Pathankot", "145022", "India"];
  const links = [
    {
      name: "Terms of Services",
      link: "https://supercell.com/en/terms-of-service/",
    },
    {
      name: "Privacy Policy",
      link: "https://supercell.com/en/privacy-policy/",
    },
    {
      name: "Parent's Guide",
      link: "https://supercell.com/en/parents/",
    },
    {
      name: "Safe and Fair Play Policy",
      link: "https://supercell.com/en/safe-and-fair-play/",
    },
    {
      name: "Other Legal Docs",
      link: "https://supercell.com/en/our-legal-documents/",
    },
    {
      name: "For Media",
      link: "https://supercell.com/en/for-media/",
    },
    {
      name: "Our Domain",
      link: "https://supercell.com/en/our-domains/",
    },
    {
      name: "Manage Cookies",
      link: "https://supercell.com/en/#",
    },
  ];
  const follow = [
    {
      image: "./images/github2.png",
      link: "https://github.com/vikas-singh-7",
    },
    {
      image: "./images/facebook.webp",
      link: "https://www.facebook.com/profile.php?id=100092300324887&mibextid=rS40aB7S9Ucbxw6v",
    },
    {
      image: "./images/instagram.webp",
      link: "https://www.instagram.com/rajputvikas_1?utm_source=qr&igsh=NTFmMGw3bDM3aTZm",
    },
    {
      image: "./images/likedin.webp",
      link: "https://www.linkedin.com/in/vikas-singh-a7229626b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      image: "./images/titter.webp",
      link: "https://x.com/RajputVikas_1?t=ByN9yL68SxrEjqxnOeE-xw&s=08",
    },
  ];
  return (
    <div className="md:h-[70vh] bg-[#000000] md:p-4 max-sm:p-2 md:flex max-sm:flex-col justify-center items-center">
      <div className="md:h-[90%] md:w-[80%]  flex flex-col ">
        <div className="md:h-[30%] md:w-full flex items-center md:justify-center ">
          <div className="md:h-[80%] md:w-[50%]">
            <div className="py-2">
              <p className="text-white tracking-tight md:font-sm  max-sm:text-[1.4em] font-mono">
                Connect with me{" "}
              </p>
            </div>
            <div className="flex md:justify-between   md:w-[60%] ">
              {follow.map((item) => {
                return (
                  <div
                    key={Math.random()}
                    className="md:h-[3em] rounded-md transition-all duration-150 ease-linear hover:bg-zinc-700 flex justify-start  w-[3rem] p-2"
                  >
                    <a target="blank" href={item.link} className="flex">
                      <img src={item.image} alt="" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="max-sm:hidden max-sm:bg-red-500 md:h-[80%] md:w-[50%] md:flex gap-2 p-2 justify-center items-center ">
            <div className="md:h-[90%]  md:w-full px-4 py-[2px]  ">
              <a
                target="blank"
                href="https://apps.apple.com/us/developer/supercell/id488106216"
              >
                <div
                  className="  border-y-[1px]  bg-cover bg-center h-full w-full rounded-md"
                  style={{ backgroundImage: "url('./images/appstore.png')" }}
                ></div>
              </a>
            </div>
            <div className="h-[90%] w-full  px-4 py-[2px]">
              <a
                target="blank"
                href="https://play.google.com/store/apps/dev?id=6715068722362591614&hl=en&pli=1"
              >
                <div
                  className="  border-y-[1px] bg-cover bg-center h-full w-full rounded-md "
                  style={{ backgroundImage: "url('./images/playstore.png')" }}
                ></div>
              </a>
            </div>
          </div>
        </div>
        <div className="border-[1px] border-zinc-600 mt-2 "></div>
        <div className="flex max-sm:flex-col  max-sm:justify-start max-sm:items-start md:justify-between  items-center md:h-[10%] ">
          {links.map((item) => {
            return (
              <a
                key={Math.random()}
                target="blank"
                href={item.link}
                className="tracking-tighter hover:text-white text-zinc-300 font-mono md:text-sm"
              >
                {item.name}
              </a>
            );
          })}
        </div>
        <div className=" md:hidden border-[1px] border-zinc-600 mt-2 "></div>
        <div className="h-[40%]  flex justify-center items-center">
          <div className="h-[80%] w-[100%] flex gap-2">
            <div className="h-[90%] w-full  flex flex-col justify-start">
              {address.map((item) => (
                <p
                  key={Math.random()}
                  className="md:text-sm text-zinc-300 hover:text-zinc-100 tracking-tight "
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="md:h-[90%] md:w-full  flex justify-end items-center">
              <div className="md:h-[100%] md:w-[25%]  flex justify-center items-center p-5">
                <img src="./images/logo.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
