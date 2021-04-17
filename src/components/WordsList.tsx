import React from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Spacer,
  IconButton,
  StackDivider,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { Word } from "../App";

interface Props {
  words: Word[];
  deleteWord: (id: string) => void;
}

const WordsList = ({ words, deleteWord }: Props) => {
  if (!words.length) {
    return (
      <Box>
        <Text>Add some words or topics to practice!</Text>
      </Box>
    );
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderWidth="2px"
      borderRadius="md"
      borderColor="gray.400"
      p="5"
      w="100%"
      maxW="xl"
      alignItems="stretch"
    >
      {words.map((word) => (
        <HStack key={word.id}>
          <Text>{word.content}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            aria-label="Delete"
            onClick={() => deleteWord(word.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
};

export default WordsList;
