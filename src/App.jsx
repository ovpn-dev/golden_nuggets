import { useState } from "react";
import Navbar from "./components/nav";
import HeroSection from "./components/hero";
import NuggetsCard from "./components/nuggetsCard";
import ProductIntro from "./components/about";
import Milestones from "./components/buy";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductIntro />
      <Milestones />
      <NuggetsCard />
    </>
  );
}

export default App;
