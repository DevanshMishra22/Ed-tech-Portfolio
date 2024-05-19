import React from "react";
import "../styles/Footer.css";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="Wrapperfooter">
        <div className="rigth_div">
          <h2>Education</h2>
          <div className="icon_footer">
            <FaLinkedin className="iconf" />
            <FaTwitterSquare className="iconf" />
            <FaSquareInstagram className="iconf" />
          </div>
        </div>

        <div className="left_div">
          <div className="list_footer">
            <h3>Company</h3>
            <ul>
              <a href="">
                {" "}
                <li>About</li>
              </a>
              <a href="">
                {" "}
                <li>Terms of use</li>
              </a>
              <a href="">
                {" "}
                <li>Privacy Policy</li>
              </a>
            </ul>
          </div>
          <div className="list_footer">
            <h3>Get help</h3>
            <ul>
              <a href="">
                {" "}
                <li>Support Centre</li>
              </a>
              <a href="">
                {" "}
                <li>24h Service</li>
              </a>
              <a href="">
                {" "}
                <li>Quick Chat</li>
              </a>
            </ul>
          </div>
          <div className="list_footer">
            <h3>Support</h3>
            <ul>
              <a href="">
                {" "}
                <li>FAQ</li>
              </a>
              <a href="">
                {" "}
                <li>WhatApp</li>
              </a>
              <a href="">
                {" "}
                <li>Business</li>
              </a>
            </ul>
          </div>
          <div className="list_footer">
            <h3>Download app</h3>
            <ul>
              <a href="">
                {" "}
                <li>PlayStore</li>
              </a>
              <a href="">
                <li>AppStore</li>
              </a>
              <a href="">
                {" "}
                <li>Mircrosoft Store</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
