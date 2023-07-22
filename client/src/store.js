import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { legacy_createStore as createStore , applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import { getAllPizzasReducer , addPizzaReducer , getPizzaByIdReducer , editPizzaReducer} from './reducers/pizzaReducers'
import { cartReducer } from './reducers/cartReducers'
import { loginUserReducer, registerUserReducer  , getAllUsersReducer} from './reducers/userReducers'
import { placeOrderReducer , getUserOrdersReducer , getAllOrdersReducer } from './reducers/orderReducer'

const finalReducer = combineReducers({
    getAllPizzasReducer : getAllPizzasReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer : loginUserReducer,
    placeOrderReducer : placeOrderReducer,
    getUserOrdersReducer : getUserOrdersReducer,
    addPizzaReducer : addPizzaReducer,
    getPizzaByIdReducer : getPizzaByIdReducer,
    editPizzaReducer : editPizzaReducer,
    getAllOrdersReducer : getAllOrdersReducer,
    getAllUsersReducer : getAllUsersReducer
})

const cartItemsJson = localStorage.getItem('cartItems');
const cartItems = cartItemsJson ? JSON.parse(cartItemsJson) : [];
const currentUserJSon = localStorage.getItem('currentUser') ;
const currentUser = currentUserJSon ?  JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
    cartReducer : {
        cartItems : cartItems
    },
    loginUserReducer : {
        currentUser : currentUser
    }
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store;