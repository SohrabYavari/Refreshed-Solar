// Material UI Comps
import {
  AppBar,
  Button,
  Paper,
  Container,
  Toolbar,
  Popover,
  Typography,
  IconButton,
  SvgIcon,
} from "@mui/material";

// Images & Icons Import
import SolarPowerRoundedIcon from "@mui/icons-material/SolarPowerRounded";
import MenuIcon from "@mui/icons-material/Menu";

import * as React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { NAVBARLINKS } from "./Nav";

export default function Navbar() {
  // Menu Functions
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // Scrolling to top of page on click of Links
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
      <Container>
        <AppBar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "secondary.second",
            fontSize: "20px",
          }}
        >
          <Toolbar>
            <Link to="/RefreshedSolar">
              <Button
                sx={{
                  color: "text.light",
                  bgcolor: "secondary.second",
                  // position: "fixed",
                  // left: "10px",
                  // top: "7.5px",
                }}
              >
                <span
                  style={{
                    paddingRight: "10px",
                  }}
                >
                  <SolarPowerRoundedIcon 
                    sx={{
                      width: {
                        xs: "30px",
                        sm: "20px",
                        md: "20px",
                        lg: "25px",
                        xl: "35px",
                      },
                      height: {
                        xs: "30px",
                        sm: "20px",
                        md: "20px",
                        lg: "25px",
                        xl: "35px",
                      },
                    }}
                  />
                </span>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      xs: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "25px",
                      xl: "35px",
                    },
                  }}
                >
                  Refreshed Solar
                </Typography>
              </Button>
            </Link>
            <div>
              <IconButton
                variant="contained"
                onClick={handleClick}
                sx={{
                  p: 0,
                  m: 0,
                  color: "text.light",
                  width: {
                    xs: "30px",
                    sm: "30px",
                    md: "30px",
                    lg: "45px",
                    xl: "50px",
                  },
                  height: {
                    xs: "30px",
                    sm: "30px",
                    md: "30px",
                    lg: "45px",
                    xl: "50px",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
              <Popover
                id="simple-popover"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                sx={{
                  my: 2.5,
                }}
              >
                {NAVBARLINKS.map((nav, index) => (
                    <Paper
                      sx={{
                        display: "flex",
                        bgcolor: "secondary.second",
                        borderRadius: 0,
                      }}
                    >
                      <div>
                    <SvgIcon
                        sx={{
                          fill: "#fff",
                          mx: 1,
                          my: 1,
                        }}
                        component={nav.navIcon} 
                      />
                      </div>
                      <Typography sx={{ p: 1, bgcolor: "secondary.second", textAlign: "right",}}>
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "#fff",
                            fontWeight: "bold",
                            paddingTop: "10px",
                            marginTop: "50px",
                          }}
                          to={nav.navPathName}
                          key={index}
                          onClick={scrollToTop}
                        >
                          {nav.navName}
                        </Link>
                      </Typography>
                    </Paper> 
                ))}
              </Popover>
            </div>
          </Toolbar>
        </AppBar>
      </Container>
    </React.Fragment>
  );
}
