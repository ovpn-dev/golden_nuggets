import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaTwitter, FaTelegram } from "react-icons/fa";
import logo from "../assets/IMG_20240506_094602_579.png";

const Links = [
  { name: "Home", path: "#" },
  { name: "About", path: "#" },
  { name: "How to Buy", path: "#" },
  { name: "Contact", path: "#" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-around"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Flex alignItems={"center"}>
          <Flex align="center" color={"#FFDF00"}>
            <Image src={logo} h="40px" w="40px" alt="Image description" />
            Golden $Nuggets
          </Flex>
        </Flex>
        <HStack spacing={8} alignItems={"center"}>
          <HStack
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
            align={"start"}
          >
            {Links.map((link) => (
              <Link
                key={link.name}
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={link.path}
              >
                {link.name}
              </Link>
            ))}
          </HStack>
          <Flex alignItems={"center"}>
            <Link href="https://twitter.com/Joe_gedagediged">
              <IconButton
                aria-label="Twitter"
                icon={<FaTwitter />}
                variant="ghost"
                size="lg"
                isRound
                _hover={{ bg: "blue.500", color: "white" }}
              />
            </Link>

            <Link href="https://t.me/Gedagedigedagedago_Joe">
              <IconButton
                aria-label="Telegram"
                icon={<FaTelegram />}
                variant="ghost"
                size="lg"
                isRound
                _hover={{ bg: "blue.500", color: "white" }}
                ml={2}
              />
            </Link>
          </Flex>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <Link
                key={link.name}
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={link.path}
              >
                {link.name}
              </Link>
            ))}
            <HStack justifyContent="center">
              <Link href="https://twitter.com/Joe_gedagediged">
                <IconButton
                  aria-label="Twitter"
                  icon={<FaTwitter />}
                  variant="ghost"
                  size="lg"
                  isRound
                  _hover={{ bg: "blue.500", color: "white" }}
                />
              </Link>

              <Link href="https://t.me/Gedagedigedagedago_Joe">
                <IconButton
                  aria-label="Telegram"
                  icon={<FaTelegram />}
                  variant="ghost"
                  size="lg"
                  isRound
                  _hover={{ bg: "blue.500", color: "white" }}
                />
              </Link>
            </HStack>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
