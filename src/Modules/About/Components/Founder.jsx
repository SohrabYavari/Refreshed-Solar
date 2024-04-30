import React from "react";
import { motion } from "framer-motion";
import {
  CardContent,
  CardMedia,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import foundersImage from "./assets/Founder.jpg";
import Header from "../../../Global/Header";

export default function Founder() {
  return (
    <React.Fragment>
      <Paper
        className="founder"
        elevation={6}
        sx={{
          bgcolor: "primary.second",
        }}
      >
        <CardMedia
          sx={{
            maxWidth: 400,
            width: "100%",
            height: 500,
            objectPosition: "center",
          }}
          image={foundersImage}
        />
        <CardContent
          sx={{
            textAlign: "center",
            width: "100%",
          }}
        >
          <Header header="John Doe" />
          <Divider />
          <Typography
            sx={{
              py: 1,
              paddingTop: 4,
            }}
          >
            John Doe, founder of Refreshed Solar, started in construction,
            witnessing the wastage of usable solar panels due to minor defects.
          </Typography>

          <Typography
            sx={{
              py: 1,
            }}
          >
            Motivated by environmental concerns and a passion for positive
            change, John Doe saw an opportunity to repurpose neglected solar
            panels, driven by a belief in renewable energy's transformative
            potential.
          </Typography>

          <Typography
            sx={{
              py: 1,
            }}
          >
            From humble beginnings, John Doe refurbished discarded solar panels,
            providing affordable, sustainable energy solutions. Through
            determination, he built Refreshed Solar from the ground up, one
            panel at a time.
          </Typography>

          <Typography
            sx={{
              py: 1,
            }}
          >
            Refreshed Solar epitomizes John Doe's unwavering commitment to
            environmental stewardship and renewable energy innovation. His
            transition from construction worker to renewable energy pioneer
            demonstrates how individual vision can ignite a movement towards a
            greener future.
          </Typography>
        </CardContent>
      </Paper>
    </React.Fragment>
  );
}
