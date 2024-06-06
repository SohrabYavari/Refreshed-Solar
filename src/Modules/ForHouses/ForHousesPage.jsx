import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import Hero from "../../Global/Hero";
import Header from "../../Global/Header";
import GridComp2 from "./Components/GridComp2";
import { Divider, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import HomeCaseStudies from "./Components/HomeCaseStudies";
import HomeGovIncentives from "./Components/HomeGovIncentives";

// Images
import forHomesLanding from "./Components/assets/ForHomes.jpg";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function ForHousesPage() {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      scrollToTop();
    }, 10);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <React.Fragment>
      <Hero
        heroTitle="Home Owner Benefits"
        heroMessage="The benefits of switching to solar power as a home owner."
        heroImg={forHomesLanding}
      />
        <GridComp2 />
      <Divider sx={{ my: 2 }} />
      <motion.div 
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        viewport={{
          once: true,
        }}
        style={{
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Header header="Case Studies" />
      </motion.div>
      <Divider sx={{ my: 2 }} />
        <HomeCaseStudies />
      <Divider sx={{ my: 2 }} />
      <motion.div 
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        viewport={{
          once: true,
        }}
        style={{
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Header header="Government Incentives" />
      </motion.div>
      <Divider sx={{ my: 2 }} />
        <HomeGovIncentives />
      <Divider sx={{ my: 2 }} />
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            paddingBottom: "20px",
          }}
        >
          <Typography>
            Discover how we can assist you in reducing your energy bills and
            achieving a more sustainable future!
          </Typography>
          <Button
            color="secondary"
            sx={{
              px: 4,
              bgcolor: "secondary.second",
              "&:hover": {
                bgcolor: "secondary.main",
              },
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
              onClick={scrollToTop}
              to="/Refreshed-Solar/Contact"
            >
              Contact Us
            </Link>
          </Button>
        </div>
    </React.Fragment>
  );
}
