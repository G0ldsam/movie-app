import "./Card.css"
import React, { useState, useContext, useEffect } from "react";
import defaultImage from "../../images/default.PNG";
import { motion } from "framer-motion";
import { MovieContext } from './../../Contexts/MovieContext';
import { NavLink } from "react-router-dom";


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

  const pulseVariant = {
    pulse: () => ({
      scale: [1, 1.08, 1.05, 1, 1.08, 1],
      color: ["#ffffff", "#fff8bb", "#fff06a", "#ffffff"],
      transition: {
        duration: 1.2
      }
    }),
    still: {
      scale: 1
    }
  }

  const listVariant = {
    hidden: {
      x: 10000,
      opacity: 0

    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: 1
      }
    })
  }

  const fadeInVariant = {
    hidden: {
      opacity: 0
    },
    fadeIn: {
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  }
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









