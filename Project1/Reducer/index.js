import {combineReducers} from 'redux'
import AddText from './statetext';
const rootReducer = () => combineReducers({text:AddText})
export default rootReducer;