import React, { Component } from 'react';
import './Wizard.css';
import { connect } from 'react-redux';
import { updateImg } from '../../ducks/reducer';

class StepTwo extends Component {

  nextStep = () => {
    this.props.history.push('/wizard/step3');
  }

  previousStep = () => {
    this.props.history.push('/wizard/step1');
  }

  render() {
    const { updateImg } = this.props;
    return (
      <div className='step-inputs'>
        <h3>Step Two</h3>
        Image URL:
        <input onChange={(e) => updateImg(e.target.value)} value={this.props.img} placeholder='Image URL'></input>
        <div className='nav-buttons-container'>
          <button className='nav-button' onClick={this.previousStep}>Previous Step</button>
          <button className='nav-button' onClick={this.nextStep}>Next Step</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { img } = state;
  return {
    img
  }
}

export default connect(mapStateToProps, { updateImg })(StepTwo);