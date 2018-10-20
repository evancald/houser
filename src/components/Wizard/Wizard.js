import React, { Component } from 'react';
import axios from 'axios';
import './Wizard.css';

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: 99999
    }
  }

  handleChange = (value, toUpdate) => {
    this.setState({[toUpdate]: value});
  }

  addHouse = () => {
    axios.post('http://localhost:8080/api/houses', {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    }).then( () => {
      this.props.history.push('/');
    })

  }

  cancel = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className='wizard-container'>
        Wizard
        <button onClick={() => this.cancel()}>Cancel</button>
        <input onChange={(e) => this.handleChange(e.target.value, 'name')} value={this.state.name} placeholder='name'></input>
        <input onChange={(e) => this.handleChange(e.target.value, 'address')} value={this.state.address} placeholder='address'></input>
        <input onChange={(e) => this.handleChange(e.target.value, 'city')} value={this.state.city} placeholder='city'></input>
        <input onChange={(e) => this.handleChange(e.target.value, 'state')} value={this.state.state} placeholder='state'></input>
        <input onChange={(e) => this.handleChange(e.target.value, 'zip')} value={this.state.zip} placeholder='zip'></input>
        <button onClick={this.addHouse}>Complete</button>
      </div>
    )
  }
}

export default Wizard;