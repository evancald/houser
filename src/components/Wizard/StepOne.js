import React, { Component } from 'react';
import './Wizard.css';
import { connect } from 'react-redux';

class StepOne extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      city: '',
      usState: '',
      zip: 55555
    }
  }

  handleChange = (value, toUpdate) => {
    this.setState({[toUpdate]: value});
  }

  nextStep = () => {
    this.props.history.push('/wizard/step2');
  }

  render(props) {
    console.log(props);
    return (
      <div className='wizard-container'>
        Step One
        <input onChange={(e) => this.handleChange(e.target.value, 'name')} value={this.state.name} placeholder='name'></input>
        <input onChange={(e) => this.handleChange(e.target.value, 'address')} value={this.state.address} placeholder='address'></input>
        <input onChange={(e) => this.handleChange(e.target.value, 'city')} value={this.state.city} placeholder='city'></input>
        <input onChange={(e) => this.handleChange(e.target.value, 'usState')} value={this.state.usState} placeholder='state'></input>
        <input onChange={(e) => this.handleChange(e.target.value, 'zip')} value={this.state.zip} placeholder='zip'></input>
        <button onClick={this.nextStep}>Next</button>
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

export default connect(mapStateToProps)(StepOne);