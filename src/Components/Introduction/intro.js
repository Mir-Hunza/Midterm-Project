import React from "react";
import "./intro.css";
import Picture from '../picture/Wifinity-portfolio.jpg'


function Introduction() {
    return (
    <div class="Intro">
<div class="intro-content">
     <h2>Hello I'm</h2>
     <div>
<h2>Front-end </h2> <h2>Engineer</h2>
</div>
<p>I'm a web Engineer and extensive exprience for 1 year expertise to create a web design, Frontend and Backend...</p>
<button>Hire me</button>
</div>

<div class="pic-image">
    <img src={Picture}></img>


</div>



    </div>
      
    );
  }
  
  export default Introduction;
  