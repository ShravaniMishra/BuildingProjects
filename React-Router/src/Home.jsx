import React, { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
const Home = () => {
  let newTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(newTime);
  const handleClick = () => {
    newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };
  setInterval(handleClick, 1000);
  return (
    <>
      <Box>
        <Heading as="h1" size="3xl" noOfLines={1} color="peru">
          Welcome to My Website
        </Heading>
        <h3>{time}</h3>
        <div className="Home">
          <img
            src="https://i.ibb.co/5K0cjj6/Whats-App-Image-2023-03-04-at-8-30-28-PM.jpg"
            alt="Shravani"
          />
          <div>
            <h2>
              Hey It's me{" "}
              <span style={{ textDecoration: "bold", color: "brown" }}>
                Shravani Mishra.
              </span>
            </h2>
            <p></p>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Home;
