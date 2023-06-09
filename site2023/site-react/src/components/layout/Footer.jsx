import React from 'react'

function Footer(props) {
  return (
    <footer id="footer" role="contentinfo" className={props.attr}>
      <div className="footer__inner container">
        <div className="footer__text">
          <h5>aimee</h5>
          <p>
            질문 환영 :파티하는_얼굴: <br />
            궁금한 사항은 메일로 연락주세요!
            <a href="mailto:aimee00418@gmail.com">
              aimee00418@gmail.com
            </a>
          </p>
          <ul className="sns">
            <li>
              <a href="#">
                <span className="ir">페이스북</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="ir">인스타</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="ir">유투브</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="ir">깃</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__menu">
          <div>
            <h4>사이트</h4>
            <ul>
              <li>
                <a href="#">웹표준 사이트</a>
              </li>
              <li>
                <a href="#">웹표준 사이트</a>
              </li>
              <li>
                <a href="#">웹표준 사이트</a>
              </li>
              <li>
                <a href="#">웹표준 사이트</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>유형</h4>
            <ul>
              <li>
                <a href="#">이미지 유형</a>
              </li>
              <li>
                <a href="#">카드 유형</a>
              </li>
              <li>
                <a href="#">이미지/텍스트 유형</a>
              </li>
              <li>
                <a href="#">배너 유형</a>
              </li>
              <li>
                <a href="#">텍스트 유형</a>
              </li>
              <li>
                <a href="#">푸터 유형</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>스크립트</h4>
            <ul>
              <li>
                <a href="#">검색 이펙트</a>
              </li>
              <li>
                <a href="#">퀴즈 이팩트</a>
              </li>
              <li>
                <a href="#">마우스 이펙트</a>
              </li>
              <li>
                <a href="#">슬라이드 이펙트</a>
              </li>
              <li>
                <a href="#">패럴랙스 이펙트</a>
              </li>
              <li>
                <a href="#">게임 이펙트</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>레퍼런스</h4>
            <ul>
              <li>
                <a href="#">CSS</a>
              </li>
              <li>
                <a href="#">FONTS</a>
              </li>
              <li>
                <a href="#">HTML</a>
              </li>
              <li>
                <a href="#">JAVASCRIPT</a>
              </li>
              <li>
                <a href="#">REACT</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__right">
          Copyright 2023. All Rights Reserved. - Designed by aimee
        </div>
      </div>
    </footer>
  );
}

export default Footer
