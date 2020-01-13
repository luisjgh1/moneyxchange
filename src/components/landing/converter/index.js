import React from "react";
import PropTypes from "prop-types";

import TextField from "../../generic/text-field";
import Button from "../../generic/button";
import { formatNumber } from "../../../lib/utils";
import "./styles.scss";

const Converter = ({ amount, result, onChangeAmount, onSubmitAmount }) => (
  <div className="converter">
    <div className="converter__input-container">
      <TextField
        onChange={onChangeAmount}
        value={formatNumber(amount)}
        placeholder="EUR"
      />
      <div className="gutter" />
      <TextField value={result} placeholder="USD" disabled />
    </div>
    <div className="converter__button-container">
      <Button onClick={onSubmitAmount} text="Calculate" />
    </div>
  </div>
);

Converter.propTypes = {
  amount: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  onChangeAmount: PropTypes.func.isRequired
};

export default Converter;
