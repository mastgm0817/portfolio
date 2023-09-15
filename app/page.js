"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skillset from "./components/Skillset";
import Repos from "./components/Repos";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div>
        <Header></Header>
        <About></About>
        <Skillset></Skillset>
        <Projects></Projects>
        <Repos></Repos>
        <Footer></Footer>
      </div>
    </>
  );
}
