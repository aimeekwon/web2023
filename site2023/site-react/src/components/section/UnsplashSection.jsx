import React from "react";

const unsplashTitle = {
    title: "언스플래쉬",
    desc: "더 다양한 이미지는",
    more: "자세히",
}

const unsplashItem = [
    {
        unImg: "./assets/images/unsplash/unsplash01.jpg",
        title: "관련이미지"
    },
    {
        unImg: "./assets/images/unsplash/unsplash02.jpg",
        title: "관련이미지"
    },
    {
        unImg: "./assets/images/unsplash/unsplash01.jpg",
        title: "관련이미지"
    },
    {
        unImg: "./assets/images/unsplash/unsplash02.jpg",
        title: "관련이미지"
    },
    {
        unImg: "./assets/images/unsplash/unsplash01.jpg",
        title: "관련이미지"
    },
    {
        unImg: "./assets/images/unsplash/unsplash02.jpg",
        title: "관련이미지"
    },
]
function UnsplashItem({unImg, title}) {
    return (
        <>
            <div className="unsplash__img">
                <img src={unImg} alt={title} />
            </div>
        </>
    )
}
function UnsplashSection(props) {
    return (
        <section id="unsplashSection" className={props.attr}>
            <div className="unsplash__inner container">
                <div className="unsplash__text">
                    <h3>{unsplashTitle.title}</h3>
                    <p>{unsplashTitle.desc}</p>
                    <a href="#">{unsplashTitle.more}</a>
                </div>

                <div className="unsplash__item">
                    {unsplashItem.map((text, index) => (
                        <UnsplashItem
                            key={index}
                            unImg={text.unImg}
                            title={text.title}
                        />
                        ))}
                </div>
            </div>
        </section>
    );
}

export default UnsplashSection;
