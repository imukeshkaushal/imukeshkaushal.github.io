import { Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import {
  SiCodesandbox,
  SiGithub,
  SiHackerrank,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <Flex
        borderTop={"1px solid gray"}
        width="100%"
        gap={4}
        padding={3}
        justifyContent="center"
        textColor={"white.400"}
        direction={["column", "column", "row"]}
        alignItems="center"
      >
        <Text> Copyrights © Rights Reserved By Mukesh Kaushal</Text>
        <Spacer />
        <Flex gap={12}>
          <a href="https://github.com/imukeshkaushal">
            {" "}
            <SiGithub size={20} />
          </a>
          <a href="https://twitter.com/imukeshkaushal">
            {" "}
            <SiTwitter size={20} />
          </a>
          <a href="https://www.linkedin.com/in/mukesh-kaushal/">
            {" "}
            <SiLinkedin size={20} />
          </a>
          <a href="https://www.hackerrank.com/imukeshkaushal">
            {" "}
            <SiHackerrank size={20} />
          </a>

          <a href="https://codesandbox.com/mukeshkaushal">
            {" "}
            <SiCodesandbox size={20} />
          </a>
        </Flex>
      </Flex>
    </div>
  );
};

export default Footer;
