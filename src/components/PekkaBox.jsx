import React from "react";

const PekkaBox = () => {
  return (
    <>
      <div className="h-[100vh] max-sm:h-auto max-sm:flex max-sm:py-5 max-sm:flex-col  bg-[#1F7AEB] flex gap-2 justify-center items-center">
        <div className="image h-full w-full  bg-cover bg-center  ">
          <img src="./images/pekka.png" alt="" />
        </div>

        <div className="image h-full w-full  bg-cover bg-center flex flex-col justify-start ">
          <div className="heading  h-[15%]   md:mt-16">
            <h1 className="text-white font-semibold font-mono  ml-5 text-[2rem]">
              Clan Rules
            </h1>
          </div>
          <div className="h-full max-sm:text-[1.2em] px-5 text-white font-mono font-semibold ">
            <ol className="px-2 mt-3">
              <li className="list-disc">
                Treat all clan members with respect and courtesy.
              </li>
              <li className="list-disc">
                No discrimination, hate speech, or offensive language.
              </li>
              <li className="list-disc">
                No harassment or bullying of other clan members.
              </li>

              <li className="list-disc list-outside ">
                Members should be active regularly,participating in clan
                wars,games,and other events.
              </li>
              <li className="list-disc">
                Use both attacks in clan wars and follow the war plan or
                strategy.
              </li>
              <li className="list-disc">
                Encourage members to donate troops regularly.
              </li>

              <li className="list-disc">
                Follow instructions and advice from clan leaders and co-leaders.
              </li>
              <li className="list-disc">
                Encourage members to provide feedback and suggestions for
                improving the clan.
              </li>
              <li className="list-disc">
                Aim to contribute a reasonable amount of points based on your
                capabilities.
              </li>
            </ol>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default PekkaBox;
