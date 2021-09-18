import { createSlice } from "@reduxjs/toolkit";

const guidelinesSlice = createSlice({
  name: "guidelines",
  initialState: { value: [false, false, false] },
  reducers: {
    check1: (state) => {
      state.value[0] = !state.value[0];
    },
    check2: (state) => {
      state.value[1] = !state.value[1];
    },
    check3: (state) => {
      state.value[2] = !state.value[2];
    },
  },
});

export const { check1, check2, check3 } = guidelinesSlice.actions;
export default guidelinesSlice.reducer;
