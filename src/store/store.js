import {legacy_createStore} from 'redux'
import { ListReducer } from './ListReducer'




export const store=legacy_createStore(ListReducer)