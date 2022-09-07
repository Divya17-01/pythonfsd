import { createSlice } from '@reduxjs/toolkit';
import { getdata } from "../api/cardapi/cardapi";
const cardslice = createSlice({
  name: "cards",
  instialState: { search:"",listofobject: getdata()},
  reducers: {
    onSerchChanging(state,action) {
      state.search=action.payload
    },
  },
});

export const{ onChanging,onSerachChanging} = cardslice.actions;
export default cardslice.reducer;