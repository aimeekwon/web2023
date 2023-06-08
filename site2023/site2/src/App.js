import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main.jsx";
import Member from "./components/pages/Member.jsx";
import Port from "./components/pages/Port.jsx";
import Youtube from "./components/pages/Youtube.jsx";
import Unsplash from "./components/pages/Unsplash.jsx";
import Movie from "./components/pages/Movie.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/member" element={<Member />}></Route>
                <Route path="/port" element={<Port />}></Route>
                <Route path="/youtube" element={<Youtube />}></Route>
                <Route path="/unsplash" element={<Unsplash />}></Route>
                <Route path="/movie" element={<Movie />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
