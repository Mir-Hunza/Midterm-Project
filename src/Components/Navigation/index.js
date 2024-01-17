// Navbar.js
import React from "react";
import {AppBar, Toolbar, Typography, Button} from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position='static'>
      <div className='container  py-2'>
        <nav class='navbar navbar-expand-lg  '>
          <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
            My Portfolio
          </Typography>
          <button
            class='navbar-toggler '
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
            >
            <span class='navbar-toggler-icon'></span>
          </button>

          <div class='collapse navbar-collapse justify-content-end ms-auto' id='navbarNav'>
            <Button color='inherit'>Home</Button>
            <Button color='inherit'>About</Button>
            <Button color='inherit'>Services</Button>
            <Button color='inherit'>Contact</Button>
          </div>
        </nav>
      </div>
    </AppBar>
  );
};

export default Navbar;
