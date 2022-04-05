import React from 'react';
import Slider from "react-slick";
import img1 from '../assests/images/1.webp';
import img2 from '../assests/images/2.webp';
import img3 from '../assests/images/3.webp';
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";


const imgStyle ={
    width: '100%',
}
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
function CarouselCom() {
  return (
  <div>
  <Slider {...settings}>
    <div>
      <img src={img2}  style={imgStyle}></img>
      <div class="slider-title">
      <h1 class="bg-text-line">Russia's World Cup Championship</h1>
       <a href="#" class="btn btn-primary btn-sm rounded-0 py-3 px-5">Read More</a>
       </div>
    </div>
    <div>
    <img src={img3}  style={imgStyle}></img>
    <div class="slider-title">
      <h1 class="bg-text-line">Russia's World Cup Championship</h1>
       <a href="#" class="btn btn-primary btn-sm rounded-0 py-3 px-5">Read More</a>
       </div>
    </div>
    <div>
    <img src={img1}  style={imgStyle}></img>
    <div class="slider-title">
      <h1 class="bg-text-line">Russia's World Cup Championship</h1>
       <a href="#" class="btn btn-primary btn-sm rounded-0 py-3 px-5">Read More</a>
       </div>
    </div>
  </Slider>
</div>
  )
}

export default CarouselCom