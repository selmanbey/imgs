import React, { useState } from "react";
import "./Gallery.css";
import LoadingIcon from "./LoadingIcon";
import Image from "./Image";
import BigImage from "./BigImage";
import { motion } from "framer-motion";
import { connect } from "react-redux";

const animationVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Gallery({ loading, images }) {
  const [showBigImage, setShowBigImage] = useState(false);
  const [bigImageIndex, setBigImageIndex] = useState(null);

  return showBigImage && bigImageIndex !== null ? (
    <div className="gallery">
      {loading && <LoadingIcon />}

      <BigImage
        index={bigImageIndex}
        setShowBigImage={setShowBigImage}
        setBigImageIndex={setBigImageIndex}
      />
    </div>
  ) : (
    <>
      {images && (
        <motion.div
          className="gallery"
          initial="hidden"
          animate="show"
          variants={animationVariants}
        >
          {loading && <LoadingIcon />}

          {images.map((img, i) => (
            <Image
              key={i}
              imageIndex={i}
              link={img.images[0].link}
              title={img.title && img.title.trim()}
              description={img.description && img.description.trim()}
              setShowBigImage={setShowBigImage}
              setBigImageIndex={setBigImageIndex}
            />
          ))}
        </motion.div>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({ images: state.galleryPrefs.images });

export default connect(mapStateToProps)(Gallery);
