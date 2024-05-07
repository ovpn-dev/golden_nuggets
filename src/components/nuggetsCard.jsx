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
} from "@chakra-ui/react";
import CrdImg1 from "../assets/cardImage1.jpg";
import CrdImg2 from "../assets/cardImage2.jpg";
import CrdImg3 from "../assets/cardImage3.jpg";
import CrdImg4 from "../assets/cardImage4.jpg";
import CrdImg5 from "../assets/cardImage5.jpg";
import CrdImg6 from "../assets/cardImage6.jpg";
import CrdImg7 from "../assets/cardImage7.jpg";
import ScSh130 from "../assets/scrnsht130.jpg";
import ScSh135 from "../assets/scrnsht135.jpg";
import ScSh137 from "../assets/scrnsht137.jpg";

export default function NuggetsCard() {
  return (
    <>
      <Stack
        p={5}
        backgroundImage={`url(${ScSh130})`}
        bgSize="cover" // Covers the entire box area
        bgPos="center" // Centers the image within the box
        width="auto"
        height="auto"
        align={"center"}
      >
        {" "}
        {/* <Heading textAlign="center" fontWeight={700} size="2xl">
          ABOUT US
        </Heading> */}
        {/* <Text
          px={5}
          fontSize={"lg"}
          color="#fff"
          py={1}
          fontWeight={500}
          lineHeight={1.5}
        >
          At Golden $Nuggets. We believe in the Power of Community.
          <br />
          That's why every transaction contributes towards impactful
          <br />
          projects, charities and initiatives chosen by you!
          <br />
          Together we can make a real difference while having fun in the crypto
          world.
        </Text> */}
        <SimpleGrid
          spacing={4}
          columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
          alignContent={"center"}
          p={5}
        >
          <Card size={"lg"} bg="Black.100">
            <CardBody>
              <Image src={CrdImg1} alt="Image description" />
            </CardBody>
          </Card>
          <Card size={"lg"} bg="Black.100">
            <CardBody>
              <Image src={CrdImg2} alt="Image description" />
            </CardBody>
          </Card>
          <Card size={"lg"} bg="Black.100">
            <CardBody>
              <Image src={CrdImg3} alt="Image description" />
            </CardBody>
          </Card>
          <Card size={"lg"} bg="Black.100">
            <CardBody>
              <Image src={CrdImg4} alt="Image description" />
            </CardBody>
          </Card>
          <Card size={"lg"} bg="Black.100">
            <CardBody>
              <Image src={CrdImg5} alt="Image description" />
            </CardBody>
          </Card>
          <Card size={"lg"} bg="Black.100">
            <CardBody>
              <Image src={CrdImg6} alt="Image description" />
            </CardBody>
          </Card>
          <Card size={"lg"} bg="Black.100">
            <CardBody>
              <Image src={CrdImg7} alt="Image description" />
            </CardBody>
          </Card>
          <Card size={"lg"} bg="Black.100">
            <CardBody>
              <Image src={ScSh137} alt="Image description" />
            </CardBody>
          </Card>
          <Card size={"lg"} bg="Black.100">
            <CardBody>
              <Image src={ScSh135} alt="Image description" />
            </CardBody>
          </Card>
        </SimpleGrid>
      </Stack>
    </>
  );
}
