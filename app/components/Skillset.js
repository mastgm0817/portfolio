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
                <div className="sk-content-item-image">
                  <Image
                    src="/images/skillset/Frontend.png"
                    alt="My Image"
                    width={300}
                    height={700}
                  />
                </div>
              </div>
              <div className="sk-section-content-item">
                <div
                  className="sk-content-item-title"
                  style={{ color: "blue" }}
                >
                  Backend
                </div>
                <div className="sk-content-item-image">
                  <Image
                    src="/images/skillset/Backend.png"
                    alt="My Image"
                    width={300}
                    height={700}
                  />
                </div>
              </div>
              <div className="sk-section-content-item">
                <div
                  className="sk-content-item-title"
                  style={{ color: "purple" }}
                >
                  Deployment
                </div>
                <div className="sk-content-item-image">
                  <Image
                    src="/images/skillset/Deployment.png"
                    alt="My Image"
                    width={300}
                    height={700}
                  />
                </div>
              </div>

              <div className="sk-section-content-item">
                <div
                  className="sk-content-item-title "
                  style={{ color: "black" }}
                >
                  Version Control
                </div>
                <div className="sk-content-item-image">
                  <Image
                    src="/images/skillset/VCS.png"
                    alt="My Image"
                    width={300}
                    height={200}
                  />
                </div>
              </div>
              <div className="sk-section-content-item">
                <div
                  className="sk-content-item-title"
                  style={{ color: "skyblue" }}
                >
                  Communication
                </div>
                <div className="sk-content-item-image">
                  <Image
                    src="/images/skillset/Communication.png"
                    alt="My Image"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
              <div className="sk-section-content-item">
                <div
                  className="sk-content-item-title"
                  style={{ color: "goldenrod" }}
                >
                  Certificate
                </div>
                <div className="sk-content-item-image">
                  <Image
                    src="/images/skillset/Certificate.png"
                    alt="My Image"
                    width={300}
                    height={350}
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Skillset;
