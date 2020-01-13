import axios from "axios";
import moment from "moment";

import HistoricPriceModel from "../models/historic-price";

export default {
  getHistoricPrice: async amount => {
    try {
      const responseArray = (
        await Promise.all([
          axios.get(
            `http://data.fixer.io/api/${moment()
              .subtract(1, "d")
              .format(
                "YYYY-MM-DD"
              )}?access_key=6c4a99493164c011d06077707ebf2fd4`
          ),
          axios.get(
            `http://data.fixer.io/api/${moment()
              .subtract(2, "d")
              .format(
                "YYYY-MM-DD"
              )}?access_key=6c4a99493164c011d06077707ebf2fd4`
          ),
          axios.get(
            `http://data.fixer.io/api/${moment()
              .subtract(3, "d")
              .format(
                "YYYY-MM-DD"
              )}?access_key=6c4a99493164c011d06077707ebf2fd4`
          )
        ])
      )
        .filter(response => response.status === 200 && response.data.success)
        .map(response => response.data);

      return new HistoricPriceModel(responseArray).getNecessaryCurrencies();
    } catch (err) {}
  },
  convert: async amount => {
    try {
      const response = await axios.get(
        "http://data.fixer.io/api/convert/?access_key=6c4a99493164c011d06077707ebf2fd4&from=EUR&to=USD&amount=25&date=2020-01-01"
      );
      console.log("RESP:", response);
      return response;
    } catch (err) {}
  }
};
