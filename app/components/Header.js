import React from "react";
import "../../public/css/header.css";

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="header-container">
      <nav>
        <span className="left">KBY's Portfolio</span>
        <div className="right">
          <span onClick={() => scrollToSection("about")}>자기소개</span>
          <span onClick={() => scrollToSection("skillset")}>스킬셋</span>
          <span onClick={() => scrollToSection("repos")}>저장소</span>
          <span onClick={() => scrollToSection("projects")}>프로젝트</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
