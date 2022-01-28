import React, { useState } from "react";
import "./Header.css"
import { useNavigate } from "react-router-dom";
import logo from "../../images/movie-logo.png"

const Header = ({ onSubmit }) => {
    let navigate = useNavigate();
    const [term, setTerm] = useState('');

    const searchMovies = (searchValue) => {
        setTerm(searchValue)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
        navigate("/")
    }

    return (
        <div className=" menuColor ">
            <div className="logotext">
                <img className="header item logo" src={logo} />
            </div>
            <div className="dimension ">
                <div className="ui transparent inverted input">
                    <form onSubmit={onFormSubmit} >
                        <i className="search icon"></i>
                        <input
                            type="text"
                            placeholder="Search Movie"
                            onChange={(e) => searchMovies(e.target.value)}
                            className="searchBar"
                        />
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Header