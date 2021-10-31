import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [
  {
    categories: "Beverages",
    stocks: 0,
    receivedDonations: 0,
    donatedDonations: 0,
  },
  {
    categories: "Biscuits",
    stocks: 0,
    receivedDonations: 0,
    donatedDonations: 0,
  },
  {
    categories: "Canned goods",
    stocks: 0,
    receivedDonations: 0,
    donatedDonations: 0,
  },
  {
    categories: "Cereals",
    stocks: 0,
    receivedDonations: 0,
    donatedDonations: 0,
  },
  {
    categories: "Condiments and sauces",
    stocks: 0,
    receivedDonations: 0,
    donatedDonations: 0,
  },
  { categories: "Eggs", stocks: 0, receivedDonations: 0, donatedDonations: 0 },
  {
    categories: "Instant Noodles",
    stocks: 0,
    receivedDonations: 0,
    donatedDonations: 0,
  },
  { categories: "Rice", stocks: 0, receivedDonations: 0, donatedDonations: 0 },
  {
    categories: "Snacks",
    stocks: 0,
    receivedDonations: 0,
    donatedDonations: 0,
  },
  {
    categories: "Tea, Coffee, Milk, Sugar, etc.",
    stocks: 0,
    receivedDonations: 0,
    donatedDonations: 0,
  },
];

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
