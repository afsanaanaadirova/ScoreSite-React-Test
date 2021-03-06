import React from 'react'
import img3 from '../assests/images/3.webp';
import styled from 'styled-components';

function AboutHeader() {
  return (
     <AboutHeaderMain>
    <AboutHeaderInfo className='container'>
         <Title>ABout Us</Title>
         <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ad maxime velit nostrum praesentium voluptatem. Mollitia perferendis dolore dolores.</Text>
    </AboutHeaderInfo>
    </AboutHeaderMain>
  )
}
const AboutHeaderMain =styled.div`
background-image:url( ${img3});
min-height: 600px;
height: calc(100vh - 174px);
background-repeat: no-repeat;
background-size: cover;
`;
const AboutHeaderInfo = styled.div`
  padding: 12em 4em;
`;
const Title = styled.h3`
width: fit-content;
font-weight: 900;
color: #fff;
line-height: 1.5;
background:#000;
padding:20px;
`;
const Text = styled.p`
  width: 34%;
  text-align: left;
  font-size: 1.5em;
  color: #fff;
`;
export default AboutHeader