import React from 'react'
import './Skills.css'
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assests/imgs/meter1.svg'
import meter2 from '../assests/imgs/meter2.svg'
import meter3 from '../assests/imgs/meter3.svg'
import Carousel from "react-multi-carousel";
export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
        <div className="container con-skill" id='skills'>
            <h1 className='h1skill'>Skills</h1>
            <p className='pskill'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
              Lorem Ipsum has been the industry's standard dummy text.</p>
            <Carousel responsive={responsive} infinite={true} >
              <div className="item">
               <img className='imgskill' src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
              <div className="item">
               <img className='imgskill' src={meter1} alt="Image" />
                  <h5>HTML</h5>
                </div>
              <div className="item">
               <img className='imgskill' src={meter1} alt="Image" />
                  <h5>CSS</h5>
                </div>
              <div className="item">
               <img className='imgskill' src={meter2} alt="Image" />
                  <h5>JS</h5>
                </div>
              <div className="item">
               <img className='imgskill' src={meter1} alt="Image" />
                  <h5>Bootstrab</h5>
                </div>
              <div className="item">
               <img className='imgskill' src={meter2} alt="Image" />
                  <h5>React</h5>
                </div>
              <div className="item">
               <img className='imgskill' src={meter3} alt="Image" />
                  <h5>Python Developer</h5>
                </div>
            </Carousel>
        </div>
    </>
  )
}
