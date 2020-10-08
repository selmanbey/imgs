import React from "react";
import { motion } from "framer-motion";
import "./Image.css";

const animationVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.4 },
  },
};

function Image({
  link,
  title,
  description,
  imageIndex,
  setBigImageIndex,
  setShowBigImage,
}) {
  let fileType = link.slice(-3); // jpg, png, mp4

  function activateBigImage() {
    setBigImageIndex(imageIndex);
    setShowBigImage(true);
  }

  return (
    <>
      <article className="image-thumbnail-wrapper">
        {fileType === "mp4" ? (
          <motion.video variants={animationVariants} onClick={activateBigImage}>
            <source src={link} />
            Unfortunately, your browser does not support video tags
          </motion.video>
        ) : (
          <motion.img
            src={link}
            alt={title}
            initial="hidden"
            animate="show"
            variants={animationVariants}
            onClick={activateBigImage}
          />
        )}
        <p>{description || title}</p>
      </article>
    </>
  );
}

export default Image;
