import { SHOW_BIG_IMAGE, SET_BIG_IMAGE_INDEX } from "../actionTypes";

const initialState = {
  bigImageOpen: false,
  bigImageIndex: null,
};

const bigImage = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_BIG_IMAGE: {
      return { ...state, bigImageOpen: payload };
    }
    case SET_BIG_IMAGE_INDEX:
      return { ...state, bigImageIndex: payload };
    default:
      return state;
  }
};

export default bigImage;
