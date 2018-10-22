import React, {Component} from 'react';
import House from '../House/House';
import axios from 'axios';
import './Dashboard.css';

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
    this.props.history.push('/wizard/step1');
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
          <House id={house.id} name={house.name} address={house.address} city={house.city} state={house.state} zip={house.zip} img={house.img} mortgage={house.mortgage} rent={house.rent} deleteHouse={this.deleteHouse}/>
        </div>
      )
    })
    return(
      <div className='dashboard-container'>
        <div className='dashboard-head'>
            <h2>Dashboard</h2>
            <button className='button' onClick={() => this.addNewProperty()}>Add New Property</button>
        </div>
        <h2>Home Listings</h2>
        <div>
          {houses}
        </div>
      </div>
    )
  }
}

export default Dashboard;