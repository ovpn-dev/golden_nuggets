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
} from "@chakra-ui/react";
import CrdImg1 from "../assets/cardImage1.jpg";
import CrdImg2 from "../assets/cardImage2.jpg";
import CrdImg3 from "../assets/cardImage3.jpg";
import CrdImg4 from "../assets/cardImage4.jpg";
import CrdImg5 from "../assets/cardImage5.jpg";
import CrdImg6 from "../assets/cardImage6.jpg";
import CrdImg7 from "../assets/cardImage7.jpg";

export default function NuggetsCard() {
  return (
    <>
      <Stack p={5} bg="GrayText">
        {" "}
        <Heading textAlign="center" size="2xl">
          About Us
        </Heading>
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
        </SimpleGrid>
      </Stack>
    </>
  );
}
