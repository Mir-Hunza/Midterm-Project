import React from "react";
import './info.css'
import { Input } from "@mui/material";
import { AppBar, Toolbar, Typography, Button } from '@mui/material';


function Info() {
    return(
<div className="info">
    <h2>Leave Your Contact Info</h2>
    <div>
        <label htmlFor=""></label>

        <Input 
        
        type="text" 
        Name="fullName" 
        />

<label htmlFor="">Your Full Name</label>

<Input 

type="text" 
Name="fullName" 
/>

<label htmlFor="">Your Email</label>

<Input 

type="text" 
Name="Email" 
/>

<label htmlFor="">Subject</label>

<Input 

type="text" 
Name="Subject" 
/>

<label htmlFor="">Message</label>

<textarea 
name="message"
rows={5}
cols={30}
/>

{/* <Input 

type="text" 
Name="message" 
/> */}


    </div>
    <div className="btn">
    <Button color="inherit" >Submit</Button>
    </div>

</div>

    );
  }
  
  export default Info;