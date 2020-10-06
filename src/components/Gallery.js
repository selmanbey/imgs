import React from "react";
import Image from "./Image";
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

function Gallery({ images }) {
  return (
    <div>
      {images && (
        <motion.div
          className="gallery"
          initial="hidden"
          animate="show"
          variants={animationVariants}
        >
          {images.map((img, i) => (
            <Image key={i} link={img.images[0].link} title={img.title.trim()} />
          ))}
        </motion.div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({ images: state.galleryPrefs.images });

export default connect(mapStateToProps)(Gallery);
