import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a href="https://github.com/Siddhesh1123" style={{ color: "white" }}>
              <FaGithub />
            </a>
          </span>
          <span className="icon">
            <a href="https://www.instagram.com/sidwayal491/" style={{ color: "white" }}>
              <FaInstagram />
              </a>
          </span>

          <span className="icon">
            <a href="https://www.linkedin.com/in/siddhesh-wayal-495103228/" style={{color:"white"}}>
              <FaLinkedin />
              </a>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
