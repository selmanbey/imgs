import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { setImages } from "../../redux/actions";
import { mockFetchData } from "../../mocks/mockFetch";

beforeEach(() => {
  store.dispatch(setImages(mockFetchData));

  render(
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
});

test("renders two buttons", () => {
  expect(screen.getAllByRole("button").length).toBe(2);
});

test("back button come disabled by default, next button is active", () => {
  expect(screen.getByTestId("nav-back-button")).toBeDisabled();
  expect(screen.getByTestId("nav-next-button")).not.toBeDisabled();
});
