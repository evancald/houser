import React from 'react';

function House(props) {
  const {name, address, city, state, zip} = props;
  return(
    <div>
      <div>{name}</div>
      <div>{address}</div>
      <div>{city}</div>
      <div>{state}</div>
      <div>{zip}</div>
      <button>Delete</button>
    </div>
  )
}

export default House;