import { useScrollContainer } from "react-indiana-drag-scroll";

import avatar from "./assets/avatar.svg";
import walmart from "./assets/walmart.svg";
import assurant from "./assets/assurant.svg";
import fujitsu from "./assets/fujitsu.svg";
import canopy from "./assets/canopy.svg";
import davita from "./assets/davita.svg";
import epic from "./assets/epic.svg";
import krauss from "./assets/krauss.svg";
import mindshare from "./assets/mindshare.svg";
import mobicom from "./assets/mobicom.svg";
import vacasa from "./assets/vacasa.svg";
import awards from "./assets/awards.svg";

const reviews = Array(10).fill({
  name: "Lyle Kauffman",
  companyLogo: walmart,
  occupation: "Data Engineer",
  review: `“Helpjuice is a no brainer. It’s extremely user friendly, has a LOT of options when it comes to making content private, and segmenting content based on groups.”`,
  avatar,
});

const results = [
  { result: "26x faster ticket resolutions", companyLogo: assurant },
  { result: "30% less Calls and Email Tickets", companyLogo: fujitsu },
  {
    result: "Reduced employee onboardidng from 24hrs to 2hrs",
    companyLogo: mobicom,
  },
  { result: "40% Less Support Tickets", companyLogo: vacasa },
  { result: "80% Faster Knowledgebase Updates ", companyLogo: mindshare },
  { result: "80% Faster Knowledgebase Updates ", companyLogo: davita },
  { result: "40hr per employee saved during onboarding", companyLogo: epic },
  { result: "75% Ticket Deflection", companyLogo: canopy },
  { result: "50% Faster Employee Onboarding", companyLogo: krauss },
  { result: "80% Faster Knowledgebase Updates ", companyLogo: davita },
  { result: "40% Less Support Tickets", companyLogo: vacasa },
  { result: "40% Less Support Tickets", companyLogo: vacasa },
];

const Reviews = () => {
  const scrollContainer = useScrollContainer();

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="my-6 p-16">
        <div className="max-w-7xl mx-auto flex items-start gap-12 flex-col ">
          <h1 className="text-6xl font-bold shrink-0">
            Loved by 3000+ Companies <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-left-top bg-gradient-to-r from-[#a9cbd7] to-[#8a5d8d] via-[#f2bca0]">
              {" "}
              used daily by{" "}
            </span>{" "}
            150K+ users
          </h1>
          <div className="flex flex-col items-start justify-between gap-8 max-w-6xl">
            <p>
              Since 2011, we’ve been building award-winning knowledge base
              software, making it better and better every day to help teams
              share knowledge and provide excellent customer support!
            </p>
            <button className="bg-[#0560FC] text-white px-4 p-3 rounded-lg hover:bg-[#0a49c3] transition-all">
              Start your free Trial
            </button>
          </div>
        </div>
        <div
          className="mt-16 overflow-x-scroll overflow-visible noscroll"
          style={{ paddingInline: "calc(calc(100vw - 1280px) / 3)" }}
          ref={scrollContainer.ref}
        >
          <div className="flex gap-14 w-max max-w-none relative py-8">
            {reviews.map((review, index) => (
              <div className="w-[28rem] p-6 flex flex-col gap-4 bg-white rounded-lg border font-bold">
                <p>{review.review}</p>
                <hr />
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <img src={review.avatar} alt="avatar" />
                    <div>
                      <h3 className="font-bold">{review.name}</h3>
                      <p>{review.occupation}</p>
                    </div>
                  </div>
                  <img src={review.companyLogo} alt="companyLogo" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto my-6">
          <p className="font-medium">
            *The avg. Helpjuice customer saves 30% more support after switching
          </p>
          <p className="font-bold mt-2">
            The Results? See a few of our{" "}
            <a
              href="https://helpjuice.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#0560fc] hover:underline"
            >
              Case Studies
            </a>
          </p>
          <div className="grid lg:grid-cols-3 gap-6 mt-12">
            {results.map((result, index) => (
              <div className="flex gap-4 items-center bg-white px-5 p-3 rounded-lg border font-bold text-xs justify-between">
                <p>{result.result}</p>{" "}
                <img src={result.companyLogo} alt="companyLogo" />
              </div>
            ))}
          </div>
          <div className="mt-12">
            <h1 className="font-bold">Industry awards & reviews</h1>
            <img
              src={awards}
              alt="awards"
              className="mt-8 w-[55rem]"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
