import logo from "./assets/logo.svg";
import { BsTwitter, BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const links = [
  {
    title: "Product",
    items: [
      { title: "Overview", link: "/", isNew: false },
      { title: "Features", link: "/", isNew: true },
      { title: "Pricing", link: "/", isNew: false },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "About us", link: "/", isNew: false },
      { title: "Careers", link: "/", isNew: false },
      { title: "Customers", link: "/", isNew: false },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Examples", link: "/", isNew: false },
      { title: "Blog", link: "/", isNew: false },
      { title: "Case Studies", link: "/", isNew: false },
    ],
  },
  {
    title: "Legal",
    items: [
      { title: "Terms of Use", link: "/", isNew: false },
      { title: "Privacy Policy", link: "/", isNew: true },
      { title: "Media Kit", link: "/", isNew: false },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="min-h-[57vh] bg-black text-[#98A2B3]">
      <div className="max-w-7xl mx-auto py-12 flex flex-col gap-8">
        <div className="flex justify-between flex-col lg:flex-row gap-8 lg:gap-0 items-center lg:items-start">
          <div className="gap-4 flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-bold text-white">
              Start your 14-Day free trial
            </h3>
            <p>Join over 1000+ firms already growing with Helpjuice.</p>
          </div>
          <div className="flex items-center flex-col justify-between gap-4">
            <div className="text-white font-semibold text-xs flex gap-2">
              <a href="" className="px-5 rounded-lg bg-[#0560FC]  py-2">
                Get Started
              </a>
              <a
                href=""
                className="px-5 rounded-lg bg-[#4754673D] py-2 border border-[#4754673D]"
              >
                Learn More
              </a>
            </div>
            <p className="text-xs">Schedule a 1-to-1 demo Now!</p>
          </div>
        </div>

        <hr className="border-white border-opacity-10" />

        <div className="lg:grid grid-cols-6 p-2">
          <div className="col-span-2 flex flex-col gap-4 lg:items-start items-center">
            <img src={logo} alt="" />
            <p className="flex flex-col gap-4 text-xs font-medium text-[#98A2B3]">
              <span>Copyright © 2022, Helpjuice Inc.</span>
              <span>
                Helpjuice, Inc. is a registered US Corporation, EIN # 45-2275731
              </span>
              <a href="" className="text-white hover:underline w-max">
                Download W9
              </a>
            </p>
          </div>

          <div className="mt-8 col-span-4 grid grid-cols-4 text-white font-medium text-sm text-opacity-80 lg:mt-0">
            {links.map((link, index) => (
              <div key={index} className="grid grid-rows-4">
                <h3 className="text-[#98A2B3]">{link.title}</h3>
                {link.items.map((item, index) => (
                  <h4 key={index}>
                    <a className="hover:underline" href={item.link}>
                      {item.title}
                    </a>
                  </h4>
                ))}
              </div>
            ))}
          </div>
        </div>

        <hr className="border-white border-opacity-10" />

        <div className="grid grid-cols-2 gap-12 text-sm p-4">
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white text-lg">
              Why is the knowledge base important?
            </h4>
            <p>
              With a knowledge base, you can allow your customers to self-help
              themselves, thus reducing your customer support by up to 60%.
              Furthermore, you can also have your team get instant answers to
              the questions they need without having to email themselves all
              using knowledge base software.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white text-lg">
              What is the purpose of a knowledge base?
            </h4>
            <p>
              The purpose of knowledge base software is to allow you to host
              your knowledge base/corporate wiki in one centralized 'hub'. Both
              your customers, and employees can now access information within
              seconds!
            </p>
          </div>
        </div>

        <div className="flex justify-between pt-8 text-sm m-4 flex-col-reverse lg:flex-row items-center gap-4">
          <p>Made with ❤️ from Miami, Bosnia, Morocco, Brazil & Tunisia</p>
          <div className="flex gap-4">
            <a href="">+1 (833) 387 3877</a>{" "}
            <a href="">
              <BsTwitter />
            </a>
            <a href="">
              <BsFacebook />
            </a>
            <a href="">
              <BsGithub />
            </a>
            <a href="">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
