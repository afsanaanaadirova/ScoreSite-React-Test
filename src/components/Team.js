import React from 'react'
import CircleImg from '../assests/images/6.webp'
import "../components/Team.css"

function Team() {
  return (
    <div className='Teams container'>
        <h5>Team</h5>
        <div className='Team'>
            <div className='item'>
                <div className='item-circle'>
                    <img src={CircleImg}/>
                    <span>10</span>
                </div>
                <h6>GUZMAN</h6>
                <p>COACH</p>
            </div>
            <div className='item'>
                <div className='item-circle'>
                    <img src={CircleImg}/>
                    <span>10</span>
                </div>
                <h6>GUZMAN</h6>
                <p>COACH</p>
            </div>
        </div>
    </div>
  )
}

export default Team