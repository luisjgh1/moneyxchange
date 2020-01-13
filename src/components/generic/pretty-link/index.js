import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const PrettyLink = ({ title, ...props }) => (
  <a className="pretty-link" {...props}>
    {title}
  </a>
);

PrettyLink.propTypes = {
  title: PropTypes.string.isRequired
};

export default PrettyLink;
