import React from "react";
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import ScSh136 from "../assets/scrnsht136.jpg";

const milestones = [
  {
    id: 1,
    date: "STEP 1",
    title: "BUY ETHEREUM",
    description: `Since $NUGGET is initially listed on Uniswap, Which is am Ethereum-Based Decentralized Exchange. You'll need some Eth to get started. You can purchase ETH from any popular Cryptocurrency Exchange`,
  },
  {
    id: 2,
    date: "STEP 2",
    title: "SETUP A DIGITAL WALLET",
    description: `To store your $NUGGET tokens, you'll need a digital wallet that can handle ERC-20 tokens. Metamask is a popular choice and is easy to set up.`,
  },
  {
    id: 3,
    date: "STEP 3",
    title: "VISIT UNISWAP",
    description:
      "Once your wallet is ready, Go to Uniswap. Make sure you have connected to Uniswap",
  },
  {
    id: 4,
    date: "STEP 4",
    title: "SWAP ETH FOR $NUGGET",
    description: "On Uniswap, Swap your desired amount of ETH for $NUGGET",
  },
  {
    id: 5,
    date: "STEP 5",
    title: "CONFIRM THE TRANSACTION",
    description: "After reviewing the transaction details, confirm the swap",
  },
  {
    id: 6,
    date: "STEP 6",
    title: "WELCOME TO THE $NUGGET COMMUNITY",
    description:
      "Your $NUGGET tokens will now appear in your wallet. Welcome to the community!",
  },
];

const Milestones = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container
      maxWidth="7xl"
      p={{ base: 2, sm: 10 }}
      backgroundImage={`url(${ScSh136})`}
      bgSize="cover" // Covers the entire box area
      bgPos="center"
    >
      <chakra.h3
        fontSize="4xl"
        fontWeight="bold"
        mb={18}
        color="White"
        textAlign="center"
      >
        HOW TO BUY
      </chakra.h3>
      {milestones.map((milestone) => (
        <Flex key={milestone.id} mb="10px">
          {/* Desktop view(left card) */}
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <Card {...milestone} />

              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Container>
  );
};

const Card = ({ id, title, description, date }) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 == 0;
  let borderWidthValue = isEvenId ? "15px 15px 15px 0" : "15px 0 15px 15px";
  let leftValue = isEvenId ? "-15px" : "unset";
  let rightValue = isEvenId ? "unset" : "-15px";

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = "-15px";
    rightValue = "unset";
    borderWidthValue = "15px 15px 15px 0";
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue("gray.100", "gray.800")}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue(
          "#edf2f6",
          "#1a202c"
        )} transparent`,
        borderStyle: "solid",
        borderWidth: borderWidthValue,
        position: "absolute",
        left: leftValue,
        right: rightValue,
        display: "block",
      }}
    >
      <Box>
        <Text fontSize="lg" color={isEvenId ? "teal.400" : "blue.400"}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <Text fontSize="md">{description}</Text>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: "40px", md: "40px" }}
      ml={{ base: "0", md: "40px" }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue("gray.600", "gray.200")}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return (
    <Box
      flex={{ base: 0, md: 1 }}
      p={{ base: 0, md: 6 }}
      bg="transparent"
    ></Box>
  );
};

export default Milestones;
