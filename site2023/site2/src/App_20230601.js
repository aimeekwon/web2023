import React from "react";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Main from "./components/layout/Main.jsx";

import SliderSection from "./components/section/SliderSection.jsx";
import IntroSection from "./components/section/IntroSection.jsx";
import MemberSection from "./components/section/MemberSection.jsx";
import PortSection from "./components/section/PortSection.jsx";
import YoutubeSection from "./components/section/YoutubeSection.jsx";
import UnsplashSection from "./components/section/UnsplashSection.jsx";
import MoviesSection from "./components/section/MoviesSection.jsx";

function App() {
    return (
        <>
            <Header attr={"header__wrap nanum5 bg-blue"} />
            <Main>
                <SliderSection attr={"slider__wrap section"} />
                <IntroSection attr={"intro__wrap section bg_blue"} />
                <MemberSection attr={"member__wrap section center"} />
                <PortSection attr={"port__wrap container"} />
                <YoutubeSection attr={"youtube__wrap section"} />
                <UnsplashSection attr={"unsplash__wrap section"} />
                <MoviesSection attr={"movies__wrap section"} />
            </Main>
            <Footer attr={"footer__wrap section bg-blue"} />
        </>
    );
}

export default App;
