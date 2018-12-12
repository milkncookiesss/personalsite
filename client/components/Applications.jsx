import React from 'react';
import styled from 'styled-components';

const Applications = (props) => {
  return (
    <Slideshow className="slideshow-container">
      <HoverTextFEC>
        <Slide className="imageSlide" src="https://s3-us-west-2.amazonaws.com/peter-park-portfolio-img/FEC-ss.png">
        </Slide>
        {/* <TextLayer className="descriptionFEC"> */}
        <DisplayDescript className="descriptionFEC">test test test</DisplayDescript>
        {/* </TextLayer> */}
      </HoverTextFEC>
      <HoverTextSDC>
        <Slide className="imageSlide" src="https://s3-us-west-2.amazonaws.com/peter-park-portfolio-img/1800+test.png">
        </Slide>
        {/* <TextLayer className="descriptionSDC"> */}
        <DisplayDescript className="descriptionSDC">test one two test</DisplayDescript>
        {/* </TextLayer> */}
      </HoverTextSDC>
      <Arrowsprev onClick={() => {props.onClick(-1)}}>&#10094;</Arrowsprev>
      <Arrowsnext onClick={() => {props.onClick(1)}}>&#10095;</Arrowsnext>
    </Slideshow>
    
  );
}


const Slideshow = styled.div `
  max-width: 50%;
  position: relative;
  margin: auto;
`;

const Slide = styled.img `
  display: none;
  width: 100%;
`;

const HoverTextFEC = styled.div `
  &:hover .descriptionFEC {
    display: block;
    opacity: 100;
    background-color: rgba(0,0,0,0.2);
    -moz-transition: opacity .25s ease-in;
    -webkit-transition: opacity .25s ease-in;
    -o-transition: opacity .25s ease-in;
    transition: opacity .25s ease-in;
  }
  `;
  
  const HoverTextSDC = styled.div `
  &:hover .descriptionSDC {
    display: block;
    opacity: 100;
    background-color: rgba(0,0,0,0.2);
    -moz-transition: opacity .25s ease-in;
    -webkit-transition: opacity .25s ease-in;
    -o-transition: opacity .25s ease-in;
    transition: opacity .25s ease-in;
  }
  `;

  // const TextLayer = styled.div `
  // opacity: 0;
	// position: absolute;
	// top: 0;
	// left: 0;
	// right: 0;
	// bottom: 0;
	// width: 100%;
	// height: 100%;
	// background: rgba(0, 0, 0, 0.25);
	// color: #fff;
	// padding: 15px;
	// -moz-transition: all 0.4s ease-in-out 0s;
	// -webkit-transition: all 0.4s ease-in-out 0s;
	// -ms-transition: all 0.4s ease-in-out 0s;
	// transition: all 0.4s ease-in-out 0s;
  // `;

  const DisplayDescript = styled.div `
  opacity: 0;
  text-align: center;
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 15px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: red;
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



export default Applications;