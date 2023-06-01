import React from "react";

function MemberSection(props) {
    return (
        <section id="memberSection" className={props.attr}>
            <h3>멤버 소개</h3>
            <p>웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자 멤버를 소개합니다.</p>
            <div className="member__inner container">
                <div className="member">
                    <figure className="member__header">
                        <img
                            src="./assets/images/member/member01.svg"
                            alt="색을 고르는 법"
                        />
                    </figure>
                    <div className="member__body">
                        <h4 className="title">웹쓰 20기</h4>
                        <p className="desc"></p>
                        <a href="#" className="btn">
                            자세히보기
                        </a>
                    </div>
                </div>
                <div className="member">
                    <figure className="member__header">
                        <img
                            src="./assets/images/member/member01.svg"
                            alt="색을 고르는 법"
                        />
                    </figure>
                    <div className="member__body">
                        <h4 className="title">웹쓰 20기</h4>
                        <p className="desc"></p>
                        <a href="#" className="btn">
                            자세히보기
                        </a>
                    </div>
                </div>
                <div className="member">
                    <figure className="member__header">
                        <img
                            src="./assets/images/member/member01.svg"
                            alt="색을 고르는 법"
                        />
                    </figure>
                    <div className="member__body">
                        <h4 className="title">웹쓰 20기</h4>
                        <p className="desc"></p>
                        <a href="#" className="btn">
                            자세히보기
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MemberSection;
