import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { render, screen } from "@testing-library/react";
import BigImage from "./BigImage";
import { setImages, showBigImage, setBigImageIndex } from "../../redux/actions";
import { mockFetchData } from "../../mocks/mockFetch";

beforeEach(() => {
  store.dispatch(setImages(mockFetchData));
  store.dispatch(showBigImage(true));
  store.dispatch(setBigImageIndex(0));
  global.window.scroll = jest.fn();

  render(
    <Provider store={store}>
      <BigImage />
    </Provider>
  );
});

afterEach(() => {
  global.window.scroll.mockClear();
});

test("renders a back button, an image, and image info ", () => {
  expect(screen.getByText("back to gallery")).toBeInTheDocument();
  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(screen.getByText(/Title/i)).toBeInTheDocument();
  expect(screen.getByText(/Upvotes/i)).toBeInTheDocument();
  expect(screen.getByText(/Downvotes/i)).toBeInTheDocument();
  expect(screen.getByText(/Score/i)).toBeInTheDocument();
});
