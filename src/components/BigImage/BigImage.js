import React, { useEffect } from "react";
import "./BigImage.css";
import { motion, AnimatePresence } from "framer-motion";
import { connect } from "react-redux";
import { showBigImage } from "../../redux/actions";

const bigImageAnim = {
  initial: {
    x: 300,
    position: "absolute",
    opacity: 0,
  },
  animate: {
    x: 0,
    position: "static",
    opacity: 1,
  },
  exit: {
    x: -300,
    position: "absolute",
    opacity: 0,
  },
};

function BigImage({ images, bigImageIndex, showBigImage }) {
  let image = images[bigImageIndex];
  let { title, description, score, ups, downs } = image;
  let link = image.images[0].link;
  let fileType = link.slice(-3); // jpg, png, mpg;

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <div className="big-image">
      <button onClick={() => showBigImage(false)}>{"back to gallery"}</button>
      <div className="big-image-wrapper">
        {fileType === "mp4" ? (
          <AnimatePresence>
            <motion.video
              controls
              initial="initial"
              animate="animate"
              exit="exit"
              variants={bigImageAnim}
              src={link}
            />
          </AnimatePresence>
        ) : (
          <AnimatePresence>
            <motion.img
              key={link}
              src={link}
              alt={title}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={bigImageAnim}
            />
          </AnimatePresence>
        )}
      </div>
      <ul>
        {title && (
          <li>
            Title: <span>{title}</span>
          </li>
        )}
        {description && (
          <li>
            Description:
            <span>{description}</span>
          </li>
        )}
        <li>
          Upvotes: <span>{ups}</span>
        </li>
        <li>
          Downvotes: <span>{downs}</span>
        </li>
        <li>
          Score: <span>{score}</span>
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  images: state.galleryPrefs.images,
  bigImageIndex: state.bigImage.bigImageIndex,
});
const mapDispatchToProps = { showBigImage };

export default connect(mapStateToProps, mapDispatchToProps)(BigImage);
