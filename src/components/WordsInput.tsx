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
  HStack,
  FormControl,
  Input,
} from "@chakra-ui/react";
import { Word } from "../App";

interface Props {
  addWord: (word : Word) => void;
}

const WordsInput = () => {

  const [word, setWord] = useState();

  return (
    <VStack textAlign="center" spacing="6">
      <Heading mt="45" fontWeight="bold" size="xl">
        Shuffle and Practice!
      </Heading>
      <FormControl maxW="md">
        <HStack>
          <Input variant="filled" placeholder="Write a word or a topic" />
          <Button colorScheme="purple" px="10">
            Add
          </Button>
        </HStack>
      </FormControl>
    </VStack>
  );
};

export default WordsInput;
