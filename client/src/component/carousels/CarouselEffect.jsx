import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { img } from "./img/data";
import "./Carousel.css";
import ReactDOM from "react-dom";

const CarouselEffect = () => {
  return (
    <div className='back'>
        <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false} centerMode  >

            {
                img?.map((imageItemLink) => {
                  
                    return <img className='img' src={imageItemLink} alt='carousel image' />;
                })
            }

        </Carousel>

        

    </div>
  )
  
ReactDOM.render(<CarouselEffect />, document.querySelector('.demo-carousel'));
}

export default CarouselEffect;