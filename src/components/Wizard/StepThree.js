import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateMortgage, updateRent, resetState } from '../../ducks/reducer';
import './Wizard.css';

class StepThree extends Component {

  addHouse = () => {
    axios.post('http://localhost:8080/api/houses', {
      name: this.props.name,
      address: this.props.address,
      city: this.props.city,
      state: this.props.usState,
      zip: this.props.zip,
      img: this.props.img,
      mortgage: this.props.mortgage,
      rent: this.props.rent
    }).then( () => {
      this.props.resetState();
      this.props.history.push('/');
    })
  }

  previousStep = () => {
    this.props.history.push('/wizard/step2');
  }

  render() {
    const { updateMortgage,  updateRent } = this.props;
    return (
      <div className='step-inputs'>
        <h3>Step Three</h3>
        <div>
          Recommended Monthly Rent: ${this.props.mortgage * 1.25}
        </div>
        Monthly Mortgage Amount:
        <input onChange={(e) => updateMortgage(e.target.value)} value={this.props.mortgage} placeholder='Monthly Mortgage Amount'></input>
        Desired Monthly Rent:
        <input onChange={(e) => updateRent(e.target.value)} value={this.props.rent} placeholder='Monthly Rent'></input>
        <div className='nav-buttons-container'>
          <button className='nav-button' onClick={this.previousStep}>Previous Step</button>
          <button className='submit-button' onClick={this.addHouse}>Submit</button>
        </div>
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

export default connect(mapStateToProps, { updateMortgage, updateRent, resetState })(StepThree);