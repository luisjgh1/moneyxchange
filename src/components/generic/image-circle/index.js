import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const ImageCircle = ({ alt, imageSrc, ...props }) => (
  <img alt={alt} className="image-circle" src={imageSrc} {...props} />
);

ImageCircle.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string
};

ImageCircle.defaultProps = {
  alt: ""
};

export default ImageCircle;
