import React, { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import Header from "../Header/Header";
import "./HomePage.css"
import themoviedb, { requestSearch } from "../../api/themoviedb"
import { BrowserRouter as Router, Navigate, Route, Routes, Link, useParams } from "react-router-dom"
import Movie from "../Movie/Movie";

const HomePage = () => {

  const [searchResults, setSearchResults] = useState([]);
  const onSearchSubmit = async (term) => {
    setSearchResults([]);
    const results = await requestSearch(term, 1);
    setSearchResults(results);
    console.log(results);
  }
  // useEffect(() => {
  //   console.log(searchResults);

  // }, [searchResults])

  return (
    <Router>

      <div className="container">
        <Header onSubmit={onSearchSubmit} />
        <Routes>
          <Route exact path="/" element={<MovieList list={searchResults} />} />
          <Route exact path="/movie/:id" element={<Movie />} />
        </Routes>
      </div>
    </Router>
  );
}
{/* <Navigate replace to="/" /> */ }
export default HomePage;

