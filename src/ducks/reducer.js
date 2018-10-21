const initialState = {
  name: '',
  address: '',
  city: '',
  usState: '',
  zip: 90210,
  img: '',
  mortgage: 0,
  rent: 0
}

const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_USSTATE = 'UPDATE_USSTATE';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMG = 'UPDATE_IMG';
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
const UPDATE_RENT = 'UPDATE_RENT';

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
    case UPDATE_IMG:
      return Object.assign({}, state, {img: action.payload});
    case UPDATE_MORTGAGE:
      return Object.assign({}, state, {mortgage: action.payload});
    case UPDATE_RENT:
      return Object.assign({}, state, {rent: action.payload});
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

export function updateImg(img) {
  return {
    type: UPDATE_IMG,
    payload: img
  }
}

export function updateMortgage(mortgage) {
  return {
    type: UPDATE_MORTGAGE,
    payload: mortgage
  }
}

export function updateRent(rent) {
  return {
    type: UPDATE_RENT,
    payload: rent
  }
}

export default reducer;