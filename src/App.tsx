import React, { useState } from "react";
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
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const App = () => {
  const [started, setStarted] = useState(false);

  return (
    <Grid textAlign="center" minH="100vh" p="3">
      <ColorModeSwitcher justifySelf="flex-end" />
      <VStack mx="10" spacing="5">
        <Heading fontWeight="bold" size="2xl">
          Shuffle and Practice!
        </Heading>
        <Text fontSize="md">
          Write a list of words or topics, shuffle them and practice!
        </Text>
        <Button
          variant="solid"
          colorScheme="purple"
          px="10"
          onClick={() => setStarted(true)}
        >
          Start
        </Button>
      </VStack>
    </Grid>
  );
};
