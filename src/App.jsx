import React from "react";
import Hero from "./components/Hero";
import DetailBox from "./components/DetailBox";
import GirlBox from "./components/GirlBox";
import PekkaBox from "./components/PekkaBox";
import Footer from "./components/Footer";
import Log from "./components/Log";
import LocomotiveScroll from "locomotive-scroll";
import { Route, Routes } from "react-router-dom";
import Founding from "./components/Founding";
import { useEffect } from "react";

import TeamMembers from "./components/Team";
import About from "./components/About";
const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="h-auto w-full">
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Hero /> <DetailBox /> <GirlBox /> <PekkaBox />
            </>
          }
        />
        <Route path="/pillars" element={<Founding />} />
        <Route path="/logs" element={<Log />} />
        <Route path="/team" element={<TeamMembers />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;

// make routes for xp and team and compo also
