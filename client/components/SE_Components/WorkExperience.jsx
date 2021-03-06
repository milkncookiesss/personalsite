import React from 'react';
import styled from 'styled-components';

const WorkExperience = (props) => {
  return(
    <ul>
      <Title>
        Work Experience
      </Title>
      <ImgContainer >
        <Slide src='https://peter-park-portfolio-img.s3-us-west-2.amazonaws.com/TrilogyLogo1200.png'/>
        <TextContainer>
          <br />
          <Text>
          Assist an Instructor in teaching students 250+ hours of full-stack web development
          </Text>
          <br />
          <Text>
          Developed a study exercise that uses Mocha/Chai to help students learn basics of JavaScript
through Terminal or Bash.
          </Text>
          <br />
          <Text>
          Using Git, pushed assignments and lectures to GitLab for students to clone from.
          </Text>
          <br />
          <Text>
          Help students with debugging and confusing concepts for each lesson.
          </Text>
        </TextContainer>
      </ImgContainer>
    </ul>
  )
}

const Title = styled.div`
  display: block;
  font-family: "Arial Black", Gadget, sans-serif;
  font-size: 30px;
  text-align: center;
  text-shadow: 4px 4px 2px #ff6666;
`

const ImgContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  @media (max-width: 1024px) {
    width: 100%;
    flex-flow: column; 
  }
`
const TextContainer = styled.ul`
  margin-left: -50px;
  display: flex;
  flex-direction: column;
`

const Text = styled.ul`
  display: block;
  font-size: 25px;
  @media(max-width: 1024px) {
    font-size: 15px;
  }
`

const Slide = styled.img `
  border: 2px solid black;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  width: 50%;
`;

export default WorkExperience;