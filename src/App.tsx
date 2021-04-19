import React, { useState } from "react";
import { Box, VStack, Button, Fade } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import ColorModeSwitcher from "./components/ColorModeSwitcher";
import Start from "./components/Start";
import WordsInput from "./components/WordsInput";
import WordsList from "./components/WordsList";
import Practice from "./components/Practice";

// Palabra o tema
export interface Word {
  id: string;
  content: string;
}

export const App = () => {
  // Estados
  const [started, setStarted] = useState(false);
  const [practice, setPractice] = useState(false);
  const [words, setWords] = useState<Word[]>([]);

  // Agregar una palabra o tema a la lista
  const addWord = (word: string) => {
    const newWord: Word = {
      id: uuidv4(), // Id único
      content: word,
    };

    setWords([...words, newWord]);
  };

  // Borrar una palabra o tema de la lista
  const deleteWord = (id: string) => {
    const newWords: Word[] = words.filter((word) => word.id !== id);

    setWords(newWords);
  };

  // Revolver las palabras o temas de la lista
  const shuffle = () => {
    const newWords = [...words];

    for (let i = 0; i < newWords.length; i++) {
      // Genera un entero aleatorio
      let j = Math.floor(Math.random() * newWords.length);
      // Hace el intercambio
      let aux = newWords[i];
      newWords[i] = newWords[j];
      newWords[j] = aux;
    }

    setWords(newWords);
  };

  // OnClick al botón de shuffle para iniciar la práctica
  const handleShuffleClick = () => {
    shuffle();
    setStarted(false);
    setPractice(true);
  };

  // Terminar la práctica
  const finish = () => {
    setWords([]);
    setPractice(false);
  };

  return (
    <Box>
      {/* Botón para cambiar el tema */}
      <ColorModeSwitcher />
      {/* Transición a iniciar la app */}
      <Fade in={started} unmountOnExit>
        {/* Pantalla para crear la lista */}
        <VStack p="6" spacing="6">
          <WordsInput addWord={addWord} />
          <WordsList words={words} deleteWord={deleteWord} />
          <Button
            isDisabled={!words.length}
            variant="solid"
            colorScheme="purple"
            px="10"
            onClick={handleShuffleClick}
          >
            Shuffle
          </Button>
        </VStack>
      </Fade>
      {/* Transición para iniciar la práctica */}
      <Fade in={practice} unmountOnExit>
        {/* Práctica */}
        <Practice words={words} finish={finish} />
      </Fade>
      {/* Pantalla de inicio de la app */}
      {!started && !practice && <Start start={() => setStarted(true)} />}
    </Box>
  );
};
