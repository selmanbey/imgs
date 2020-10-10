import React from "react";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { showBigImage, setBigImageIndex } from "../../redux/actions";
import "./Image.css";

const animationVariants = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
  },
};

function Image({ images, imageIndex, setBigImageIndex, showBigImage }) {
  let image = images[imageIndex];
  let { title, description } = image;
  let link = image.images[0].link;
  let fileType = link.slice(-3); // jpg, png, mp4

  // cut the too long titles/descriptions to avoid ugly looking thumbnails
  // full title/description will be available upon clicking the image anyway
  title = title && title.length > 70 ? title.slice(0, 70).concat("...") : title;
  description =
    description && description.length > 70
      ? description.slice(0, 70).concat("...")
      : description;

  function activateBigImage() {
    setBigImageIndex(imageIndex);
    showBigImage(true);
  }

  return (
    <>
      <article className="image-thumbnail">
        <div className="image-wrapper">
          <p>{description || title}</p>

          {fileType === "mp4" ? (
            <motion.video
              variants={animationVariants}
              onClick={activateBigImage}
            >
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
        </div>
      </article>
    </>
  );
}

const mapStateToProps = (state) => ({ images: state.galleryPrefs.images });
const mapDispatchToProps = { showBigImage, setBigImageIndex };

export default connect(mapStateToProps, mapDispatchToProps)(Image);
