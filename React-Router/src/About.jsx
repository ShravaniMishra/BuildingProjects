import React, { useRef, useState } from "react";
import { Box, Text} from "@chakra-ui/react";

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
