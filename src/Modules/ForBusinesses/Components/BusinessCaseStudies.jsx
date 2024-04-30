import React from "react";
import "./../../ForHouses/Components/styles/ForHouses.css";

import { CardMedia, Divider, Paper, Typography } from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BUSINESSCASESTUDIES } from "./CaseStudiesBusiness";

export default function BusinessCaseStudies() {

  let settings = {
    className: "slider",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <>
      <Slider {...settings}>
        {BUSINESSCASESTUDIES.map((businessCS, index) => (
          <Paper
          elevation={0}
          sx={{
              height: {
                xs: "auto",
                sm: "auto",
                md: "auto",
                lg: "auto",
                xl: "auto",
              },
              bgcolor: "primary.second",
              display: "flex",
            }}
            key={index}
            className="CScontainer"
          >
            <div className="caseStudy">
              <div className="caseStudyInfo">
                <Typography
                  variant="h5"
                  sx={{
                    py: 1,
                    fontWeight: "bold",
                  }}
                >
                  {businessCS.BSheader}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography sx={{ py: 2.5, px: 3 }}>{businessCS.BStext}</Typography>
                <Paper
                  sx={{
                    p: 1,
                    mx: "auto",
                    textAlign: "center",
                    width: 200,
                    bgcolor: "secondary.light",
                    borderRadius: 50,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#79DF90",
                    }}
                  >
                    + £{businessCS.businessAmount} saved
                  </Typography>
                </Paper>
              </div>
                <CardMedia
                  sx={{
                    bgcolor: "#333",
                    width: 300,
                    height: 300,
                    borderRadius: "5px",
                  }}
                  image={businessCS.BSimage}
                />
            </div>
          </Paper>
        ))}
      </Slider>
    </>
  );
}
