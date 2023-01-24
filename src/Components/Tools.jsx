import { Box, Grid, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { SiChakraui, SiCss3, SiExpress, SiGit, SiGithub, SiHtml5, SiJavascript, SiMicrosoftoffice, SiMongodb, SiNetlify, SiNextdotjs, SiNodedotjs, SiReact, SiSlack, SiTypescript, SiVisualstudio, SiWordpress } from "react-icons/si";

const Tools = () => {
  return (
    <div>
      <Box
        maxW={"7xl"}
        m="auto"

        mb={8}
        padding="20px"
       
        alignItems="center"
      >
        <Stack spacing={4} w={["100%"]} m="auto" >
          <Text
            textTransform={"uppercase"}
            color={"white.400"}
            border="1px solid black"
            fontWeight={600}
            textAlign="center"
            width="200px"
            m={"auto"}
            mb={16}
            fontSize={"sm"}
            
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Tools Sets
          </Text>
        </Stack>
        <Grid
          maxW={"5xl"}
          m="auto"
          gridTemplateColumns={[
            "repeat(2, 1fr)",
            "repeat(3,1fr)",
            "repeat(4,1fr)",
            "repeat(5,1fr)",
            "repeat(6,1fr)",
          ]}
          alignItems="center"
          gap={12}
          justifyContent="center"
        >
          <Box
            border={"1px solid gray"}
            borderRadius="15px"
            padding="12px"
            boxShadow= "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            pt={6}
            pl={6}
            pr={6}
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
          >
            <SiVisualstudio size="50px" />
            <Text mt={2}>VS Code</Text>
          </Box>

          <Box
            border={"1px solid gray"}
            borderRadius="15px"
            boxShadow= "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            padding="12px"
            pt={6}
            pl={6}
            pr={6}
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
          >
            <SiSlack size="50px" />
            <Text mt={2}>Slack</Text>
          </Box>

          <Box
            border={"1px solid gray"}
            borderRadius="15px"
            boxShadow= "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            padding="12px"
            pt={6}
            pl={6}
            pr={6}
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
          >
            <SiGit size="50px" />
            <Text mt={2}>Git</Text>
          </Box>

          <Box
            border={"1px solid gray"}
            boxShadow= "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            borderRadius="15px"
            padding="12px"
            pt={6}
            pl={6}
            pr={6}
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
          >
            <SiGithub size="50px" />
            <Text mt={2}>Github</Text>
          </Box>

          <Box
            border={"1px solid gray"}
            borderRadius="15px"
            boxShadow= "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            padding="12px"
            pt={6}
            pl={6}
            pr={6}
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
          >
            <SiWordpress size="50px" />
            <Text mt={2}>Wordpress</Text>
          </Box>

          <Box
            border={"1px solid gray"}
            boxShadow= "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            borderRadius="15px"
            padding="12px"
            pt={6}
            pl={6}
            pr={6}
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
          >
            <SiMicrosoftoffice size="50px" />
            <Text mt={2}>MsOffice</Text>
          </Box>

         
        </Grid>
      </Box>
    </div>
  );
};

export default Tools;
