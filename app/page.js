"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import About from "./components/About";
import Skillset from "./components/Skillset";
import Repos from "./components/Repos";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "../public/css/home.css";

export default function Home() {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // 스크롤 이벤트 리스너를 추가합니다.
    function handleScroll() {
      if (window.scrollY > 200) {
        // 스크롤 위치가 200 이상인 경우
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
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
          <div className="header-text"></div>
          <div className="header-text"></div>
          <div className="header-text">
            <div className="header-text-title">
              <p>웹 개발자 포트폴리오</p>
            </div>
            <div className="header-text-content">
              <p className="header-text-left">
                &quot;지금 삽질의{" "}
                <span style={{ color: "#EE6C4D", fontWeight: "bold" }}>
                  고통
                </span>{" "}
                을 즐기자
              </p>
              <p>
                고통이 강할수록 나의{" "}
                <span style={{ color: "green", fontWeight: "bold" }}>실력</span>{" "}
                은 상승한다.&quot;
              </p>
            </div>
          </div>
          <div className="header-text"></div>
        </div>
        <About></About>
        <Skillset></Skillset>
        <Projects></Projects>
        <Repos></Repos>
        <Footer></Footer>
      </div>
    </>
  );
}
