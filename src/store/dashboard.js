import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    donationsReceived: [],
    donationsDistributed: [],
    userCount: [],
    visitorCount: [],
    pendingDonations: [],
    acceptedDonations: [],
  },
});
