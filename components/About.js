import React from "react";
import LottieAnimation from "./lottie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import about from "../animations/51971-hello.json";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();

  return (
    <div id="about">
      <div className="abt-heading">
        <h2>Somethings About Me</h2>
      </div>
      <div className="container container-md abt-container ">
        <div className="row abt-row">
          <div className="abt-img col-md-6 col-12">
            <LottieAnimation lottie={about} height={450} width={400} />
          </div>
          <div className="abt-desc col-md-6  col-sm-11">
            <p>
              I am a Tech Enthusiast,Funloving and Hardworking Person. I am
              currently Persuing B.Tech in Infromation Technology. I like making
              experiences that are User-friendly and Effecient.I like working on
              technologies like Flutter and ReactJs.I participate in various
              Hackathons and Competitions.I like playing Online games,Chess and
              listening to music.<br></br>
              Feel free to Contact and Collaborate 😁<br></br>
            </p>
            <div id="icons-div">
              <span>
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  spin
                  onClick={() => {
                    router.push("https://github.com/AnshSinha9140");
                  }}
                />
              </span>
              <span>
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  spin
                  onClick={() => {
                    router.push(
                      "https://www.linkedin.com/in/ansh-sinha-b591051a3/"
                    );
                  }}
                />
              </span>
              <span>
                <FontAwesomeIcon icon={["fab", "instagram"]} spin />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
