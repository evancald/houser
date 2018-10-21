const initialState = {
  name: '',
  address: '',
  city: '',
  usState: '',
  zip: 99999,
  img: '',
  mortgage: 0,
  rent: 0
}

const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_USSTATE = 'UPDATE_USSTATE';
const UPDATE_ZIP = 'UPDATE_ZIP';

function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_NAME:
      return Object.assign({}, state, {name: action.payload});
    case UPDATE_ADDRESS:
      return Object.assign({}, state, {address: action.payload});
    case UPDATE_CITY:
      return Object.assign({}, state, {city: action.payload});
    case UPDATE_USSTATE:
      return Object.assign({}, state, {usState: action.payload});
    case UPDATE_ZIP:
      return Object.assign({}, state, {zip: action.payload});
    default:
      return state;
  }
}

export function updateName(name) {
  return {
    type: UPDATE_NAME,
    payload: name
  }
}

export function updateAddress(address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  }
}

export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  }
}

export function updateUsState(usState) {
  return {
    type: UPDATE_USSTATE,
    payload: usState
  }
}

export function updateZip(zip) {
  return {
    type: UPDATE_ZIP,
    payload: zip
  }
}

export default reducer;