import { createSlice } from "@reduxjs/toolkit";
import { getBrowsingData } from "../api/AllProductApi/browsingApi";

const cardslice = createSlice({
  name: "cards",
  initialState: {
    listOfAllObject: getBrowsingData(),
    productID: -1,
    product: null,
  },
  reducers: {
    detailing(state, action) {
      state.productID = action.payload;
      console.log(state.productID);
      console.log(action.payload);
    },
    detailingProd(state, action) {
      state.product = action.payload;
      console.log(action.payload);
    },
  },
});

export const { onSearchChanging, detailing, detailingProd } = cardslice.actions;
export default cardslice.reducer;