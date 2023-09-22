import React from "react";
import Image from "next/image";
import "../../public/css/about.css";

const About = () => {
  return (
    <div id="about">
      <div className="about-container">
        <article className="content-container">
          <div className="about-content">
            <div className="about-section">
              <div className="section-image">
                <Image
                  src="/images/link.png"
                  alt="My Image"
                  width={50}
                  height={50}
                />
              </div>
              <div className="section-title">About Me</div>
            </div>
            <div className="content-section">
              <div className="section-item">
                <div className="item-container">
                  <div className="item-blank"></div>
                  <div className="item-icon">
                    <Image
                      src="/images/profile/me.png"
                      alt="My Image"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="item-text">
                    <div className="text-title">이름</div>
                    <div className="text-name">고병연</div>
                  </div>
                </div>
              </div>
              <div className="section-item">
                <div className="item-container">
                  <div className="item-blank"></div>
                  <div className="item-icon">
                    <Image
                      src="/images/profile/birth.png"
                      alt="My Image"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="item-text">
                    <div className="text-title">생년월일</div>
                    <div className="text-name">90.02.11</div>
                  </div>
                </div>
              </div>
              <div className="section-item">
                <div className="item-container">
                  <div className="item-blank"></div>
                  <div className="item-icon">
                    {" "}
                    <Image
                      src="/images/profile/address.png"
                      alt="My Image"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="item-text">
                    <div className="text-title">주소지</div>
                    <div className="text-name">서울시 강서구</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-section">
              <div className="section-item">
                <div className="item-container">
                  <div className="item-blank"></div>
                  <div className="item-icon">
                    {" "}
                    <Image
                      src="/images/profile/contact.png"
                      alt="My Image"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="item-text">
                    <div className="text-title">연락처</div>
                    <div className="text-name">010-6821-7287</div>
                  </div>
                </div>
              </div>
              <div className="section-item">
                <div className="item-container">
                  <div className="item-blank"></div>
                  <div className="item-icon">
                    {" "}
                    <Image
                      src="/images/profile/email.png"
                      alt="My Image"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="item-text">
                    <div className="text-title">이메일</div>
                    <div className="text-name">rhquddus@naver.com</div>
                  </div>
                </div>
              </div>
              <div className="section-item">
                <div className="item-container">
                  <div className="item-blank"></div>
                  <div className="item-icon">
                    {" "}
                    <Image
                      src="/images/profile/degree.png"
                      alt="My Image"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="item-text">
                    <div className="text-title">학력</div>
                    <div className="text-name">시드니공과대학(석사)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-bottom">
              * 사이드 프로젝트 또는 과외/레슨 문의는 위 연락처/이메일로
              부탁드립니다
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default About;
