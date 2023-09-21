"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import About from "./components/About";
import Skillset from "./components/Skillset";
import Repos from "./components/Repos";
import Projects1 from "./components/Projects1";
import Projects2 from "./components/Projects2";
import Footer from "./components/Footer";
import "../public/css/home.css";

export default function Home() {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // 스크롤 이벤트 리스너를 추가합니다.
    function handleScroll() {
      if (window.scrollY > 60) {
        // 스크롤 위치가 200 이상인 경우
        setIsNavFixed(true);
        setIsVisible(true);
      } else {
        setIsNavFixed(false);
        setIsVisible(false);
      }
    }

    // 스크롤 이벤트 리스너를 등록합니다.
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="top">
        <nav className={isNavFixed ? "fixed" : ""}>
          <span className="left" onClick={() => scrollToSection("top")}>
            KBY&apos;s Portfolio
          </span>
          <div className="right">
            <span
              className="right-item"
              onClick={() => scrollToSection("about")}
            >
              자기소개
            </span>
            <span
              className="right-item"
              onClick={() => scrollToSection("skillset")}
            >
              스킬셋
            </span>
            <span
              className="right-item"
              onClick={() => scrollToSection("repos")}
            >
              저장소
            </span>
            <span
              className="right-item"
              onClick={() => scrollToSection("projects")}
            >
              프로젝트
            </span>
          </div>
        </nav>
        <div className="header-container">
          <div className="header-text-title">웹 개발자 포트폴리오</div>
          <div className="header-text-content">
            <p className="header-text-left">
              안녕하세요. 방문해주셔서 감사합니다.
            </p>
            <p>훌륭한 개발자보다는 현명한 개발자가 되고싶습니다.</p>
          </div>
          <div className="more-detail" onClick={() => scrollToSection("about")}>
            더 알아보기 ↓
          </div>
        </div>
        <button
          className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
          onClick={() => scrollToSection("top")}
        >
          ▲
        </button>

        <About></About>
        <Skillset></Skillset>
        <Projects2></Projects2>
        <Projects1></Projects1>
        <Repos></Repos>
        <Footer></Footer>
      </div>
    </>
  );
}
