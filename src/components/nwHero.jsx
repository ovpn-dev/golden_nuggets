import { CopyIcon } from "@chakra-ui/icons";
import {
  Button,
  Box,
  ButtonGroup,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import mainNugs from "../assets/mainNuggets.png";

export default function NewHero() {
  return (
    <>
      <Stack w={"full"} h="auto" p={10} bg="#0244a566">
        <Stack backdropBlur={2} rounded="2xl">
          <Flex m={5}>
            <Image src={mainNugs} w="50%" />
            <Box
              display="flex"
              flexDirection="column"
              color="white"
              width="full"
              lg="50%"
              alignItems={{ base: "center", lg: "start" }}
            >
              <Text
                fontFamily="primary"
                fontWeight="semibold"
                letterSpacing="0.5rem"
                opacity={1}
                transform="none"
              >
                INTRODUCING
              </Text>
              <Text
                fontFamily="primary"
                fontSize={{ base: "7xl", lg: "9xl" }}
                bgGradient="linear(to-r, white, transparent)"
                textStroke="white"
                textTransform="transparent"
                pointerEvents="none"
                opacity={1}
                transform="none"
              >
                BRETT
              </Text>
              <Text
                fontFamily="primary"
                fontSize="3xl"
                letterSpacing="0.5rem"
                textAlign={{ base: "center", lg: "left" }}
                opacity={1}
                transform="none"
              >
                PEPE'S best friend on BASE
              </Text>
            </Box>
          </Flex>

          <Text
            fontFamily="primary"
            fontSize="2xl"
            letterSpacing="0.5rem"
            textAlign="center"
            opacity={1}
            transform="none"
            textColor={"White"}
          >
            one of cryptos most significant cultural icons and the mascot of
            BASE chain
          </Text>
          <Divider />
          <Stack align={"center"} justify="center">
            <Button leftIcon={<CopyIcon />}>
              0x532f27101965dd16442E59d40670FaF5eBB142E4
            </Button>
            <Flex>
              <ButtonGroup gap={5} flex={{ base: "row", md: "column" }}>
                <Button>Buy on Kyberswap</Button>
                <Button>Buy on OKX</Button>
                <Button>Dextools Chart</Button>
              </ButtonGroup>
            </Flex>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
