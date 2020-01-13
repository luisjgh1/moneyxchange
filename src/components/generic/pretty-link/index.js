import React from "react";

import "./styles.scss";

const PrettyLink = ({ title, ...props }) => (
  <a className="pretty-link" {...props}>
    {title}
  </a>
);

export default PrettyLink;
