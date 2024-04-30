import { Button, Container, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import Hero from "../../Global/Hero";
import landingImage from "./Components/assets/SolarMission.jpg";
import Mission from "./Components/Mission";
import CompanyOverview from "./Components/CompanyOverview";
import Header from "../../Global/Header";
import Founder from "./Components/Founder";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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

export default function AboutPage() {
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
      <Container
        sx={{
          py: 10,
        }}
      >
        <Hero
          heroImg={landingImage}
          heroTitle="About Us"
          heroMessage="The reasons behind why we do what we do!"
        />

        <Mission />
        <Divider sx={{ my: 3 }} />
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="aboutHeader"
        >
          <Header header="Company Overview" />
        </motion.div>
        <Divider sx={{ my: 1 }} />
        <CompanyOverview />
        <Divider sx={{ my: 3 }} />
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="aboutHeader"
        >
          <Header header="Our Founder" />
        </motion.div>
        <Divider sx={{ my: 1, mb: 3 }} />
        <Founder />
        <Divider sx={{ my: 1, mt: 3 }} />
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
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
              to="/Contact"
            >
              Contact Us
            </Link>
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
}
