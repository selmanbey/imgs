import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import GalleryPrefs from "./GalleryPrefs";
import { SECTIONS } from "../../constants";

beforeEach(() => {
  render(
    <Provider store={store}>
      <GalleryPrefs />
    </Provider>
  );
});

test("renders 3 buttons for 3 sections: hot, top and user", () => {
  expect(screen.getByText(SECTIONS.hot, { selector: "button" }));
  expect(screen.getByText(SECTIONS.top, { selector: "button" }));
  expect(screen.getByText(SECTIONS.user, { selector: "button" }));
});

test("renders at least two options", () => {
  expect(screen.getByText("sort:")).toBeInTheDocument();
  expect(screen.queryAllByText("viral").length).toBeGreaterThanOrEqual(2);
});

test("renders a third option when active section is top", async () => {
  let topBtn = screen.getByRole("button", { name: SECTIONS.top });
  user.click(topBtn);

  let window = await screen.findByText("window:");
  expect(window).toBeInTheDocument();
});
