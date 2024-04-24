import React from "react";
import Navbar from "./Navbar";
import LogChild from "./LogChild";
import { useEffect } from "react";
import Log2 from "./Log2";

const Log = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
  }, []);

  const details = [
    {
      logo: "./images/sparky.webp",
      details: [
        " Experience and Longevity: Consistently active in wars, showing dedication and perseverance",
        "Teamwork: Our clan works together with strong coordination and strategy.",
        "Consistency: Our track record shows consistent performance and improvement.",
        "Open to New Members: Welcoming players who are eager to contribute and grow with us.",
      ],
      image: "./images/warLog.jpg",
    },
    {
      logo: "./images/dragon.png",
      details: [
        `Our clan's war log showcases our journey in ${data.warLeague.name}, reflecting our strategic prowess and dedication.`,
        "Our log reveals an active and engaged clan, with high participation rates in wars and other clan activities.",
        `Our war log paints a picture of a clan that is dedicated to growth, excellence, and triumph in ${data.warLeague.name}.`,
      ],
      image: "./images/war2.jpg",
    },
  ];
  return (
    <>
      <Navbar />

      {details.map((item, index) => {
        return index == 0 ? (
          <LogChild
            data={data}
            key={Math.random()}
            image={item.image}
            logo={item.logo}
            details={item.details}
          />
        ) : (
          <Log2
            data={data}
            key={Math.random()}
            image={item.image}
            logo={item.logo}
            details={item.details}
          />
        );
      })}
    </>
  );
};

export default Log;
