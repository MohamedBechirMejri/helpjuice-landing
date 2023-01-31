import Header from "./Header";
import neonRing from "./assets/neon-ring.png";
import line from "./assets/line.svg";
import arrow from "./assets/arrow.svg";
import email from "./assets/email.svg";
import star from "./assets/star.svg";
import creditCardOff from "./assets/credit_card_off.svg";
import textBackground from "./assets/text-background.png";
import getapp from "./assets/getapp.svg";
import captera from "./assets/captera.svg";
import featuredCustomers from "./assets/featured-customers.svg";
import feed from "./assets/feed.svg";
import dashboard from "./assets/dashboard_customize.svg";
import autograph from "./assets/auto_graph.svg";
import tipsAndUpdates from "./assets/tips_and_updates.svg";

const Hero = () => {
  return (
    <section
      className="bg-black min-h-screen text-white relative bg-right-top bg-no-repeat bg-contain pb-4"
      style={{ backgroundImage: `url(${neonRing})` }}
    >
      <div className=" max-w-7xl mx-auto">
        <Header />
        <h1 className="p-4 pt-[5rem]  lg:pt-[8rem]">
          <p className="text-3xl lg:text-6xl font-extrabold relative">
            Build a knowledgebase for
            <img
              src={line}
              alt="line"
              className="absolute lg:left-[9.5rem] lg:w-24 w-12 lg:top-[1rem] left-[4.75rem] top-[.75rem]"
            />
            <img
              src={arrow}
              alt="arrow"
              className="absolute -top-[1rem] lg:left-[11rem] left-[5.5rem] w-4"
            />
            <span className="absolute -top-[3.5rem] lg:left-[10.5rem] left-[5rem] text-2xl rotate-[12deg] font-[ACT]">
              The best
            </span>
          </p>
          <br />
          <span
            className="font-extrabold text-transparent bg-clip-text bg-left-top lg:text-7xl text-4xl"
            style={{ backgroundImage: `url(${textBackground})` }}
          >
            Customer Support
          </span>
        </h1>
        <p className="max-w-3xl m-6 text-white text-opacity-70">
          Helpjuice’s easy-to-use and ultra powerful knowledge base software is
          designed from the ground <br /> up to help you scale your customer
          support, and collaborate better with your team.
        </p>
        <div className="grid lg:flex items-center gap-4 m-6">
          <div className="flex p-1 ring-1 text-white text-opacity-50 ring-[#ffffff33] rounded-lg h-full pl-4 gap-4 lg:w-max flex-col lg:flex-row">
            <div className="flex gap-4 items-center">
              <img src={email} alt="helpjuice" draggable="false" />
              <input
                type="email"
                placeholder="Enter your work email"
                className="bg-transparent outline-none w-full"
              />
            </div>

            <a
              href="/signup?commit=Start+14+Day+Free+Trial"
              className="cursor-pointer bg-[#0560FC] text-white px-4 p-3 rounded-lg hover:bg-[#0a49c3] transition-all"
            >
              Start your Free Trial
            </a>
          </div>

          <span className="flex items-center gap-2 justify-center">
            <img src={creditCardOff} alt="credit card off icon" />
            No credit card required
          </span>
        </div>
        <div className="flex gap-2 items-center m-6">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <span>4.8 avg reviews, for over 11 years</span>
        </div>

        <div className="flex gap-4 items-center m-6 text-opacity-70 text-white">
          <span className="flex items-center gap-2">
            <img src={captera} alt="Captera" />
            Capterra
          </span>
          <span className="flex items-center gap-2">
            <img src={getapp} alt="GetApp" />
            GetApp
          </span>
          <span className="flex items-center gap-2">
            <img src={featuredCustomers} alt="Featured Customers" />
            Featured Customers
          </span>
        </div>

        <div className="grid lg:grid-cols-4 gap-4 m-6 text-[10.5px]">
          <div className="p-8 flex gap-8 backdrop-blur-xl border rounded-lg border-white border-opacity-10 select-none shadow-2xl items-center">
            <img src={feed} alt="feed" className="h-1/2" />
            <div>
              <h3 className="text-sm font-medium">Knowledgebase Site</h3>
              <p className="text-white text-opacity-70">
                The front-end where your users access search/browse your KB
              </p>
            </div>
          </div>{" "}
          <div className="p-8 flex gap-8 backdrop-blur-xl border rounded-lg border-white border-opacity-10 select-none shadow-2xl items-center">
            <img src={dashboard} alt="dashboard" className="h-1/2" />
            <div>
              <h3 className="text-sm font-medium">The Helpjuice Editor</h3>
              <p className="text-white text-opacity-70">
                The backend, where you edit all your articles
              </p>
            </div>
          </div>{" "}
          <div className="p-8 flex gap-8 backdrop-blur-xl border rounded-lg border-white border-opacity-10 select-none shadow-2xl items-center">
            <img src={autograph} alt="autograph" className="h-1/2" />
            <div>
              <h3 className="text-sm font-medium">In-Depth Analytics</h3>
              <p className="text-white text-opacity-70">
                Great curated analytics showcasing how your articles are used
              </p>
            </div>
          </div>{" "}
          <div className="p-8 flex gap-8 backdrop-blur-xl border rounded-lg border-white border-opacity-10 select-none shadow-2xl items-center">
            <img src={tipsAndUpdates} alt="tipsAndUpdates" className="h-1/2" />
            <div>
              <h3 className="text-sm font-medium">The Article Planner</h3>
              <p className="text-white text-opacity-70">
                Couldn’t find an answer? The article planner is there to help
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
