import React, { useEffect, useState } from "react";
import "./App.css";
import GalleryPrefs from "./components/GalleryPrefs";
import Gallery from "./components/Gallery";
import Navigation from "./components/Navigation";
import LoadingIcon from "./components/LoadingIcon";
import { connect } from "react-redux";
import { setImages } from "./redux/actions";
import { fetchImagesFromImgur } from "./modules/fetch";

function App(props) {
  const { images, section, sort, page, window, showViral } = props;
  const { setImages } = props;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [section, sort, window, page, showViral]);

  useEffect(() => {
    if (!section) return;

    if (loading) setLoading(false);
    fetchImagesFromImgur({ section, sort, window, page, showViral })
      .then((images) => {
        setImages(images);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Image retrieval failed!", error); // TODO
        setLoading(false);
      });
  }, [loading, setImages]);

  // TODO: REMOVE
  useEffect(() => {
    images && console.log(images);
  }, [images]);

  return (
    <main className="app">
      <GalleryPrefs />
      {loading ? <LoadingIcon /> : <Gallery />}
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
