import React from 'react';

class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: false,
      code: false
    }
  }

  decisionRender = () => {
    if (this.state.food === true) {
      return <AppFood />;
    } else if (this.state.code === true) {
      return <App />;
    } else {
      return;
    }
  }

  render() {
    return(
      <div>

      </div>
    )
  }
}

//aa

export default Password;