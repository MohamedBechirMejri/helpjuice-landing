import { useScrollContainer } from "react-indiana-drag-scroll";

import example1 from "./assets/example1.svg";
import example2 from "./assets/example2.svg";

const Examples = () => {
  const scrollContainer = useScrollContainer();

  return (
    <div className="pb-24">
      <div className="py-16 p-4">
        <div className="max-w-7xl mx-auto flex items-start gap-12 flex-col lg:flex-row ">
          <h1 className="lg:text-6xl text-3xl font-bold shrink-0">
            Knowledge bases <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-left-top bg-gradient-to-r from-[#a9cbd7] to-[#8a5d8d] via-[#f2bca0]">
              {" "}
              made with{" "}
            </span>{" "}
            Helpjuice
          </h1>
          <div className="flex flex-col items-start justify-between gap-8 max-w-sm">
            <p>
              With our fully customizable software and experts at Helpjuice
              ready to help, one can be assured that their knowledgebase would
              be
              <strong>fully customized to their needs.</strong>
            </p>
            <button className="bg-[#0560FC] text-white px-4 p-3 rounded-lg hover:bg-[#0a49c3] transition-all">
              Explore 60+ more examples
            </button>
          </div>
        </div>
        <div
          className="mt-16 overflow-x-scroll noscroll"
          style={{ paddingInline: "calc(calc(100vw - 1280px) / 2)" }}
          ref={scrollContainer.ref}
        >
          <div className="flex gap-14 w-max max-w-none relative py-8">
            <img src={example1} alt="example1" className="w-[28rem]" />
            <img src={example2} alt="example2" className="w-[28rem]" />
            <img src={example1} alt="example1" className="w-[28rem]" />
            <img src={example2} alt="example2" className="w-[28rem]" />
            <img src={example1} alt="example1" className="w-[28rem]" />
            <img src={example2} alt="example2" className="w-[28rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;
