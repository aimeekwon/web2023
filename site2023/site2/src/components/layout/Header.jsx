function Header(props) {
    return (
        <header
            id="header"
            className={props.attr}
            role="heading"
            aria-level={1}
        >
            <div className="header__inner container">
                <h1 classNameName="header__logo">
                    <a href="/">
                        web<em>site</em>
                    </a>
                </h1>
                <nav className="header__nav" role="navigation">
                    <ul>
                        <li>
                            <a href="#introSection">소개</a>
                        </li>
                        <li>
                            <a href="#member">멤버</a>
                        </li>
                        <li>
                            <a href="#portSection">포트폴리오</a>
                        </li>
                        <li>
                            <a href="#youtubeSection">유튜브</a>
                        </li>
                        <li>
                            <a href="#unsplashSection">이미지</a>
                        </li>
                        <li>
                            <a href="#moviesSection">영화</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
