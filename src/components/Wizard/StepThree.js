import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateMortgage, updateRent } from '../../ducks/reducer';
import './Wizard.css';

class StepThree extends Component {

  addHouse = () => {
    axios.post('http://localhost:8080/api/houses', {
      name: this.props.name,
      address: this.props.address,
      city: this.props.city,
      state: this.props.usState,
      zip: this.props.zip
    }).then( () => {
      this.props.history.push('/');
    })
  }

  previousStep = () => {
    this.props.history.push('/wizard/step2');
  }

  render() {
    const { updateMortgage,  updateRent } = this.props;
    return (
      <div className='wizard-container'>
        Monthly Mortgage Amount:
        <input onChange={(e) => updateMortgage(e.target.value)} value={this.props.mortgage} placeholder='Monthly Mortgage Amount'></input>
        Desired Monthly Rent:
        <input onChange={(e) => updateRent(e.target.value)} value={this.props.rent} placeholder='Monthly Rent'></input>
        <button onClick={this.addHouse}>Submit</button>
        <button onClick={this.previousStep}>Back</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, address, city, usState, zip, img, mortgage, rent } = state;
  return {
    name,
    address,
    city,
    usState,
    zip,
    img,
    mortgage,
    rent
  }
}

export default connect(mapStateToProps, { updateMortgage, updateRent})(StepThree);