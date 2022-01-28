import React, { useState } from "react";
import MovieList from "../MovieList/MovieList";
import Header from "../Header/Header";
import "./HomePage.css"
import { requestSearch } from "../../api/themoviedb"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Movie from "../Movie/Movie";
import Trending from "../Trending/Trending";

const HomePage = () => {

  const [searchResults, setSearchResults] = useState([]);
  const onSearchSubmit = async (term) => {
    setSearchResults([]);
    const results = await requestSearch(term, 1);
    setSearchResults(results);
    console.log(results);
  }

  return (
    <Router>

      <div className="container">
        <Header onSubmit={onSearchSubmit} />
        <Routes>
          <Route exact path="/" element={<MovieList list={searchResults} />} />
          <Route exact path="/movie/:id" element={<Movie />} />
          <Route exact path="/popular" element={<Trending />} />
        </Routes>
      </div>
    </Router>
  );
}
export default HomePage;

