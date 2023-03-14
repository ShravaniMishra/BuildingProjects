import React, { useState } from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
const Home = () => {
  let newTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(newTime);
  const handleClick = () => {
    newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };
  setInterval(handleClick, 1000);

  const [text,setText] = useState("")

  const Change = ()=>{
    setText('Shravani Mishra an Aspiring Full-Stack Web Developer')
    alert('Welcome to my world 💕')
  }
  return (
    <>
      <Box mt="20px">
        <Heading
          as="h1"
          size="3xl"
          noOfLines={1}
          color="peru"
          ml="-15px"
          pb="5px"
        >
          Welcome to My Website
        </Heading>
        <Heading as="h3" textAlign="right" mt="-50px">
          {time}
        </Heading>
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

        <Box w="50%" mt="-25%" ml="40%">
          <Text fontSize="3xl" pl="30px" ml="20px">
            Hey It's me{" "}
            <span style={{ textDecoration: "bold", color: "brown" }}>
              Shravani Mishra.
            </span>
          </Text>
          <Text fontSize="xl" pl="30px" ml="20px">
            Passionate and creative Full Stack Web Developer and learning in
            Masai School. Attired with a variety of tools & technologies and
            keen to learn new things.
          </Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          ml="33%"
          mt="20px"
        >
          <Button colorScheme="whatsapp" onClick={Change}>
            Click Here 😍
          </Button>
        </Box>
        <Box w="50%" ml="39%">
          <Heading
            as="h2"
            mt="20px"
            size="xl"
            noOfLines={2}
            color="red.500"
            ml="25px"
            pb="5px"
          >
            {text}
          </Heading>
        </Box>
      </Box>
    </>
  );
};

export default Home;
