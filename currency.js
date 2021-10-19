class Currency {
  constructor(firstCurrency, secondCurrency) {
    this.firstCurrency = firstCurrency;
    this.secondCurrency = secondCurrency;
    this.url = "https://api.exchangerate.host/latest?base=";
    this.amount = null;
  }

  exchange() {
    return new Promise((resolve, reject) => {
      fetch(this.url + this.firstCurrency)
        .then((response) => response.json())
        .then((data) => {
          if (this.secondCurrency == this.firstCurrency) {
            resolve(1 * this.amount);
          } else {
            const currency = data["rates"][this.secondCurrency];
            resolve(currency * this.amount);
          }
 
        })
        .catch((err) => reject(err));
    });
  }

  changeFirstCurrency(newCurrency) {
    this.firstCurrency = newCurrency;
  }

  changeSecondCurrency(newCurrency) {
    this.secondCurrency = newCurrency;
  }

  changeAmount(amount) {
    this.amount = amount;
  }
}
