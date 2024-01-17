import React from "react";
import "./services.css";
import code from "../picture/coding.png";
import ui from "../picture/ux.png";
import sound from "../picture/microphone.png";
import game from "../picture/game-development.png";
import photo from "../picture/photographer.png";
import program from "../picture/programing.png";

function Services() {
  return (
    <div className='container my-5 '>
      <div className='main-heading mx-auto '>
        <h2 className='sevices1'>My Services</h2>
        <p className='service-p text-center'>
          We provide ongoing maintenance and support services to keep your
          website secure, up-to-date, and performing at its best.
        </p>
      </div>
      <div className='row gap-3 gap-lg-0'>
        <div className='col-lg-4 col-12 my-lg-3'>
          <div className='icon bg-white shadow py-5'>
            <img src={code} alt='' className='img-fluid' />
            <h2>Web Development</h2>
            <p>Blog , E-commerce</p>
          </div>
        </div>
        <div className='col-lg-4 col-12 my-lg-3'>
          <div className='icon shadow py-5'>
            <img src={ui} alt='' className='img-fluid' />
            <h2>UI/UX Design</h2>
            <p>Blog , E-commerce</p>
          </div>
        </div>
        <div className='col-lg-4 col-12 my-lg-3'>
          <div className='icon shadow py-5'>
            <img src={sound} alt='' className='img-fluid' />
            <h2>Sound Design</h2>
            <p>Voice over, Recording</p>
          </div>
        </div>
        <div className='col-lg-4 col-12 my-lg-3'>
          <div className='icon shadow py-5'>
            <img src={sound} alt='' className='img-fluid' />
            <h2>Sound Design</h2>
            <p>Voice over, Recording</p>
          </div>
        </div>{" "}
        <div className='col-lg-4 col-12 my-lg-3'>
          <div className='icon shadow py-5'>
            <img src={sound} alt='' className='img-fluid' />
            <h2>Sound Design</h2>
            <p>Voice over, Recording</p>
          </div>
        </div>{" "}
        <div className='col-lg-4 col-12 my-lg-3'>
          <div className='icon shadow py-5'>
            <img src={sound} alt='' className='img-fluid' />
            <h2>Sound Design</h2>
            <p>Voice over, Recording</p>
          </div>
        </div>
        {/* <div className='icon'>
          <img src={game} alt='' />
          <h2>Game Development</h2>
          <p>Coding, Development & Design </p>
        </div>

        <div className='icon'>
          <img src={photo} alt='' />
          <h2>Photograpy</h2>
          <p>Product Photograpy</p>
        </div>

        <div className='icon'>
          <img src={program} alt='' />
          <h2>Programing</h2>
          <p>Coding, Problem Solving</p>
        </div> */}
      </div>
    </div>
  );
}

export default Services;
