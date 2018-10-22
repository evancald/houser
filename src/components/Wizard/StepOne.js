import React, { Component } from 'react';
import './Wizard.css';
import { connect } from 'react-redux';
import { updateName, updateAddress, updateCity, updateUsState, updateZip } from '../../ducks/reducer';

class StepOne extends Component {

  nextStep = () => {
    this.props.history.push('/wizard/step2');
  }

  render() {
    const { updateName, updateAddress, updateCity, updateUsState, updateZip } = this.props
    return (
      <div className='step-inputs'>
        <h3>Step One</h3>
        Name:
        <input onChange={(e) => updateName(e.target.value)} value={this.props.name} placeholder='name'></input>
        Address:
        <input onChange={(e) => updateAddress(e.target.value)} value={this.props.address} placeholder='address'></input>
        City:
        <input onChange={(e) => updateCity(e.target.value)} value={this.props.city} placeholder='city'></input>
        State:
        <input onChange={(e) => updateUsState(e.target.value)} value={this.props.usState} placeholder='state'></input>
        Zip:
        <input onChange={(e) => updateZip(e.target.value)} value={this.props.zip} placeholder='zip'></input>
        <button className="nav-button" onClick={this.nextStep}>Next Step</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, address, city, usState, zip } = state;
  return {
    name,
    address,
    city,
    usState,
    zip
  }
}

export default connect(mapStateToProps, { updateName, updateAddress, updateCity, updateUsState, updateZip})(StepOne);