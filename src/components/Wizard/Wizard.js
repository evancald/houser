import React, { Component } from 'react';
import './Wizard.css';
import { Route, Switch } from 'react-router-dom';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import { resetState } from '../../ducks/reducer';
import { connect } from 'react-redux';

class Wizard extends Component {

  cancel = () => {
    this.props.resetState();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className='wizard-container'>
        Wizard
        <button onClick={() => this.cancel()}>Cancel</button>
        <Switch>
          <Route path='/wizard/step1'component={StepOne} />
          <Route path='/wizard/step2' component={StepTwo} />
          <Route path='/wizard/step3' component={StepThree} />
        </Switch>
      </div>
    )
  }
}

export default connect(null, { resetState })(Wizard);