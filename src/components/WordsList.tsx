import React from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Spacer,
  IconButton,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { Word } from "../App";

// Props del componente
interface Props {
  words: Word[];
  deleteWord: (id: string) => void;
}

// Lista de palabras o temas agregados
const WordsList = ({ words, deleteWord }: Props) => {
  // Color dependiendo del tema
  const color = useColorModeValue("purple.500", "purple.200");

  // Si aún no se agregan palabras o temas
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
      borderColor={color}
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
            color={color}
            aria-label="Delete"
            onClick={() => deleteWord(word.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
};

export default WordsList;
