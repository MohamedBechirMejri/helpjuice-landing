import { useState } from "react";
import fire from "./assets/fire.svg";
import close from "./assets/close.svg";
import background from "./assets/background.png";
import "./style.scss";

const Promotion = ({ promotion, url }: { promotion: string; url: string }) => {
  const [isVisible, setIsVisible] = useState(true);

  return isVisible ? (
    <div style={{ backgroundImage: `url(${background})` }} id="promotion">
      <div>
        <span>New</span>
        <img src={fire} alt="fire icon" />
      </div>
      <a href={url} target="_blank" rel="noreferrer">
        {promotion}
      </a>
      <button onClick={() => setIsVisible(false)}>
        <img src={close} alt="close icon" />
      </button>
    </div>
  ) : null;
};

export default Promotion;
