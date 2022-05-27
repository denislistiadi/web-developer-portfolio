import React from "react";
import twitter from "../Assets/Social Icons/Twitter.svg";
import linkedin from "../Assets/Social Icons/LinkedIn.svg";
import github from "../Assets/Social Icons/Github.svg";

const Footer = () => {
  return (
    <footer className="flex justify-between">
      <h1 className="text-xl font-Prata">Johnathan Specter</h1>
      <ul className="flex gap-3">
        <li>
          <img src={twitter} alt="twitter" />
        </li>
        <li>
          <img src={linkedin} alt="linkedin" />
        </li>
        <li>
          <img src={github} alt="github" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
