import React from "react";
import Navbar from "./Navbar";
import LogChild from "./LogChild";

const About = () => {
  const details = [
    {
      logo: "./images/pekka.webp",
      details: [
        "HTML",
        "Css",
        "ReactJs",
        "TailwindCss",
        "React Router Dom",
        "React Icons",
        "Vite",
        "Locomotive Scroll",
      ],
      image: "./images/tech1.png",
    },
  ];
  return (
    <>
      <Navbar />
      {details.map((item) => {
        return (
          <LogChild
            logo={item.logo}
            image={item.image}
            details={item.details}
          />
        );
      })}
      <div className="h-[70vh] bg-yellow-500"></div>
    </>
  );
};

export default About;
