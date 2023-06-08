import React from "react";

const memberTitle = {
    title: "멤버 소개",
    desc: "웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자 멤버를 소개합니다."
}
const memberText = [
    {
        img: "./assets/images/member/member01.svg",
        title: "웹쓰 20기",
        desc: "개발자 멤버를 소개합니다",
        btn: "자세히보기"
    },
    {
        img: "./assets/images/member/member01.svg",
        title: "웹쓰 20기",
        desc: "개발자 멤버를 소개합니다",
        btn: "자세히보기"
    },
    {
        img: "./assets/images/member/member01.svg",
        title: "웹쓰 20기",
        desc: "개발자 멤버를 소개합니다",
        btn: "자세히보기"
    },

]

function Member({ img, title, desc, btn }) {
    return (
        <>
        <div className="member">
            <figure className="member__header">
                        <img src={img} alt={title} />
             </figure>
                    <div className="member__body">
                        <h4 className="title">{title}</h4>
                        <p className="desc">{desc}</p>
                        <a href="#" className="btn">{btn}</a>
                    </div>
        </div>
        </>
    )
}

function MemberSection(props) {
    return (
        <section id="memberSection" className={props.attr}>
            <h3>{memberTitle.title}</h3>
            <p>{memberTitle.desc}</p>
            <div className="member__inner container">
    
                    {memberText.map((text, index) => (
                        <Member
                        key={index}
                        img={text.img}
                        title={text.title}
                        desc={text.desc}
                        btn={text.btn}
                    />
                    ))}


            </div>
        </section>
    );
}

export default MemberSection;
