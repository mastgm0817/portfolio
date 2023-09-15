import React from "react";
import Image from "next/image";
import "../../public/css/project.css";

const Projects = () => {
  return (
    <div id="projects">
      <div className="project-container">
        <article className="content-container">
          <div className="content">
            <div className="pj-section">
              <div className="section-image">
                <Image
                  src="/images/link.png"
                  alt="My Image"
                  width={50}
                  height={50}
                />
              </div>
              <div className="pj-section-title">Project</div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Projects;
