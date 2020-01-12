import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const TextField = ({ type }) => {
  return (
    <div className="input-container">
      <input placeholder="Algo" type="text" id="name" />
    </div>
  );
};

TextField.propTypes = {
  type: PropTypes.oneOf(["text", "number", "password"])
};

TextField.defaultProps = {
  type: "text"
};

export default TextField;
