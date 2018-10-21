import React, { Component } from 'react';
import axios from 'axios';
import './Wizard.css';

class StepThree extends Component {
  constructor() {
    super();
    this.state = {
      mortgage: 0,
      rent: 0
    }
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

  handleChange = (value, toUpdate) => {
    this.setState({[toUpdate]: value});
  }

  previousStep = () => {
    this.props.history.push('/wizard/step2');
  }

  render() {
    return (
      <div className='wizard-container'>
        <input onChange={(e) => this.handleChange(e.target.value, 'mortgage')} value={this.state.mortgage} placeholder='Monthly Mortgage Amount'></input>
        <input onChange={(e) => this.handleChange(e.target.value, 'rent')} value={this.state.rent} placeholder='Monthly Rent'></input>
        <button onClick={this.addHouse}>Submit</button>
        <button onClick={this.previousStep}>Back</button>
      </div>
    )
  }
}

export default StepThree;