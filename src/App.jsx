import React from "react";
import { useCallback, useMemo } from "react";
import Hero from "./components/Hero";
import DetailBox from "./components/DetailBox";
import GirlBox from "./components/GirlBox";
import PekkaBox from "./components/PekkaBox";
import Footer from "./components/Footer";
import Log from "./components/Log";
import LocomotiveScroll from "locomotive-scroll";
import { Route, Routes, useLocation } from "react-router-dom";
import Founding from "./components/Founding";
import { useEffect } from "react";
import { useState } from "react";

import TeamMembers from "./components/Team";
import About from "./components/About";
import Eyes from "./Eyes";
import Maintainence from "./components/Maintainence";
import Navbar from "./components/Navbar";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const [clanData, setClanData] = useState("");
  const [lastFetchedData, setLastFetchedData] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("https://render-u0y2.onrender.com/");
      const jsonData = await response.json();

      // Compare new data with the current data
      if (JSON.stringify(jsonData) !== JSON.stringify(lastFetchedData)) {
        setClanData(jsonData);
        setLastFetchedData(jsonData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setClanData("");
    }
  }, [lastFetchedData]);

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(fetchData, 12000);

    return () => {
      clearInterval(intervalId);
    };
  }, [fetchData]);

  const renderedData = useMemo(() => {
    return clanData;
  }, [clanData]);

  if (!renderedData) {
    return (
      <>
        <Eyes className="max-sm:hidden" />
      </>
    );
  } else if (!clanData) {
    return (
      <>
        <Maintainence />
      </>
    );
  } else {
    return (
      <>
        {location.pathname !== "/" && <Navbar />}
        <div className=" bg-blue-500">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {" "}
                  <Hero data={clanData} /> <DetailBox data={clanData} />{" "}
                  <GirlBox data={clanData} /> <PekkaBox data={clanData} />
                </>
              }
            />
            <Route path="/pillars" element={<Founding data={clanData} />} />
            <Route path="/logs" element={<Log data={clanData} />} />
            <Route path="/team" element={<TeamMembers data={clanData} />} />
            <Route path="/about" element={<About data={clanData} />} />
          </Routes>

          <Footer />
        </div>
      </>
    );
  }
};

export default App;
