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
    <div className="h-[70vh] bg-[#000000] p-4 flex justify-center items-center">
      <div className="h-[90%] w-[80%]  flex flex-col ">
        <div className="h-[30%] w-full flex items-center justify-center ">
          <div className="h-[80%] w-[50%]">
            <div className="py-2">
              <p className="text-white tracking-tight font-sm font-mono">
                Connect with me{" "}
              </p>
            </div>
            <div className="flex justify-between  w-[60%] ">
              {follow.map((item) => {
                return (
                  <div
                    key={Math.random()}
                    className="h-[3rem] rounded-md transition-all duration-150 ease-linear hover:bg-zinc-700 flex justify-start  w-[3rem] p-2"
                  >
                    <a target="blank" href={item.link} className="flex">
                      <img src={item.image} alt="" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" h-[80%] w-[50%] flex gap-2 p-2 justify-center items-center">
            <div className="h-[90%]  w-full px-4 py-[2px]  ">
              <a
                target="blank"
                href="https://apps.apple.com/us/developer/supercell/id488106216"
              >
                <div
                  className="  border-y-[1px]  bg-cover bg-center h-full w-full rounded-md"
                  style={{ backgroundImage: "url('./images/appstore.webp')" }}
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
                  style={{ backgroundImage: "url('./images/playstore.webp')" }}
                ></div>
              </a>
            </div>
          </div>
        </div>
        <div className="border-[1px] border-zinc-600 mt-2 "></div>
        <div className="flex justify-between items-center h-[10%] ">
          {links.map((item) => {
            return (
              <a
                key={Math.random()}
                target="blank"
                href={item.link}
                className="tracking-tighter hover:text-white text-zinc-300 font-mono text-sm"
              >
                {item.name}
              </a>
            );
          })}
        </div>
        <div className="h-[40%]  flex justify-center items-center">
          <div className="h-[80%] w-[100%] flex gap-2">
            <div className="h-[90%] w-full  flex flex-col justify-start">
              {address.map((item) => (
                <p
                  key={Math.random()}
                  className="text-sm text-zinc-300 hover:text-zinc-100 tracking-tight "
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="h-[90%] w-full  flex justify-end items-center">
              <div className="h-[100%] w-[25%]  flex justify-center items-center p-5">
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
