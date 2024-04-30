import React from "react";

import { Divider, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Header from "../../../Global/Header";

import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import FmdGoodTwoToneIcon from "@mui/icons-material/FmdGoodTwoTone";
import { Link } from "react-router-dom";

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

export default function ContactInfo() {
  return (
    <div>
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        transition={{
          duration: 0.5,
        }}
        viewport={{
          once: true,
        }}
      >
        <Header header="Get a Free Consultation!" />
      </motion.div>
      <Divider />
      <Typography
        sx={{
          py: 1,
        }}
      >
        Get a surveyor for a small deposit that will be taken away if we work on
        your home or business!
      </Typography>

      <Typography
        sx={{
          pt: 3,
        }}
      >
        Please fill out the Form and we will contact you regarding your new
        Luminous Tomorrow.
      </Typography>

      <Typography
        sx={{
          pt: 3,
          fontWeight: "bold",
        }}
      >
        Our teams exterpise:
      </Typography>
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        transition={{
          duration: 0.5,
        }}
        viewport={{
          once: true,
        }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <CheckCircleTwoToneIcon
          sx={{
            width: 30,
            height: 50,
          }}
        />
        <Typography>
          Understand what the options are & which is the best option for you.
        </Typography>
      </motion.div>

      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        viewport={{
          once: true,
        }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <CheckCircleTwoToneIcon
          sx={{
            width: 30,
            height: 50,
          }}
        />
        <Typography>
          Brighten up your future with a Quote from our experts.
        </Typography>
      </motion.div>

      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        transition={{
          duration: 0.5,
          delay: 0.75,
        }}
        viewport={{
          once: true,
        }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <CheckCircleTwoToneIcon
          sx={{
            width: 30,
            height: 50,
          }}
        />
        <Typography>
          Identify how our flexible payment scheme can help you.
        </Typography>
      </motion.div>

      <Paper
      elevation={6}
        sx={{
          p: 2,
          bgcolor: "primary.second",
        }}
      >
        <Typography
          sx={{
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          Address:{" "}
        </Typography>
        <div
          style={{
            fontSize: "small",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography>Street Name</Typography>
          <Typography>Town Name</Typography>
          <Typography>City Name</Typography>
          <Typography>Post Code</Typography>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "right",
            gap: "10px",
          }}
        >
          <FmdGoodTwoToneIcon
            sx={{
              width: 20,
              height: 20,
            }}
          />
          <Link
            to={'https://www.google.com/maps/place/Mountain+View,+CA,+USA/@37.4215986,-122.4339274,9.73z/data=!4m6!3m5!1s0x808fb7495bec0189:0x7c17d44a466baf9b!8m2!3d37.3860517!4d-122.0838511!16zL20vMHI2YzQ?entry=ttu'}
            target="blank"
            style={{
              color: "#333"
            }}
          >
            <Typography>Find us on Google maps</Typography>
          </Link>
        </div>
      </Paper>
    </div>
  );
}
