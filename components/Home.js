import React, { useEffect, useState } from "react";

import yogadev from "../animations/62773-yoga-developer.json";
import LottieAnimation from "./lottie";
import styled from "styled-components";

export default function Home() {
  const colors = [
    "#232531",
    "#1f2235",
    "#20243d",
    "#15182e",
    "#091572ec",
    "#250338ec",
    "#f38a34ec",
    "#f58559ec",
    "#3d251cec",
    "#4d2719ec",
  ];

  const [bg, setcurrentbg] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    var data = 0;
    if (typeof window !== "undefined") {
      data = Number(window.localStorage.getItem("index"));
      if (data == undefined) {
        console.log("at undefined");
        setIndex(0);
        setcurrentbg(colors[0]);
      }
      if (data == 0) {
        console.log("at index 0");
        setcurrentbg(colors[0]);
        setIndex(index + 1);
      }
      if (data >= colors.length - 1) {
        console.log("data is equal to len of colors");
        setIndex(0);
        setcurrentbg(colors[0]);
      } else {
        console.log("in else of useeffect");
        console.log(colors[data]);
        setcurrentbg(colors[data]);
        setIndex(data + 1);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("index", index);
    }
  });
  const Button = styled.button`
    text-align: center;
    width: 180px;
    border: 3px solid white;
    color: white;
    height: 47px;
    background-color: transparent;
    margin-top: 15px;
    margin-left: 8px;
    margin-right: 8px;
    font-size: 1.1em;
    position: relative;
    &::after,
    ::before {
      content: "";
      position: absolute;
      height: 4px;
      width: 12px;
      background: ${bg};
      transform: skewX(50deg);
      transition: 0.3s linear;
    }
    &::after {
      bottom: -4px;
      right: 10%;
    }
    &::before {
      top: -4px;
      left: 10%;
    }
    &:hover::before {
      left: 80%;
    }
    &:hover::after {
      right: 80%;
    }
  `;

  return (
    <div id="home" className="main-div" style={{ backgroundColor: bg }}>
      <div className="container m-auto">
        <div className="row hero-row">
          <div className="col-md-6 col-headings">
            <h2 className="text-gradient">Hello,</h2>
            <h3 className="text-gradient">I am Ansh Sinha</h3>
            <h4 className="text-gradient">A Flutter and Web Developer</h4>
            <div>
              <Button>Projects</Button>
              <Button>Contact Me</Button>
            </div>
          </div>

          <div className="yoga col-md-5">
            <LottieAnimation lottie={yogadev} height={430} width={420} />
          </div>
        </div>
      </div>
    </div>
  );
}
