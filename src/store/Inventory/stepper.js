import { createSlice } from "@reduxjs/toolkit";

export const stepperSlice = createSlice({
  name: "stepper",
  initialState: { value: 0 },
  reducers: {
    next: (state, action) => {
      if (state.value < 2) {
        state.value++;
      }
    },
    back: (state, action) => {
      if (state.value > -1) {
        state.value--;
      }
    },
  },
});

export const { next, back } = stepperSlice.actions;
export default stepperSlice.reducer;
