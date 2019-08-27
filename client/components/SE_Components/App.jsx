import React from 'react';
import Name from './Name.jsx';
import About from './About.jsx';
import Navbar from './Navbar.jsx';
import Picture from './Picture.jsx';
import Contact from './Contact.jsx';
import styled from 'styled-components';
import Applications from './Applications.jsx';
import Technology from './Technology.jsx';
import WorkExperience from './WorkExperience.jsx';

const App = (props) => {
    return (
      <Profile>
        <ul>
          <Name />
        </ul>
        <ul>
          <Picture />
        </ul>
        <ul>
          <Contact />
        </ul>
        <ul>
          <About />
        </ul>
        <br />
        <Technology />
        <ul>
          <WorkExperience />
        </ul>
        <ul>
          <Applications />
        </ul>
      </Profile>
    );
}

const Profile = styled.div `
  background-color: lightblue;
`;

export default App;