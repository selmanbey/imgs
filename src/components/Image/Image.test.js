import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { render, screen } from "@testing-library/react";
import Image from "./Image";
import { setImages } from "../../redux/actions";
import { mockFetchData } from "../../mocks/mockFetch";

beforeEach(() => {
  store.dispatch(setImages(mockFetchData));

  render(
    <Provider store={store}>
      <Image imageIndex={0} />
    </Provider>
  );
});

test("renders an image and a description", () => {
  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(screen.getByTestId("image-description")).toBeInTheDocument();
});
