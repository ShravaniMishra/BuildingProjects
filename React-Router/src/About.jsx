import React from 'react'
import { Box, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Box>
        <Text>
          My name is Shravani Mishra and{" "}
          <span style={{ textDecoration: "bold", color: "brown" }}>
            {" "}
            I am from ODISHA
          </span>
          , (A state full of goddess) (India). I have completed my graduation in
          Btech ("IT") from College of Engineering and Technology (Bhubaneswar,
          Odisha). Then I joined full stack Web development course by Masai
          School a military type coding school.
        </Text>
      </Box>
    </>
  );
}

export default About