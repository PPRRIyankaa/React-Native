import {createSlice} from '@reduxjs/toolkit';
const setmode = createSlice({
  name: 'mode',
  initialState: {
    color: '#b3d9ff',
  },
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export default setmode.reducer;
export const {setColor} = setmode.actions;
