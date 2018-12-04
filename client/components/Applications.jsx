import React from 'react';
import styled from 'styled-components';

const Applications = (props) => {
  return (
    <Slideshow className="slideshow-container">
      <div width="500px">
        {props.number}
      </div>
      <Arrowsprev onClick={() => {props.onClick('prev')}} width="200px">&#10094;</Arrowsprev>
      <Arrowsnext onClick={() => {props.onClick('next')}} width="200px">&#10095;</Arrowsnext>
    </Slideshow>
    
  );
}

const Slideshow = styled.div `
  max-width: 1000px;
  position: relative;
  margin: auto;
`;

const Arrowsprev = styled.a `
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: red;
  font-weight: bold;
  font-size: 20px;
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
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: red;
  font-weight: bold;
  font-size: 20px;
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