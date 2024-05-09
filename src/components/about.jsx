import * as React from "react";
import {
  Container,
  Heading,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
  Link,
} from "@chakra-ui/react";
import nugget from "../assets/mainNuggets.png";
import base from "../assets/base.png";

const ProductIntro = () => {
  return (
    <Container maxW="5xl" px={{ base: 6, md: 3 }} py={10}>
      <Stack direction={{ base: "column-reverse", md: "row" }}>
        <Box ml={{ base: 0, md: 5 }}>
          <Image
            w="100%"
            h="100%"
            minW={{ base: "auto", md: "30rem" }}
            objectFit="cover"
            src={nugget}
            rounded="md"
            fallback={<Skeleton />}
          />
        </Box>
        <Stack direction="column" spacing={6}>
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
            color={useColorModeValue("gray.700", "gray.400")}
            fontSize="1.2rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="300"
            maxW={{ base: "100%", md: "570px" }}
          >
            Brett is the legendary character from Matt Furie’s Boys' club comic.
            He is a dancer and loves video games. Now he is living on the BASE
            blockchain as a Fan tribute. He has become blue mascot of the blue
            chain, BASE.
          </Text>

          <HStack spacing={3}>
            <Button
              colorScheme="teal"
              variant="solid"
              size="md"
              rounded="md"
              boxShadow="md"
            >
              TELEGRAM
            </Button>
            <Box
              border="1px solid"
              borderColor="gray.300"
              p={2}
              px={4}
              lineHeight={1.18}
              rounded="md"
              boxShadow="md"
              as={Link}
            >
              TWITTER
            </Box>
          </HStack>
          <HStack spacing={5}>
            <Image w="40%" h="40%" objectFit="cover" src={base} />
          </HStack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ProductIntro;
