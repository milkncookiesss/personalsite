import React from 'react';
import styled from 'styled-components';

const Applications = (props) => {
  return (
    <ul>
      <Title>
        Software Engineering Applications
      </Title>
      <ImgContainer>
        <Slide src="https://s3-us-west-2.amazonaws.com/peter-park-portfolio-img/FEC-ss.png" />
          <TextContainer>
            <br />
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
          <br />
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
  );
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
`
const TextContainer = styled.ul`
  margin-left: -50px;
  display: flex;
  flex-direction: column;
`

const Text = styled.ul`
  display: block;
  font-size: 25px;
`

const Slide = styled.img `
  border: 2px solid black;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  width: 50%;
`

export default Applications;