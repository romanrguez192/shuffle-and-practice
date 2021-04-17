import React, { useState } from "react";
import {
  Center,
  Button,
  Alert,
  AlertDescription,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaCheckCircle,
} from "react-icons/fa";
import { Word } from "../App";

interface Props {
  words: Word[];
  finish: () => void;
}

const Practice = ({ words, finish }: Props) => {
  const [currentWord, setCurrentWord] = useState(0);

  return (
    <Center flexDirection="column" minH="100vh" p="6">
      <Alert
        variant="solid"
        colorScheme="purple"
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        w="100%"
        maxW="md"
        h="40"
        borderRadius="md"
        fontSize="xl"
      >
        <IconButton
          colorScheme="purple"
          icon={<FaArrowLeft />}
          aria-label="Previous"
          onClick={() => setCurrentWord(currentWord - 1)}
          isDisabled={currentWord === 0}
        />
        <Spacer />
        <AlertDescription>{words[currentWord].content}</AlertDescription>
        <Spacer />
        <IconButton
          colorScheme="purple"
          icon={<FaArrowRight />}
          aria-label="Next"
          onClick={() => setCurrentWord(currentWord + 1)}
          isDisabled={currentWord === words.length - 1}
        />
      </Alert>
      <Button
        mt="4"
        variant="solid"
        colorScheme="purple"
        px="10"
        leftIcon={<FaCheckCircle />}
        onClick={finish}
      >
        Finish
      </Button>
    </Center>
  );
};

export default Practice;
