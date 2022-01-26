import "./Card.css"
import React, { useState } from "react";
import defaultImage from "../../images/default.PNG";
import { motion } from "framer-motion";

const Card = ({ key, image, date, title, description, index, length }) => {
  const path = image ? `https://image.tmdb.org/t/p/w500` + image : defaultImage;
  // const path =`https://image.tmdb.org/t/p/w500`+image;
  const [FadeIn, setFadeIn] = useState(false);
  const [Pulse, setPulse] = useState(false);
  const [Count, setCount] = useState(0);

  var count = 0;
  const animationEnd = (index) => {
    setFadeIn(true)
    count = count + 1;
    if (count == length) {
      console.log("here");
      setPulse(true)
      console.log(Pulse)
    }
    else {
      console.log(count)
      setPulse(false)
    }
  }

  const pulseVariant = {
    pulse: (timer) => ({
      scale: [1, 1.05, 1.05, 1, 1, 1],
      transition: {
        duration: 1,
        delay: timer * (length * 0.2)
      },
      fontWeight: 'bold'

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
      className="flex-container"
      key={key}
      variants={listVariant}
      animate="visible"
      initial="hidden"
      custom={index}
      onAnimationComplete={() => animationEnd(index)}
      whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
    // , borderColor: "#fdfdfd", borderWidth: 3
    >
      <motion.div
        className="image"
        variants={fadeInVariant}
        initial="hidden"
        animate={FadeIn ? "fadeIn" : "hidden"}
      // onAnimationComplete={() => setFadeIn(false)}
      >
        <img src={path} className="imageFit" />
      </motion.div>
      <div className="content">
        <p><a className="header  details-header words">{title}</a></p>
        <div className="date details">
          <motion.div
            className="date"
            variants={pulseVariant}
            animate={Pulse ? "pulse" : "still"}
          >Release Date: {date}</motion.div>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Card









        // <div className="ui card" style={{maxWidth:'100%' , minHeight:'100%'}}>
        //     <div className="content" style={{padding: 0}}>
        //         <div className="ui items">
        //             <div className="ui card">
        //                 <div className="ui large image">
        //                     <img src="https://picsum.photos/300/300"/>
        //                 </div>
        //                 <div className="content" style={{padding:20}}>
        //                     <a className="header">12 Years a Slave</a>
        //                     <div className="date">
        //                         <span className="date">2020-01-05</span>
        //                     </div>
        //                     <div className="description">
        //                         <p>jsdfksfdbajkadasddsfajskdnasxasasxa</p>
        //                     </div>
        //                     <div className="extra">
        //                         <div className="ui label">Action</div>

        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </div>