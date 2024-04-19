import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

// Enable CORS and allow requests from the React app's origin
app.use(
  cors({
    origin: "http://localhost:5173", // Adjust this origin based on your React app's URL
    methods: ["GET", "POST"], // Specify allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
  })
);

// Your Clash of Clans API key
const API_KEY =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjUwOWY2YmE5LTE2NzMtNGU5Ni1hZmNiLTcxYjk3MGNmMDFkNCIsImlhdCI6MTcxMzUwNDIwNywic3ViIjoiZGV2ZWxvcGVyL2JmMGZmN2M2LTg0OTUtNjg5NC0wZWExLTU2YTYzY2Y2Zjc2MiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEwNi4yMjEuMTMzLjI0MCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.12dt2e-DD1RwWeinf0veeq0VtTWsfAjZZgpsYACwjs-Lb0hE46G5dffLogHko-XxbEDyUULp64yvDVWQIzOZ7w"; // Replace with your actual API key

// Base URL for the Clash of Clans API
const BASE_URL = "https://api.clashofclans.com/v1/clans/%23Q8CLCGYP";

// Port number for the server to listen on
const PORT = 3000;

// Define an endpoint to handle incoming requests from the React app
app.get("/api/clash-of-clans", async (req, res) => {
  try {
    // Make an API request to the Clash of Clans API using Axios
    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`, // Include your API key as an authorization header
        "Content-Type": "application/json",
      },
    });

    // If the request is successful, send the data back to the client
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from Clash of Clans API:", error);

    // If there's an error, send an error response back to the client
    res
      .status(500)
      .json({ error: "Failed to fetch data from Clash of Clans API" });
  }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
