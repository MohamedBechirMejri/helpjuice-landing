import Promotion from "./components/Promotion";
import Hero from "./components/Hero";
import BrowserWindow from "./components/BrowserWindow";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Examples from "./components/Examples";
import Reviews from "./components/Reviews";
import Migration from "./components/Migration";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
      100;

    setScrollPosition(p => (p < position ? position : p));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <h1 className="fixed top-0 bg-black text-white z-20">{scrollPosition}</h1>

      <Promotion
        promotion="Black Friday Deal - Save upto 40% on all annual plans. Buy Now"
        url="https://helpjuice.com/pricing"
      />
      <Hero />
      <BrowserWindow scrollPosition={scrollPosition} />
      <Benefits scrollPosition={scrollPosition} />
      <Features />
      <Examples scrollPosition={scrollPosition} />
      <Reviews scrollPosition={scrollPosition} />
      <Migration />
      <Footer />
    </div>
  );
};

export default App;
