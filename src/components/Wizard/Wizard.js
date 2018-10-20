import React, { Component } from 'react';

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

  cancel = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        Wizard
        <button onClick={() => this.cancel()}>Cancel</button>
        <input onChange={(e) => this.handleChange(e.target.value, 'name')} value={this.state.name} placeholder='name'></input>
        <input onChange={(e) => this.handleChange(e.target.value, 'address')} value={this.state.address} placeholder='address'></input>
        <input onChange={(e) => this.handleChange(e.target.value, 'city')} value={this.state.city} placeholder='city'></input>
        <input onChange={(e) => this.handleChange(e.target.value, 'state')} value={this.state.state} placeholder='state'></input>
        <input onChange={(e) => this.handleChange(e.target.value, 'zip')} value={this.state.zip} placeholder='zip'></input>
      </div>
    )
  }
}

export default Wizard;