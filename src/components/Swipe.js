import React from 'react'
import "../Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"

const Swipe = () => {
  return (
    <div className='Carousel'>
        <h2 className='h2-style'>Projects in Progress</h2>
        
        <Carousel width="90%" showThumbs={false} className='main-slide'>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
            </Carousel>
      
    </div>
  )
}

export default Swipe
