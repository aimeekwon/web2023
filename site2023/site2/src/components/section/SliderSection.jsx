import React from "react";

function SliderSection(props) {
    return (
        <section id="sliderSection" className={props.attr}>
            <div className="slider__inner">
                <h2 className="blind">배너 슬라이더</h2>
                <div className="slider__img">
                    <div className="silder s1 container">
                        <div className="text">
                            <h3>
                                New <br />
                                /portfolio
                            </h3>
                            <p>
                                DESIRE
                                <br />
                                /IMAGINE/
                            </p>
                            <a href="/" className="more button-blue">
                                more
                            </a>
                        </div>
                        <div className="img" aria-label="hidden">
                            <img
                                src="./assets/images/slider/slider_icon01.png"
                                alt="이미지"
                            />
                            <img
                                src="./assets/images/slider/slider_icon02.png"
                                alt="이미지"
                            />
                            <img
                                src="./assets/images/slider/slider_icon03.png"
                                alt="이미지"
                            />
                        </div>
                        <div className="circle" aria-label="hidden">
                            <span className="circle c1"></span>
                            <span className="circle c2"></span>
                            <span className="circle c3"></span>
                            <span className="circle c4"></span>
                            <span className="circle c5"></span>
                        </div>
                    </div>
                </div>
                <div className="slider__btn">
                    <a href="/" className="left">
                        <span className="ir">이전이미지</span>
                    </a>
                    <a href="/" className="right">
                        <span className="ir">다음이미지</span>
                    </a>
                </div>
                <div className="slider__dot">
                    <a href="/" className="dot active">
                        <span className="ir">1번 이미지</span>
                    </a>
                    <a href="/" className="dot">
                        <span className="ir">2번 이미지</span>
                    </a>
                    <a href="/" className="dot">
                        <span className="ir">3번 이미지</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default SliderSection;
