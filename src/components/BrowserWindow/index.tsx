import page from "./assets/page.svg";
import amazon from "./assets/amazon.svg";
import glovo from "./assets/glovo.svg";
import hertz from "./assets/hertz.svg";
import nginx from "./assets/nginx.svg";
import shipt from "./assets/shipt.svg";
import tcl from "./assets/tcl.svg";
import virgin from "./assets/virgin.svg";
import who from "./assets/who.svg";
import sidebarButton from "./assets/sidebar-button.svg";
import back from "./assets/back.svg";
import download from "./assets/download.svg";
import share from "./assets/share.svg";
import add from "./assets/add.svg";
import tabs from "./assets/tabs.svg";
import shield from "./assets/shield.svg";
import lock from "./assets/lock.svg";
import reload from "./assets/reload.svg";
import { motion } from "framer-motion";

const clients = [
  { name: "Amazon", image: amazon },
  { name: "WHO", image: who },
  { name: "Hertz", image: hertz },
  { name: "TCL", image: tcl },
  { name: "Virgin", image: virgin },
  { name: "Shipt", image: shipt },
  { name: "Nginx", image: nginx },
  { name: "Glovo", image: glovo },
];

const BrowserWindow = ({ scrollPosition }: { scrollPosition: number }) => {
  return (
    <section className="lg:-mt-[5rem] -mt-[2rem] bg-[#f8fafc] pb-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: scrollPosition > 3 ? 1 : 0,
          y: scrollPosition > 3 ? 0 : 50,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="max-w-4xl mx-auto z-50 relative shadow-2xl rounded overflow-hidden"
      >
        {/* toolbar */}
        <div className="bg-[#191C1F] w-full h-[52px] flex p-3 px-4 items-center justify-between rounded-t-md">
          {/* left buttons */}{" "}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-[#EE6A5F] hover:bg-[#f39b93] active:bg-[#EE6A5F99] transition-all p-[6px] rounded-full cursor-pointer"></div>
              <div className="bg-[#F5BD4F] hover:bg-[#fdd586] active:bg-[#F5BD4F99] transition-all p-[6px] rounded-full cursor-pointer"></div>
              <div className="bg-[#61C454] hover:bg-[#8fe584] active:bg-[#61C45499] transition-all p-[6px] rounded-full cursor-pointer"></div>
            </div>
            <div className="cursor-pointer">
              <img src={sidebarButton} alt="" />
            </div>

            <div className="flex items-center gap-6">
              <div className="cursor-pointer">
                <img src={back} alt="" />
              </div>
              <img src={back} alt="" className="rotate-180 brightness-50" />
            </div>
          </div>
          {/* middle */}
          <img src={shield} className="-mr-12" />{" "}
          <div className="w-[50%] flex bg-[#FFFFFF1A] rounded-md relative items-center justify-center h-full gap-1 pr-2 hover:bg-[#ffffff56] transition-all cursor-pointer">
            <img src={lock} />
            <input
              type="search"
              className="bg-transparent outline-none text-xs placeholder:text-white text-white text-center"
              placeholder="sample.helpjuice.com"
            />

            <img src={reload} className="absolute right-4" />
          </div>
          {/* right buttons */}
          <div className="flex items-center gap-4">
            <div className="cursor-pointer">
              <img src={download} alt="" />
            </div>
            <div className="cursor-pointer">
              <img src={share} alt="" />
            </div>
            <div className="cursor-pointer">
              <img src={add} alt="" />
            </div>
            <div className="cursor-pointer">
              <img src={tabs} alt="" />
            </div>
          </div>
        </div>
        <img src={page} alt="page" />
      </motion.div>
      <h3 className="max-w-4xl mx-auto w-full text-center mt-14 font-bold capitalize text-sm">
        trusted by over 3000+ companies all over the world
      </h3>
      <div className="grid max-w-4xl mx-auto my-8 lg:grid-cols-8 place-items-center grid-cols-4">
        {clients.map(client => (
          <img
            src={client.image}
            alt={client.name}
            className="grayscale w-[4rem]"
          />
        ))}
      </div>
    </section>
  );
};

export default BrowserWindow;
