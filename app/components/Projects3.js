import React from "react";
import Image from "next/image";
import "../../public/css/project.css";

const Projects1 = () => {
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
              <div className="pj-detail-title">나만의 포트폴리오 웹사이트</div>
              <div className="pj-detail-date">2023.09.15 - 09.21 (1인) </div>
              <div className="pj-detail-flex">
                <div className="pj-flex-left">
                  <Image
                    src="/images/project/02/portfolio.png"
                    alt="My Image"
                    width={550}
                    height={700}
                  />
                </div>
                <div className="pj-flex-right">
                  <div className="pj-right-desc">
                    웹 개발자 포트폴리오용 웹사이트로서, 개발자로서 성장해오는
                    과정을 기술해놓았습니다. 이곳에서 나의 이력서와 경력기술을
                    업데이트 할 것입니다.
                    <br></br>
                    <br></br>
                    개발배경으로는 웹 개발자로서 포트폴리오는 웹 사이트로
                    구축하는게 필요하지 않을까라는 생각에서 시작했습니다.
                    Notion, pdf, 파워포인트등으로 하는것보다는 웹사이트가 더욱
                    직관적으로 저의 현재 시점에서의 역량을 보여줄수있고, 미래의
                    내가 이것을 보았을때 얼마나 성장했는지도 알수있게 된다는것이
                    너무 재밌을거 같았습니다.
                    <br></br>
                    <br></br>이 웹사이트는 HTML, CSS, JS, React, Nextjs
                    프레임워크로만 만들었습니다. 그 이유는 Fullstack 개발자를
                    희망하는 저로서 온전히 프론트엔드 기술스택만 으로 구현한
                    웹사이트가 필요했습니다. 이 프로젝트를 통해서 저는 JS
                    프레임워크(React, Next)에 좀 더 친숙해질수있었고, CSS지식도
                    좀 더 향상시키고 VerceL로 배포를 해본 경험까지 추가한
                    프로젝트입니다. 추가적으로 보완할점으로는 반응형으로 웹
                    사이트를 구축하는부분을 현재 작업중에 있습니다.
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
                        Animation, Flex, StickyButton, ResponsiveWebPage
                        <br></br>
                        <br></br>
                        Vercel로 간단하게 배포
                      </div>
                    </div>
                    <div className="pj-flex-container">
                      <div className="pj-flex-title">✓ Github</div>
                      <div className="pj-flex-content">
                        https://github.com/mastgm0817/portfolio
                      </div>
                    </div>
                    <div className="pj-flex-container">
                      <div className="pj-flex-title">✓ URL</div>
                      <div className="pj-flex-content">
                        https://portfolio-five-nu-34.vercel.app/
                      </div>
                    </div>
                    <div className="pj-flex-container">
                      <div className="pj-flex-title">✓ Frontend</div>
                      <div className="pj-flex-content">
                        Nextjs13,Javascript,HTML5,CSS
                      </div>
                    </div>
                    <div className="pj-flex-container">
                      <div className="pj-flex-title">✓ Backend</div>
                      <div className="pj-flex-content">사용하지 않음</div>
                    </div>
                    <div className="pj-flex-container">
                      <div className="pj-flex-title">✓ Database</div>
                      <div className="pj-flex-content">사용하지 않음</div>
                    </div>
                    <div className="pj-flex-container">
                      <div className="pj-flex-title">✓ Deployment</div>
                      <div className="pj-flex-content">Vercel</div>
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

export default Projects1;
