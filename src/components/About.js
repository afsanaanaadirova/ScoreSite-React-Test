import React from 'react'
import img3 from '../assests/images/3.webp';
import Header from './Header';
import styled from 'styled-components';

function About() {
  return (
      <div>
       <Header/>
         <AboutHeader>
         <AboutHeaderInfo >
              <Title>ABout Us</Title>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Ad maxime velit nostrum praesentium voluptatem. Mollitia perferendis dolore dolores.</Text>
         </AboutHeaderInfo>
         </AboutHeader>
    </div>
  )
}
const AboutHeader =styled.div`
background-image:url( ${img3});
min-height: 600px;
height: calc(100vh - 174px);
background-repeat: no-repeat;
background-size: cover;
`;
const AboutHeaderInfo = styled.div`
  padding: 4em;
`;
const Title = styled.h3`
font-weight: 900;
color: #fff;
line-height: 1.5;
background:#000;
padding:20px;
`;
const Text = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
`;
export default About