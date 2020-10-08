import React from "react";
import "./BigImage.css";
import { motion, AnimatePresence } from "framer-motion";
import { connect } from "react-redux";

function BigImage({ images, index, setBigImageIndex, setShowBigImage }) {
  let image = images[index];
  //title, description, upvotes, downvotes and score
  let { title, description, score, ups, downs } = image;

  let link = image.images[0].link;
  let fileType = link.slice(-3); // jpg, png, mpg;

  return (
    <AnimatePresence>
      <div className="big-image-wrapper">
        <span id="close-big-image" onClick={() => setShowBigImage(false)}>
          ✖︎
        </span>
        {fileType === "mp4" ? (
          <motion.video controls>
            <source src={link} />
            Unfortunately, your browser does not support video tags
          </motion.video>
        ) : (
          <motion.img src={link} />
        )}
        {title && <p>{title}</p>}
        {description && <p>{description}</p>}
        <ul>
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
    </AnimatePresence>
  );
}

const mapStateToProps = (state) => ({ images: state.galleryPrefs.images });

export default connect(mapStateToProps)(BigImage);
