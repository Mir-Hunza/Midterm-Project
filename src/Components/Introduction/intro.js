import React from "react";
import "./intro.css";
import Picture from "../picture/Wifinity-portfolio.jpg";

function Introduction() {
  return (
    <>
      <div className='container py-5 my-5'>
        <div className='row gap-5 gap-lg-0'>
          <div className='col-lg-6 col-12'>
            <div className='intro-content mx-auto'>
              <h2 className="text-start">Hello I'm</h2>
             
                <h2 className="text-start">Front-end Engineer </h2> 
              
              <p>
                I'm a web Engineer and extensive exprience for 1 year expertise
                to create a web design, Frontend and Backend...
              </p>
              <button>Hire me</button>
            </div>
          </div>
          <div className='col-lg-6 col-12 '>
            <div class='pic-image mx-auto '>
              <img src={Picture} className="rounded-pill mx-auto img-fluid" alt='img' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
