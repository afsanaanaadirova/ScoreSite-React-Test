import React from 'react'
import img3 from '../assests/images/3.webp';
import "../components/LastScore.css"

function LastScore() {
  return (
    <div className='lastscore container'>
     <div className='lastscore-left'>
        <img src={img3} alt="img"/>
        <div className='lastscore-left--text'>
          <h4>Sea Hawks</h4>
          <span>BRAZIL</span>
        </div>
       </div>
       <div className='lastscore-center'>
       <div className='lastscore-center--top'>
           <h4> PREMIER LEAGUE — ROUND 10</h4>
       </div>
       <div className='lastscore-center--center'>
           <span>3:2</span>
       </div>
       <div className='lastscore-center--bottom'>
           <h4>10 SEPTEMBER / 7:30 AM</h4>
       </div>
      </div>
       <div className='lastscore-right'>
        <div className='lastscore-left--text'>
          <h4>Sea Hawks</h4>
          <span>BRAZIL</span>
        </div>
        <img src={img3} alt="img"/>
      </div>
    </div>
  )
}

export default LastScore