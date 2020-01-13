import React from "react";
import { render, fireEvent } from "@testing-library/react";
import axios from "axios";

import Converter from "../../../landing/converter";

it("It changes amount state when input changes", () => {
  const spy = jest.fn();
  const utils = render(
    <Converter
      onSubmitAmount={() => {}}
      result=""
      amount="22"
      onChangeAmount={spy}
    />
  );

  const input = utils.getByTestId("amount-field");
  fireEvent.change(input, { target: { value: "23" } });
  expect(spy).toHaveBeenCalled();
});
