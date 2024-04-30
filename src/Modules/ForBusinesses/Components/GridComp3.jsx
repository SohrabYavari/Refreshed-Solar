import { Grid, SvgIcon, Typography } from "@mui/material";
import React from "react";
import { BUSINESSREASONS } from "./BusinessReasons";
import { motion } from "framer-motion";

const fadeInAnimationVariants2 = {
  initial: {
    scale: 0,
    opacity: 0,
    y: 100,
  },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
  },
};

export default function GridComp3() {
  return (
    <React.Fragment>
      <Grid
        container
        sx={{
          justifyContent: "center",
        }}
      >
        {BUSINESSREASONS.map((businessReason, index) => (
          <Grid
            md={4}
            xs={12}
            key={index}
            sx={{
              textAlign: "center",
              bgcolor: "primary.second",
              m: 1.5,
              p: 1.5,
              boxShadow: "0px 5px 10px -2px #333",
              borderRadius: "5px",
            }}
          >
            <SvgIcon
            sx={{
                width: 75,
                height: 75,
            }}
            component={businessReason.businessReasonIcon}
            />
            <motion.div
              variants={fadeInAnimationVariants2}
              initial="initial"
              whileInView="animate"
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
            >
              <Typography variant="h5" sx={{ p: 2, fontWeight: "bold" }}>
                {businessReason.businessReasonHeader}
              </Typography>
              <Typography sx={{ p: 1.5 }}>
                {businessReason.businessReasonText}
              </Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
