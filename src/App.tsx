import Promotion from "./components/Promotion";
import Hero from "./components/Hero";
import BrowserWindow from "./components/BrowserWindow";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Examples from "./components/Examples";
import Reviews from "./components/Reviews";
import Migration from "./components/Migration";

const App = () => {
  return (
    <div className="max-w-[100vw] overflow-x-hidden pb-48">
      <Promotion
        promotion="Black Friday Deal - Save upto 40% on all annual plans. Buy Now"
        url="https://helpjuice.com/pricing"
      />
      <Hero />
      <BrowserWindow />
      <Benefits />
      <Features />
      <Examples />
      <Reviews />
      <Migration />
    </div>
  );
};

export default App;
