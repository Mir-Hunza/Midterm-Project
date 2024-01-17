import React from "react";
import "./info.css";
import {Input} from "@mui/material";
import {AppBar, Toolbar, Typography, Button} from "@mui/material";

function Info() {
  return (
    <div className='container my-5'>
      <div className='col-12 mx-auto col-lg-6 bg-white shadow p-4 my-5'>
       
          <h2>Leave Your Contact Info</h2>
          <div className="contact_container ">
            <label htmlFor=''>Your Full Name</label>

            <Input type='text' Name='fullName' />
            <label htmlFor=''>Your Email</label>

            <Input type='text' Name='fullName' />
            <label htmlFor=''>Subject</label>

            <Input type='text' Name='Email' />
            <label htmlFor=''>Message</label>


            <textarea name='message' className="w-100 bg-white border mt-3 p-2" rows={5} cols={20} />
           
          </div>
          <div className='btn'>
            <Button color='inherit'>Submit</Button>
          </div>
        </div>
     
    </div>
  );
}

export default Info;
