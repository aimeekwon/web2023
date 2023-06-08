
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Member from "./components/pages/Member";
import Port from "./components/pages/Port";
import Youtube from "./components/pages/Youtube";
import Unsplash from "./components/pages/Unsplash";
import Movie from "./components/pages/Movie";

function App() {
  return (

    <div>

      <BrowserRouter>
        <Header attr={"header__wrap nanum7 bg-blue"} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/member" element={<Member />}></Route>
          <Route path="/port" element={<Port />}></Route>
          <Route path="/youtube" element={<Youtube />}></Route>
          <Route path="/unsplash" element={<Unsplash />}></Route>
          <Route path="/movie" element={<Movie />}></Route>
        </Routes>
        <Footer attr={"footer__wrap nanum7 bg-blue"} />
      </BrowserRouter>
    </div>
  )
}

export default App
