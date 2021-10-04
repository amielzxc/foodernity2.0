import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  image: null,
  name: "",
  expiry: Date.now(),
  categories: {
    instantNoodles: "",
    cannedGoods: "",
    eggs: "",
    uncookedRice: "",
    snacksBiscuits: "",
    breadPastry: "",
    vegetables: "",
    others: "",
  },
  deliverDate: Date.now(),
  contactNumber: "",
  notes: "",
};

const detailsSlice = createSlice({
  name: "details",
  initialState: { value: initialStateValue },
  reducers: {
    setImage: (state, action) => {
      state.value.image = action.payload;
    },
    setName: (state, action) => {
      state.value.name = action.payload;
    },
    setExpiry: (state, action) => {
      state.value.expiry = action.payload;
    },
    setInstantNoodles: (state, action) => {
      state.value.categories.instantNoodles = action.payload;
    },
    setCannedGoods: (state, action) => {
      state.value.categories.cannedGoods = action.payload;
    },
    setEggs: (state, action) => {
      state.value.categories.eggs = action.payload;
    },
    setUncookedRice: (state, action) => {
      state.value.categories.uncookedRice = action.payload;
    },
    setSnacksBiscuits: (state, action) => {
      state.value.categories.snacksBiscuits = action.payload;
    },
    setBreadPastry: (state, action) => {
      state.value.categories.breadPastry = action.payload;
    },
    setVegetables: (state, action) => {
      state.value.categories.vegetables = action.payload;
    },
    setOthers: (state, action) => {
      state.value.categories.others = action.payload;
    },
    setDeliverDate: (state, action) => {
      state.value.deliverDate = action.payload;
    },
    setContactNumber: (state, action) => {
      state.value.contactNumber = action.payload;
    },
    setNotes: (state, action) => {
      state.value.notes = action.payload;
    },

    setDefault: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const {
  setImage,
  setName,
  setExpiry,
  setInstantNoodles,
  setCannedGoods,
  setEggs,
  setUncookedRice,
  setSnacksBiscuits,
  setBreadPastry,
  setVegetables,
  setOthers,
  setDeliverDate,
  setContactNumber,
  setNotes,
  setDefault,
} = detailsSlice.actions;

export default detailsSlice.reducer;
