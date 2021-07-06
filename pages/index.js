import React, { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";

import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faBars);

export default function index() {
  const [show, handleShow] = useState(false);

  const [showlinks, setshowlinks] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      });

      return () => {
        window.removeEventListener("scroll");
      };
    }
  }, []);

  return (
    <div>
      <div className={`home-nav ${show && "nav_black"} `}>
        <div className="logo">AnshCodes</div>

        <ul className={`nav-ul ${showlinks ? "" : "hidden"}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">TechStack</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <label className="menu-btn">
          <FontAwesomeIcon
            onClick={() => setshowlinks(!showlinks)}
            className="i"
            icon={faBars}
          />
        </label>
      </div>

      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
