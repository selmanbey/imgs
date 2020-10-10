import React, { useEffect, useState } from "react";
import "./App.css";
import GalleryPrefs from "./components/GalleryPrefs/GalleryPrefs";
import Gallery from "./components/Gallery/Gallery";
import Navigation from "./components/Navigation/Navigation";
import LoadingIcon from "./components/LoadingIcon/LoadingIcon";
import { connect } from "react-redux";
import { setImages } from "./redux/actions";
import { fetchImagesFromImgur } from "./modules/fetch";

function App(props) {
  const {
    images,
    section,
    sort,
    page,
    window,
    showViral,
    bigImageOpen,
  } = props;
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
      {!bigImageOpen && <GalleryPrefs />}
      {loading && <LoadingIcon />}
      <Gallery loading={loading} />
      <Navigation />
    </main>
  );
}

const mapStateToProps = (state) => {
  const { images, section, sort, page, window, showViral } = state.galleryPrefs;
  const { bigImageOpen } = state.bigImage;
  return { images, section, sort, page, window, showViral, bigImageOpen };
};
const mapDispatchToProps = { setImages };

export default connect(mapStateToProps, mapDispatchToProps)(App);
