import React from "react";

function UnsplashSection(props) {
    return (
        <section id="unsplashSection" className={props.attr}>
            <div className="unsplash__inner container">
                <div className="unsplash__text">
                    <h3>언스플래쉬</h3>
                    <p>더 다양한 이미지는 </p>
                    <a href="#">자세히</a>
                </div>

                <div className="unsplash__item">
                    <div className="unsplash__img">
                        <img
                            src="./assets/images/unsplash/unsplash01.jpg"
                            alt=""
                        />
                    </div>
                    <div className="unsplash__img">
                        <img
                            src="./assets/images/unsplash//unsplash02.jpg"
                            alt=""
                        />
                    </div>
                    <div className="unsplash__img">
                        <img
                            src="./assets/images/unsplash//unsplash01.jpg"
                            alt=""
                        />
                    </div>
                    <div className="unsplash__img">
                        <img
                            src="./assets/images/unsplash//unsplash02.jpg"
                            alt=""
                        />
                    </div>
                    <div className="unsplash__img">
                        <img
                            src="./assets/images/unsplash//unsplash01.jpg"
                            alt=""
                        />
                    </div>
                    <div className="unsplash__img">
                        <img
                            src="./assets/images/unsplash//unsplash02.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UnsplashSection;
