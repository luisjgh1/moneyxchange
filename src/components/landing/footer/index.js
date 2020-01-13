import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";
const Footer = ({ links }) => (
  <div className="footer">
    <div className="footer__column">
      <h5>Lorem ipsum</h5>
      <p>Lorem ipsum ipsum ipsum</p>
      <p>Lorem ipsum ipsum ipsum</p>
    </div>
    <div className="footer__column">
      <h5>Lorem ipsum</h5>
      <p>Lorem ipsum ipsum ipsum</p>
      <p>Lorem ipsum ipsum ipsum</p>
    </div>
    <div className="footer__column">
      <h5>Lorem ipsum</h5>
      <p>Lorem ipsum ipsum ipsum</p>
      <p>Lorem ipsum ipsum ipsum</p>
    </div>
    <div className="footer__column">
      <h5>Lorem ipsum</h5>
      <p>Lorem ipsum ipsum ipsum</p>
      <p>Lorem ipsum ipsum ipsum</p>
    </div>
  </div>
);

Footer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Footer;
