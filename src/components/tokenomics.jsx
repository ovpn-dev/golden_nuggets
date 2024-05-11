import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Image,
  Stack,
  Button,
} from "@chakra-ui/react";

const Tokenomics = () => {
  return (
    <Box
      id="tokenomics"
      py={10}
      zIndex={10}
      bgGradient="linear(to-t, #0244a5b3, transparent)"
      position="relative"
    >
      <Box maxW={"7xl"} mx="auto" px={5}>
        <Stack
          bg="#0244a5b3"
          bgGradient="linear(to-t, yllw.500, lyllw.500)"
          border="1px"
          borderColor="#0244a5b3.700"
          backdropFilter="blur(10px)"
          gap={8}
          w="auto"
          p={10}
          rounded="2xl"
          opacity={1}
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent="center"
          >
            <Box>
              <Flex alignItems="center" justifyContent="center" opacity={1}>
                <Image
                  src="https://imagedelivery.net/cwNlIhFkSHgM59lNYMgaeA/c49d64b0-1a07-4057-a7c7-1810e94bb600/public"
                  alt="Token Image"
                />
              </Flex>
            </Box>
            <Stack
              alignItems="center"
              gap={4}
              textAlign="center"
              textColor={"White"}
            >
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "6xl" }}
                textAlign="center"
                textShadow="-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000"
                opacity={1}
              >
                TOKENOMICS
              </Heading>
              <Box textAlign="center" fontWeight={700}>
                <Text fontSize={{ base: "2xl", md: "4xl" }} mt={5} opacity={1}>
                  85% LP
                </Text>
                <Text fontSize={{ base: "2xl", md: "4xl" }} mt={5} opacity={1}>
                  10% TREASURY
                </Text>
                <Text fontSize={{ base: "2xl", md: "4xl" }} mt={5} opacity={1}>
                  5% CEX WALLET
                </Text>
              </Box>
            </Stack>
          </Flex>
          <Flex
            direction={{ base: "column", sm: "row" }}
            gap={{ base: 5, sm: 5 }}
            textAlign="center"
            fontSize="5xl"
            mt={5}
          >
            <Link
              dropShadow="lg"
              transition="all 0.3s ease-in-out"
              _hover={{ transform: "scale(1.1)" }}
              href="https://basescan.org/tx/0x748e6b909db8798aab851294c416e058f5b9fccc2367a7ec608bfda50c39432b"
              isExternal
            >
              <Button
                rounded="full"
                w="full"
                size={"lg"}
                p={5}
                bg="#0244a5b3"
                color={"white"}
              >
                CONTRACT RENOUNCED
              </Button>
            </Link>
            <Link
              dropShadow="lg"
              transition="all 0.3s ease-in-out"
              _hover={{ transform: "scale(1.1)" }}
              href="https://basescan.org/tx/0x7b59c9fc5476bfc5d5cdd467926a928ad6b18cb0092b9fa096332d9f441337c3"
              isExternal
            >
              <Button
                rounded="full"
                w="full"
                size={"lg"}
                p={5}
                bg="#0244a5b3"
                color={"white"}
              >
                LP LOCKED 365 DAYS
              </Button>
            </Link>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
};

export default Tokenomics;
