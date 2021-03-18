import listings from './listingReducer'
import errors from './errorReducer'
import {combineReducers} from 'redux'

export default combineReducers({listings, errors})