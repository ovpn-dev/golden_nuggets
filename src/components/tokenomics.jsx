import { Box, Flex, Heading, Text, Link, Image, Stack } from "@chakra-ui/react";

const Tokenomics = () => {
  return (
    <Box id="tokenomics" bg="lyllw.400" py={5} zIndex={10} position="relative">
      <Box maxW={"auto"} mx="auto" px={4}>
        <Stack
          bgGradient="linear(to-t, yllw.500, lyllw.500)"
          backdropFilter="blur(10px)"
          gap={8}
          alignItems="center"
          justifyContent="center"
          w="full"
          p={10}
          rounded="2xl"
          border="1px"
          borderColor="lyllw.700"
          opacity={1}
        >
          <Flex direction={{ base: "column", md: "row" }}>
            <Box>
              <Flex alignItems="center" justifyContent="center" opacity={1}>
                <Image
                  src="https://imagedelivery.net/cwNlIhFkSHgM59lNYMgaeA/c49d64b0-1a07-4057-a7c7-1810e94bb600/public"
                  alt="Token Image"
                />
              </Flex>
            </Box>
            <Stack alignItems="center" gap={4} textAlign="center">
              <Heading
                as="h1"
                fontSize={{ base: "6xl", md: "8xl" }}
                textAlign="center"
                textShadow="-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000"
                opacity={1}
              >
                TOKENOMICS
              </Heading>
              <Box textAlign="center">
                <Text fontSize={{ base: "5xl", md: "7xl" }} mt={5} opacity={1}>
                  85% LP
                </Text>
                <Text fontSize={{ base: "5xl", md: "7xl" }} mt={5} opacity={1}>
                  10% TREASURY
                </Text>
                <Text fontSize={{ base: "5xl", md: "7xl" }} mt={5} opacity={1}>
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
              w="full"
              bg="lyllw.700"
              rounded="3xl"
              dropShadow="lg"
              transition="all 0.3s ease-in-out"
              _hover={{ transform: "scale(1.1)", bg: "lyllw.900" }}
              href="https://basescan.org/tx/0x748e6b909db8798aab851294c416e058f5b9fccc2367a7ec608bfda50c39432b"
              isExternal
            >
              <Heading>CONTRACT RENOUNCED</Heading>
            </Link>
            <Link
              w="full"
              bg="lyllw.700"
              rounded="3xl"
              dropShadow="lg"
              transition="all 0.3s ease-in-out"
              _hover={{ transform: "scale(1.1)", bg: "lyllw.900" }}
              href="https://basescan.org/tx/0x7b59c9fc5476bfc5d5cdd467926a928ad6b18cb0092b9fa096332d9f441337c3"
              isExternal
            >
              <Heading>LP LOCKED 365 DAYS</Heading>
            </Link>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
};

export default Tokenomics;
