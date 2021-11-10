import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    donationsReceived: 0,
    donationsDistributed: 0,
    currentStocks: 0,
    userCount: 0,
    visitorCount: 0,
    pendingDonations: 0,
    acceptedDonations: 0,
    categoriesArray: [],
    receivedDonationsArray: [],
    distributedDonationsArray: [],
  },
  reducers: {
    setUserCount: (state, action) => {
      state.userCount = action.payload;
    },
    setPendingDonations: (state, action) => {
      state.pendingDonations = action.payload;
    },
    setAcceptedDonations: (state, action) => {
      state.acceptedDonations = action.payload;
    },
    setDonationsReceived: (state, action) => {
      state.donationsReceived = action.payload;
    },
    setDonationsDistributed: (state, action) => {
      state.donationsDistributed = action.payload;
    },
    setCurrentStocks: (state, action) => {
      state.currentStocks = action.payload;
    },
    setCategoriesArray: (state, action) => {
      state.categoriesArray = action.payload;
    },
    setReceivedDonationsArray: (state, action) => {
      state.receivedDonationsArray = action.payload;
    },
    setDistributedDonationsArray: (state, action) => {
      state.distributedDonationsArray = action.payload;
    },
  },
});

export const {
  setUserCount,
  setAcceptedDonations,
  setPendingDonations,
  setDonationsReceived,
  setDonationsDistributed,
  setCurrentStocks,
  setCategoriesArray,
  setReceivedDonationsArray,
  setDistributedDonationsArray,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
