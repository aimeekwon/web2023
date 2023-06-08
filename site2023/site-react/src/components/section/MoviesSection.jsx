import React from "react";

const movieItem = [
    {
        mvImg: "./assets/images/movie/movie01.jpg",
        title: "관련영화제목",
    },
    {
        mvImg: "./assets/images/movie/movie02.jpg",
        title: "관련영화제목",
    },
    {
        mvImg: "./assets/images/movie/movie01.jpg",
        title: "관련영화제목",
    },
    {
        mvImg: "./assets/images/movie/movie02.jpg",
        title: "관련영화제목",
    },
    {
        mvImg: "./assets/images/movie/movie01.jpg",
        title: "관련영화제목",
    },
    {
        mvImg: "./assets/images/movie/movie02.jpg",
        title: "관련영화제목",
    },
    {
        mvImg: "./assets/images/movie/movie01.jpg",
        title: "관련영화제목",
    },
]
function MovieItem({mvImg, title }){
    return (
    <>
        <div className="movies__img">
            <img src={mvImg} alt={title} />
        </div>
    </>
)
}

const movieTitle = {
    title: "영화",
    desc: "더 다양한 이미지는 ",
    more: "자세히",
}
function MoviesSection(props) {
    return (
        <section id="moviesSection" className={props.attr}>
            <div className="movies__inner container">
                <div className="movies__text">
                    <h3>{movieTitle.title}</h3>
                    <p>{movieTitle.desc}</p>
                    <a href="#">{movieTitle.more}</a>
                </div>
                <div className="movies__item">
                    {movieItem.map((text, index)=>(
                        <MovieItem
                            key={index}
                            mvImg={text.mvImg}
                            title={text.title}
                            
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MoviesSection;
