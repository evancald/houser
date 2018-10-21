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

function reducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}

export default reducer;