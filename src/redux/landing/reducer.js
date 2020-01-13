import types from "./types";

const initialState = {
  amount: "",
  result: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_AMOUNT:
      return {
        ...state,
        amount: action.amount
      };
    default:
      return state;
  }
};

export default reducer;
