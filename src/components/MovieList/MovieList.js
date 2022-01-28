import React, { useState } from "react";
import Card from '../Card/Card'
import { motion } from "framer-motion";
import { MovieContext } from './../../Contexts/MovieContext'

const MovieList = ({ list }) => {

  const [Pulse, setPulse] = useState(false);
  const [count, setCount] = useState(0);
  return (

    <div
      className="ui container centered special cards"
    >
      <MovieContext.Provider value={{ count, setCount, setPulse, Pulse }}>
        {list.map((listItem, i) => <Card key={listItem.id}
          image={listItem.backdrop_path}
          date={listItem.release_date}
          title={listItem.title}
          description={listItem.overview}
          index={i}
          length={list.length}
          id={listItem.id}
        // count={count}
        // setCount={setCount}
        />)}
      </MovieContext.Provider>
    </div>
  );
}
export default MovieList;