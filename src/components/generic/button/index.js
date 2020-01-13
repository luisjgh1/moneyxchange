import React from "react";

import "./styles.scss";

const Button = ({ text, onClick, style }) => (
  <button onClick={onClick} style={style} className="button">
    {text}
  </button>
);

export default Button;
