import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Gallery from "./Gallery";
import { setImages } from "../../redux/actions";
import { mockFetchData } from "../../mocks/mockFetch";

beforeEach(() => {
  store.dispatch(setImages(mockFetchData));
  global.window.scroll = jest.fn();

  render(
    <Provider store={store}>
      <Gallery />
    </Provider>
  );
});

afterEach(() => {
  global.window.scroll.mockClear();
});

test("renders all images by default", () => {
  let images = screen.getAllByRole("img");
  expect(images.length).toBe(3);
});

test("renders big image if user clicks on one of the images", () => {
  user.click(screen.getAllByRole("img")[0]);
  expect(screen.getByText("back to gallery")).toBeInTheDocument();
});
