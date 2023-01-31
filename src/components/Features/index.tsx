import "./style.scss";
import arrow from "./assets/arrow.svg";
import List from "./List";

const Features = () => {
  return (
    <section className="min-h-screen bg-black text-white py-[7rem]">
      <div className="max-w-7xl mx-auto p-6 w-max">
        <h1 className="lg:text-7xl text-2xl font-extrabold relative">
          Your search for the{" "}
          <span className="text-transparent bg-clip-text bg-left-top gradient">
            {" "}
            perfect KB
          </span>{" "}
          <img
            src={arrow}
            alt="arrow"
            className="absolute -top-[2rem] lg:right-[3rem] right-[6rem] w-4"
          />
          <span className="absolute -top-[4.5rem] lg:right-[0rem] right-[3rem] text-2xl rotate-[12deg] font-[ACT] font-medium underline">
            Knowledgebase
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-left-top gradient">
            {" "}
            platform
          </span>{" "}
          ends here!
        </h1>

        <p className="pt-4 text-white text-opacity-70 lg:max-w-lg max-w-sm">
          Build your teams playbooks, standard operating procedures, and FAQs
          with up to date aritcles in minutes.
        </p>

        <List />
      </div>
    </section>
  );
};

export default Features;
