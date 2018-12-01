import React from 'react';

class App  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    console.log('hi from app component');
    return (
      <div>
        Name
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