import React from "react";

// Components
import { Container, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

// Images & Icons
import { TbReceiptTax } from "react-icons/tb";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdElectricMeter } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import { FaHouseCircleXmark } from "react-icons/fa6";
import { MdRealEstateAgent } from "react-icons/md";
import { TbPigMoney } from "react-icons/tb";

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

export default function HomeGovIncentives() {
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
                <TbReceiptTax
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <Typography>
                <strong>Federal Investment Tax Credit (ITC):</strong> The ITC
                allows homeowners to deduct a portion of their solar
                installation costs from their federal taxes. As of 2022, the ITC
                offers a tax credit of 26% of the total installation costs.
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
                <FaMoneyBillWave
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <Typography>
                <strong>State and Local Rebates:</strong> Many states and local
                governments offer cash rebates or incentives for installing
                solar panels. These incentives vary by location but can
                significantly reduce the upfront costs of going solar.
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
                <MdElectricMeter
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <Typography>
                <strong>Net Metering:</strong> Net metering programs allow
                homeowners to earn credits for the excess electricity generated
                by their solar panels and fed back into the grid. These credits
                can offset future electricity bills, effectively reducing energy
                costs.
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
                <SlEnergy
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <Typography>
                <strong>Solar Renewable Energy Certificates (SRECs):</strong> In
                some states, homeowners can earn SRECs for each megawatt-hour of
                electricity generated by their solar panels. These certificates
                can be sold to utilities or other entities to meet renewable
                energy requirements.
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
                <FaHouseCircleXmark
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <Typography>
                <strong>Property Tax Exemptions:</strong> Some states offer
                property tax exemptions for solar energy systems, reducing the
                overall tax burden for homeowners who install solar panels.
              </Typography>
            </Paper>
          </motion.div>

          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{
              delay: 1,
              duration: 1.75,
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
                <MdRealEstateAgent
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <Typography>
                <strong>Grant Programs:</strong> Certain states or local
                governments offer grant programs to incentivize the adoption of
                solar energy. These grants provide direct financial assistance
                to homeowners for solar installation costs.
              </Typography>
            </Paper>
          </motion.div>

          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{
              delay: 1,
              duration: 2,
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
                <TbPigMoney
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <Typography>
                <strong>Loan Programs:</strong> Some states offer low-interest
                loans or financing options specifically for solar energy
                projects, making it easier for homeowners to afford the upfront
                costs of installation.
              </Typography>
            </Paper>
          </motion.div>
        </div>
      </Container>
    </React.Fragment>
  );
}
