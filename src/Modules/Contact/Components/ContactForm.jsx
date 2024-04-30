import {
  Divider,
  Paper,
  TextField,
  Typography,
  MenuItem,
  Select,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import React from "react";

export default function ContactForm() {
  const [option, setOption] = React.useState("");

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <React.Fragment>
      <Paper
        elevation={9}
        sx={{ p: 2, py: 4, bgcolor: "primary.second", textAlign: "center" }}
      >
        <form>
          <Paper
            elevation={0}
            sx={{
              bgcolor: "primary.second",
              color: "text.dark",
              display: "flex",
              flexDirection: "column",
              px: 1,
              gap: 1,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                display: "flex",
                bgcolor: "primary.second",
                color: "text.dark",
                gap: 1,
              }}
            >
              <TextField
                color="text"
                fullWidth
                id="filled-basic"
                label="First Name"
                variant="filled"
              />
              <TextField
                color="text"
                fullWidth
                id="filled-basic"
                label="Last Name"
                variant="filled"
              />
            </Paper>
            <TextField
              color="text"
              fullWidth
              id="filled-basic"
              label="Email"
              variant="filled"
            />
            <TextField
              color="text"
              fullWidth
              id="filled-basic"
              label="Number"
              type="number"
              variant="filled"
            />
          </Paper>

          <Typography
            sx={{
              p: 1,
              fontWeight: "bold",
            }}
          >
            How would you prefer we contact you?
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Select value={option} fullWidth color="text" onChange={handleChange}>
            <MenuItem value={10}>Email</MenuItem>
            <MenuItem value={20}>Phone</MenuItem>
          </Select>

          <Typography
            sx={{
              p: 1,
              fontWeight: "bold",
            }}
          >
            Are you a Home or Buisness Customer?
          </Typography>
          <Divider />

          <FormGroup
            sx={{
              p: 1,
            }}
          >
            <FormControlLabel
              control={<Checkbox color="secondary" defaultUnChecked />}
              label="House"
            />
            <FormControlLabel
              control={<Checkbox color="secondary" defaultUnChecked />}
              label="Business"
            />
          </FormGroup>

          <Button
            variant="outlined"
            sx={{
              color: "text.light",
              fontWeight: "bold",
              p: 1,
              px: 5,
              bgcolor: "secondary.light",
              "&:hover": {
                backgroundColor: "secondary.main",
              },
            }}
          >
            {" "}
            Send Enquiry
          </Button>
        </form>
      </Paper>
    </React.Fragment>
  );
}
