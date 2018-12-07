import React from 'react';
import styled from 'styled-components';

const Applications = (props) => {
  return (
    <Slideshow className="slideshow-container">
        <Slide className="imageSlide" src="https://s3-us-west-2.amazonaws.com/peter-park-portfolio-img/FEC-ss.png">
        </Slide>
        <Slide className="imageSlide" src="https://s3-us-west-2.amazonaws.com/peter-park-portfolio-img/1800+test.png">
        </Slide>
      <Arrowsprev onClick={() => {props.onClick(-1)}}>&#10094;</Arrowsprev>
      <Arrowsnext onClick={() => {props.onClick(1)}}>&#10095;</Arrowsnext>
    </Slideshow>
    
  );
}

/*
  >each slide will be display:none
  >depending on slideindex at app, img's display: none will change to display: block
*/

const Slideshow = styled.div `
  max-width: 1000px;
  position: relative;
  margin: auto;
`;

const Slide = styled.img `
  display: none;
  width: 100%;
`;

const Arrowsprev = styled.a `
  cursor: pointer;
  position: absolute;
  top: 75%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: #3BA7C4;
  font-weight: bold;
  font-size: 50px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  &:hover {
    background-color: rgba(0,0,0,0.4);
  }
`;
const Arrowsnext = styled.a `
  cursor: pointer;
  position: absolute;
  top: 75%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: #3BA7C4;
  font-weight: bold;
  font-size: 50px;
  transition: 0.6s ease;
  right: 0;
  border-radius: 3px 0 0 3px;
  user-select: none;
  &:hover {
    background-color: rgba(0,0,0,0.4);
  }
`;

/*
  //change a tags to styled.a
  //make them buttons with hover over background color
  //replace {props.number} with images
*/

export default Applications;