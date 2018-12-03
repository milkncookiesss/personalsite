import React from 'react';
import styled from 'styled-components';

const About = (props) => {
  return (
    <div>
      {/* <img>Github</img> */}
      <Twitter src="https://s3-us-west-2.amazonaws.com/peter-park-portfolio-img/512px-Icon_Twitter.svg.png" href="https://www.twitter.com/milkncookiessss"></Twitter>
      {/* <img>Linkedin</img> */}
      {/* <img>Email</img> */}
    </div>
  )
}

const Twitter = styled.img `
  width: 5%;
`
export default About;