import React from "react";

const portText = [
    {
        portImg: "./assets/images/unsplash/unsplash01.jpg",
        iconImg: "./assets/images/unsplash/unsplash01.jpg",
        title: "aimeePORTFOLIO",
        desc: "프론트앤드개발자",
    },
    {
        portImg: "./assets/images/unsplash/unsplash01.jpg",
        iconImg: "./assets/images/unsplash/unsplash01.jpg",
        title: "aimeePORTFOLIO",
        desc: "프론트앤드개발자",
    },
    {
        portImg: "./assets/images/unsplash/unsplash01.jpg",
        iconImg: "./assets/images/unsplash/unsplash01.jpg",
        title: "aimeePORTFOLIO",
        desc: "프론트앤드개발자",
    },
    {
        portImg: "./assets/images/unsplash/unsplash01.jpg",
        iconImg: "./assets/images/unsplash/unsplash01.jpg",
        title: "aimeePORTFOLIO",
        desc: "프론트앤드개발자",
    },
    {
        portImg: "./assets/images/unsplash/unsplash01.jpg",
        iconImg: "./assets/images/unsplash/unsplash01.jpg",
        title: "aimeePORTFOLIO",
        desc: "프론트앤드개발자",
    },
    {
        portImg: "./assets/images/unsplash/unsplash01.jpg",
        iconImg: "./assets/images/unsplash/unsplash01.jpg",
        title: "aimeePORTFOLIO",
        desc: "프론트앤드개발자",
    },

]
function PortDesc({ portImg, iconImg, title, desc }) {
    return (
        <>
            <div className="port">
                <figure className="port__header">
                    <img src={portImg} alt={title} />
                </figure>
                <div className="port__body">
                    <span>
                        <img src={iconImg} alt={title} />
                    </span>
                    <div>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const portTitle = {
    title: "포트폴리오",
    desc: "포트폴리오입니다"
}
function PortSection(props) {
    return (
        <section id="portSection" className={props.attr}>
            <h3>{portTitle.title}</h3>
            <p>{portTitle.desc}</p>
            <div className="port__inner container">
                <div className="port__btn">more</div>
                <div className="port__cont">
                    {portText.map((text, index) => (
                        <PortDesc
                            key={index}
                            portImg={text.portImg}
                            iconImg={text.iconImg}
                            title={text.title}
                            desc={text.desc}
                        />
                    ))
                    }
                </div>
            </div>
        </section>
    );
}

export default PortSection;
