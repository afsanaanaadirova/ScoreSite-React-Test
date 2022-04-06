import React from 'react'
import img4 from '../assests/images/4.webp';
import styled from 'styled-components';

function AboutItem() {
  return (
    <div className='AboutItem container'>
        <div className='col-6'>
        <img src={img4}/>
        </div>
        <div className='col-6'>
        <div>
            <h4>About Sportz</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis inventore eius, doloremque fugiat id laudantium. Delectus quisquam voluptates deleniti incidunt, iusto magni mollitia rerum! Ex perspiciatis incidunt, laborum repellat illo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo maxime eligendi sunt autem consequuntur minima, quidem iure, nisi laboriosam, nam nostrum saepe voluptatibus repellat quam reiciendis. Accusantium omnis facilis eligendi.</p>
        </div>
        </div>
       
    </div>
  )
}


export default AboutItem