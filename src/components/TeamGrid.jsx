import React from "react";
import PlayerCard from "./PlayerCard";

const TeamGrid = () => {
  const details = [
    {
      image: "./Profiles/image1.webp",
      Xp: "189",
      attack: "Good",
      role: "Leader",

      name: "Heer Da Ranjha",
    },
    {
      image: "./Profiles/image2.webp",
      Xp: "225",
      attack: "Good",
      role: "Co-Leader",

      name: "King Leo",
    },
    {
      image: "./Profiles/image3.webp",
      Xp: "223",
      attack: "Pro",
      role: "Co-Leader",

      name: "Naveen",
    },
    {
      image: "./Profiles/image4.webp",
      Xp: "265",
      attack: "Pro",
      role: "Co-Leader",

      name: "ASH",
    },
    {
      image: "./Profiles/image5.webp",
      Xp: "210",
      attack: "Pro",
      role: "Co-Leader",

      name: "Zara",
    },
    {
      image: "./Profiles/image6.webp",
      Xp: "248",
      attack: "Pro",
      role: "Co-Leader",

      name: "Kulwinder",
    },
    {
      image: "./Profiles/image7.webp",
      Xp: "255",
      attack: "Good",
      role: "Co-Leader",

      name: "Sudhir",
    },
    {
      image: "./Profiles/image8.webp",
      Xp: "236",
      attack: "Pro",
      role: "Elder",

      name: "Kanwar",
    },
    {
      image: "./Profiles/image9.webp",
      Xp: "203",
      attack: "Good",
      role: "Elder",

      name: "Ashutosh",
    },
    {
      image: "./Profiles/image10.webp",
      Xp: "164",
      attack: "Good",
      role: "Elder",

      name: "Quinn:)Noob",
    },
  ];
  const details2 = [
    {
      image: "./Profiles/image11.webp",
      Xp: "124",
      attack: "Good",
      role: "Elder",

      name: "Priyanka",
    },
    {
      image: "./Profiles/image12.webp",
      Xp: "180",
      attack: "Good",
      role: "Co-Leader",

      name: "Soban(Salman)",
    },
    {
      image: "./Profiles/image20.webp",
      Xp: "246",
      attack: "Good",
      role: "Elder",

      name: "Rebel",
    },
    {
      image: "./Profiles/image19.webp",
      Xp: "240",
      attack: "Good",
      role: "Elder",

      name: "Jay Hanuman",
    },
    {
      image: "./Profiles/image18.webp",
      Xp: "228",
      attack: "Good",
      role: "Elder",

      name: "The Real Mitzi",
    },
    {
      image: "./Profiles/image21.webp",
      Xp: "227",
      attack: "Good",
      role: "Elder",

      name: "Army Jeni",
    },
    {
      image: "./Profiles/image22.webp",
      Xp: "224",
      attack: "Pro",
      role: "Elder",

      name: "Koushik",
    },
    {
      image: "./Profiles/image23.webp",
      Xp: "223",
      attack: "Pro",
      role: "Co-Leader",

      name: "Ankesh Patil",
    },
    {
      image: "./Profiles/image24.webp",
      Xp: "220",
      attack: "Good",
      role: "Co-Leader",

      name: "Subhro",
    },
    {
      image: "./Profiles/image25.webp",
      Xp: "214",
      attack: "Good",
      role: "Elder",

      name: "Dip Bluesy",
    },
  ];
  const details3 = [
    {
      image: "./Profiles/image26.webp",
      Xp: "201",
      attack: "Pro",
      role: "Elder",

      name: "Deepu Rajput",
    },
    {
      image: "./Profiles/image27.webp",
      Xp: "190",
      attack: "Good",
      role: "Elder",

      name: "Sumedh",
    },
    {
      image: "./Profiles/image28.webp",
      Xp: "181",
      attack: "Good",
      role: "Elder",

      name: "Sunny Ranout",
    },
    {
      image: "./Profiles/image29.webp",
      Xp: "177",
      attack: "Good",
      role: "Elder",

      name: "Roni ThaQur",
    },
    {
      image: "./Profiles/image13.webp",
      Xp: "83",
      attack: "Good",
      role: "Co-Leader",

      name: "Mona",
    },
    {
      image: "./Profiles/image30.webp",
      Xp: "148",
      attack: "Good",
      role: "Co-Leader",

      name: "Radzz",
    },
    {
      image: "./Profiles/image31.webp",
      Xp: "167",
      attack: "Good",
      role: "Co-Leader",

      name: "AdiBai",
    },
    {
      image: "./Profiles/image32.webp",
      Xp: "177",
      attack: "Good",
      role: "Elder",

      name: "Vishal",
    },
    {
      image: "./Profiles/image33.webp",
      Xp: "196",
      attack: "Good",
      role: "Elder",

      name: "Honey Bhardwaj",
    },
    {
      image: "./Profiles/image34.webp",
      Xp: "212",
      attack: "Good",
      role: "Elder",

      name: "Devesh Jamwal",
    },
  ];
  const details4 = [
    {
      image: "./Profiles/image15.webp",
      Xp: "251",
      attack: "Noob",
      role: "Co-Leader",

      name: "Rajput_Vikas_7",
    },
    {
      image: "./Profiles/image35.webp",
      Xp: "195",
      attack: "Good",
      role: "Elder",

      name: "Yuvraj",
    },
    {
      image: "./Profiles/image17.webp",
      Xp: "173",
      attack: "Good",
      role: "Elder",

      name: "CJ",
    },
    {
      image: "./Profiles/image16.webp",
      Xp: "181",
      attack: "Good",
      role: "Elder",

      name: "Abhishek Verma",
    },
    {
      image: "./Profiles/image14.webp",
      Xp: "221",
      attack: "Good",
      role: "Elder",

      name: "7Shadow",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="h-[100vh] w-full grid grid-cols-10 p-2 grid-rows-12 bg-[#FFB703] gap-2">
        {details.map((item) => {
          return (
            <PlayerCard
              key={Math.random()}
              image={item.image}
              Xp={item.Xp}
              role={item.role}
              name={item.name}
              attack={item.attack}
            />
          );
        })}
      </div>
      <div className="h-[100vh] w-full grid grid-cols-10 p-2 grid-rows-12 bg-[#1F7AEB] gap-2">
        {details2.map((item) => {
          return (
            <PlayerCard
              key={Math.random()}
              image={item.image}
              Xp={item.Xp}
              role={item.role}
              name={item.name}
              attack={item.attack}
            />
          );
        })}
      </div>
      <div className="h-[100vh] w-full grid grid-cols-10 p-2 grid-rows-12 bg-[#FFB703] gap-2">
        {details3.map((item) => {
          return (
            <PlayerCard
              key={Math.random()}
              image={item.image}
              Xp={item.Xp}
              role={item.role}
              name={item.name}
              attack={item.attack}
            />
          );
        })}
      </div>
      <div className="h-[50vh] w-full grid grid-cols-10 p-2 grid-rows-1  bg-[#1F7AEB] gap-2">
        {details4.map((item) => {
          return (
            <PlayerCard
              key={Math.random()}
              image={item.image}
              Xp={item.Xp}
              role={item.role}
              name={item.name}
              attack={item.attack}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TeamGrid;
