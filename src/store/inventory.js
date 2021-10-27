import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

const inventorySlice = createSlice({
  name: "inventory",
  initialState: { value: initialStateValue },
  reducers: {
    setInventory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setInventory } = inventorySlice.actions;
export default inventorySlice.reducer;
