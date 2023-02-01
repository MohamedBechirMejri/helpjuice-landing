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
import { motion } from "framer-motion";

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

const Reviews = ({ scrollPosition }: { scrollPosition: number }) => {
  const scrollContainer = useScrollContainer();

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollPosition > 60 ? 1 : 0 }}
        className="py-16 p-4"
      >
        <div className="max-w-7xl mx-auto flex items-start gap-4 flex-col ">
          <h1 className="lg:text-6xl text-3xl font-bold shrink-0 leading-[5rem!important]">
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
            <a
              href="/signup?commit=Start+14+Day+Free+Trial"
              className="cursor-pointer bg-[#0560FC] text-white px-[1.125rem] p-[0.625rem] rounded-[0.375rem] hover:bg-[#0a49c3] transition-all"
            >
              Start your Free Trial
            </a>
          </div>
        </div>
        <div
          className="mt-16 overflow-x-scroll overflow-visible noscroll"
          style={{ paddingInline: "calc(calc(100vw - 1280px) / 2.25)" }}
          ref={scrollContainer.ref}
        >
          <div className="flex gap-14 w-max max-w-none relative py-8">
            {reviews.map((review, index) => (
              <motion.div
                animate={{
                  y: scrollPosition > 65 ? 0 : 50,
                  opacity: scrollPosition > 65 ? 1 : 0,
                }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="w-[min(27.5rem,90vw)] p-6 flex flex-col gap-4 bg-white rounded-lg border font-medium"
              >
                <p>{review.review}</p>
                <hr />
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <img src={review.avatar} alt="avatar" />
                    <div>
                      <h3 className="font-bold">{review.name}</h3>
                      <p className="text-[#475467]">{review.occupation}</p>
                    </div>
                  </div>
                  <img src={review.companyLogo} alt="companyLogo" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto my-6">
          <p className="font-medium lg:text-base text-xs">
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
            {results.map((result, i) => (
              <motion.div
                animate={{
                  y: scrollPosition > 65 ? 0 : 50,
                  opacity: scrollPosition > 65 ? 1 : 0,
                }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-4 items-center bg-white px-5 p-3 rounded-lg border font-bold text-xs justify-between"
                style={{
                  boxShadow: `rgb(0 0 0 / 3%) ${
                    i % 3 === 0
                      ? "-27rem 0px"
                      : i % 2 === 0 || i === 5 || i === 11
                      ? "27rem 0px"
                      : "0 0 0 0"
                  }`,
                }}
              >
                <p>{result.result}</p>{" "}
                <img src={result.companyLogo} alt="companyLogo" />
              </motion.div>
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
      </motion.div>
    </div>
  );
};

export default Reviews;
