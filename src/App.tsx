import React, { useState } from "react";
import { Box, VStack, Button, Fade } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import ColorModeSwitcher from "./components/ColorModeSwitcher";
import Start from "./components/Start";
import WordsInput from "./components/WordsInput";
import WordsList from "./components/WordsList";
import Practice from "./components/Practice";

export interface Word {
  id: string;
  content: string;
}

export const App = () => {
  const [started, setStarted] = useState(false);
  const [practice, setPractice] = useState(false);
  const [words, setWords] = useState<Word[]>([]);

  const addWord = (word: string) => {
    const newWord: Word = {
      id: uuidv4(),
      content: word,
    };

    setWords([...words, newWord]);
  };

  const deleteWord = (id: string) => {
    const newWords: Word[] = words.filter((word) => word.id !== id);

    setWords(newWords);
  };

  const handlePracticeClick = () => {
    setStarted(false);
    setPractice(true);
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
            onClick={handlePracticeClick}
          >
            Practice
          </Button>
        </VStack>
      </Fade>
      <Fade in={practice} unmountOnExit>
        <Practice words={words} />
      </Fade>
      {!started && !practice && <Start start={() => setStarted(true)} />}
    </Box>
  );
};
