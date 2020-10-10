import React from "react";
import "./Gallery.css";
import Image from "../Image/Image";
import BigImage from "../BigImage/BigImage";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { showBigImage, setBigImageIndex } from "../../redux/actions";

function Gallery({ images, bigImageOpen, bigImageIndex, loading }) {
  return (
    <motion.section
      className={loading ? "gallery gallery-loading" : "gallery"}
      animate={{
        transition: {
          staggerChildren: 1,
        },
      }}
    >
      {bigImageOpen && bigImageIndex !== null ? (
        <BigImage index={bigImageIndex} />
      ) : (
        <>
          {images && images.map((img, i) => <Image key={i} imageIndex={i} />)}
        </>
      )}
    </motion.section>
  );
}

const mapStateToProps = (state) => {
  const { images } = state.galleryPrefs;
  const { bigImageOpen, bigImageIndex } = state.bigImage;

  return { images, bigImageOpen, bigImageIndex };
};

const mapDispatchToProps = { showBigImage, setBigImageIndex };

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
