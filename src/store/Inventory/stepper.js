import { createSlice } from "@reduxjs/toolkit";

export const stepperSlice = createSlice({
  name: "stepper",
  initialState: { value: 0 },
  reducers: {
    next: (state) => {
      if (state.value < 2) {
        state.value++;
      }
    },
    back: (state) => {
      if (state.value > -1) {
        state.value--;
      }
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { next, back, reset } = stepperSlice.actions;
export default stepperSlice.reducer;
