//const intialstate = {value:""};
import { createSlice } from "@reduxjs/toolkit";  

const AddText=createSlice({
    name:'text',
    initialState:{
        text:""
    },
    reducers:{
        appendText:(state,action)=>{
            state.text+=action.payload
            
        },
        setText:(state,action)=>{
            state.text=action.payload
            return state
        }
    }

})
export default AddText.reducer
export const {appendText,setText}=AddText.actions

// export default AddText = (state=intialstate,action) =>{
//     if(action.type==='appendtext'){
//         state.value += action.payload;
        
//     }
//     else if(action.type==='settext'){
//         state.value = action.payload;
//     }
//     else if(action.type==='Uppercase'){
//         state.value = action.toUpperCase();
//     }

//     return state;
// }