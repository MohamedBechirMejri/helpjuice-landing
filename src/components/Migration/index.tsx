import companies from "./assets/companies.svg";
import steps from "./assets/steps.svg";
import arrowRight from "./assets/arrow-right.svg";

const Migration = () => {
  return (
    <section className="min-h-screen pb-8">
      <div className="py-16 p-4">
        <div className="max-w-7xl mx-auto flex items-start gap-12 flex-col ">
          <h1 className="lg:text-6xl text-3xl font-bold shrink-0">
            Worried about
            <span className="font-extrabold text-transparent bg-clip-text bg-left-top bg-gradient-to-r from-[#a9cbd7] to-[#8a5d8d] via-[#f2bca0]">
              {" "}
              the migration{" "}
            </span>{" "}
            <br /> to Helpjuice?
          </h1>
          <div className="flex flex-col items-start justify-between gap-8 max-w-2xl">
            <p>
              With Helpjuice’s excellent support team, you don't have to worry
              about migrating to helpjuice. Our team will{" "}
              <strong>complete the entire </strong>
              migration <strong>FOR YOU</strong>, so you can focus on BETTER
              THINGS!
            </p>
            <button className="bg-[#0560FC] text-white px-4 p-3 rounded-lg hover:bg-[#0a49c3] transition-all flex items-center gap-2">
              Request Migration <img src={arrowRight} alt="arrow right" />
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto my-6">
          <img
            src={steps}
            alt="steps"
            className="mt-8 w-full"
            draggable="false"
          />

          <div className="mt-12">
            <h1 className="font-bold">
              Most of our Customers Request Transfers From:
            </h1>
            <img
              src={companies}
              alt="companies"
              className="mt-8 w-full"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Migration;
