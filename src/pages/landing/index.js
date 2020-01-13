import React from "react";

import Header from "../../components/landing/header/";
import Converter from "../../components/landing/converter/";
import "./styles.scss";

const LandingPage = () => (
  <div
    style={{
      width: "100%",
      display: "flex",
      flexDirection: "column"
    }}
  >
    <Header />
    <Converter />
  </div>
);

export default LandingPage;
