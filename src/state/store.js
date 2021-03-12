import { createStore, combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';

const rootReducer = combineReducers({
    cartReducer: cartReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;