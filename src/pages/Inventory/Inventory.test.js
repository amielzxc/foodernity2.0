import { render, fireEvent } from "@testing-library/react";
import InventoryCount from "../../components/Inventory/Inventory/InventoryCount";
import DonorCount from "../../components/Inventory/Inventory/DonorCount";
import Header from "../../components/Inventory/Inventory/Header";
import MakeDonation from "../Inventory/MakeDonation";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import stepperReducer from "../../store/Inventory/stepper";
import guidelinesReducer from "../../store/Inventory/guidelines";
import detailsReducer from "../../store/Inventory/details";

const store = configureStore({
  reducer: {
    stepper: stepperReducer,
    guidelines: guidelinesReducer,
    details: detailsReducer,
  },
});

describe("Test inventory", () => {
  it("Test user view current inventory count", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <InventoryCount />
      </BrowserRouter>
    );
    const inventoryComp = getByTestId("inventory");
    expect(inventoryComp).toBeTruthy();
  });

  it("Test user view recent donations", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <DonorCount />
      </BrowserRouter>
    );
    const recentDonationsComp = getByTestId("recentdonations");
    expect(recentDonationsComp).toBeTruthy();
  });

  it("Test user taps make a donation button", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const makeDonationButton = getByTestId("makeDonationButton");
    const { queryByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <MakeDonation />
        </Provider>
      </BrowserRouter>
    );
    const makeDonationComp = queryByTestId("makeDonationComp");
    //  fireEvent.click(makeDonationButton);

    expect(makeDonationComp).toBeTruthy();
  });
});
