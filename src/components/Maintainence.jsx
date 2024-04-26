import React from "react";

const Maintenance = () => {
  return (
    <div className="h-screen w-full">
      <video
        className="h-full w-full"
        src="./maintence.mp4"
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
};

export default Maintenance;
