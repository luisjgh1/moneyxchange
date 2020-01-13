import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import Landing from "../../landing";
import { getHistory } from "../../../redux/landing/actions";

describe("Landing suit", () => {
  let store;
  const mockStore = configureStore([thunk]);
  beforeEach(() => {
    store = mockStore({
      landing: {
        amount: "",
        result: "",
        history: {}
      }
    });
    store.dispatch = jest.fn();
  });

  it("It calls an action when mounting to get historic price", () => {
    render(
      <Provider store={store} r>
        <Landing />
      </Provider>
    );

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it("It calls an action when submitting", () => {
    const utils = render(
      <Provider store={store} r>
        <Landing />
      </Provider>
    );

    const btn = utils.getByTestId("calculate");

    fireEvent.click(btn);
    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });
});
