import React, {Component} from 'react';
import House from '../House/House';

class Dashboard extends Component {

  addNewProperty = () => {
    this.props.history.push('/wizard');
  }

  render() {
    return(
      <div>
        Dashboard
        <button onClick={() => this.addNewProperty()}>Add New Property</button>
        <House />
      </div>
    )
  }
}

export default Dashboard;