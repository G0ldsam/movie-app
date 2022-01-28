import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { requestMovie } from '../../api/themoviedb';
import defaultImage from "../../images/default.PNG";
import './Movie.css'

const Movie = () => {

  const [movie, setMovie] = useState(null);
  const [path, setPath] = useState(defaultImage);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getMovie = async () => {
      const results = await requestMovie(`${id}`);
      setMovie(results);
      if (results.data.backdrop_path) {
        setPath(`https://image.tmdb.org/t/p/w1280` + results.data.backdrop_path);
      }
    };
    getMovie();
  }, [])

  return (
    <div>
      {movie &&
        <div className='ui grid'>
          <div className='ui container centered'>
            <div className='imgContainer box'>
              <img src={path} className='ui fluid image rounded' />
            </div>
            <div className='data box '>
              <div className='rate'>
                {movie.data.vote_average}
              </div>
              <div className='details'>
                <div >
                  <div className='title'>{movie.data.title} </div><br />
                  <div className='date'>{movie.data.release_date}</div>

                </div>

                <div className='descr'>
                  {movie.data.overview}
                </div>
                <div className='genres'>
                  {movie.data.genres.map((genre) =>
                    <div className='ui violet button'
                      key={genre.id}>
                      {genre.name}
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>}
      <button className='ui teal button goBack' onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}
export default Movie;


