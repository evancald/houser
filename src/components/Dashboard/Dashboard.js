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
    this.getHouses();
  }

  addNewProperty = () => {
    this.props.history.push('/wizard');
  }

  getHouses = () => {
    axios.get('http://localhost:8080/api/houses')
    .then(response => {
      this.setState({houses: response.data});
    })
  }

  deleteHouse = (id) => {
    axios.delete(`http://localhost:8080/api/houses/${id}`)
      .then(() => this.getHouses());
  }

  render() {
    const houses = this.state.houses.map((house, i) => {
      return(
        <div key={i}>
          <House id={house.id} name={house.name} address={house.address} city={house.city} state={house.state} zip={house.zip} deleteHouse={this.deleteHouse}/>
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