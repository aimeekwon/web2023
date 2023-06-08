import React from "react";

const youtubeTitle = {
    title: "유튜브",
    desc: "더 다양한 강의는 유튜브에서",
    more: "자세히"
}

const youtubeItem = [
    {
        img: "./assets/images/youtube/you01.jpg",
        title: "코딩 애플",
        num: "dkelkt442"
    }, {
        img: "./assets/images/youtube/you01.jpg",
        title: "코딩 애플",
        num: "dkelkt442"
    }, {
        img: "./assets/images/youtube/you01.jpg",
        title: "코딩 애플",
        num: "dkelkt442"
    }, {
        img: "./assets/images/youtube/you01.jpg",
        title: "코딩 애플",
        num: "dkelkt442"
    }
]
function YoutubeItem({ img, title, num }) {
    return (
        <>
            <div className="you__play">
                <img src={img} alt={title} />
                <p>{num}</p>
            </div>
        </>
    )
}

function YoutubeSection(props) {
    return (
        <section id="youtubeSection" className={props.attr}>
            <div className="youtube__inner container">
                <div className="youtube__text">
                    <h3>{youtubeTitle.title}</h3>
                    <p>{youtubeTitle.desc}</p>
                    <a href="#">{youtubeTitle.more}</a>
                </div>
                <div className="youtube__item">
                    {youtubeItem.map((text, index) => (
                        <YoutubeItem
                            key={index}
                            img={text.img}
                            title={text.title}
                            num={text.num}
                        />
                        ))}
                </div>
            </div>
        </section>
    );
}

export default YoutubeSection;
