import React from 'react';
import styled from 'styled-components';

const Contact = (props) => {
  return (
    <div>
      <a href="https://www.github.com/milkncookiesss" target="_blank">
      <Github src="https://s3-us-west-2.amazonaws.com/peter-park-portfolio-img/512px-Font_Awesome_5_brands_github.svg.png"></Github>
      </a>
      <a href="https://www.linkedin.com/in/milkncookiesss" target="_blank">
      <Linkedin src="https://s3-us-west-2.amazonaws.com/peter-park-portfolio-img/2000px-LinkedIn_logo_In-Black.svg.png"></Linkedin>
      </a>
      <a href="https://www.twitter.com/milkncookiessss" target="_blank">
      <Twitter src="https://peter-park-portfolio-img.s3-us-west-2.amazonaws.com/twitter-icon-black-and-white-22.jpg"></Twitter>
      </a>
    </div>
  )
}

const Github = styled.img `
  width: 5%;
  margin-left: 27%;
`;

const Linkedin = styled.img `
  width: 5%;
  margin-left: 16%;
`;

const Twitter = styled.img `
  width: 5%;
  margin-left: 16%;
`;
export default Contact;