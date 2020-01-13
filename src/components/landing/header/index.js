import React from "react";
import PropTypes from "prop-types";

import ImageCircle from "../../generic/image-circle";
import PrettyLink from "../../generic/pretty-link";

import "./styles.scss";

const Header = ({ links }) => (
  <div className="header__container">
    <ImageCircle />
    <div className="links-container">
      {[
        {
          url: "www.google.com",
          title: "Something"
        },
        {
          url: "www.google.com",
          title: "Something"
        },
        {
          url: "www.google.com",
          title: "Something"
        },
        {
          url: "www.google.com",
          title: "Something"
        }
      ].map(link => (
        <PrettyLink href={link.url} title={link.title} />
      ))}
    </div>
  </div>
);

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Header;
