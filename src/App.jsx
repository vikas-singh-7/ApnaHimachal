import React from "react";
import Hero from "./components/Hero";
import DetailBox from "./components/DetailBox";
import GirlBox from "./components/GirlBox";
import PekkaBox from "./components/PekkaBox";
import Footer from "./components/Footer";

import LocomotiveScroll from "locomotive-scroll";
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="h-auto w-full">
      
      <Hero />
      <DetailBox />
      <GirlBox />
      <PekkaBox />
      <Footer />
    </div>
  );
};

export default App;
