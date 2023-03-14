import React, { useState } from "react";
import { Box, Heading, Image , Text} from "@chakra-ui/react";
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
      <Box mt="20px">
        <Heading as="h1" size="3xl" noOfLines={1} color="peru" ml="-15px" pb="5px">
          Welcome to My Website
        </Heading>
        <Heading as="h3" textAlign="right" mt="-50px">{time}</Heading>
        <Box>
          <Image
            borderRadius="full"
            boxSize="400px"
            mt="20px"
            ml="100px"
            src="https://i.ibb.co/5K0cjj6/Whats-App-Image-2023-03-04-at-8-30-28-PM.jpg"
            alt="Shravani"
          />
        </Box>

        <Box mt="-25%" ml="15%">
          <Text fontSize="3xl" pl="30px" ml="20px">
            Hey It's me{" "}
            <span style={{ textDecoration: "bold", color: "brown" }}>
              Shravani Mishra.
            </span>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Home;
