import listings from './listingReducer'
import errors from './errorReducer'
import auth from './authReducer'
import {combineReducers} from 'redux'

export default combineReducers({listings, errors, auth})