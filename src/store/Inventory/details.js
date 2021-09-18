import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  name: "",
  image: null,
  quantity: "",
  category: "",
  expiry: Date.now(),
  notes: "",
  claimingMethod: "",
  claimingLocation: "",
  claimingDate: Date.now(),
};
const detailsSlice = createSlice({
  name: "details",
  initialState: { value: initialStateValue },
  reducers: {
    setName: (state, action) => {
      state.value.name = action.payload;
    },
    setImage: (state, action) => {
      state.value.image = action.payload;
    },
    setQuantity: (state, action) => {
      state.value.quantity = action.payload;
    },
    setCategory: (state, action) => {
      state.value.category = action.payload;
    },
    setExpiry: (state, action) => {
      state.value.expiry = action.payload;
    },
    setNotes: (state, action) => {
      state.value.notes = action.payload;
    },
    setClaimingMethod: (state, action) => {
      state.value.claimingMethod = action.payload;
    },
    setClaimingLocation: (state, action) => {
      state.value.claimingLocation = action.payload;
    },
    setClaimingDate: (state, action) => {
      state.value.claimingDate = action.payload;
    },
    clearDetails: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const {
  setName,
  setImage,
  setQuantity,
  setCategory,
  setExpiry,
  setNotes,
  setClaimingMethod,
  setClaimingLocation,
  setClaimingDate,
  clearDetails,
} = detailsSlice.actions;

export default detailsSlice.reducer;
