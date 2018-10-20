import React, { Component } from 'react';

class Wizard extends Component {

  cancel = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        Wizard
        <button onClick={() => this.cancel()}>Cancel</button>
      </div>
    )
  }
}

export default Wizard;