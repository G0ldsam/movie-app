import React, { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import Header from "../Header/Header";
import "./HomePage.css"
import themoviedb, { requestSearch } from "../../api/themoviedb"

const HomePage = () => {

    const[searchResults,setSearchResults] = useState([]);
    const onSearchSubmit = async(term)=>{
        const results =await requestSearch(term,1);
         setSearchResults(results);
    }
    useEffect(()=>{
        console.log(searchResults);
    },[searchResults])

    return (
        <div className="container">
            <Header onSubmit={onSearchSubmit} />
            <MovieList list={searchResults}/>
        </div>
    );
}

export default HomePage;

