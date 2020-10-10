import React, { useMemo } from "react";
import "./Gallery.css";
import Image from "../Image/Image";
import BigImage from "../BigImage/BigImage";
import { connect } from "react-redux";
import { showBigImage, setBigImageIndex } from "../../redux/actions";

function Gallery({ images, bigImageOpen, bigImageIndex, loading }) {
  const allImages = useMemo(() => {
    return images && images.map((_, i) => <Image key={i} imageIndex={i} />);
  }, [images]);

  return (
    <section
      role="region"
      className={loading ? "gallery gallery-loading" : "gallery"}
    >
      {bigImageOpen && bigImageIndex !== null ? (
        <BigImage index={bigImageIndex} />
      ) : (
        <>{allImages}</>
      )}
    </section>
  );
}

const mapStateToProps = (state) => {
  const { images } = state.galleryPrefs;
  const { bigImageOpen, bigImageIndex } = state.bigImage;

  return { images, bigImageOpen, bigImageIndex };
};

const mapDispatchToProps = { showBigImage, setBigImageIndex };

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
