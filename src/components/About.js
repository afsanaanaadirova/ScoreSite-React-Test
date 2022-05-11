import React from 'react'
import img3 from '../assests/images/3.webp';
import Footer from './Footer';
import AboutItem from './AboutItem';
import styled from 'styled-components';
import Team from './Team';
import Carousel from "./Carousel"
import AboutHeader from './AboutHeader';

function About() {
  return (
      <div >
        {/* <Carousel/> */}
        <AboutHeader/>
         <Team/>
         <AboutItem/>
         <div className='AboutItemSecond'>
         <AboutItem/>
         </div>
         <Footer/>
    </div>
  )
}

export default About