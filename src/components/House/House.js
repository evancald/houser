import React from 'react';
import './House.css';

function House(props) {
  const {id, name, address, city, state, zip, img, mortgage, rent} = props;
  return(
    <div className='house-container'>
    <div className='house-img'>
      <img src={img} alt='house-img' height='150px' width='200px' />
    </div>
    <div className='house-info'>
        <div>Name: {name}</div>
        <div>Address: {address}</div>
        <div>City: {city}</div>
        <div>State: {state}</div>
        <div>Zip: {zip}</div>
        <div>Mortgage: {mortgage}</div>
        <div>Rent: {rent}</div>
      </div>
      <div>
        <button className='delete-button' onClick={() => props.deleteHouse(id)}>x</button>
      </div>
    </div>
  )
}

export default House;