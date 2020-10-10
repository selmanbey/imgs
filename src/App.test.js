import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { mockFetch } from "./mocks/mockFetch";

beforeEach(async () => {
  jest.spyOn(global, "fetch").mockImplementation(mockFetch);

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

afterEach(() => {
  global.fetch.mockClear();
});

test("renders app structure correctly", async () => {
  let main = await screen.findByRole("main");
  expect(main).toBeInTheDocument();

  let nav = await screen.findByRole("navigation");
  expect(nav).toBeInTheDocument();

  let sections = await screen.findAllByRole("region");
  expect(sections.length).toBe(2);
});

test("fires fetch on mount", async () => {
  await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
});

test("renders images after fetching data", async () => {
  let imgs = await screen.findAllByRole("img");
  expect(imgs.length).toBe(3);
});
