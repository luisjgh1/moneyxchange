import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import "./styles.scss";

const History = ({ history }) => {
  const currencyKeys = Object.keys(history);

  return (
    <div className="history">
      <p className="title">Historic Price</p>
      <div className="history__summaries-container">
        {currencyKeys.map(key => (
          <div className="history__currency-summary">
            <h3>{key}:</h3>
            <p>{`${history[key][0].date}: ${history[key][0].value}`}</p>
            <p>{`${history[key][0].date}: ${history[key][1].value}`}</p>
            <p>{`${history[key][0].date}: ${history[key][2].value}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
