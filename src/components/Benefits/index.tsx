import { useScrollContainer } from "react-indiana-drag-scroll";

import benefit1 from "./assets/benefit1.svg";
import benefit2 from "./assets/benefit2.svg";
import benefit3 from "./assets/benefit3.svg";
// import benefit4 from "./assets/benefit4.svg"; can'find this file in figma
import benefit5 from "./assets/benefit5.svg";

const Benefits = () => {
  const scrollContainer = useScrollContainer();

  return (
    <div className="min-h-screen">
      <div className="my-6 p-4 pt-12">
        <div className="max-w-7xl mx-auto flex items-start gap-12 flex-col lg:flex-row">
          <h1 className="lg:text-7xl text-3xl font-bold shrink-0">
            One{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-left-top lg:text-7xl text-3xl bg-gradient-to-r from-[#a9cbd7] to-[#8a5d8d] via-[#f2bca0]">
              {" "}
              Knowledge Base{" "}
            </span>{" "}
            <br /> To Rule Them All!
          </h1>
          <div className="flex flex-col items-start justify-between gap-8 max-w-sm">
            <p>
              Store your team’s knowledge, onboard employees, <br /> and allow
              customers to self-service –{" "}
              <strong>an all in 1 knowledge base solution!</strong>
            </p>
            <button className="bg-[#0560FC] text-white px-4 p-3 rounded-lg hover:bg-[#0a49c3] transition-all">
              Start your free Trial
            </button>
          </div>
        </div>
        <div
          className="mt-16 overflow-x-scroll overflow-visible noscroll"
          style={{ paddingInline: "calc(calc(100vw - 1280px) / 2)" }}
          ref={scrollContainer.ref}
        >
          <div className="flex gap-14 w-max max-w-none relative py-8">
            <img
              src={benefit1}
              alt="customer call service"
              className="w-[28rem]"
            />
            <img
              src={benefit2}
              alt="Employee Onboarding & Training"
              className="w-[28rem]"
            />
            <img
              src={benefit3}
              alt="Playbooks, SOPs, FAQs"
              className="w-[28rem]"
            />
            <img
              src={benefit1}
              alt="customer call service"
              className="w-[28rem]"
            />
          </div>
        </div>
        <img
          src={benefit5}
          alt="customer call service"
          className="my-[4rem] max-w-[min(80rem,92vw)] mx-auto w-[64rem]"
        />
      </div>
    </div>
  );
};

export default Benefits;
