import { createSlice } from "@reduxjs/toolkit";

const donationsSlice = createSlice({
  name: "donations",
  initialState: { value: [] },
  reducers: {
    setDonations: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDonations } = donationsSlice.actions;
export default donationsSlice.reducer;
