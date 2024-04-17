import React from "react";
import Pillars from "./Pillars";
import { useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Founding = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
  }, []);

  const pillars = [
    {
      color: "#1F7AEB",
      image: "./images/king1.webp",
      profile: "./images/leader.jpg",
      name: "Heer Da Ranjha",
      name2: "Sonu Desi (Heer Da Ranjha)",
      link: "https://link.clashofclans.com/en?action=OpenPlayerProfile&tag=2G00RYVPL",
      character: [
        "Tactical Genius: Your strategic foresight leads us to victory time and time again.",
        "Inspiring Leadership: Your guidance and encouragement motivate us all to perform at our best.",
        "  Team Builder: You've created a clan of unity and strength,where each member feels valued.",
        "Resourceful Planner: Your resource management and planning skills keep our clan thriving.",
      ],
      role: "Leader",
    },
    {
      color: "#FFB703",
      image: "./images/Ajeet.jpg",
      profile: "./images/ajeetprofile.jpg",
      name: "King Leo",
      name2: "Ajeet (King Leo)",
      link: "https://link.clashofclans.com/en?action=OpenPlayerProfile&tag=92QPQVCLQ",
      character: [
        "Your strategic insights elevate our clan to new heights!",
        "Your dedication and skill make you the backbone of our clan.",
        "Your leadership inspires us all to give our best in every battle.",
        "You bring out the best in every member of the clan—thank you for your guidance.",
      ],
      role: "Co-Leader",
    },
    {
      color: "#7B8EB5",
      image: "./images/naveenProfile.png",
      profile: "./images/naveenProfile.jpg",
      name: "Naveen",
      name2: "Naveen (Bhole Baba Ki Jai)",
      link: "https://link.clashofclans.com/en?action=OpenPlayerProfile&tag=9U0QY8LJR",
      character: [
        "Your resourcefulness and resilience keep us strong and united.",
        "You lead by example, and your hard work doesn’t go unnoticed!",
        "Your commitment to the clan is truly admirable—thank you for everything!",
        "Your support and wisdom make us all better players and team members.",
      ],
      role: "Co-Leader",
    },
    {
      color: "#FFB703",
      image: "./images/image5.webp",
      profile: "./images/Storm.jpg",
      name: "Sahil",
      name2: "Sahil (Storm)",
      link: "https://link.clashofclans.com/en?action=OpenPlayerProfile&tag=2VPYPGLJ9",
      character: [
        "You,ve been the backbone of this Clan from the start, thank you for your loyalty and hard work!",
        "Your unwavering loyalty and commitment as our co-leader keep us strong.",
        "Your dedication and leadership have made our Clan stronger thank you for being such an integral part of our journey!",
        "You're not just a founding member, you're the heart and soul of our Clan thank you for everything you do!",
      ],
      role: "Co-Leader",
    },
    {
      color: "#003A96",
      image: "./images/ashish.jpg",
      profile: "./images/ashishprofile.jpg",
      name: "Ashish",
      name2: "Ashish (ASH)",
      link: "https://link.clashofclans.com/en?action=OpenPlayerProfile&tag=9GQ08JJQC",
      character: [
        "Ash nibba is a rare ore that our clan has,many gem seeker looks for him ",
        "Your teamwork and loyalty make our clan a force to be reckoned with!",
        "Your commitment to the clan is truly admirable—thank you for everything!",
        "Your dedication is unmatched—thank you for making our clan the best it can be!",
      ],
      role: "Co-Leader",
    },
  ];
  return (
    <>
      <Navbar />
      {pillars.map((item) => {
        return (
          <Pillars
            key={item.name}
            color={item.color}
            image={item.image}
            name={item.name}
            name2={item.name2}
            profile={item.profile}
            character={item.character}
            role={item.role}
            link={item.link}
          />
        );
      })}
    </>
  );
};

export default Founding;
