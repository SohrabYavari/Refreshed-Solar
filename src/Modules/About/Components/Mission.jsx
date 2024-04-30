import React from "react";
import "./styles/About.css";

// Components
import { Divider, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Header from "../../../Global/Header";
import ImgCardComp from "./../../Home/Components/ImgCardComp";

// Images & Icons
import cardImg from "./assets/Solar-Mission2.jpg";
import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
import LocalFireDepartmentTwoToneIcon from "@mui/icons-material/LocalFireDepartmentTwoTone";
import Co2TwoToneIcon from "@mui/icons-material/Co2TwoTone";
import CottageTwoToneIcon from "@mui/icons-material/CottageTwoTone";

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

export default function Miission() {
  return (
    <React.Fragment>
      <div className="about">
        <div className="missionList">
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
            <Header header="Our Mission" />
          </motion.div>

          <Divider />
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
            <Paper
              elevation={9}
              sx={{
                bgcolor: "#F2EDE7",
                p: 1.5,
                my: 1,
                display: "flex",
                gap: "20px",
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              <EmojiObjectsTwoToneIcon
                sx={{
                  width: 50,
                  height: 50,
                }}
              />
              <Typography>
                <strong>1.</strong> Empower individuals and businesses with
                sustainable energy solutions.
              </Typography>
            </Paper>
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{
              delay: 0.75,
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
          >
            <Paper
              elevation={9}
              sx={{
                bgcolor: "#F2EDE7",
                p: 1.5,
                my: 1,
                display: "flex",
                gap: "20px",
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              <LocalFireDepartmentTwoToneIcon
                sx={{
                  width: 50,
                  height: 50,
                }}
              />
              <Typography>
                <strong>2.</strong> Drive innovation in the renewable energy
                sector to mitigate climate change.
              </Typography>
            </Paper>
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{
              delay: 1,
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
          >
            <Paper
              elevation={9}
              sx={{
                bgcolor: "#F2EDE7",
                p: 1.5,
                my: 1,
                display: "flex",
                gap: "20px",
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              <Co2TwoToneIcon
                sx={{
                  width: 50,
                  height: 50,
                }}
              />
              <Typography>
                <strong>3.</strong> Foster environmental stewardship and reduce
                carbon emissions.
              </Typography>
            </Paper>
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{
              delay: 1,
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
          >
            <Paper
              elevation={9}
              sx={{
                bgcolor: "#F2EDE7",
                p: 1.5,
                my: 1,
                display: "flex",
                gap: "20px",
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              <CottageTwoToneIcon
                sx={{
                  width: 50,
                  height: 50,
                }}
              />
              <Typography>
                <strong>4.</strong> Enable communities to embrace clean,
                renewable energy for a brighter future.
              </Typography>
            </Paper>
          </motion.div>
        </div>
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
          <ImgCardComp cardImage={cardImg} />
        </motion.div>
      </div>
    </React.Fragment>
  );
}
