import Header from "./Header";
import neonRing from "./assets/neon-ring.png";
import line from "./assets/line.svg";
import arrow from "./assets/arrow.svg";
import email from "./assets/email.svg";
import textBackground from "./assets/text-background.png";
import creditCardOff from "./assets/credit_card_off.svg";

const Hero = () => {
  return (
    <section
      className="bg-black min-h-screen text-white relative bg-right-top bg-no-repeat bg-contain"
      style={{ backgroundImage: `url(${neonRing})` }}
    >
      <div className=" max-w-7xl mx-auto">
        <Header />
        <h1 className="p-4  pt-[8rem]">
          <p className="text-6xl font-extrabold relative">
            Build a knowledgebase for
            <img
              src={line}
              alt="line"
              className="absolute top-[1rem] left-[9.5rem] w-24"
            />
            <img
              src={arrow}
              alt="arrow"
              className="absolute -top-[1rem] left-[11rem] w-4"
            />
            <span className="absolute -top-[3.5rem] left-[10.5rem] text-2xl rotate-[12deg] font-[ACT]">
              The best
            </span>
          </p>
          <br />
          <span
            className="font-extrabold text-transparent bg-clip-text bg-left-top underline text-7xl"
            style={{ backgroundImage: `url(${textBackground})` }}
          >
            Customer Support
          </span>
        </h1>
        <p className="max-w-3xl p-3 text-white text-opacity-70">
          Helpjuice’s easy-to-use and ultra powerful knowledge base software is
          designed from the ground <br /> up to help you scale your customer
          support, and collaborate better with your team.
        </p>
        <div className="flex items-center gap-4 mt-4">
          <div className="flex p-1 ring-1 text-white text-opacity-50 ring-[#ffffff33] rounded-lg h-full pl-4 gap-4 w-max">
            <img src={email} alt="helpjuice" draggable="false" />
            <input
              type="email"
              placeholder="Enter your work email"
              className="bg-transparent outline-none"
            />
            <button className="bg-[#0560FC] text-white px-4 p-2 rounded-lg hover:bg-[#0a49c3] transition-all">
              Start your Free Trial
            </button>
          </div>

          <span className="flex items-center gap-2">
            <img src={creditCardOff} alt="credit card off icon" />
            No credit card required
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
