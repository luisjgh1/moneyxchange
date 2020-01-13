import React from "react";
import PropTypes from "prop-types";

import ImageCircle from "../../generic/image-circle";
import PrettyLink from "../../generic/pretty-link";

import "./styles.scss";

const linksArray = [
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
];

const Header = ({ links }) => (
  <div className="header__container">
    <ImageCircle
      imageSrc="https://www.gratistodo.com/wp-content/uploads/2016/09/imagenes-de-Spiderman-11.jpg"
      alt="pretty-image"
    />
    <div className="links-container">
      {linksArray.map(link => (
        <PrettyLink href={link.url} title={link.title} />
      ))}
    </div>
  </div>
);

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Header;
