import types from "./types";

const initialState = {
  amount: "",
  result: "",
  history: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_AMOUNT:
      return {
        ...state,
        amount: action.amount
      };
    case types.SET_HISTORY:
      return {
        ...state,
        history: action.history
      };
    default:
      return state;
  }
};

export default reducer;
