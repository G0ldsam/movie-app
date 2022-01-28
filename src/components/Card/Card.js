import "./Card.css"
import React, { useState, useContext, useEffect } from "react";
import defaultImage from "../../images/default.PNG";
import { motion } from "framer-motion";
import { MovieContext } from './../../Contexts/MovieContext';
import { NavLink } from "react-router-dom";
import { listVariant, fadeInVariant, pulseVariant } from "./../../styleVariants/variants"


const Card = ({ id, image, date, title, description, index, length, rate }) => {
  const path = image ? `https://image.tmdb.org/t/p/w500` + image : defaultImage;
  const [FadeIn, setFadeIn] = useState(false);


  const { count, setCount, setPulse, Pulse } = useContext(MovieContext);

  const animationEnd = () => {
    setFadeIn(true);
    console.log(id);
    setCount(prev => prev + 1);
  }

  useEffect(() => {
    if (count === length) {
      setPulse(true);
      setCount(0);
    }
  }, [count])


  return (

    <motion.div
      whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
    >
      <motion.div
        className="flex-container"
        variants={listVariant}
        animate="visible"
        initial="hidden"
        custom={index}
        onAnimationComplete={() => animationEnd()}
      >
        <motion.div
          className="image"
          variants={fadeInVariant}
          initial="hidden"
          animate={FadeIn ? "fadeIn" : "hidden"}
        >
          <img src={path} alt="Movie Poster" className="imageFit" />
        </motion.div>
        <div className="content">
          <p><NavLink exact to={`/movie/${id}`} className="header  details-header words">{title}</NavLink><span className="rating">{rate}</span></p>
          <div className="details">
            <motion.div
              variants={pulseVariant}
              animate={Pulse ? "pulse" : "still"}
              onAnimationComplete={() => setPulse(false)}
            >Release Date: {date}</motion.div>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Card









