import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [
  {
    id: 1,
    title: "Call for donations for the victims of Typhoon Rolly",
    description:
      "In support of the disaster relief efforts of the Ateneo Graduate School of Business",
    pubmat: "http://gsb.ateneo.edu/wp-content/uploads/2020/11/Rolly-1.jpg",
    donationCount: 123,
    // status: 'Fulfilled',
    date: "June 22, 2021",
    categories: ["Instant Noodles", "Vegetables"],
  },
  {
    id: 2,
    title: "Call for Donations for Mindanao Earthquake Survivors",
    description:
      " The maryknoll//Miriam College Alumni Association appeals for in kind donations for victims of recent earthquakes in Mindanao.",
    pubmat:
      "https://www.mc.edu.ph/Portals/21/xBlog/uploads/2019/11/19/MMCAADonations1.jpg",
    donationCount: 89,

    date: "June 27, 2021",
    categories: ["Canned Goods"],
  },
  {
    id: 3,
    title:
      "Help us raise funds and relief goods for the victims of fire in Jolo, Sulu",
    description:
      "Help us raise funds and relief goods for the 3,500 families affected by the July 25, 2018 fire in Jolo, Sulu",
    pubmat:
      "https://iisupd.files.wordpress.com/2018/07/social-card-jolo-fire.jpg",
    donationCount: 81,
    status: "Active",
    date: "June 29, 2021",
    categories: ["Vegetables", "Canned Goods"],
  },
];

const ctaSlice = createSlice({
  name: "cta",
  initialState: { value: initialStateValue },
  reducers: {
    setCta: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCta } = ctaSlice.actions;
export default ctaSlice.reducer;
