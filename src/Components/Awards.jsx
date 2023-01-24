import { Box, Stack, useColorModeValue, Text, Flex } from "@chakra-ui/react";
import React from "react";

const Awards = () => {
  return (
    <div>
      <Box maxW={["full", "full", "7xl"]} m="auto" padding={["5", "5", "20"]}>
        <Stack spacing={4} w={["100%"]} m="auto">
          <Text
            textTransform={"uppercase"}
            color={"white.400"}
            border="1px solid black"
            fontWeight={600}
            textAlign="center"
            width="200px"
            m={"auto"}
            mt={12}
            mb={4}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Achievements & Awards
          </Text>
        </Stack>

        <Flex
          gap="50px"
          alignItems={"center"}
          mt={8}
          flexDirection={["column", "column", "row"]}
        >
          <Box
            border="2px solid gray"
            w={["100%", "100%", "50%"]}
            p="40px"
            borderRadius={16}
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
          >
            <Text fontSize="20px">Certifications</Text>
            <Text mt={4} noOfLines={1}>
              Nielet CCC Certificate
            </Text>
            <Text mt={4} noOfLines={1}>
              Financial Literacy Program ( NSE )
            </Text>
            <Text mt={4} noOfLines={1}>
              CRM Non-Domestic Voice ( NSDC )
            </Text>
          </Box>

          <Box
            border="2px solid gray"
            w={["100%", "100%", "50%"]}
            p="40px"
            borderRadius={16}
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
          >
            <Text fontSize="20px">Achievements</Text>
            <Text mt={4} noOfLines={1}>
              District Solan School Sports (Badminton)
            </Text>
            <Text mt={4} noOfLines={1}>
              Apada Rakshak Volunteers (Rescue Techniques Skills)
            </Text>
            <Text mt={4} noOfLines={1}>
              Inspire Award Exhibition (Science)
            </Text>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Awards;
