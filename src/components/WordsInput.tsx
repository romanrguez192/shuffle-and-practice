import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  VStack,
  Heading,
  Button,
  HStack,
  Input,
  useToast,
} from "@chakra-ui/react";

// Props del componente
interface Props {
  addWord: (word: string) => void;
}

// Input y botón para agregar palabras o temas
const WordsInput = ({ addWord }: Props) => {
  // Estados
  const [word, setWord] = useState("");
  const toast = useToast();

  // Submit del form
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // En caso de que esté vacío
    if (word.trim() === "") {
      toast({
        title: "Please write a word or a topic",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    addWord(word.trim());
    setWord("");
  };

  // Cambio de texto en el input
  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  return (
    <VStack textAlign="center" spacing="6">
      {/* Título */}
      <Heading mt="45" fontWeight="bold" size="xl">
        Shuffle and Practice!
      </Heading>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <HStack maxW="md">
          {/* Input */}
          <Input
            autoFocus
            variant="filled"
            placeholder="Write a word or a topic"
            value={word}
            onChange={handleChangeText}
          />
          {/* Botón */}
          <Button colorScheme="purple" px="10" type="submit">
            Add
          </Button>
        </HStack>
      </form>
    </VStack>
  );
};

export default WordsInput;
