import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const TextField = ({ type, onChange, ...props }) => {
  return (
    <div className="input-container">
      <input onChange={onChange} {...props} type={type} />
    </div>
  );
};

TextField.propTypes = {
  type: PropTypes.oneOf(["text", "number", "password"]),
  onChange: PropTypes.func
};

TextField.defaultProps = {
  type: "text",
  onChange: () => {}
};

export default TextField;
