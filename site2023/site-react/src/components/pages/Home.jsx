import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Main from "../layout/Main";

import SliderSection from "../section/SliderSection";
import IntroSection from "../section/IntroSection";
import MemberSection from "../section/MemberSection";
import PortSection from "../section/PortSection";
import YoutubeSection from "../section/YoutubeSection";
import UnsplashSection from "../section/UnsplashSection";
import MoviesSection from "../section/MoviesSection";

function Home() {
    return (
        <>

            <Main>
                <SliderSection attr={"slider__wrap section"} />
                <IntroSection attr={"intro__wrap section bg_blue"} />
                <MemberSection attr={"member__wrap section center"} />
                <PortSection attr={"port__wrap container"} />
                <YoutubeSection attr={"youtube__wrap section"} />
                <UnsplashSection attr={"unsplash__wrap section"} />
                <MoviesSection attr={"movies__wrap section"} />

            </Main>

        </>
    );
}

export default Home;




