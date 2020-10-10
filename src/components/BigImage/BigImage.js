import React, { useEffect } from "react";
import "./BigImage.css";
import { motion, AnimatePresence } from "framer-motion";
import { connect } from "react-redux";
import { showBigImage } from "../../redux/actions";

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
    <AnimatePresence>
      <motion.div
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        className="big-image-wrapper"
      >
        <button onClick={() => showBigImage(false)}>{"back to gallery"}</button>
        {fileType === "mp4" ? (
          <video controls>
            <source src={link} />
            Unfortunately, your browser does not support video tags
          </video>
        ) : (
          <img src={link} />
        )}
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
      </motion.div>
    </AnimatePresence>
  );
}

const mapStateToProps = (state) => ({
  images: state.galleryPrefs.images,
  bigImageIndex: state.bigImage.bigImageIndex,
});
const mapDispatchToProps = { showBigImage };

export default connect(mapStateToProps, mapDispatchToProps)(BigImage);
