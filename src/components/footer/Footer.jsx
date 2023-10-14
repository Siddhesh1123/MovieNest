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
          <a href="http://siddhesh.great-site.net/" style={{textDecoration:"none" , color:"white"}}><li className="menuItem">About Us</li></a>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          A MovieNest and TV show information web app provides users with
          details, reviews, ratings, and recommendations. User can also view the
          trailer of Movie or TV show. User can view official videos related to
          Movie or TV show . User can view the casting information of Movie or
          TV show
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a
              href="https://github.com/Siddhesh1123"
              style={{ color: "white" }}
            >
              <FaGithub />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://www.instagram.com/sidwayal491/"
              style={{ color: "white" }}
            >
              <FaInstagram />
            </a>
          </span>

          <span className="icon">
            <a
              href="https://www.linkedin.com/in/siddhesh-wayal-495103228/"
              style={{ color: "white" }}
            >
              <FaLinkedin />
            </a>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
