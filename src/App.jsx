import { useState } from "react";
import { Box } from "@chakra-ui/react";
import wp from "./assets/public.avif";
import NuggetsCard from "./components/nuggetsCard";
import ProductIntro from "./components/about";
// import Milestones from "./components/buy";
import NewHero from "./components/nwHero";
import MyNav from "./components/nav";
import Tokenomics from "./components/tokenomics";
import Utilities from "./components/utils";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Box
        background={`url(${wp})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        alignContent={"center"}
        justifyContent={"center"}
        width="full"
        height="full"
      >
        <MyNav />
        <NewHero />
        <NuggetsCard />
        <ProductIntro />
        <Tokenomics />
        <Utilities />
        <Contact />
        <Footer />
        {/* <Milestones /> */}
      </Box>
    </>
  );
}

export default App;
