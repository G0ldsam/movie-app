import React, { useState, useEffect } from "react";
import { requestTrending } from "../../api/themoviedb";
import Card from '../Card/Card'
import { MovieContext } from './../../Contexts/MovieContext'

const Trending = () => {

  const [Pulse, setPulse] = useState(false);
  const [count, setCount] = useState(0);
  const [list, setList] = useState(null);

  useEffect(() => {
    const getTrending = async () => {
      const results = await requestTrending();
      setList(results);

    };
    getTrending();
  }, [])

  return (

    <div className="ui container centered special cards">
      <MovieContext.Provider value={{ count, setCount, setPulse, Pulse }}>

        {list && (list.map((listItem, i) => <Card key={listItem.id}
          image={listItem.backdrop_path}
          date={listItem.release_date}
          title={listItem.title}
          description={listItem.overview}
          index={i}
          length={list.length}
          id={listItem.id}
          rate={listItem.vote_average}
        />))}
      </MovieContext.Provider>

    </div>
  );
}
export default Trending;