import React from "react";

import { CardMedia, Paper, Typography } from "@mui/material";
import { REVIEWERS } from "./Reviewers.js";
import "./styles/Home.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const fadeInAnimationVariants2 = {
  initial: {
    scale: 0.5,
    opacity: 0,
    x: 100,
  },
  animate: {
    scale: 1,
    opacity: 1,
    x: 0,
  },
};

export default function Reviews() {
  let settings = {
    className: "slider",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    className: "slider",
  };

  return (
    <>
      <section className="testimonialSection">
        <Slider {...settings}>
          {REVIEWERS.map((review, index) => (
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: {
                  xs: "auto",
                  sm: "auto",
                  md: "auto",
                  lg: "auto",
                  xl: "auto",
                },
                display: "flex",
                bgcolor: "secondary.main",
                color: "text.light",
              }}
              key={index}
              >
              <div
              className="review"
              >

              <div>
                <CardMedia
                  sx={{
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                  }}
                  image={review.reviewersImage}
                  />
              </div>
                <div className="testimonialInfo">
                  <Typography
                    sx={{
                      py: 1,
                      textAlign: "center",
                      fontSize: {
                        xs: "15px",
                      },
                    }}
                    >
                    {review.reviewersStatement}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "right",
                      alignItems: "right",
                      fontWeight: "bold",
                    }}
                    >
                    {review.reviewersAuthor}
                  </Typography>
                </div>
          </div>
            </Paper>
          ))}
        </Slider>
      </section>
      </>
    );
}
