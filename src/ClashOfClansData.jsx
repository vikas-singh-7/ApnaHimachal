import React, { useEffect, useState } from "react";

const ClashOfClansData = () => {
  const [clanData, setClanData] = useState("");
  console.log(clanData);
 
  const image = "clanData.badgeUrls.medium";
  useEffect(() => {
    // Define the URL for the endpoint you created in your Node.js server
    const url = "http://localhost:3000/api/clash-of-clans";

    // Fetch data from the endpoint
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        // Set the data to state
        setClanData(data);
      })
      .catch((error) => {
        console.error("Error fetching data from server:", error);
      });
  }, []);

  // Display the fetched data in the component
  return (
    <>
      <div>
        <div className="h-[20vh] w-full">
         
        </div>
        <h2>Clash of Clans Data</h2>
        {clanData ? (
          <div>
            <h1>{clanData.description}</h1>
            {/* <img src={clanData.league.iconUrls.medium} alt="" /> */}
            <h1>{clanData.memberList[0].name}</h1>
            <p>Clan Name: {clanData.name}</p>
            <p>Clan Level: {clanData.level}</p>
            {/* Add more data display here as needed */}
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
      ;
    </>
  );
};

export default ClashOfClansData;
