import * as React from "react";
import { Typography } from "@mui/material";

export default function Header(props) {
  return (
    <React.Fragment>
      <Typography
        className="header"
        sx={{
          fontWeight: "bold",
          fontSize: {
            xs: 40,
            sm: 40,
            md: 45,
            lg: 50,
            xl: 60,
          },
        }}
        variant="h2"
      >
        {props.header}
      </Typography>
    </React.Fragment>
  );
}
