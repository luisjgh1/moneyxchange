import axios from "axios";
import moment from "moment";

import HistoricPriceModel from "../models/historic-price";

const generateHistoricUrl = daysToSubstract =>
  `http://data.fixer.io/api/${moment()
    .subtract(daysToSubstract, "d")
    .format("YYYY-MM-DD")}?access_key=6c4a99493164c011d06077707ebf2fd4`;

export default {
  getHistoricPrice: async amount => {
    try {
      const responseArray = (
        await Promise.all([
          axios.get(generateHistoricUrl(1)),
          axios.get(generateHistoricUrl(2)),
          axios.get(generateHistoricUrl(3))
        ])
      )
        .filter(response => response.status === 200 && response.data.success)
        .map(response => response.data);

      return new HistoricPriceModel(responseArray).getNecessaryCurrencies();
    } catch (err) {}
  },
  convert: async amount => {
    try {
      const fakeResponse = {
        success: true,
        query: {
          from: "GBP",
          to: "JPY",
          amount: amount
        },
        info: {
          timestamp: 1519328414,
          rate: 148.972231
        },
        historical: "",
        date: "2018-02-22",
        result: Number(amount + amount * 0.23)
      };

      return fakeResponse;
    } catch (err) {}
  }
};
