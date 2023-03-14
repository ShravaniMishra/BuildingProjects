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
          gap="20px"
          w="100%"
          fontSize="4xl"
          justifyContent="space-between"
          display="flex"
          alignItems="center"
          textDecoration="none"
        >
          <Tabs
            w="100%"
            fontSize="4xl"
            justifyContent="space-between"
            display="flex"
            alignItems="center"
            textDecoration="none"
          >
            <TabList
              w="100%"
              fontSize="4xl"
              fontWeight="bold"
              justifyContent="space-between"
              display="flex"
              alignItems="center"
              textDecoration="none"
              color="red.800"
            >
              <Tab>
                <NavLink className="Nav_link" exact to="/">
                  Home
                </NavLink>
              </Tab>
              <Tab>
                <NavLink className="Nav_link" exact to="/about">
                  About
                </NavLink>
              </Tab>
              <Tab>
                <NavLink className="Nav_link" exact to="/contact">
                  Contact
                </NavLink>
              </Tab>
              <Tab>
                <NavLink className="Nav_link" exact to="/skills">
                  Skills
                </NavLink>
              </Tab>
              <Tab>
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
