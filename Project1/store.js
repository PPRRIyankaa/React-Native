// import {rootReducer} from './Reducer/index'
import { configureStore } from '@reduxjs/toolkit';
import AddText from './Reducer/statetext'
import setMode from './Reducer/Mode';
// console.log(AddText("abc"));
const store = configureStore({
    reducer:{
     text:AddText,
     mode:setMode
    }
});
export default store;