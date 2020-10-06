import { SECTIONS, SORT_TYPES } from "../../constants";
import {
  SET_IMAGES,
  SET_SECTION,
  SET_SORT_TYPE,
  SET_PAGE,
  SET_WINDOW,
  SET_SHOW_VIRAL,
} from "../actionTypes";

const initialState = {
  images: [],
  section: SECTIONS.hot,
  sort: SORT_TYPES.viral,
  page: 0,
  window: null,
  showViral: true,
};

const galleryPrefs = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_IMAGES: {
      return { ...state, images: payload };
    }
    case SET_SECTION:
      return { ...state, section: payload };
    case SET_SORT_TYPE:
      return { ...state, sort: payload };
    case SET_PAGE:
      return { ...state, page: payload };
    case SET_WINDOW:
      return { ...state, window: payload };
    case SET_SHOW_VIRAL:
      return { ...state, showViral: payload };
    default:
      return state;
  }
};

export default galleryPrefs;
