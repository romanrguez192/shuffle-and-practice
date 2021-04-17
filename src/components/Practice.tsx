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
} from "@chakra-ui/react";
import { Word } from "../App";

interface Props {
  words: Word[];
}

const Practice = ({ words }: Props) => {
  return (
    <Box>
      <Text>Practice</Text>
    </Box>
  );
};

export default Practice;
