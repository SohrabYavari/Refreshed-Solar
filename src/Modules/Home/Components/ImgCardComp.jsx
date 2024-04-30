import * as React from "react";
import {
  CardContent,
  Card,
  Box,
  CardMedia,
} from "@mui/material";

export default function ImgCardComp(props) {
  return (
    <Box 
      sx={{
        p: 0.5,
        m: 0.5,
      }}
    >
      <Card
        sx={{
          maxWidth: "auto",
          maxHeight: 500,
          width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: 500,
            xl: 600,
          },
          height: {
            xs: 350,
            sm: 500,
            md: 500,
            lg: 500,
            xl: 500,
          },
          py: 0,
        }}
      >
        <CardContent
          sx={{
            p: 0,
            m: 0,
          }}
          >
          <CardMedia
            sx={{
              p: 0,
              m: 0,
              height: 500,
              width: "auto",
              objectFit: "cover",
              objectPosition: "center",
            }}
            image={props.cardImage}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
