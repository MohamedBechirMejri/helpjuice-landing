import Promotion from "./components/Promotion";
import Hero from "./components/Hero";
import BrowserWindow from "./components/BrowserWindow";
import Benefits from "./components/Benefits";

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
    </div>
  );
};

export default App;
