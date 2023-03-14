import React from "react";
import { MoonIcon } from "@chakra-ui/icons";
import { Flex, Box, Tabs, TabList, Tab } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Flex
        maxW="100%"
        p="10px"
        alignContent="center"
        justifyContent="space-between"
        boxShadow="xl"
      >
        <Box
          p="4"
          bg="gray.400"
          color="black"
          gap="20px"
          w="100%"
          fontSize="4xl"
          justifyContent="space-between"
          display="flex"
          alignItems="center"
          
        >
          <Tabs
            w="100%"
            justifyContent="space-between"
            display="flex"
            alignItems="center"
            colorScheme="red"
          >
            <TabList
              w="100%"
              fontWeight="bold"
              justifyContent="space-between"
              display="flex"
              alignItems="center"
              color="orange.500"
            >
              <Tab fontSize="2xl">
                <NavLink className="Nav_link" exact to="/">
                  Home
                </NavLink>
              </Tab>
              <Tab fontSize="2xl">
                <NavLink className="Nav_link" exact to="/about">
                  About
                </NavLink>
              </Tab>
              <Tab fontSize="2xl">
                <NavLink className="Nav_link" exact to="/contact">
                  Contact
                </NavLink>
              </Tab>
              <Tab fontSize="2xl">
                <NavLink className="Nav_link" exact to="/skills">
                  Skills
                </NavLink>
              </Tab>
              <Tab fontSize="2xl">
                <NavLink className="Nav_link" exact to="/projects">
                  Projects
                </NavLink>
              </Tab>
            </TabList>
          </Tabs>

          <MoonIcon />
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
