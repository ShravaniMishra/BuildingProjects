import React, { useRef, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

const About = () => {
  const luckyName = useRef();
  const [show, setShow] = useState(false);

  const ChangeBy = (e) => {
    e.preventDefault();
    const name = luckyName.current.value
    name === "" ? alert("Please enter your name") : setShow(true);
  
  };

  return (
    <>
      <Box>
        <form action="" onSubmit={ChangeBy}>
          <label htmlFor="">Enter Your Lucky Name</label>
          <input type="text" placeholder="Name" ref={luckyName} />
          <br />
          <button>Submit</button>
        </form>
        <Text>
          {show ? `Your Lucky Name is ${luckyName.current.value}` : ""}
        </Text>
      </Box>

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
};

export default About;
