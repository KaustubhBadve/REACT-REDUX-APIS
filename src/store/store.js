import {legacy_createStore,combineReducers,applyMiddleware} from 'redux'

import {ListReducer} from "./Todo/ListReducer"
import { LoginReducer } from './Login/LoginReducer'
import thunk from 'redux-thunk'



const rootReducer=combineReducers({
    Todo:ListReducer,
    Login:LoginReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))