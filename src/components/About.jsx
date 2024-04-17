import React from "react";
import Navbar from "./Navbar";
import Pillars from "./Pillars";
import LogChild from "./LogChild";

const About = () => {
  const details = [
    {
      logo:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbrandslogos.com%2Fr%2Freact-logo-1%2F&psig=AOvVaw10xcIyVlUWAgVl8b2QHiJk&ust=1713437430038000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMj6tv6JyYUDFQAAAAAdAAAAABAE",
      details: [
        "HTML",
        "Css",
        "ReactJs",
        "TailwindCss",
        "React Router",
        "React Icons",
        "Locomotive Scroll"
      ],
      image: "",
    },
  ];
  return (
    <>
      <Navbar />
      {/* <LogChild  /> */}
    </>
  );
};

export default About;
