import React from 'react'
import "../Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"

const Swipe = () => {
  return (
    <div className='Carou'>
        <h2 className='h2-style'>Projects in Progress</h2>
        
        <Carousel showThumbs={false} showIndicators={false} updateOnItemClick={false}
        transitionTime={2000}	 className='main-slide'>
                <div className='img2'>
                    <img src={img1}   />
                </div>
                <div className='img2'>
                    <img src={img2}  />
                </div>
                <div className='img2'>
                    <img src={img3} />
                </div>
            </Carousel>
      
    </div>
  )
}

export default Swipe
