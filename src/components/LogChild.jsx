import React from "react";

const LogChild = () => {
  return (
    <div className="h-auto">
      <div className="h-[100vh] bg-[#1F7AEB] grid gap-2 grid-cols-2 grid-rows-1 p-5">
        <div className="  bg-cover bg-center col-span-1 bg-[url('./images/logs.png')]"></div>
        <div className="col-span-1 border-2  gap-5 rounded-md grid p-2 grid-cols-1 grid-rows-2">
          <div className="row-span-1">
            <img className="rounded-md" src="./images/warLog.jpg" alt="" />
          </div>
          <div className="row-span-1 text-white font-semibold font-mono px-5 flex justify-center items-center ">
            <div className="h-full w-full ">
              <ol className="text-sm list-outside list-disc">
                <li>Total Wars Fought: 898</li>
                <li>Total Wars Won: 568</li>
                <li>Winning Percentage: Approximately 63.3%</li>
                <li>
                  Experience and Longevity: Consistently active in wars, showing
                  dedication and perseverance.
                </li>
                <li>
                  Teamwork: Our clan works together with strong coordination and
                  strategy.
                </li>
                <li>
                  Consistency: Our track record shows consistent performance and
                  improvement.
                </li>

                <li>
                  Open to New Members: Welcoming players who are eager to
                  contribute and grow with us.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogChild;
