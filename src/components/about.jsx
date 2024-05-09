import * as React from "react";
import {
  Container,
  Heading,
  Stack,
  HStack,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
  Link,
  Text,
  Flex,
  Divider,
} from "@chakra-ui/react";
import nugget from "../assets/mainNuggets.png";

export default function ProductIntro() {
  return (
    <Box align="center" justify={"space-around"}>
      <Flex
        color="white"
        fontWeight={700}
        m={5}
        align="center"
        justify={"center"}
      >
        <Heading>BRETT</Heading>
        <Divider w="2xl" />
        <Text>THE PEPE'S BESTFRIEND</Text>
      </Flex>
      <Stack
        direction={{ base: "column-reverse", md: "row" }}
        px={{ base: 6, md: 3 }}
        py={10}
        bg="#0244a5b3"
        rounded="2xl"
        border="1px"
        borderColor="#0244a5b3.700"
        backdropFilter="blur(10px)"
      >
        <Box>
          <Image
            w="100%"
            h="100%"
            minW={{ base: "auto", md: "30rem" }}
            objectFit="cover"
            src={nugget}
            rounded="md"
          />
        </Box>
        <Stack direction="column" spacing={6} color="white">
          <Heading
            as="h2"
            size="2xl"
            fontWeight="bold"
            textAlign="left"
            maxW={{ base: "100%", md: "480px" }}
          >
            Who's Brett?!
          </Heading>
          <Text
            textAlign="left"
            lineHeight="1.375"
            fontWeight={700}
            maxW={{ base: "100%", md: "570px" }}
          >
            Brett is the legendary character from Matt Furie’s Boys' club comic.
            He is a dancer and loves video games. Now he is living on the BASE
            blockchain as a Fan tribute. He has become blue mascot of the blue
            chain, BASE.
          </Text>
        </Stack>
      </Stack>
      <Flex
        align="center"
        justify={"space-around"}
        w="2xl"
        m={5}
        direction={{ base: "column", md: "row" }}
      >
        <Button
          colorScheme="teal"
          variant="solid"
          size="md"
          rounded="md"
          boxShadow="md"
        >
          TELEGRAM
        </Button>
        <Button
          colorScheme="teal"
          variant="solid"
          size="md"
          rounded="md"
          boxShadow="md"
        >
          TWITTER
        </Button>
      </Flex>
    </Box>
  );
}
