import React from "react";
import { useRouter } from "next/router";

export default function Projects() {
  const router = useRouter();
  return (
    <div id="projects" className="main-projdiv">
      <div className="proj-heading">
        <h2 className="text-gradient">Projects</h2>
      </div>
      <div className="container-fluid">
        <div className="row proj-row">
          <div
            className="proj-div col-md-3 col-sm-12"
            onClick={() =>
              router.push("https://github.com/AnshSinha9140/quizIT")
            }
          >
            <div className="proj-img">
              <img src="/images/quizit.png"></img>
            </div>
            <div className="proj-description">
              <h5>QuizIT</h5>
              <p>
                This is a Quiz App. In which you can attempt quiz from a wide
                variety of topics such as General Knowledge, Entertainment etc.
              </p>
            </div>
          </div>

          <div
            className="proj-div col-md-3 col-sm-12"
            onClick={() =>
              router.push("https://github.com/AnshSinha9140/AppointX")
            }
          >
            <div className="proj-img">
              <img src="/images/appointex.jpg"></img>
            </div>
            <div className="proj-description">
              <h5>Appointex</h5>

              <p>
                It is an Online OPD System in which you can book appointments in
                hospitals and clinics.I has various features like blood bank,
                E-diagnosis etc.
              </p>
            </div>
          </div>
          <div
            className="proj-div col-md-3 col-sm-12"
            onClick={() => router.push("https://flixhub-a9ecd.web.app/")}
          >
            <div className="proj-img">
              <img src="/images/flixhub.jpg"></img>
            </div>
            <div className="proj-description">
              <h5>Flixhub</h5>

              <p>
                It is Netflix clone app build while learning basics of ReactJs.
                It uses Tmdb api for fetching the movies and thumbnails.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
