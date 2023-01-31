import Header from "./Header";
import neonRing from "./assets/neon-ring.png";
import line from "./assets/line.svg";
import arrow from "./assets/arrow.svg";
import textBackground from "./assets/text-background.png";

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
      </div>
    </section>
  );
};

export default Hero;
