import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import companyLogo from "../assets/companyLogo.png";
// import(AppBar, Toolbar);

export default function Navbar() {
  return (
    <div>
      <AppBar position="static" variant="" sx={{ bgcolor: "white" }}>
        <Toolbar>
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
