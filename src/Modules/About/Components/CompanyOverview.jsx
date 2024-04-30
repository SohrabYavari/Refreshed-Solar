import React from "react";
import { Paper, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";

import './styles/About.css'

// Images & Icons
import CompanyOverview1 from "./assets/CompanyOverview1.jpg";
import CompanyOverview2 from "./assets/CompanyOverview2.jpg";
import CompanyOverview3 from "./assets/CompanyOverview3.jpg";
import WarehouseTwoToneIcon from "@mui/icons-material/WarehouseTwoTone";
import AddHomeWorkTwoToneIcon from "@mui/icons-material/AddHomeWorkTwoTone";
import Diversity3TwoToneIcon from "@mui/icons-material/Diversity3TwoTone";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function CompanyOverview() {
  return (
    <React.Fragment>
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
      >
        <Card
          sx={{
              my: 5,
              bgcolor: "primary.second",
            }}
            >
          <CardContent
            className="card"
            sx={{
              display: "flex",
              gap: 3,
              alignItems: "center",
            }}
          >
            <CardMedia
              sx={{
                maxWidth: 400,
                width: "90%",
                height: 200,
              }}
              image={CompanyOverview1}
            />
            <Paper
              className="card"
              sx={{
                maxWidth: "90%",
                width: "90%",
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "primary.light",
              }}
              elevation={3}
            >
              <WarehouseTwoToneIcon
                sx={{
                  m: 2,
                  width: 50,
                  height: 50,
                }}
              />
              <Typography
                sx={{
                  p: 2,
                  textAlign: "center",
                }}
              >
                Refreshed Solar is a leading provider of renewable energy
                solutions, specializing in the refurbishment and distribution of
                high-quality solar panels. Founded in 2000, our company has been
                at the forefront of the renewable energy industry, driving
                positive change towards a cleaner, more sustainable future.
              </Typography>
            </Paper>
          </CardContent>
        </Card>
      </motion.div>

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
      >
        <Card
          sx={{
              my: 5,
              bgcolor: "primary.second",
            }}
            >
          <CardContent
            className="card"
            sx={{
              display: "flex",
              gap: 3,
              alignItems: "center",
            }}
          >
            <CardMedia
              sx={{
                maxWidth: 400,
                width: "90%",
                height: 200,
              }}
              image={CompanyOverview2}
            />
            <Paper
              className="card"
              sx={{
                maxWidth: "90%",
                width: "90%",
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "primary.light",
              }}
              elevation={3}
            >
              <AddHomeWorkTwoToneIcon
                sx={{
                  m: 2,
                  width: 50,
                  height: 50,
                }}
              />
              <Typography
                sx={{
                  p: 2,
                  textAlign: "center",
                }}
              >
                At Refreshed Solar, we believe in the power of solar energy to
                transform the way we generate and consume electricity. With a
                commitment to excellence and innovation, we offer a
                comprehensive range of products and services designed to meet
                the diverse needs of residential, commercial, and industrial
                customers.
              </Typography>
            </Paper>
          </CardContent>
        </Card>
      </motion.div>

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
      >
        <Card
          sx={{
              my: 5,
              bgcolor: "primary.second",
            }}
            >
          <CardContent
            className="card"
            sx={{
              display: "flex",
              gap: 3,
              alignItems: "center",
            }}
          >
            <CardMedia
              sx={{
                maxWidth: 400,
                width: "90%",
                height: 200,
              }}
              image={CompanyOverview3}
            />
            <Paper
              className="card"
              sx={{
                maxWidth: "90%",
                width: "90%",
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "primary.light",
              }}
              elevation={3}
            >
              <Diversity3TwoToneIcon
                sx={{
                  m: 2,
                  width: 50,
                  height: 50,
                }}
              />
              <Typography
                sx={{
                  p: 2,
                  textAlign: "center",
                }}
              >
                Our team of experts brings years of experience and expertise to
                every project, ensuring the highest standards of quality,
                reliability, and performance. From solar panel refurbishment and
                installation to battery backup solutions and energy efficiency
                audits, we are dedicated to providing tailored solutions that
                deliver maximum value and environmental impact.
              </Typography>
            </Paper>
          </CardContent>
        </Card>
      </motion.div>
    </React.Fragment>
  );
}
