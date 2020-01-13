import types from "./types";
import conversionRepository from "../../lib/api/repositories/conversion-repository";

const setResult = result => ({
  type: types.SET_RESULT,
  result
});

const setHistory = history => ({
  type: types.SET_HISTORY,
  history
});

const getHistory = () => {
  return async dispatch => {
    try {
      const result = await conversionRepository.getHistoricPrice();

      dispatch(setHistory(result));
    } catch (err) {}
  };
};

const convert = amount => {
  return async dispatch => {
    try {
      const { result } = await conversionRepository.convert(amount);
      dispatch(setResult(result));
    } catch (err) {}
  };
};

export default {
  getHistory,
  convert
};
