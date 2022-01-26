import React from "react";
import Card from '../Card/Card'
import { motion } from "framer-motion";

const MovieList = ({ list }) => {

  // let count = 0;
  // const countCard = (count) => {
  //   return count = count + 1;
  // }
  return (

    <div
      className="ui container centered special cards"

    >
      {list.map((listItem, i) => <Card key={listItem.id}
        image={listItem.backdrop_path}
        date={listItem.release_date}
        title={listItem.title}
        description={listItem.overview}
        index={i}
        length={list.length}
        // updateCount={countCard}
        // count={count}

      />)}

    </div>
  );
}
export default MovieList;