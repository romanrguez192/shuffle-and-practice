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
  HStack,
  Spacer,
  IconButton,
  StackDivider,
  Flex,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { Word } from "../App";

interface Props {
  words: Word[];
}

const WordsList = ({ words }: Props) => {

  if (!words.length) {
    return (<Box>
      <Text>No hay nah</Text>
    </Box>)
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
          <IconButton icon={<FaTrash />} aria-label="Delete" />
        </HStack>
      ))}
    </VStack>
  );
};

export default WordsList;
