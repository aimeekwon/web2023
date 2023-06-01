import React from "react";

function YoutubeSection(props) {
    return (
        <section id="youtubeSection" className={props.attr}>
            <div className="youtube__inner container">
                <div className="youtube__text">
                    <h3>유튜브</h3>
                    <p>더 다양한 강의는 유튜브에서</p>
                    <a href="#">자세히</a>
                </div>
                <div className="youtube__item">
                    <div className="you__play">
                        <img src="./assets/images/youtube/you01.jpg" alt="" />
                    </div>
                    <div className="you__play">
                        <img src="./assets/images/youtube/you02.jpg" alt="" />
                    </div>
                    <div className="you__play">
                        <img src="./assets/images/youtube/you01.jpg" alt="" />
                    </div>
                    <div className="you__play">
                        <img src="./assets/images/youtube/you02.jpg" alt="" />
                    </div>
                    <div className="you__play">
                        <img src="./assets/images/youtube/you01.jpg" alt="" />
                    </div>
                    <div className="you__play">
                        <img src="./assets/images/youtube/you02.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default YoutubeSection;
