import React from "react";
import { Box, Flex, Spacer, Text, HStack } from "@chakra-ui/react";
import MotionBox from "./MotionBox";

const Navbar = () => {
  return (
    <Flex background="brand.navbar" alignItems="center" px={4}>
      <Text># General</Text>
      <Spacer />
      <HStack spacing={4}>
        <Text>Connected</Text>
        <Flex borderRadius="full" w={4} h={4} bg="green.500" pos="relative">
          <MotionBox
            pos="absolute"
            borderRadius="full"
            top={0}
            left={0}
            w={4}
            h={4}
            bg="green.500"
            opacity={0.5}
            transition={{ repeat: Infinity, duration: 2 }}
            animate={{
              scale: [1.3, 1.7, 1.3, 1.7, 1.3],
            }}
          />
        </Flex>
      </HStack>
    </Flex>
  );
};

export default Navbar;
