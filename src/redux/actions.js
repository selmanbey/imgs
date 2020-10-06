import {
  SET_IMAGES,
  SET_PAGE,
  SET_SECTION,
  SET_SHOW_VIRAL,
  SET_SORT_TYPE,
  SET_WINDOW,
} from "./actionTypes";

export const setImages = (images) => ({
  type: SET_IMAGES,
  payload: images,
});

export const setSection = (section) => ({
  type: SET_SECTION,
  payload: section,
});

export const setSort = (sortType) => ({
  type: SET_SORT_TYPE,
  payload: sortType,
});

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const setWindow = (window) => ({
  type: SET_WINDOW,
  payload: window,
});

export const setShowViral = (showViral) => ({
  type: SET_SHOW_VIRAL,
  payload: showViral,
});
