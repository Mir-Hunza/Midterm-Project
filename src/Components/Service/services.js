import React from "react";
import './services.css'
import code from "../picture/coding.png"
import ui from "../picture/ux.png"
import sound from "../picture/microphone.png"
import game from "../picture/game-development.png"
import photo from "../picture/photographer.png"
import program from "../picture/programing.png"

function Services() {
    return (
       <div className="services">
        <div className="main-heading">
       <h2 className="sevices1">My Services</h2>
       <p className="service-p">We provide ongoing maintenance and support services to keep your website secure, up-to-date, and performing at its best. </p>
       </div>
       <div className="icons-container">
         <div className="icon">
            <img src={code}alt=""/>
            <h2>Web Development</h2>
            <p>Blog , E-commerce</p>

         </div>

         <div className="icon">
            <img src={ui}alt=""/>
            <h2>UI/UX Design</h2>
            <p>Blog , E-commerce</p>

         </div>

         <div className="icon">
            <img src={sound}alt=""/>
            <h2>Sound Design</h2>
            <p>Voice over, Recording</p>

         </div>

         <div className="icon">
            <img src={game}alt=""/>
            <h2>Game Development</h2>
            <p>Coding, Development & Design </p>

         </div>

         <div className="icon">
            <img src={photo}alt=""/>
            <h2>Photograpy</h2>
            <p>Product Photograpy</p>

         </div>

         <div className="icon">
            <img src={program}alt=""/>
            <h2>Programing</h2>
            <p>Coding, Problem Solving</p>

         </div>




       </div>
       </div>     
    );
  }
  
  export default Services;
  