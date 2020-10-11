import React from "react";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { showBigImage, setBigImageIndex } from "../../redux/actions";
import "./Image.css";

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
        <motion.div
          className="image-wrapper"
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,

            transition: { delay: imageIndex * 0.1 },
          }}
          exit={{ scale: 0.2, opacity: 0 }}
        >
          <p data-testid="image-description">{description || title}</p>

          {fileType === "mp4" ? (
            <video src={link} onClick={activateBigImage} />
          ) : (
            <img src={link} alt={title} onClick={activateBigImage} />
          )}
        </motion.div>
      </article>
    </>
  );
}

const mapStateToProps = (state) => ({ images: state.galleryPrefs.images });
const mapDispatchToProps = { showBigImage, setBigImageIndex };

export default connect(mapStateToProps, mapDispatchToProps)(Image);
