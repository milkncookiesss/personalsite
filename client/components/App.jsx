import React from 'react';
import Name from './Name.jsx';
import About from './About.jsx';
import Navbar from './Navbar.jsx';
import Picture from './Picture.jsx';
import styled from 'styled-components';

class App  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <Name />
        <div>
        <Picture />
        </div>
      <Navbar />
      <p>
        Header
      </p>
      <AboutStyle>
      <About />
      </AboutStyle>
      </div>
    );
  }
}

const AboutStyle = styled.div `
  display: block;
  margin-left: auto;
  margin-right: auto;
`

export default App;