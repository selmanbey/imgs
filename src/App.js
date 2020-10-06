import React, { useEffect } from "react";
import "./App.css";
import GalleryPrefs from "./components/GalleryPrefs";
import Gallery from "./components/Gallery";
import Navigation from "./components/Navigation";
import { connect } from "react-redux";
import { setImages } from "./redux/actions";
import { fetchImagesFromImgur } from "./modules/fetch";

function App(props) {
  const { images, section, sort, page, window, showViral } = props;
  const { setImages } = props;

  useEffect(() => {
    if (!section) return;

    fetchImagesFromImgur({ section, sort, window, page, showViral })
      .then((images) => setImages(images))
      .catch((error) => console.error("Image retrieval failed!", error));
  }, [section, sort, window, page, showViral, setImages]);

  // TODO: REMOVE
  useEffect(() => {
    images && console.log(images);
  }, [images]);

  return (
    <main>
      <GalleryPrefs />
      <Gallery />
      <Navigation />
    </main>
  );
}

const mapStateToProps = (state) => {
  const { images, section, sort, page, window, showViral } = state.galleryPrefs;
  return { images, section, sort, page, window, showViral };
};
const mapDispatchToProps = { setImages };

export default connect(mapStateToProps, mapDispatchToProps)(App);
