import React from "react";

export default function Skills() {
  return (
    <div id="skills" className="container skills">
      <div>
        <h2>Skills</h2>
      </div>
      <div>
        <div className="container">
          <div className="row skill-row">
            <div className="col-md-3 skill-progress col-sm-12">
              <div className="eighty-percent mb-blue">
                <div className="skill-name">
                  <span> HTML </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 skill-progress col-sm-12 ">
              <div className="seventy-five mb-orange">
                <div className="skill-name">
                  <span> CSS </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 skill-progress col-sm-12">
              <div className="seventy-five mb-green">
                <div className="skill-name">
                  <span> JavaScript </span>
                </div>
              </div>
            </div>
            <div className="skill-progress col-md-3 col-sm-12">
              <div className="eighty-percent mb-violet">
                <div className="skill-name">
                  <span> Flutter </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row skill-row">
            <div className="skill-progress col-md-3 col-sm-12 ">
              <div className="seventy-five mb-green">
                <div className="skill-name">
                  <span> React </span>
                </div>
              </div>
            </div>
            <div className="skill-progress col-md-3 col-sm-12 ">
              <div className="eighty-percent mb-blue">
                <div className="skill-name">
                  <span> NodeJs</span>
                </div>
              </div>
            </div>
            <div className="skill-progress col-md-3 col-sm-12 ">
              <div className="seventy-five mb-orange">
                <div className="skill-name">
                  <span>MySQL</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row skill-row">
            <div className="skill-progress col-md-3 col-sm-12 ">
              <div className="seventy-five mb-violet">
                <div className="skill-name">
                  <span>Mongodb</span>
                </div>
              </div>
            </div>
            <div className="skill-progress col-md-3 col-sm-12">
              <div className="eighty-percent mb-blue">
                <div className="skill-name">
                  <span>Github Actions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
