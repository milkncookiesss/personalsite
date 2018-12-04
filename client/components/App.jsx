import React from 'react';
import Name from './Name.jsx';
import About from './About.jsx';
import Navbar from './Navbar.jsx';
import Picture from './Picture.jsx';
import Contact from './Contact.jsx';
import Applications from './Applications.jsx';
import styled from 'styled-components';

class App  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Profile>
        <div>
          <Name />
        </div>
        <div>
          <Picture />
        </div>
        <div>
          <Contact />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Applications />
        </div>
      <p>
        Header
      </p>
      </Profile>
    );
  }
}

const Profile = styled.div `
  background: ;
`;

export default App;