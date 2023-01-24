import {
  Box,
  SimpleGrid,

  Text,
  Stack,
  Flex,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import React from "react";


const Education = () => {
  return (
    <div>
      <Box width = "100%" m="auto"  padding={["5","5","20"]}>
        <Stack spacing={4} w={["100%"]} m="auto">
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
            Education Qualification
          </Text>
        </Stack>
        <Box p={4} mt={8} width = "100%" >
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={20}>
            <Stack>
              <Flex
                w={16}
                h={16}
                align={"center"}
                justify={"center"}
                color={"white"}
                rounded={"full"}
                bg={"gray.100"}
                mb={1}
                
              >
              <Image src="https://masaischool.com/img/navbar/logo.svg" alt="logo"/>
              </Flex>
              <Text fontWeight={600} fontSize={"20px"}>
                Mern Full Stack Development
              </Text>
              <Text fontWeight={300} fontSize={"16px"}>
                Bengaluru - Masai School (Full Time)
              </Text>
              <Text fontWeight={100} fontSize={"15px"}>
                2022 - Present
              </Text>

              <Text color={"white.100"} fontWeight={400} fontSize={"17px"}>
                Joined a Mern Full Stack Web Development Course Full Time From
                Masai School
              </Text>
            </Stack>
            <Stack>
              <Flex
                w={16}
                h={16}
                align={"center"}
                justify={"center"}
                color={"white"}
                rounded={"full"}
                bg={"gray.100"}
                mb={1}
              >
                <Image src="https://upload.wikimedia.org/wikipedia/en/d/d8/Himachal_Pradesh_University_Shimla_Logo.svg" alt="logo"/>
              </Flex>
              <Text fontWeight={600} fontSize={"20px"}>
             Bechlor's of Scinece (Physics)
              </Text>
              <Text fontWeight={300} fontSize={"16px"}>
              Nalagarh, Himachal Pradesh
              </Text>
              <Text fontWeight={100} fontSize={"15px"}>
                2017 - 2021
              </Text>

              <Text color={"white.100"} fontWeight={400} fontSize={"17px"}>
              Completed my graduation from Govt. PG College Nalagarh. It takes 1 year long due to COVID-19
              </Text>
            </Stack>

            <Stack>
            <Flex
              w={16}
              h={16}
              align={"center"}
              justify={"center"}
              color={"white"}
              rounded={"full"}
              bg={"gray.100"}
              mb={1}
            >
            <Image  borderRadius = "50%" src="https://www.onlineresultportal.com/images/education/hpbose-logo.jpg" alt="logo"/>
              
            </Flex>
            <Text fontWeight={600} fontSize={"20px"}>
            Higher Secondary - Science
            </Text>
            <Text fontWeight={300} fontSize={"16px"}>
            Govt Sen. Sec. School Diggal
            </Text>
            <Text fontWeight={100} fontSize={"15px"}>
              2016 - 2017
            </Text>

            <Text color={"white.100"} fontWeight={400} fontSize={"17px"}>
             Completed my intermidiate in Govt. Sen Sec. School Diggal with 96th position in All Himachal.
            </Text>
          </Stack>
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
};

export default Education;
