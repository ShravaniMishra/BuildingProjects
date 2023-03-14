import React, { useState } from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
const Home = () => {
  let newTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(newTime);
  const handleClick = () => {
    newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };
  setInterval(handleClick, 1000);

  const [text, setText] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const Change = () => {
    setText("Shravani Mishra an Aspiring Full-Stack Web Developer");
    
  };

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
          gap="20px"
        >
          <Button colorScheme="whatsapp" onClick={Change}>
            Click Here 😍
          </Button>

          <Button onClick={onOpen} colorScheme="red" gap="20px">
            Please Click Me
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Reach Me</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Hi, I am Shravani from ODISHA. </Text>
                <Text>
                  I have completed my graduation in Btech ("IT") from College of
                  Engineering and Technology.
                </Text>
                <Text>
                  I joined full stack Web development course by Masai School a
                  military type coding school.
                </Text>
                <Text>Want to connect with me than contact me - 8917390943.</Text>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Action Required</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
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
