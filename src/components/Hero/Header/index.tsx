import logo from "./assets/logo.svg";
import line from "./assets/line.svg";
import textBackground from "../assets/text-background.png";
import email from "./assets/email.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-8 font-semibold px-2">
      <nav>
        <ul className="flex items-center gap-8">
          <li className="flex items-center gap-4 text-xl relative font-bold select-none">
            <div></div>
            <img src={logo} alt="helpjuice" draggable="false" />
            <span>Helpjuice</span>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li className="relative">
            <a href="#">Resources</a>
            <img src={line} alt="line" className="absolute" />
          </li>
        </ul>
      </nav>
      <div className="flex gap-8 items-center h-full">
        <a href="">Sign In</a>
        <a
          href=""
          className="font-extrabold text-transparent bg-clip-text bg-left-top underline"
          style={{ backgroundImage: `url(${textBackground})` }}
        >
          Book a Demo
          <div
            className="w-full h-[2px]"
            style={{ background: `url(${textBackground})` }}
          />
        </a>
        <div className="flex p-1 ring-1 text-white text-opacity-50 ring-[#ffffff33] rounded-lg h-full pl-4 gap-4">
          <img src={email} alt="helpjuice" draggable="false" />
          <input
            type="email"
            placeholder="Enter your work email"
            className="bg-transparent outline-none"
          />
          <button className="bg-[#0560FC] text-white px-4 p-2 rounded-lg hover:bg-[#0a49c3] transition-all">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
