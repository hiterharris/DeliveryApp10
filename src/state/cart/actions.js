import { ADD_ITEM, DELETE_ITEM } from './types';

const addItem = (item) => (
  {
    type: ADD_ITEM,
    payload: item
  }
);

const deleteItem = (key) => (
  {
    type: DELETE_ITEM,
    key: key
  }
);

export const cartActions = { addItem, deleteItem }