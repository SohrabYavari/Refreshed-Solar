import React, { useRef } from "react";

import { motion } from "framer-motion";
import { Typography } from "@mui/material";

import "./styles/Hero.css";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 300,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function Hero(props) {

  // Animations (Using Framer-Motion)
  const ref = useRef(null);

  return (
    <React.Fragment>

      <div ref={ref} className="heroSection">
        <img src={props.heroImg} />
        <div className="heroDiv">
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{
              type: "spring",
              delay: 0.5,
              damping: 20,
              duration: 1,
            }}
            viewport={{
              once: "true",
            }}
            id="heroTitle"
          >
            <Typography
              sx={{
                color: "#fff",
                textShadow: "0px 3px 2px #333",
                fontSize: {
                  xs: 55,
                  sm: 60,
                  md: 75,
                  lg: 100,
                  xl: 150,
                },
              }}
              variant="h1"
            >
              {props.heroTitle}
            </Typography>
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{
              type: "spring",
              delay: 0.75,
              damping: 30,
              duration: 1.5,
            }}
            viewport={{
              once: "true",
            }}
          >
            <Typography
              sx={{
                textShadow: "0px 2px 2px #333",
                fontWeight: "bold",
                paddingRight: 2,
              }}
            >{props.heroMessage}</Typography>
          </motion.div>
        </div>
      </div>

    </React.Fragment>
  );
}
