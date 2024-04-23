import React, { useEffect, useState } from "react";

const Eyes = ({ image }) => {
  const [rotateLeft, setRotateLeft] = useState(0);
  const [rotateRight, setRotateRight] = useState(0);
  const [timer, setTimer] = useState(55); // Initial timer value

  useEffect(() => {
    const handleMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let rect = document.body.getBoundingClientRect();
      let viewportCenterX = rect.width / 2;
      let viewportCenterY = rect.height / 2;

      let deltaXLeft = mouseX - viewportCenterX - 50; // Adjusting for the eye's position
      let deltaYLeft = mouseY - viewportCenterY;

      let deltaXRight = mouseX - viewportCenterX + 50; // Adjusting for the eye's position
      let deltaYRight = mouseY - viewportCenterY;

      let angleLeft = Math.atan2(deltaYLeft, deltaXLeft) * (180 / Math.PI);
      let angleRight = Math.atan2(deltaYRight, deltaXRight) * (180 / Math.PI);

      // Adjusting the angle to make eyes follow the mouse
      setRotateLeft(angleLeft - 180);
      setRotateRight(angleRight - 180);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  // Decrement the timer every second until it reaches zero
  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      }
    }, 1000);

    // Clear the interval when the component unmounts or when the API responds
    return () => clearInterval(countdown);
  }, [timer]); // Re-run effect when timer changes

  return (
    <div className="eyes bg-blue-500 md:h-screen w-full overflow-hidden max-sm:hidden">
      <div className="flex absolute  h-[20vh] w-[100%] justify-around items-center font-semibold font-mono">
        <div className="h-[4em]  p-2 w-[45%] flex justify-center items-center  bg-zinc-300 rounded-md  font-semibold">
          <h1>We are getting you the latest information,please wait...</h1>
        </div>
        <div className="h-[4em] w-[45%]  justify-center items-center font-semibold p-2   bg-zinc-300 rounded-md flex  ">
          <h1>Noob Server Needs Oil 🚀 Estimate Time : {timer}</h1>
        </div>
      </div>

      <div
        data-scroll
        data-scroll-speed="-.7"
        className={`relative md:h-screen w-full bg-center bg-cover`}
      >
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex justify-center items-center">
            <div className="relative w-2/3 h-2/3 bg-black rounded-full">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotateLeft}deg)`,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full"
              >
                <div className="md:w-6 max-sm:w-4 bg-zinc-100 md:h-6 max-sm:h-4 md:rounded-full max-sm:rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex justify-center items-center">
            <div className="relative w-2/3 h-2/3 bg-black rounded-full">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotateRight}deg)`,
                }}
                className="w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-6 bg-zinc-100 max-sm:w-4 h-6 rounded-full max-sm:h-4 md:rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
