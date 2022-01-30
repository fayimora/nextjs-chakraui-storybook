import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Container maxW='container.lg' centerContent>
      <Flex h='100vh' justifyContent='center' alignItems='center'>
        <Button
          leftIcon={<AddIcon />}
          colorScheme='blue'
          variant='solid'
          size='lg'
        >
          Create Board
        </Button>
      </Flex>
    </Container>
  );
};

export default Home;
