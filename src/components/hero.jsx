import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Link,
  Heading,
} from "@chakra-ui/react";
import videoSource from "../assets/5_6181725431037693461.MOV";

export default function HeroSection() {
  return (
    <Flex w={"full"} h={"100vh"} position="relative" overflow="hidden">
      <video
        src={videoSource}
        autoPlay
        loop
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Heading color={"#FFD700"}>Golden $NUGGETS</Heading>
          <Text color={"White"} fontWeight={700}>
            Get ready to embark on a journey to the moon with our groundbreaking
            meme coin. Right now we are offering early access to our Presale! Be
            one of the first to secure an early buy-in positionof this wonderful
            movment!
          </Text>
          <Stack direction={"row"}>
            <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              <Link href="https://twitter.com/Joe_gedagediged"> Twitter</Link>
            </Button>
            <Button
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              <Link href="https://t.me/Gedagedigedagedago_Joe"> Telegram</Link>
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
