import React from "react";
import {
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Heading,
  Center,
  Button,
  Container,
} from "@chakra-ui/react";

interface Props {
  start: () => void;
}

const Start = ({ start }: Props) => {
  return (
    <Center minH="100vh">
      <VStack textAlign="center" mx="10" spacing="5">
        <Heading fontWeight="bold" size="2xl">
          Shuffle and Practice!
        </Heading>
        <Text fontSize="md">
          Write a list of words or topics, shuffle them and practice!
        </Text>
        <Button variant="solid" colorScheme="purple" px="10" onClick={start}>
          Start
        </Button>
      </VStack>
    </Center>
  );
};

export default Start;
