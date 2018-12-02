import React from 'react';
import Name from './Name.jsx';
import About from './About.jsx';
import Navbar from './Navbar.jsx';
import Picture from './Picture.jsx';

class App  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    console.log('hi from app component');
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
      <About />
      </div>
    );
  }
}


export default App;