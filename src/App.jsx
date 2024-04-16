import React from "react";
import Hero from "./components/Hero";
import DetailBox from "./components/DetailBox";
import GirlBox from "./components/GirlBox";
import PekkaBox from "./components/PekkaBox";

const App = () => {
  return (
    <div className="h-auto w-full">
     
      <Hero/>
      <DetailBox/>
      <GirlBox/>
      <PekkaBox/>
    </div>
  );
};

export default App;
