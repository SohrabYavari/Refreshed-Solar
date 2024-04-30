import React from "react";

// Components
import { Container, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

// Images & Icons
import { FaSolarPanel } from "react-icons/fa6";
import { GrDocumentPerformance } from "react-icons/gr";
import { IoMdBusiness } from "react-icons/io";
import { FaPercent } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

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

export default function BusinessGovIncentives() {
  return (
    <React.Fragment>
      <Container>
        <div className="reasonsCards">
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{
              delay: 1,
              duration: 0.5,
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
              <div>
                <FaSolarPanel 
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <Typography>
                <strong>Solar Investment Grants:</strong> Some government programs offer grants to businesses that invest in solar energy systems. These grants provide direct financial assistance to help cover the costs of solar installation and can be especially beneficial for small businesses or startups.
              </Typography>
            </Paper>
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{
              delay: 1,
              duration: 0.75,
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
              <div>
                <GrDocumentPerformance
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <Typography>
                <strong>Performance-Based Incentives:</strong> Certain states offer performance-based incentives for businesses that generate renewable energy, including solar. These incentives provide payments based on the amount of electricity produced by the solar system over time, incentivizing businesses to maximize their renewable energy generation.
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
              <div>
                <IoMdBusiness
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <Typography>
                <strong>Property-Assessed Clean Energy (PACE) Financing:</strong>PACE financing programs allow businesses to finance renewable energy projects, including solar installations, through special assessments on their property taxes. This financing mechanism can provide businesses with access to low-cost, long-term financing for their solar projects.
              </Typography>
            </Paper>
          </motion.div>

          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{
              delay: 1,
              duration: 1.25,
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
              <div>
                <FaPercent
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <Typography>
                <strong>Low-Interest Loans or Financing Programs:</strong> Some government agencies offer low-interest loans or financing programs specifically for businesses investing in renewable energy projects, such as solar installations. These programs can help businesses access affordable financing for their solar projects.
              </Typography>
            </Paper>
          </motion.div>

          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{
              delay: 1,
              duration: 1.5,
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
              <div>
                <GrCertificate
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <Typography>
                <strong>Green Building Certification Programs:</strong> Businesses that achieve green building certifications, such as LEED (Leadership in Energy and Environmental Design), may qualify for additional incentives or benefits, including tax credits, grants, or expedited permitting for solar installations.
              </Typography>
            </Paper>
          </motion.div>
        </div>
      </Container>
    </React.Fragment>
  );
}
