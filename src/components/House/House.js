import React from 'react';

function House(props) {
  const {id, name, address, city, state, zip} = props;
  return(
    <div>
      <div>{name}</div>
      <div>{address}</div>
      <div>{city}</div>
      <div>{state}</div>
      <div>{zip}</div>
      <button onClick={() => props.deleteHouse(id)}>Delete</button>
    </div>
  )
}

export default House;