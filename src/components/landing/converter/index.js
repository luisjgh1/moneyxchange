import React from "react";
import PropTypes from "prop-types";
import TextField from "../../generic/text-field";
import Button from "../../generic/button";

import "./styles.scss";

const Converter = () => (
  <div className="converter">
    <div className="converter__input-container">
      <TextField type="number" placeholder="EUR" />
      <TextField type="number" placeholder="USD" disabled />
    </div>
    <Button text="Convert" />
  </div>
);

Converter.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Converter;
