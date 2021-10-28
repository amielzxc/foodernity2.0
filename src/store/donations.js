import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

const donationsSlice = createSlice({
  name: "donations",
  initialState: { value: initialStateValue },
  reducers: {
    setDonations: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDonations } = donationsSlice.actions;
export default donationsSlice.reducer;
