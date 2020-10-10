import { combineReducers } from "redux";
import galleryPrefs from "./galleryPrefs";
import bigImage from "./bigImage";

export default combineReducers({ bigImage, galleryPrefs });
