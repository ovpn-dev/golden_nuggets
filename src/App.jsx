import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Stack } from "@chakra-ui/react";
import Navbar from "./components/nav";
import HeroSection from "./components/hero";
import audio from "./assets/Gegagedigedagedago.mp3";
import NuggetsCard from "./components/nuggetsCard";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar />
      <HeroSection />
      <NuggetsCard />
    </>
  );
}

export default App;
