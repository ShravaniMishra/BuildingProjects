import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";
import styled from "styled-components";
const Error = () => {
  return (
    <Box bg="#FFF5F7" w="100%" h="500px" p="20px 10px 15px 20px">
      <Heading as="h1" size="3xl" noOfLines={1} mt="45px" textAlign="center" pb="20px">
        Oops !! 😭 404 Page Not Found
      </Heading>
      <Wrapper>
        <NavLink to="/"> Go-Back</NavLink>
      </Wrapper>
    </Box>
  );
};
const Wrapper = styled.div`
  margin-top: 30px;
  a {
    text-decoration: none;
    color: black;
    font-size: 40px;
    font-weight: bold;
    position: relative;
  }
  a::after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: "";
    width: 100%;
    border: 2px solid red;
    transition: all 0.5s ease-in-out;
    transform: scale(0);
    transform-origin: left;
  }
  a:hover::after {
    transform: scale(1);
  }
`;

export default Error;
