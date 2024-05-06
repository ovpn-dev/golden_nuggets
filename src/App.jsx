import { useState } from "react";
import "./App.css";
import Navbar from "./components/nav";
import HeroSection from "./components/hero";
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
