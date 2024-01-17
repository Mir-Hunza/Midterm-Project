import React from "react";
import "./index.css";
import rating from "../picture/rating.png";
import profilea from "../picture/clientpic.jpg";
import profileb from "../picture/clientpic2.jpeg";
import profilec from "../picture/clientpic3.jpg";

function Recommend() {
  return (
    <div className='container my-5'>
      <div className='main-heading mx-auto '>
        <h2 className='sevices1'>Recommendations</h2>
        <p className='service-p text-center'>
          Their professionalism, expertise, and commitment to excellence are
          truly commendable.
        </p>
      </div>

      <div className='row gap-3 gap-lg-0 '>
        <div className='col-lg-4 col-12'>
          <div className='card p-3 h-100'>
            <img src={rating} alt='' />
            <h3>Great Quality</h3>
            <p>
              "I'm truly impressed by the exceptional quality of your work. The
              attention to detail, precision, and overall craftsmanship is
              outstanding.
            </p>
            <div>
              <img src={profilea} alt='' />
              <div>
                <p>Ninna Prety</p>
                <p>Grafic Designer</p>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-4 col-12'>
          <div className='card  p-3'>
            <img src={rating} alt='' />
            <h3>Amazing Work!</h3>
            <p>
              "The word 'amazing' barely does justice to describe the sheer
              brilliance and awe-inspiring nature of [insert subject]. From its
              captivating beauty to its unparalleled functionality, every aspect
              exudes a sense of wonder.
            </p>
            <div>
              <img src={profileb} alt='' />
              <div>
                <p>Jem Clerk</p>
                <p>Software Engineer</p>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-4 col-12'>
          <div className='card  p-3'>
            <img src={rating} alt='' />
            <h3>Super Job</h3>
            <p>
              super job! Your dedication, expertise, and attention to detail
              shine through in every aspect of your work. It's clear that you
              not only meet expectations but exceed them with a level of
              excellence that truly stands out.{" "}
            </p>
            <div>
              <img src={profilec} alt='' />
              <div>
                <p>Prety</p>
                <p>UI/Ux Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommend;
