import React from 'react';
import styled from 'styled-components';

const About = (props) => {
  return (
    <Aboot>
      <p>
        Restaurant industry veteran who decided in wanting a career that requires more problem solving scenarios.  Being self taught and graduating at a three month immersive program, I became a certified Full Stack Engineer.  I always want to keep learning and challenging myself to take on more challenging problems every day.
      </p>
    </Aboot>
  );
}

const Aboot = styled.div `
  display: block;
  font-size: 25px;
  margin-left: 25%;
  margin-right: 25%;
  text-allign: center;
  @media (max-width: 414px) {
    margin-left: 15%;
    margin-right: 15%;
    font-size: 20px;
    flex-flow: row wrap;
  }
  @media (max-width: 360px) {
    margin-left: 15%;
    margin-right: 15%;
    font-size: 15px;
    flex-flow: row wrap;
  }
`;

export default About;