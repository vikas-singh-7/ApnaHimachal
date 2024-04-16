import React from "react";
import Navbar from "./Navbar";
import LogChild from "./LogChild";
import { useEffect } from "react";

const Log = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
  }, []);
  return (
    <>
      <Navbar />
      <LogChild />
    </>
  );
};

export default Log;
