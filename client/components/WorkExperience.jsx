import React from 'react';
import styled from 'styled-components';

const WorkExperience = (props) => {
  return(
    <ul>
      <ImgContainer >
        <Slide />
        <TextContainer>
          <Text>
            hallo shamalamadingdong
          </Text>
        </TextContainer>
      </ImgContainer>
    </ul>
  )
}

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

export default WorkExperience;