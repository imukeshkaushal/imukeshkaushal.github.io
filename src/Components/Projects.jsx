import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Link,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import {
  SiChakraui,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
} from "react-icons/si";

const Projects = () => {
  return (
    <div>
      <Box
        maxW={"7xl"}
        m="auto"
        mb={8}
        pt={["auto", "auto", "20"]}
        padding="20px"
        alignItems="center"
        id="projects"
      >
        <Stack spacing={4} w={["100%"]} m="auto">
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
            Projects
          </Text>
        </Stack>

        <Grid
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(3,1fr)",
          ]}
          alignItems={"center"}
          gap="20px"
        >
          <Box border={"2px solid gray"} borderRadius="20px" boxShadow= "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px">
            <Box padding="10px">
              <Image
                borderRadius={"20px"}
                border="5px solid white"
                width="100%"
                src="https://user-images.githubusercontent.com/97522154/208038198-80ece65b-59a6-42bc-aba6-238e8223e0f3.png"
                alt="SkinStore Clone"
              />

              <Text
                mt={4}
                padding="8px"
                fontSize="20px"
                fontWeight={500}
                textAlign="center"
              >
                SkinStore Clone
              </Text>
              <Text fontSize={"18px"} padding="8px" color={"gray"} noOfLines={6}>
                Skinstore is a skin & beuty related website which helps you to
                find the different kinds of the products. SkinStore is part of
                THG Holdings plc, a globally renowned end-to-end tech platform
                specializing in taking brands direct to consumers across the
                globe.
              </Text>
              <Flex gap={"50px"} alignItems={"center"} padding="8px">
                <Box>Tech Stack: </Box>
                <Box
                  display={"flex"}
                  gap="15px"
                  alignItems={"center"}
                  justifyContent="center"
                >
                  <SiHtml5 size={"30px"} />
                  <SiReact size={"30px"} />
                  <SiJavascript size={"30px"} />
                  <SiChakraui size={"30px"} />
                  <SiRedux size={"30px"} />
                </Box>
              </Flex>
              <Flex mt={8} gap="80px" mb={4}>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  borderRadius = "15px"
                  bg={"blue.800"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  <a href="https://skin-store-clone-three.vercel.app/">
                    See Project
                  </a>
                </Button>

                <Button
                  flex={1}
                  fontSize={"sm"}
                  borderRadius = "15px"
                  bg={"blue.800"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  <a href="https://github.com/stormyvikrant/ProjectSkinStore">
                    Visit Github
                  </a>
                </Button>
              </Flex>
            </Box>
          </Box>

          <Box border={"2px solid gray"} borderRadius="20px" boxShadow= "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px">
            <Box padding="10px">
              <Image
                borderRadius={"20px"}
                border="5px solid white"
                width="100%"
                src="https://user-images.githubusercontent.com/97522154/201515068-aee4b588-030a-488e-b96f-de76adecb387.png"
                alt="thumbnail"
              />

              <Text
                mt={4}
                padding="8px"
                fontSize="20px"
                fontWeight={500}
                textAlign="center"
              >
                SpinKart Clone
              </Text>
              <Text fontSize={"18px"} padding="8px" color={"gray"} noOfLines={6}>
                SpinKart is an online book Website. Where you can get the
                different kinds of the books and their information. You can get
                these books from the Amazon, Flipkart or any other kinds of the
                Ecommerce Platform. You can visit the link below to know more.
              </Text>
              <Flex gap={"50px"} alignItems={"center"} padding="8px">
                <Box>Tech Stack Used : </Box>
                <Box
                  display={"flex"}
                  gap="15px"
                  alignItems={"center"}
                  justifyContent="center"
                >
                  <SiHtml5 size={"30px"} />
                  <SiReact size={"30px"} />
                  <SiJavascript size={"30px"} />
                  <SiChakraui size={"30px"} />
                </Box>
              </Flex>
              <Flex mt={8} gap="80px" mb={4}>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  borderRadius = "15px"
                  bg={"blue.800"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  <a href="https://spinkart.vercel.app/">See Project</a>
                </Button>

                <Button
                  flex={1}
                  fontSize={"sm"}
                  borderRadius = "15px"
                  bg={"blue.800"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  <a href="https://github.com/imukeshkaushal/spinkart-clone">
                    Visit Github
                  </a>
                </Button>
              </Flex>
            </Box>
          </Box>

          <Box border={"2px solid gray"} borderRadius="20px" boxShadow= "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px">
            <Box padding="10px">
              <Image
                borderRadius={"20px"}
                border="5px solid white"
                width="100%"
                src="https://user-images.githubusercontent.com/97522154/204504246-c7e3ec1d-026c-4c76-84c1-5c405abdbcaf.png"
                alt="thumbnail"
              />

              <Text
                mt={4}
                padding="8px"
                fontSize="20px"
                fontWeight={500}
                textAlign="center"
              >
                Gymgolf Clone
              </Text>
              <Text fontSize={"18px"} padding="8px" color={"gray"} noOfLines={6}>
                Gymwolf is a workout tracking tool. Add workouts, create your
                own customized workout plans or find suitable plan from other
                users. Accomplish your goals with motivation from personal
                trainer and committed training.
              </Text>
              <Flex gap={"50px"} alignItems={"center"} padding="8px">
                <Box>Tech Stack Used : </Box>
                <Box
                  display={"flex"}
                  gap="15px"
                  alignItems={"center"}
                  justifyContent="center"
                >
                  <SiHtml5 size={"30px"} />
                  <SiReact size={"30px"} />
                  <SiJavascript size={"30px"} />
                  <SiChakraui size={"30px"} />
                </Box>
              </Flex>
              <Flex mt={8} gap="80px" mb={4}>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  borderRadius = "15px"
                  bg={"blue.800"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  <a href="https://gymwolf-beta.vercel.app/">See Project</a>
                </Button>

                <Button
                  flex={1}
                  fontSize={"sm"}
                  borderRadius = "15px"
                  bg={"blue.800"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  <a href="https://github.com/imukeshkaushal/perpetual-paper-4225/tree/main/gymwolf">
                    Visit Github
                  </a>
                </Button>
              </Flex>
            </Box>
          </Box>

          <Box border={"2px solid gray"} borderRadius="20px" boxShadow= "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px">
            <Box padding="10px">
              <Image
                borderRadius={"20px"}
                border="5px solid white"
                width="100%"
                src="https://user-images.githubusercontent.com/97522154/204501419-d42049f0-d442-4236-8aae-a8e01f259853.png"
                alt="StyleCraze Clone"
              />

              <Text
                mt={4}
                padding="8px"
                fontSize="20px"
                fontWeight={500}
                textAlign="center"
              >
                StyleCraze Clone
              </Text>
              <Text fontSize={"18px"} padding="8px" color={"gray"} noOfLines={6}>
                StyleCraze is a Women's Fashion, Beauty, And Wellness Community
                to get solutions to all your Beauty queries. You can find the
                different kinds of shopping related products as well as health
                and beuty related things also available at here.
              </Text>
              <Flex gap={"50px"} alignItems={"center"} padding="8px">
                <Box>Tech Stack Used : </Box>
                <Box
                  display={"flex"}
                  gap="15px"
                  alignItems={"center"}
                  justifyContent="center"
                >
                  <SiHtml5 size={"30px"} />
                  <SiCss3 size={"30px"} />
                  <SiJavascript size={"30px"} />
                </Box>
              </Flex>
              <Flex mt={8} gap="80px" mb={4}>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  borderRadius = "15px"
                  bg={"blue.800"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  <a href="https://astounding-torte-af585a.netlify.app/">
                    See Project
                  </a>
                </Button>

                <Button
                  flex={1}
                  fontSize={"sm"}
                  borderRadius = "15px"
                  bg={"blue.800"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  <a href="https://github.com/rahulyo954030/Project---stylecraze">
                    Visit Github
                  </a>
                </Button>
              </Flex>
            </Box>
          </Box>

          <Box border={"2px solid gray"} borderRadius="20px" boxShadow= "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px">
            <Box padding="10px">
              <Image
                borderRadius={"20px"}
                border="5px solid white"
                width="100%"
                src="https://user-images.githubusercontent.com/97522154/187022550-c47145af-27bc-4338-8eec-27c30a6621fb.png"
                alt="Tmetric"
              />

              <Text
                mt={4}
                padding="8px"
                fontSize="20px"
                fontWeight={500}
                textAlign="center"
              >
                Tmetric Clone
              </Text>
              <Text fontSize={"18px"} padding="8px" color={"gray"} noOfLines={6}>
                TMetric is time tracking software operated by TMetric team,
                headquartered in Prague that offers time tracking service for
                small business owners who want to optimize their business.
              </Text>
              <Flex gap={"50px"} alignItems={"center"} padding="8px">
                <Box>Tech Stack Used : </Box>
                <Box
                  display={"flex"}
                  gap="15px"
                  alignItems={"center"}
                  justifyContent="center"
                >
                  <SiHtml5 size={"30px"} />
                  <SiCss3 size={"30px"} />
                  <SiJavascript size={"30px"} />
                </Box>
              </Flex>
              <Flex mt={8} gap="80px" mb={4}>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  borderRadius = "15px"
                  bg={"blue.800"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  <a href="https://wonderful-jelly-d74aac.netlify.app/">
                    See Project
                  </a>
                </Button>

                <Button
                  flex={1}
                  fontSize={"sm"}
                  borderRadius = "15px"
                  bg={"blue.800"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  <a href="https://github.com/jyotiranjan1997/Tmetric-clone">
                    Visit Github
                  </a>
                </Button>
              </Flex>
            </Box>
          </Box>

          <Box border={"2px solid gray"} borderRadius="20px" boxShadow= "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px">
            <Box padding="10px">
              <Image
                borderRadius={"20px"}
                border="5px solid white"
                width="100%"
                src="https://user-images.githubusercontent.com/97522154/204501980-4b47d7bf-d30e-436a-99d6-55fe1afcfa2a.png"
                alt="Myglamm Clone"
              />

              <Text
                mt={4}
                padding="8px"
                fontSize="20px"
                fontWeight={500}
                textAlign="center"
              >
                Myglamm Clone
              </Text>
              <Text fontSize={"18px"} padding="8px" color={"gray"} noOfLines={6}>
                MyGlamm is based on Hair Care, Makeup, and India's Fastest
                growing beauty brand. I am an individual person who makes these
                projects in just four days. I am using different kinds of stacks
                and technology to build this website.
              </Text>
              <Flex gap={"50px"} alignItems={"center"} padding="8px">
                <Box>Tech Stack Used : </Box>
                <Box
                  display={"flex"}
                  gap="15px"
                  alignItems={"center"}
                  justifyContent="center"
                >
                  <SiHtml5 size={"30px"} />
                  <SiCss3 size={"30px"} />
                  <SiJavascript size={"30px"} />
                </Box>
              </Flex>
              <Flex mt={8} gap="80px" mb={4}>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  borderRadius = "15px"
                  bg={"blue.800"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  <a href="https://leafy-granita-1a0d6c.netlify.app/">
                    See Project
                  </a>
                </Button>

                <Button
                  flex={1}
                  fontSize={"sm"}
                  borderRadius = "15px"
                  bg={"blue.800"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  <a href="https://github.com/imukeshkaushal/myglamm-clone">
                    Visit Github
                  </a>
                </Button>
              </Flex>
            </Box>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default Projects;
