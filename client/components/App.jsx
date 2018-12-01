import React from 'react';
import Name from './Name.jsx';

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
        <p>Profile Picture</p>
      <p>
        navbar
      </p>
      <p>
        Header
      </p>
      </div>
    );
  }
}


export default App;