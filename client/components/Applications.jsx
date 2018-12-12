import React from 'react';
import styled from 'styled-components';

const Applications = (props) => {
  return (
    <Slideshow className="slideshow-container">
      <FecContainer>
        <Slide className="imageSlide" src="https://s3-us-west-2.amazonaws.com/peter-park-portfolio-img/FEC-ss.png">
        </Slide>
        <FecHoverContainer>
          <FecText>
              With a team of engineers, we built out a KickerStarter project page with React as our Front-end Library.  
          </FecText>
        </FecHoverContainer>
      </FecContainer>
      <SdcContainer>
        <Slide className="imageSlide" src="https://s3-us-west-2.amazonaws.com/peter-park-portfolio-img/1800+test.png">
        </Slide>
        <SdcHoverContainer>
          <SdcText>
            rewq
          </SdcText>
        </SdcHoverContainer>
      </SdcContainer>
      <Arrowsnext onClick={() => {props.onClick(1)}}>&#10095;</Arrowsnext>
      <Arrowsprev onClick={() => {props.onClick(-1)}}>&#10094;</Arrowsprev>
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

const FecContainer = styled.div `
position: relative;
display: inline-block;
overflow: hidden;
width: 100%;
height: auto;
`;

const SdcContainer = styled.div `
position: relative;
display: inline-block;
overflow: hidden;
width: 100%;
height: auto;
`;

const FecHoverContainer = styled.div `
opacity: 0;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.6);
color: #fff;
padding: 15px;
-moz-transition: all 0.4s ease-in-out 0s;
-webkit-transition: all 0.4s ease-in-out 0s;
-ms-transition: all 0.4s ease-in-out 0s;
transition: all 0.4s ease-in-out 0s;
&:hover {
  opacity: 1;
}
`;

const SdcHoverContainer = styled.div `
opacity: 0;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.6);
color: #fff;
padding: 15px;
-moz-transition: all 0.4s ease-in-out 0s;
-webkit-transition: all 0.4s ease-in-out 0s;
-ms-transition: all 0.4s ease-in-out 0s;
transition: all 0.4s ease-in-out 0s;
&:hover {
  opacity: 1;
}
`;

const FecText = styled.div `
text-align: left;
font-size: 18px;
display: inline-block;
position: absolute;
top: 50%;
left: 50%;
-moz-transform: translate(-50%, -50%);
-webkit-transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
`;

const SdcText = styled.div `
text-align: center;
font-size: 18px;
display: inline-block;
position: absolute;
top: 50%;
left: 50%;
-moz-transform: translate(-50%, -50%);
-webkit-transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
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
  left: 0;
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