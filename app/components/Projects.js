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
            <div className="pj-section-content">
              <div className="pj-detail-title">AI가 추천해주는 데이트 코스</div>
              <div className="pj-detail-date">2023.07.25 - 08.31 (6인) </div>
              <div className="pj-detail-flex">
                <div className="pj-flex-left">
                  <Image
                    src="/images/project/01/luvoost.png"
                    alt="My Image"
                    width={700}
                    height={700}
                  />
                </div>
                <div className="pj-flex-right">
                  <div className="pj-right-desc">
                    빅데이터 기반 AI 데이트 코스 추천 웹 애플리케이션으로, 현재
                    내 위치정보를 기반으로 주변에 있는 데이트 코스를 인공지능이
                    추천을 해주는 서비스입니다.
                    <br></br>
                    <br></br>
                    개발배경으로는 내가 살고있는 집 주변에도 좋은 데이트 코스가
                    있을수 있고 그걸 찾기 어렵다는점과 데이트코스를 계획하는데
                    어려움을 겪는 이들을 위한 서비스를 만들어보자 였습니다.
                    왜냐하면 요즘은 데이트코스를 검색해보면 인플루언서나
                    광고비를 받고 SNS에서 중복된 맛집들을 추천해주는것을 많이
                    보게되어 약간 식상한 느낌을 받기도 하였습니다. Luvoost는
                    어디서 데이트를 해야할지 모르는 연인, 부부, 친구들을 위해서
                    인공지능이 데이트 코스를 추천해줍니다.
                    <br></br>
                    <br></br>이 서비스는 최근에 많은 주목을 받고 있는 Nextjs를
                    도입하였는데, React는 SEO의 약점이 있고 CSR 위주에서 벗어나
                    SSR까지 지원하여 그 장점을 경험해보고 싶었습니다. 인증의
                    역할은 Next-auth라이브러리를 이용하여 소셜로그인을
                    구축하였습니다. Backend적인 부분에서는 스프링부트를
                    사용하였는데, JWT서버를 구축하기 위함과 인가 부분을 구현하기
                    위해 Spring security를 사용하였습니다.
                    <br></br>
                    <br></br>
                  </div>

                  <button className="pj-right-button">
                    자세히보기 ► README
                  </button>

                  <div className="pj-right-flex">
                    <div className="pj-flex-container">
                      <div className="pj-flex-title">✓ 주요 개발</div>
                      <div className="pj-flex-content">
                        회원가입/소셜로그인/쿠폰서비스/결제서비스/데이트코스찜하기
                        <br></br>
                        <br></br>
                        추가적으로 팀원들의 협업을 위한 CI/CD
                      </div>
                    </div>
                    <div className="pj-flex-container">
                      <div className="pj-flex-title">✓ Github</div>
                      <div className="pj-flex-content">
                        https://github.com/mastgm0817/final_frontend
                        <br></br>
                        <br></br>
                        https://github.com/mastgm0817/final_backend
                      </div>
                    </div>
                    <div className="pj-flex-container">
                      <div className="pj-flex-title">✓ URL</div>
                      <div className="pj-flex-content">
                        https://luvoost.co.kr
                      </div>
                    </div>
                    <div className="pj-flex-container">
                      <div className="pj-flex-title">✓ Frontend</div>
                      <div className="pj-flex-content">
                        Nextjs13,TypeScript,Next-Auth,MUI
                      </div>
                    </div>
                    <div className="pj-flex-container">
                      <div className="pj-flex-title">✓ Backend</div>
                      <div className="pj-flex-content">
                        Springboot,Flask,Nginx,Gunicorn,Nodejs,Tomcat
                      </div>
                    </div>
                    <div className="pj-flex-container">
                      <div className="pj-flex-title">✓ Database</div>
                      <div className="pj-flex-content">MariaDB 10.4</div>
                    </div>
                    <div className="pj-flex-container">
                      <div className="pj-flex-title">✓ Deployment</div>
                      <div className="pj-flex-content">
                        AWS, Github-Acition, ArgoCD, VMware, Docker, Kubernetes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Projects;
