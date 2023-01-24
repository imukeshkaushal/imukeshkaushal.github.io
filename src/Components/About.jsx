import React from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  Stack,
  StackDivider,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
// import {NavLink} from "react-router-dom"

import { BsCode, BsFillJournalBookmarkFill, BsFillPlayCircleFill } from "react-icons/bs";
import { MdOutlineSyncProblem } from "react-icons/md";
import { GiSkills } from "react-icons/gi";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

const About = () => {
  return (
    <div id="about">
      <Box maxW={"7xl"} m="auto" paddingTop={["8","8","20"]} mb={8}>
        <Flex
          direction={["column-reverse", "column-reverse", "column-reverse","row"]}
          alignItems="center"
          gap={["50px", "50px", "80px"]}
        >
          <Box >
            <Image
              borderRadius="50%"
              m={[0, 0, 12]}
              ml={["0px", "0px", "90px"]}
              w={"300px"}
              height={"300px"}
              boxShadow="rgba(0, 0, 0, 0.2) 0px 20px 30px"
              src="https://avatars.githubusercontent.com/u/97522154?v=4"
              alt="img"
            />
          </Box>

          <Box w={["85%", "85%", "70%"]} m="auto">
            <Stack spacing={4} w={[ "100%"]} m="auto">
              <Text
                textTransform={"uppercase"}
                color={"white.400"}
                border="1px solid black"
                fontWeight={600}
                fontSize={"sm"}
                bg={useColorModeValue("blue.50", "blue.900")}
                p={2}
                alignSelf={"flex-start"}
                rounded={"md"}
              >
                About Mukesh Kaushal
              </Text>

              <Text color={"gray.500"} fontSize={"lg"}>
                Mukesh Kaushal is a MERN Full Stack Developer with a good
                knowledge of Web Development and Problem-Solving skills in HTML,
                JavaScript, React, Redux, and Node.js and Database like MongoDB,
                etc. Looking for an opportunity in a product-based company as a
                software engineer A passionate Full-Stack Web Developer, a knack
                for stunning designs, a heart for social causes, who aims to
                expand his knowledge on niche technologies working for a
                progressive organization and contributing towards its growth. Looking My Intrest In : 
              </Text>
              <Stack
                spacing={4}
                mt={8}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.100", "gray.700")}
                  />
                }
              >
                <Feature
                  icon={
                    <Icon as={BsFillJournalBookmarkFill} color={"yellow.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  text={"Reading Finacial Books"}
                />
                <Feature
                  icon={
                    <Icon
                      as={BsFillPlayCircleFill}
                      color={"green.500"}
                      w={5}
                      h={5}
                    />
                  }
                  iconBg={useColorModeValue("green.100", "green.900")}
                  text={"Playing Badminton & Vollyball"}
                />
                <Feature
                  icon={<Icon as={BsCode} color={"purple.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("purple.100", "purple.900")}
                  text={"Programming"}
                />
                
              </Stack>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default About;
