export default class HistoricPrice {
  constructor(historicArray) {
    this.historicArray = historicArray;
  }

  getNecessaryCurrencies() {
    const requiredCurrencies = {
      GBP: [],
      AUD: [],
      CAD: [],
      PLN: [],
      MXN: [],
      EUR: [],
      BAM: [],
      BSD: []
    };

    this.historicArray.forEach(history => {
      Object.keys(requiredCurrencies).forEach(key => {
        const {
          date,
          rates: { [key]: value }
        } = history;
        requiredCurrencies[key].push({
          date,
          value
        });
      });
    });

    return requiredCurrencies;
  }
}
