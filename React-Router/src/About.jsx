import React, { useRef, useState } from "react";
import { Box, Text, Image } from "@chakra-ui/react";

const About = () => {
  const luckyName = useRef();
  const [show, setShow] = useState(false);

  const ChangeBy = (e) => {
    e.preventDefault();
    const name = luckyName.current.value;
    name === "" ? alert("Please enter your name") : setShow(true);
  };

  return (
    <>
      <Box bg="gray.50">
        <form action="" onSubmit={ChangeBy}>
          <label style={{ color: "red", fontSize: "20px" }} htmlFor="">
            Enter Your Lucky Name
          </label>
          <br />
          <input
            style={{
              textAlign: "center",
              cursor: "pointer",
              border: "2px solid black",
              borderRadius: "10px",
              textTransform: "capitalize",
            }}
            type="text"
            placeholder="Name"
            ref={luckyName}
          />
          <br />
          <button
            style={{
              color: "peru",
              fontSize: "20px",
              border: "2px solid orange",
              borderRadius: "10px",
              width: "100px",
              marginTop: "10px",
            }}
          >
            Submit
          </button>
        </form>
        <Text
          style={{
            color: "red",
            fontSize: "25px",
            textTransform: "capitalize",
          }}
        >
          {show ? `Your Lucky Name is ${luckyName.current.value}` : ""}
        </Text>
      </Box>

      <Box>
        <Image
          borderRadius="full"
          boxSize="400px"
          ml="50px"
          src="https://camo.githubusercontent.com/0f2df9c6430300192232520a10bc3f09066cee3c6f1205da8490ac2b1d69d9e5/68747470733a2f2f6d69722d73332d63646e2d63662e626568616e63652e6e65742f70726f6a6563745f6d6f64756c65732f646973702f3630313031343131363737303437352e363036386265666634363430612e676966"
          alt="gif"
        />
        <Text textAlign="center" w="50%" ml="40%" mt="-20%" fontSize="25px">
          My name is Shravani Mishra and{" "}
          <span style={{ textDecoration: "bold", color: "brown" }}>
            {" "}
            I am from ODISHA
          </span>
          , (A state full of goddess) (India). I have completed my graduation in
          Btech ("IT") from College of Engineering and Technology (Bhubaneswar,
          Odisha). Then I joined full stack Web development course by{" "}
          <span style={{ textDecoration: "bold", color: "brown" }}>
            {" "}
            Masai School
          </span>{" "}
          a military type coding school.
        </Text>
      </Box>
    </>
  );
};

export default About;
