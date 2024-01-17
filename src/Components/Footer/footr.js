// Footer.js
import React from "react";
import {Container, Typography, Link, Paper} from "@mui/material";
import "./footr.css";

const Footer = () => {
  return (
    <Paper elevation={3} sx={{p: 3, mt: 4}}>
      <Container maxWidth='md'>
        <Typography variant='body2' color='textSecondary' align='center'>
          © {new Date().getFullYear()} Your Website Name. All rights reserved.
        </Typography>
        <Typography variant='body2' color='textSecondary' align='center'>
          Designed and developed by{" "}
          <Link color='inherit' href='https://www.example.com'>
            Your Name
          </Link>
        </Typography>
      </Container>
    </Paper>
  );
};

export default Footer;
