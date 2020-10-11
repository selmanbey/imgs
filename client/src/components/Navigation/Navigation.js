import React from "react";
import "./Navigation.css";
import { connect } from "react-redux";
import { setPage, setBigImageIndex } from "../../redux/actions";

function Navigation({
  images,
  page,
  bigImageOpen,
  bigImageIndex,
  setPage,
  setBigImageIndex,
}) {
  return (
    <nav className="navigation">
      <button
        id="nav-back-button"
        data-testid="nav-back-button"
        onClick={() => {
          if (bigImageOpen) setBigImageIndex(bigImageIndex - 1);
          else setPage(page - 1);
        }}
        disabled={bigImageOpen ? bigImageIndex === 0 : page === 0}
      />
      <button
        id="nav-next-button"
        data-testid="nav-next-button"
        onClick={() => {
          if (bigImageOpen && bigImageIndex < images.length - 1) {
            setBigImageIndex(bigImageIndex + 1);
          } else if (bigImageOpen) {
            setPage(page + 1);
            setBigImageIndex(0);
          } else {
            setPage(page + 1);
          }
        }}
      />
    </nav>
  );
}

const mapStateToProps = (state) => ({
  images: state.galleryPrefs.images,
  page: state.galleryPrefs.page,
  bigImageOpen: state.bigImage.bigImageOpen,
  bigImageIndex: state.bigImage.bigImageIndex,
});
const mapDispatchToProps = { setPage, setBigImageIndex };

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
