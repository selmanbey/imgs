import configureMockStore from "redux-mock-store";
import { SECTIONS, SORT_TYPES } from "../constants";

const middlewares = [];
const mockStore = configureMockStore(middlewares);

const mockState = {
  bigImage: { bigImageOpen: false, bigImageIndex: null },
  galleryPrefs: {
    images: [],
    section: SECTIONS.hot,
    sort: SORT_TYPES.viral,
    page: 0,
    window: null,
    showViral: true,
  },
};

let store = mockStore(() => mockState);

export default store;
