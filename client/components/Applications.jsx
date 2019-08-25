import React from 'react';
import styled from 'styled-components';

const Applications = (props) => {
  return (
    <ul>
      <ImgContainer>
        <Slide src="https://s3-us-west-2.amazonaws.com/peter-park-portfolio-img/FEC-ss.png" />
          <TextContainer>
          <Text>
          Created the Pledge-Tier module for a Full Stack KickStarter mock up application.
          </Text>
          <br />
          <Text>
          Each Pledge was interactive and users were able to input the amount they wanted to pledge.
          </Text>
          <br />
          <Text>
          Used CSS Modules to stylize the Pledge modules to enlarge pledge windows on click.
          </Text>
          <br />
          <Text>
          Deployed module's bundle on AmazonS3 buckets to allow Application to be hosted on a
single AWS EC2 instance with Docker.
          </Text>
          <br />
          <Text>
          Brainstormed and designed the structure of our application so that each module
will have their own microservice.
          </Text>
          </TextContainer>
      </ImgContainer>
      <br />
      <ImgContainer>
        <Slide src="https://s3-us-west-2.amazonaws.com/peter-park-portfolio-img/1800+test.png" />
        <TextContainer>
        <Text>
        Built out a database to hold 10 million users and 10 million comments for my module
        </Text>
        <br />
        <Text>
        Removing Sequelize from the backend and using only raw PG, optimized the database to
reduce look up time from 1 minute 58 seconds to 4 seconds
        </Text>
        <br />
        <Text>
        Deployed module with AWS EC2 instances with Docker and scaled module horizontally and
adding NGINX to handle up to 2000 requests per second with less than 1% error rate.
        </Text>
        </TextContainer>
      </ImgContainer>
    </ul>
    // <Slideshow className="slideshow-container">
    //   <FecContainer>
    //     <Slide className="imageSlide" src="https://s3-us-west-2.amazonaws.com/peter-park-portfolio-img/FEC-ss.png">
    //     </Slide>
    //     <FecHoverContainer>
    //       <FecText>
    //           With a team of engineers, we built out a KickerStarter project page with React as our Front-end Library.  As a team we designed our site to be able to seamlessly render all our modules on a single webpage.
    //       </FecText>
    //     </FecHoverContainer>
    //   </FecContainer>
    //   <SdcContainer>
    //     <Slide className="imageSlide" src="https://s3-us-west-2.amazonaws.com/peter-park-portfolio-img/1800+test.png">
    //     </Slide>
    //     <SdcHoverContainer>
    //       <SdcText>
    //         Built out a database that could hold 10 million records of comments and users.  Reduced look up time through the database from 1 minute 50 seconds down to 4 seconds.  Deployed database using AWS EC2 instances and tested to make sure module can handle large requests per second.  
    //       </SdcText>
    //     </SdcHoverContainer>
    //   </SdcContainer>
    //   <Arrowsnext onClick={() => {props.onClick(1)}}>&#10095;</Arrowsnext>
    //   <Arrowsprev onClick={() => {props.onClick(-1)}}>&#10094;</Arrowsprev>
    // </Slideshow>
  );
}


// const Slideshow = styled.div `
//   max-width: 60%;
//   position: relative;
//   margin: auto;
// `;
const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const TextContainer = styled.ul`
  display: flex;
  flex-direction: column;
`

const Text = styled.ul`
  display: block;
  font-size: 25px;
`

const Slide = styled.img `
  display: flex;
  flex-direction: row;
  width: 50%;
`;

// const FecContainer = styled.div `
// position: relative;
// display: inline-block;
// overflow: hidden;
// width: 100%;
// height: auto;
// `;

// const SdcContainer = styled.div `
// position: relative;
// display: inline-block;
// overflow: hidden;
// width: 100%;
// height: auto;
// `;

// const FecHoverContainer = styled.div `
// opacity: 0;
// position: absolute;
// top: 0;
// left: 0;
// right: 0;
// bottom: 0;
// width: 100%;
// height: 100%;
// background: rgba(0, 0, 0, 0.6);
// color: #fff;
// padding: 15px;
// -moz-transition: all 0.4s ease-in-out 0s;
// -webkit-transition: all 0.4s ease-in-out 0s;
// -ms-transition: all 0.4s ease-in-out 0s;
// transition: all 0.4s ease-in-out 0s;
// &:hover {
//   opacity: 1;
// }
// `;

// const SdcHoverContainer = styled.div `
// opacity: 0;
// position: absolute;
// top: 0;
// left: 0;
// right: 0;
// bottom: 0;
// width: 100%;
// height: 100%;
// background: rgba(0, 0, 0, 0.6);
// color: #fff;
// padding: 15px;
// -moz-transition: all 0.4s ease-in-out 0s;
// -webkit-transition: all 0.4s ease-in-out 0s;
// -ms-transition: all 0.4s ease-in-out 0s;
// transition: all 0.4s ease-in-out 0s;
// &:hover {
//   opacity: 1;
// }
// `;

// const FecText = styled.div `
// text-align: left;
// font-size: 18px;
// display: inline-block;
// position: absolute;
// top: 50%;
// left: 50%;
// -moz-transform: translate(-50%, -50%);
// -webkit-transform: translate(-50%, -50%);
// -ms-transform: translate(-50%, -50%);
// transform: translate(-50%, -50%);
// `;

// const SdcText = styled.div `
// text-align: center;
// font-size: 18px;
// display: inline-block;
// position: absolute;
// top: 50%;
// left: 50%;
// -moz-transform: translate(-50%, -50%);
// -webkit-transform: translate(-50%, -50%);
// -ms-transform: translate(-50%, -50%);
// transform: translate(-50%, -50%);
// `;

// const Arrowsprev = styled.a `
//   cursor: pointer;
//   position: absolute;
//   top: 75%;
//   width: auto;
//   margin-top: -22px;
//   padding: 16px;
//   color: #3BA7C4;
//   font-weight: bold;
//   font-size: 50px;
//   transition: 0.6s ease;
//   left: 0;
//   border-radius: 0 3px 3px 0;
//   user-select: none;
//   &:hover {
//     background-color: rgba(0,0,0,0.4);
//   }
// `;

// const Arrowsnext = styled.a `
//   cursor: pointer;
//   position: absolute;
//   top: 75%;
//   width: auto;
//   margin-top: -22px;
//   padding: 16px;
//   color: #3BA7C4;
//   font-weight: bold;
//   font-size: 50px;
//   transition: 0.6s ease;
//   right: 0;
//   border-radius: 3px 0 0 3px;
//   user-select: none;
//   &:hover {
//     background-color: rgba(0,0,0,0.4);
//   }
// `;



export default Applications;