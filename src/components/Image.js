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

function Image({ link, title }) {
  let fileType = link.slice(-3); // jpg, png, mp4

  return (
    <article className="image-thumbnail-wrapper">
      {fileType === "mp4" ? (
        <motion.video controls variants={animationVariants}>
          <source src={link} />
          Unfortunately, your browser does not support video tags
        </motion.video>
      ) : (
        <motion.img src={link} alt={title} variants={animationVariants} />
      )}
      <p>{title}</p>
    </article>
  );
}

export default Image;
