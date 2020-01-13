/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/landing/header/";
import Converter from "../../components/landing/converter/";
import History from "../../components/landing/history/";
import Footer from "../../components/landing/footer";
import LandingActions from "../../redux/landing/actions";
import { removeCommas } from "../../lib/utils";
import "./styles.scss";

const LandingPage = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [history, result] = useSelector(state => [
    state.landing.history,
    state.landing.result
  ]);

  const handleChangeAmount = ({ target: { value } }) => {
    const lastCharacer = value[value.length - 1];
    const unnecesaryDot = lastCharacer === "." && amount.split(".").length > 1;

    if (unnecesaryDot) return null;

    if (lastCharacer)
      return value[value.length - 1].match(/^[0-9.]*$/)
        ? setAmount(value)
        : null;
    else return setAmount(value);
  };

  const handleSubmitAmount = () => {
    dispatch(LandingActions.convert(removeCommas(amount)));
  };

  useEffect(() => {
    dispatch(LandingActions.getHistory());
  }, []);

  return (
    <div>
      <Header />
      <Converter
        amount={amount}
        onChangeAmount={handleChangeAmount}
        onSubmitAmount={handleSubmitAmount}
        result={result}
      />
      <History history={history} />
      <Footer />
    </div>
  );
};

export default LandingPage;
