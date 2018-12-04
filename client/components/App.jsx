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
    this.state = {
      number: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(check) {
    if (check === 'next') {
      this.setState({
        number: this.state.number + 1
      });
    } else if (check === 'prev') {
      this.setState({
        number: this.state.number - 1
      });
    }
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
          <Applications number={this.state.number} onClick={this.handleClick}/>
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