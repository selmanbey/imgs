import React, { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!section) return;
    setLoading(true);

    fetchImagesFromImgur({ section, sort, window, page, showViral })
      .then((images) => {
        setLoading(false);
        setImages(images);
      })
      .catch(
        (error) => {
          setLoading(false);
          console.error("Image retrieval failed!", error);
        } // TODO
      );
  }, [section, sort, window, page, showViral, setImages]);

  // TODO: REMOVE
  useEffect(() => {
    images && console.log(images);
  }, [images]);

  return (
    <main className="app">
      <GalleryPrefs />
      <Gallery loading={loading} />
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
