import React, { ChangeEvent, FormEvent, useState } from "react";
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

interface Props {
  addWord: (word: string) => void;
}

const WordsInput = ({ addWord }: Props) => {
  const [word, setWord] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (word.trim() === "") {
      return;
    }

    addWord(word.trim());
  };

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  return (
    <VStack textAlign="center" spacing="6">
      <Heading mt="45" fontWeight="bold" size="xl">
        Shuffle and Practice!
      </Heading>
      <form onSubmit={handleSubmit}>
        <HStack maxW="md">
          <Input
            variant="filled"
            placeholder="Write a word or a topic"
            onChange={handleChangeText}
          />
          <Button colorScheme="purple" px="10" type="submit">
            Add
          </Button>
        </HStack>
      </form>
    </VStack>
  );
};

export default WordsInput;