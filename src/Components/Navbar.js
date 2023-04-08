import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import companyLogo from "../assets/companyLogo.png";

export default function Navbar() {
  return (
    <div>
      <AppBar position="static" variant="" sx={{ bgcolor: "white" }}>
        <Toolbar className="padding-container">
          <Box
            component="img"
            sx={{
              height: 64,
              margin: "3px",
            }}
            alt="Your logo."
            src={companyLogo}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
