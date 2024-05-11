import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Image,
  Button,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  Divider,
  Flex,
  Box,
  Grid,
  GridItem,
  Link,
} from "@chakra-ui/react";
import Bybit from "../assets/Bybit.png";
import phemex from "../assets/phemex.png";
import gate from "../assets/gate.png";
import okx from "../assets/okx.png";
import bingx from "../assets/bing.png";
import bitget from "../assets/bitg.png";
import bitmart from "../assets/bitm.png";
import xt from "../assets/xt.png";
import Bitunix from "../assets/bitu.png";
import Digifinex from "../assets/Digifin.png";
import Asc from "../assets/asc.png";
import Coinex from "../assets/coine.png";
import poloniex from "../assets/plnx.png";
import Bt from "../assets/bt.png";
import Hg from "../assets/hg.png";
import Bitkan from "../assets/btkan.png";
import Lbank from "../assets/lbank.png";
import BybitFut from "../assets/bybitFutures.png";
import MexcFut from "../assets/mexcFutures.png";

export default function NuggetsCard() {
  return (
    <>
      <Box bgGradient="linear(to-t, #0244a5b3, transparent)">
        {" "}
        <Stack // backgroundImage={`url(${ScSh130})`}
          bgGradient="linear(to-b, #0244a5b3, transparent)"
          p={{ base: 5, md: 20 }}
          m={{ base: "none", md: 20 }}
          width={"auto"}
          height="auto"
          align={"center"}
          justifyContent="center"
          border="1px"
          borderColor="#0244a5b3.700"
          rounded={"lg"}
          color={"white"}
          position="relative"
        >
          <Heading as="h1" fontSize={{ base: "4xl", md: "6xl" }}>
            BUY IT ON
          </Heading>
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
            }}
            gap={{ base: 2, md: 4 }}
            maxW="9xl"
            mx="auto"
            p={10}
          >
            {[
              {
                href: "https://www.bybit.com/en/trade/spot-m/BRETT/USDT",
                src: Bybit,
                alt: "ByBit",
              },
              {
                href: "https://phemex.com/trade/BRETTUSDT",
                src: phemex,
                alt: "Phemex",
              },
              {
                href: "https://www.gate.io/en/trade/BRETT_USDT",
                src: gate,
                alt: "Gate.io",
              },
              {
                href: "https://www.okx.com/trade-spot/markets",
                src: okx,
                alt: "OKX",
              },
              {
                href: "https://www.binance.com/en/trade/BRETT_USDT",
                src: bingx,
                alt: "Binance",
              },
              {
                href: "https://www.bitget.com/trade/BRETT_USDT",
                src: bitget,
                alt: "Bitget",
              },
              {
                href: "https://www.bitmart.com/spot/en-us/BRETT_USDT",
                src: bitmart,
                alt: "Bitmart",
              },
              {
                href: "https://xt.com/trade",
                src: xt,
                alt: "XT",
              },
              {
                href: "https://www.bitunix.com/en-US/BRETT_USDT",
                src: Bitunix,
                alt: "Bitunix",
              },
              {
                href: "https://www.digifinex.com/en-ww/trade/USDT/BRETT",
                src: Digifinex,
                alt: "Digifinex",
              },
              {
                href: "https://ascendex.com/en/global-digital-asset-platform/futures-trade/BRETT_USDT",
                src: Asc,
                alt: "AscendEX",
              },
              {
                href: "https://www.coinex.com/exchange",
                src: Coinex,
                alt: "Coinex",
              },
              {
                href: "https://www.poloniex.com/trade/BRETT_USDT",
                src: poloniex,
                alt: "Poloniex",
              },
              {
                href: "https://www.bt.com/brettposts/BRETT_USDT",
                src: Bt,
                alt: "BT",
              },
              {
                href: "https://hg.com/trade/BRETT_USDT",
                src: Hg,
                alt: "HG",
              },
              {
                href: "https://www.bitkan.com/brettposts/BRETT_USDT",
                src: Bitkan,
                alt: "Bitkan",
              },
              {
                href: "https://www.lbank.com/spot/trade/BRETT_USDT",
                src: Lbank,
                alt: "LBank",
              },
            ].map((item, index) => (
              <GridItem key={index}>
                <Link href={item.href} isExternal>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    w="full"
                    mx="auto"
                    transition="all 0.3s ease-in-out"
                    _hover={{ transform: "scale(1.1)" }}
                  />
                </Link>
              </GridItem>
            ))}
          </Grid>
          <Divider />
          <Stack p={10}>
            <Heading size={"lg"} textAlign="center">
              FUTURES TRADING
            </Heading>

            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
              }}
              gap={{ base: 2, md: 4 }}
              maxW="6xl"
              mx="auto"
            >
              <GridItem>
                <Link
                  href="https://www.bybit.com/trade/usdt/BRETTUSDT"
                  isExternal
                >
                  <Image
                    src={BybitFut}
                    alt="ByBit"
                    w="full"
                    mx="auto"
                    transition="all 0.3s ease-in-out"
                    _hover={{ transform: "scale(1.1)" }}
                  />
                </Link>
              </GridItem>
              <GridItem>
                <Link
                  href="https://futures.mexc.com/exchange/BRETT_USDT"
                  isExternal
                >
                  <Image
                    src={MexcFut}
                    alt="MEXC"
                    w="full"
                    mx="auto"
                    transition="all 0.3s ease-in-out"
                    _hover={{ transform: "scale(1.1)" }}
                  />
                </Link>
              </GridItem>
            </Grid>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
