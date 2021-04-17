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
  Fade,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';
import ColorModeSwitcher from "./components/ColorModeSwitcher";
import Start from "./components/Start";
import WordsInput from "./components/WordsInput";
import WordsList from "./components/WordsList";

export interface Word {
  id: string;
  content: string;
}

export const App = () => {
  const [started, setStarted] = useState(false);
  const [words, setWords] = useState<Word[]>([]);

  const addWord = (word: string) => {
    const newWord = {
      id: uuidv4(),
      content: word,
    };

    setWords([...words, newWord]);
  };

  const deleteWord = (id: string) => {
    const newWords = words.filter((word) => word.id !== id);

    setWords(newWords);
  };

  return (
    <Box>
      <ColorModeSwitcher />
      <Fade in={started} unmountOnExit>
        <VStack p="6" spacing="6">
          <WordsInput addWord={addWord} />
          <WordsList words={words} deleteWord={deleteWord} />
          <Button
            isDisabled={!words.length}
            variant="solid"
            colorScheme="purple"
            px="10"
          >
            Practice
          </Button>
        </VStack>
      </Fade>
      {!started && <Start start={() => setStarted(true)} />}
    </Box>
  );
};
