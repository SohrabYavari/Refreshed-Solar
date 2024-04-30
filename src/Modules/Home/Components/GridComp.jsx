import * as React from "react";
import "./styles/Home.css";
import { Grid, Paper, Typography, CardMedia } from "@mui/material";


export default function GridComp(props) {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={5}
            sx={{
              height: {
                xs: "auto",
                sm: "auto",
                md: "500px",
                lg: "450px",
                xl: "450px",
              },
              bgcolor: "#F2EDE7",
              p: 1,
            }}
          >
            <div className="cardContent">
              <CardMedia
                sx={{
                  width: "90%",
                  height: 200,
                  borderRadius: "5px",
                  bgcolor: "#333",
                  objectFit: "conver",
                }}
                image={props.reasonCardImage1}
              />
              <Typography
                variant="h5"
                sx={{
                  p: 1,
                  fontWeight: "bold",
                }}
              >
                {props.reason1Header}
              </Typography>
              <Typography
                sx={{
                  p: 1,
                  my: 1,
                }}
              >
                {props.reason1Text}
              </Typography>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            elevation={5}
            sx={{
              height: {
                xs: "auto",
                sm: "auto",
                md: "500px",
                lg: "450px",
                xl: "450px",
              },
              bgcolor: "#F2EDE7",
              p: 1,
            }}
          >
            <div className="cardContent">
              <CardMedia
                sx={{
                  width: "90%",
                  height: 200,
                  borderRadius: "5px",
                  bgcolor: "#333",
                  objectFit: "conver",
                }}
                image={props.reasonCardImage2}
              />
              <Typography
                variant="h5"
                sx={{
                  p: 1,
                  fontWeight: "bold",
                }}
              >
                {props.reason2Header}
              </Typography>
              <Typography
                sx={{
                  p: 1,
                  my: 1,
                }}
              >
                {props.reason2Text}
              </Typography>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            elevation={24}
            sx={{
              height: {
                xs: "auto",
                sm: "auto",
                md: "500px",
                lg: "450px",
                xl: "450px",
              },
              bgcolor: "#F2EDE7",
              p: 1,
            }}
          >
            <div className="cardContent">
              <CardMedia
                sx={{
                  width: "90%",
                  height: 200,
                  borderRadius: "5px",
                  bgcolor: "#333",
                  objectFit: "conver",
                }}
                image={props.reasonCardImage3}
              />
              <Typography
                variant="h5"
                sx={{
                  p: 1,
                  fontWeight: "bold",
                }}
              >
                {props.reason3Header}
              </Typography>
              <Typography
                sx={{
                  p: 1,
                  my: 1,
                }}
              >
                {props.reason3Text}
              </Typography>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} md={12}>
          <Paper
            elevation={5}
            sx={{
              height: {
                lg: "350px",
              },
              bgcolor: "#F2EDE7",
              p: 1,
            }}
          >
            <div className="cardContent">
              <CardMedia
                sx={{
                  width: "90%",
                  height: 200,
                  borderRadius: "5px",
                  bgcolor: "#333",
                  objectFit: "conver",
                }}
                image={props.reasonCardImage4}
              />
              <Typography
                variant="h5"
                sx={{
                  p: 1,
                  fontWeight: "bold",
                }}
              >
                {props.reason4Header}
              </Typography>
              <Typography
                sx={{
                  p: 1,
                  my: 1,
                }}
              >
                {props.reason4Text}
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
