import { createStore, combineReducers } from "redux";
import userReducer from './userReducer'
import shoppingCartReducer from './shoppingCartReducer'

rootReducer = combineReducers({user: userReducer, shoppingCart: shoppingCartReducer})

const initialState = { user: undefined, shoppingCart: [] };

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store