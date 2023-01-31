import Promotion from "./components/Promotion";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <Promotion
        promotion="Black Friday Deal - Save upto 40% on all annual plans. Buy Now"
        url="https://helpjuice.com/pricing"
      />
      <Hero />
    </div>
  );
};

export default App;
