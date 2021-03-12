import { ADD_ITEM, DELETE_ITEM } from './types';

const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cart: action.payload
      };
    case DELETE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) =>
          item.id !== action.id)
      };
    default:
      return state;
  }
}

export default cartReducer;