import React from 'react'
import img2 from '../assests/images/2.webp';

function NewsItem() {
  return (
    <div className='News-Item'>
              <img src={img2}/>
              <div className='News-Item--text'>
              <h3>RealMad vs Striker Who Will Win?</h3>
              <span>BY COLORLIB • SEP 25, 2018</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat beatae doloremque, ex corrupti perspiciatis.</p>
              </div>
    </div>
  )
}

export default NewsItem