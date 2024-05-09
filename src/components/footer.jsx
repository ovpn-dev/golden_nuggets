import { Box, Text, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" position="relative" py={12}>
      <Box maxW="screen-xl" mx="auto" flexDir="column" gap={4}>
        <Flex alignItems="center" justifyContent="center" py={12}>
          <Text
            fontSize="9xl"
            textAlign="center"
            color="white"
            w="max-content"
            textColor="transparent"
            pointerEvents="none"
            textShadow="-2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000"
          >
            BASED BRETT
          </Text>
        </Flex>
        <Flex justifyContent="center" w="full" py={4}>
          <Text color="white">Copyright © 2024. All rights reserved.</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
