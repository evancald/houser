import React, {Component} from 'react';
import House from '../House/House';
import axios from 'axios';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/houses')
    .then(response => {
      this.setState({houses: response.data});
    })
  }

  addNewProperty = () => {
    this.props.history.push('/wizard');
  }

  render() {
    const houses = this.state.houses.map((house, i) => {
      return(
        <div key={i}>
          <House name={house.name} address={house.address} city={house.city} state={house.state} zip={house.zip}/>
        </div>
      )
    })
    return(
      <div>
        Dashboard
        <button onClick={() => this.addNewProperty()}>Add New Property</button>
        {houses}
      </div>
    )
  }
}

export default Dashboard;