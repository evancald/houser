import React from 'react';
import './House.css';

function House(props) {
  const {id, name, address, city, state, zip, img, mortgage, rent} = props;
  return(
    <div className='house-container'>
      <img src={img} alt='house-img' width='100px' height='100px' />
      <div>Name: {name}</div>
      <div>Address: {address}</div>
      <div>City: {city}</div>
      <div>State: {state}</div>
      <div>Zip: {zip}</div>
      <div>Mortgage: {mortgage}</div>
      <div>Rent: {rent}</div>
      <button onClick={() => props.deleteHouse(id)}>Delete</button>
    </div>
  )
}

export default House;