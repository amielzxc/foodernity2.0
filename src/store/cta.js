import { createSlice } from "@reduxjs/toolkit";

const ctaSlice = createSlice({
  name: "cta",
  initialState: { value: [] },
  reducers: {
    setCta: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCta } = ctaSlice.actions;
export default ctaSlice.reducer;
