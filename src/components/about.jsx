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
        <Stack direction="column" spacing={6}>
          <Heading
            as="h2"
            size="2xl"
            fontWeight="bold"
            textAlign="left"
            maxW={{ base: "100%", md: "480px" }}
          >
            About Us
          </Heading>
          <Text
            color={useColorModeValue("gray.700", "gray.400")}
            fontSize="1.2rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="300"
            maxW={{ base: "100%", md: "570px" }}
          >
            At Golden Nuggets, we believe in the power of community. That's why
            a portion of every transaction contributes towards impactful
            projects, charities, and initiatives chosen by our community
            members. Together, we can make a real difference while enjoying the
            exciting world of cryptocurrency. Token Name: Gegagedigedagedago
            Ticker: JOE Total Supply: 1,000,000,000 Tokens
          </Text>
          <HStack spacing={3}>
            <Button
              colorScheme="teal"
              variant="solid"
              size="md"
              rounded="md"
              boxShadow="md"
            >
              Join Pre-Sale
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
              Demo
            </Box>
          </HStack>
          <HStack spacing={5}>
            <Image w="40%" h="40%" objectFit="cover" src={base} />
          </HStack>
        </Stack>
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
      </Stack>
    </Container>
  );
};

export default ProductIntro;
