import React from "react";

export default function Header() {
  return (
    <div className="home-nav">
      <div className="logo">AnshCodes</div>
      <div className="nav-div">
        <ul id="nav-ul">
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
      </div>
    </div>
  );
}
