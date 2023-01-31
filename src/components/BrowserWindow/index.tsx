import browserToolbar from "./assets/browser-toolbar.svg";
import page from "./assets/page.svg";
import amazon from "./assets/amazon.svg";
import glovo from "./assets/glovo.svg";
import hertz from "./assets/hertz.svg";
import nginx from "./assets/nginx.svg";
import shipt from "./assets/shipt.svg";
import tcl from "./assets/tcl.svg";
import virgin from "./assets/virgin.svg";
import who from "./assets/who.svg";

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

const BrowserWindow = () => {
  return (
    <section className="lg:-mt-[5rem] -mt-[2rem] bg-[#f8fafc] pb-8">
      <div className="max-w-4xl mx-auto z-10 relative shadow-2xl rounded overflow-hidden">
        <img src={browserToolbar} alt="toolbar" />
        <img src={page} alt="page" />
      </div>
      <h3 className="max-w-4xl mx-auto w-full text-center mt-8 font-bold capitalize">
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
