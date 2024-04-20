import React from "react";
import Pillars from "./Pillars";
import { useEffect } from "react";
import Navbar from "./Navbar";

const Founding = ({ data }) => {
  console.log(data);
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
  }, []);

  const pillars = [
    {
      ExpLevel: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#2G00RYVPL") {
          player = item.expLevel;
        }
        return player;
      }),
      donationsR: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#2G00RYVPL") {
          player = item.donationsReceived;
        }
        return player;
      }),
      donations: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#2G00RYVPL") {
          player = item.donations;
        }
        return player;
      }),
      trophies: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#2G00RYVPL") {
          player = item.trophies;
        }
        return player;
      }),
      townhall: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#2G00RYVPL") {
          player = item.townHallLevel;
        }
        return player;
      }),
      color: "#1F7AEB",
      image: "./images/king1.webp",
      profile: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#2G00RYVPL") {
          player = item.league.iconUrls.medium;
        }
        return player;
      }),
      name: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#2G00RYVPL") {
          player = item.name;
        }
        return player;
      }),

      role: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#2G00RYVPL") {
          player = item.role;
        }
        return player;
      }),
      link: "https://link.clashofclans.com/en?action=OpenPlayerProfile&tag=2G00RYVPL",
      character: [
        "Tactical Genius: Your strategic foresight leads us to victory time and time again.",
        "Inspiring Leadership: Your guidance and encouragement motivate us all to perform at our best.",
        "  Team Builder: You've created a clan of unity and strength,where each member feels valued.",
        "Resourceful Planner: Your resource management and planning skills keep our clan thriving.",
      ],
    },
    {
      ExpLevel: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#92QPQVCLQ") {
          player = item.expLevel;
        }
        return player;
      }),
      donationsR: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#92QPQVCLQ") {
          player = item.donationsReceived;
        }
        return player;
      }),
      donations: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#92QPQVCLQ") {
          player = item.donations;
        }
        return player;
      }),
      trophies: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#92QPQVCLQ") {
          player = item.trophies;
        }
        return player;
      }),
      townhall: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#92QPQVCLQ") {
          player = item.townHallLevel;
        }
        return player;
      }),
      color: "#FFB703",
      image: "./images/Ajeet.jpg",
      profile: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#92QPQVCLQ") {
          player = item.league.iconUrls.medium;
        }
        return player;
      }),
      name: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#92QPQVCLQ") {
          player = item.name;
        }
        return player;
      }),
      role: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#92QPQVCLQ") {
          player = item.role;
        }
        return player;
      }),

      link: "https://link.clashofclans.com/en?action=OpenPlayerProfile&tag=92QPQVCLQ",
      character: [
        "Your strategic insights elevate our clan to new heights!",
        "Your dedication and skill make you the backbone of our clan.",
        "Your leadership inspires us all to give our best in every battle.",
        "You bring out the best in every member of the clan—thank you for your guidance.",
      ],
    },
    {
      ExpLevel: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#9U0QY8LJR") {
          player = item.expLevel;
        }
        return player;
      }),
      donationsR: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#9U0QY8LJR") {
          player = item.donationsReceived;
        }
        return player;
      }),
      donations: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#9U0QY8LJR") {
          player = item.donations;
        }
        return player;
      }),
      trophies: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#9U0QY8LJR") {
          player = item.trophies;
        }
        return player;
      }),
      townhall: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#9U0QY8LJR") {
          player = item.townHallLevel;
        }
        return player;
      }),
      color: "#1F7AEB",
      image: "./images/naveenProfile.png",
      profile: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#9U0QY8LJR") {
          player = item.league.iconUrls.medium;
        }
        return player;
      }),

      name: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#9U0QY8LJR") {
          player = item.name;
        }
        return player;
      }),
      role: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#9U0QY8LJR") {
          player = item.role;
        }
        return player;
      }),

      link: "https://link.clashofclans.com/en?action=OpenPlayerProfile&tag=9U0QY8LJR",
      character: [
        "Your resourcefulness and resilience keep us strong and united.",
        "You lead by example, and your hard work doesn’t go unnoticed!",
        "Your commitment to the clan is truly admirable—thank you for everything!",
        "Your support and wisdom make us all better players and team members.",
      ],
    },
    {
      ExpLevel: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#2VPYPGLJ9") {
          player = item.expLevel;
        }
        return player;
      }),
      donationsR: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#2VPYPGLJ9") {
          player = item.donationsReceived;
        }
        return player;
      }),
      donations: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#2VPYPGLJ9") {
          player = item.donations;
        }
        return player;
      }),
      trophies: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#2VPYPGLJ9") {
          player = item.trophies;
        }
        return player;
      }),
      townhall: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#2VPYPGLJ9") {
          player = item.townHallLevel;
        }
        return player;
      }),
      color: "#FFB703",
      image: "./images/image5.webp",
      profile: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#2VPYPGLJ9") {
          player = item.league.expLevel;
        }
        return player;
      }),
      name: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#2VPYPGLJ9") {
          player = item.name;
        }
        return player;
      }),
      role: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#2VPYPGLJ9") {
          player = item.role;
        }
        return player;
      }),
      link: "https://link.clashofclans.com/en?action=OpenPlayerProfile&tag=2VPYPGLJ9",
      character: [
        "You,ve been the backbone of this Clan from the start, thank you for your loyalty and hard work!",
        "Your unwavering loyalty and commitment as our co-leader keep us strong.",
        "Your dedication and leadership have made our Clan stronger thank you for being such an integral part of our journey!",
        "You're not just a founding member, you're the heart and soul of our Clan thank you for everything you do!",
      ],
    },
    {
      ExpLevel: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#9GQ08JJQC") {
          player = item.expLevel;
        }
        return player;
      }),
      donationsR: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#9GQ08JJQC") {
          player = item.donationsReceived;
        }
        return player;
      }),
      donations: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#9GQ08JJQC") {
          player = item.donations;
        }
        return player;
      }),
      trophies: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#9GQ08JJQC") {
          player = item.trophies;
        }
        return player;
      }),
      townhall: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#9GQ08JJQC") {
          player = item.townHallLevel;
        }
        return player;
      }),
      color: "#003A96",
      image: "./images/ashish.jpg",
      profile: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#9GQ08JJQC") {
          player = item.league.iconUrls.medium;
          console.log(player);
        }
        return player;
      }),

      name: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "#9GQ08JJQC") {
          player = item.name;
          console.log(player);
        }
        return player;
      }),
      role: data.memberList.map((item, index) => {
        let player;
        if (item.tag == "##9GQ08JJQC") {
          player = item.role;
        }
        return player;
      }),
      link: `https://link.clashofclans.com/en?action=OpenPlayerProfile&tag=9GQ08JJQC`,
      character: [
        "Ash nibba is a rare ore that our clan has,many gem seeker looks for him ",
        "Your teamwork and loyalty make our clan a force to be reckoned with!",
        "Your commitment to the clan is truly admirable—thank you for everything!",
        "Your dedication is unmatched—thank you for making our clan the best it can be!",
      ],
    },
  ];
  return (
    <>
      <Navbar />
      {/* <TeamPlayet/> */}
      {pillars.map((item) => {
        return (
          <Pillars
            townHallLevel={item.townhall}
            key={item.name}
            color={item.color}
            image={item.image}
            name={item.name}
            profile={item.profile}
            character={item.character}
            role={item.role}
            link={item.link}
            trophies={item.trophies}
            xp={item.ExpLevel}
            donation={item.donations}
            donationr={item.donationsR}
          />
        );
      })}
    </>
  );
};

export default Founding;
