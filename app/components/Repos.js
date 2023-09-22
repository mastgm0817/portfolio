import React from "react";
import Image from "next/image";
import "../../public/css/repo.css";

const Repos = () => {
  return (
    <div id="archive">
      <div className="repo-container">
        <article className="content-container">
          <div className="content">
            <div className="repo-section">
              <div className="section-image">
                <Image
                  src="/images/link.png"
                  alt="My Image"
                  width={50}
                  height={50}
                />
              </div>
              <div className="repo-section-title">Archive</div>
            </div>
            <div className="section-content-grid">
              <div className="repo-grid-item">
                <div className="item-title">
                  <Image
                    src="/images/github.jpeg"
                    alt="My Image"
                    width={350}
                    height={150}
                  />
                </div>
                <div className="repo-items-container">
                  <a href="https://github.com/mastgm0817">
                    github.com/mastgm0817
                  </a>
                  <p>소스코드 저장소</p>
                  <ul>
                    <li>프로젝트 소스 코드 기록</li>
                    <li>혼자 독학하며 올린 코드</li>
                    <li>부트캠프에서 만든 코드</li>
                  </ul>
                </div>
              </div>
              <div className="repo-grid-item">
                <div className="item-title-notion">
                  <Image
                    src="/images/Notion.png"
                    alt="My Image"
                    width={270}
                    height={130}
                  />
                </div>
                <div className="repo-items-container">
                  <a href="https://alluring-wrist-67d.notion.site/Dean-s-Portfolio-d7fc9ef0f28d4556907e938100cbe68b?pvs=4">
                    notion.com/mastgm0817
                  </a>
                  <p>나만의 모든것을 기록하는 곳</p>
                  <ul>
                    <li>공부한 흔적</li>
                    <li>프로젝트 흔적</li>
                    <li>삽질한 흔적</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Repos;
