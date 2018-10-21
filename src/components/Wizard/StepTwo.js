import React, { Component } from 'react';
import './Wizard.css';

class StepTwo extends Component {
  constructor() {
    super();
    this.state = {
      img: ''
    }
  }

  handleChange = (value, toUpdate) => {
    this.setState({[toUpdate]: value});
  }

  nextStep = () => {
    this.props.history.push('/wizard/step3');
  }

  previousStep = () => {
    this.props.history.push('/wizard/step1');
  }

  render() {
    return (
      <div className='wizard-container'>
        <input onChange={(e) => this.handleChange(e.target.value, 'img')} value={this.state.img} placeholder='Image URL'></input>
        <button onClick={this.nextStep}>Next</button>
        <button onClick={this.previousStep}>Back</button>
      </div>
    )
  }
}

export default StepTwo;