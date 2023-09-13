import React from "react";
import "../../public/css/about.css";

const About = () => {
  return (
    <div id="about">
      <div className="about-container">
        <article className="content-container">
          <div className="content">
            <div className="section">
              <div className="section-image">image</div>
              <div className="section-title">About Me</div>
            </div>
            <div className="content-section">
              <div className="section-item">1</div>
              <div className="section-item">2</div>
              <div className="section-item">3</div>
            </div>
            <div className="content-section">
              <div className="section-item">4</div>
              <div className="section-item">5</div>
              <div className="section-item">6</div>
            </div>
            <div className="section-bottom">홍보</div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default About;
