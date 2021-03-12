import { ADD_ITEM, DELETE_ITEM } from './types';

export const addItem = (item) => (
  {
    type: ADD_ITEM,
    payload: item
  }
);

export const deleteItem = (key) => (
  {
    type: DELETE_ITEM,
    key: key
  }
);