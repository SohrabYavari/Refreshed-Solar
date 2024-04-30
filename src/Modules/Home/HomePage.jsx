import * as React from "react";
import { useRef } from "react";
import './Components/styles/Home.css'

// Components
import Hero from "./../../Global/Hero";
import ImgCardComp from "./Components/ImgCardComp";
import { Container, Typography, Divider, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Reviews from "./Components/Reviews";
import Header from "../../Global/Header";
import GridComp from "./Components/GridComp";
import ContactForm from "../Contact/Components/ContactForm";

// Images & Icons 
import landingImage from "./Components/assets/Hero.jpg";
import ReasonsImage from "./Components/assets/Reasons.jpg";
import reasonCardImage1 from "./Components/assets/ServicesImage.jpg";
import reasonCardImage2 from "./Components/assets/SolarKits.jpg";
import reasonCardImage3 from "./Components/assets/SolarInstalation.jpg";
import reasonCardImage4 from "./Components/assets/SolarPanel.jpg";
import StarsIcon from "@mui/icons-material/Stars";
import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone";
import RecyclingTwoToneIcon from "@mui/icons-material/RecyclingTwoTone";
import EnergySavingsLeafTwoToneIcon from "@mui/icons-material/EnergySavingsLeafTwoTone";
import Miission from "../About/Components/Mission";

const fadeInAnimationVariants = {
  initial: {
    Scale: 0,
    opacity: 0,
    y: 100,
  },
  animate: {
    Scale: 1,
    opacity: 1,
    y: 0,
  },
};

// Grid Layout Texts:
const reason1Header = "Comprehensive Services:",
  reason1Text =
    "Our experienced team ensures a hassle-free experience, whether upgrading or installing new systems. Trust us for expert solutions to meet your solar needs.";

const reason2Header = "Expertise and Quality Assurance:",
  reason2Text =
    "Our expert technicians undergo rigorous training and testing to ensure refurbished solar panels meet high performance and reliability standards.";

const reason3Header = "Cost-Effectiveness:",
  reason3Text =
    "Refreshed Solar offers a cost-effective alternative to purchasing new solar panels. Our refurbished panels provide the same efficiency and reliability at a fraction of the cost, making solar energy accessible and affordable for all.";

const reason4Header = "Sustainability & Environmental Impact:",
  reason4Text =
    "Refreshed Solar's panel refurbishment minimizes waste, conserves resources, and reduces emissions. By extending panel lifespans, we promote sustainability and contribute to a greener future.";

export default function HomePage() {

  return (
    <React.Fragment>
      <Container>
        <Hero
          heroImg={landingImage}
          heroTitle="Refreshed Solar"
          heroMessage="Refreshed Solar leads with top-tier panels for a brighter, greener future. With expertise driving change, we're your trusted ally in renewable energy. Join us in powering tomorrow with the sun."
        />

        <div className="homeReasons">
          <div className="reasonsCards">
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
              <Header header="Why Solar?" />
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
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <RecyclingTwoToneIcon
                  sx={{
                    width: 50,
                    height: 50,
                  }}
                />
                <Typography>
                  <strong>Renewable & Sustainable:</strong> Solar power is
                  infinite and eco-friendly, reducing reliance on finite fossil
                  fuels and lowering carbon footprints.
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
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MonetizationOnTwoToneIcon
                  sx={{
                    width: 50,
                    height: 50,
                  }}
                />
                <Typography>
                  <strong>Cost Savings:</strong> Despite initial investment,
                  solar panels offer long-term savings through reduced energy
                  bills and government incentives.
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
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <EnergySavingsLeafTwoToneIcon
                  sx={{
                    width: 50,
                    height: 50,
                  }}
                />
                <Typography>
                  <strong>Energy Independence:</strong> Solar provides security
                  and independence by generating electricity on-site, ensuring
                  reliability during grid outages and emergencies.
                </Typography>
              </Paper>
            </motion.div>
          </div>
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
              <ImgCardComp cardImage={ReasonsImage} />
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
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "50px",
            textAlign: "center",
          }}
        >
          <Header header="Why Refreshed Solar?" />
        </motion.div>
        <Divider sx={{ my: 3 }} />

        <GridComp
          reasonCardImage1={reasonCardImage1}
          reasonCardImage2={reasonCardImage2}
          reasonCardImage3={reasonCardImage3}
          reasonCardImage4={reasonCardImage4}
          reason1Header={reason1Header}
          reason1Text={reason1Text}
          reason2Header={reason2Header}
          reason2Text={reason2Text}
          reason3Header={reason3Header}
          reason3Text={reason3Text}
          reason4Header={reason4Header}
          reason4Text={reason4Text}
        />
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
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Header header="Reviews" />
          <StarsIcon
            sx={{
              width: 50,
              height: 50,
            }}
          />
        </motion.div>
        <Divider sx={{ my: 3 }} />
        <Reviews />
        <Divider sx={{ my: 3 }} />
        <Miission  />
        <Divider sx={{ my: 3 }} />
        <div className="homeContactSection">
          <div className="HCS1">
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
            <Header header="The Next Steps" />
            </motion.div>
            <Divider sx={{ my: 3 }} />

            <Typography>Fill out the contact form to get in contact with our expert team.</Typography>
              
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
              <Paper elevation={3} sx={{ my: 2, bgcolor: "primary.light" }}>
                <Typography sx={{ p: 4, py: 6 }}> 
                Switching to solar energy offers numerous benefits. It's renewable, reducing carbon footprints and ensuring a cleaner environment. Cost savings are significant, with the ability to generate electricity independently. Solar panels provide reliability during outages, contributing to a more sustainable, resilient future.
                </Typography>
              </Paper>
            </motion.div>
            <Typography sx={{ fontWeight: "bold" }}>
              We hope you have a refreshing future with us!
            </Typography>
          </div>
          <div className="HCS1" >
            <ContactForm />
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
