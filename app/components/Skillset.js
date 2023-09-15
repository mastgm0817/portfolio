import React from "react";
import Image from "next/image";
import "../../public/css/skillset.css";

const Skillset = () => {
  return (
    <div id="skillset">
      <div className="skillset-container">
        <article className="content-container">
          <div className="content">
            <div className="sk-section">
              <div className="sk-section-image">
                <Image
                  src="/images/link.png"
                  alt="My Image"
                  width={50}
                  height={50}
                />
              </div>
              <div className="sk-section-title">Skillset</div>
            </div>
            <div className="sk-section-content">
              <div className="sk-section-content-item">
                <div className="sk-content-item-title">Frontend</div>
                <div className="sk-content-item-image">tech image</div>
              </div>
              <div className="sk-section-content-item">
                <div className="sk-content-item-title">Backend</div>
                <div className="sk-content-item-image">tech image</div>
              </div>
              <div className="sk-section-content-item">
                <div className="sk-content-item-title">Deployment</div>
                <div className="sk-content-item-image">tech image</div>
              </div>
            </div>
            <div className="sk-section-content">
              <div className="sk-section-content-item">
                <div className="sk-content-item-title">Version Control</div>
                <div className="sk-content-item-image">tech image</div>
              </div>
              <div className="sk-section-content-item">
                <div className="sk-content-item-title">Communication</div>
                <div className="sk-content-item-image">tech image</div>
              </div>
              <div className="sk-section-content-item">
                <div className="sk-content-item-title">Certificate</div>
                <div className="sk-content-item-image">tech image</div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Skillset;
