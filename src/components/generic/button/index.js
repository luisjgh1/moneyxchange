import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const Button = ({ text, onClick, style, testid }) => (
  <button
    data-testid={testid}
    onClick={onClick}
    style={style}
    className="button"
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.shape({}),
  testid: PropTypes.string
};

Button.defaultProps = {
  onClick: () => {},
  style: {},
  testid: ""
};

export default Button;
