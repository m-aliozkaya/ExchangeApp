const amountElement = document.getElementById("amount");
const firstElementCurrency = document.getElementById("firstCurrency");
const secondElementCurrency = document.getElementById("secondCurrency");

const currency = new Currency("USD", "TRY");
const ui = new UI(firstElementCurrency, secondElementCurrency);

eventListeners();

function eventListeners() {
  amountElement.addEventListener("input", exchangeAmount);
  firstElementCurrency.onchange = function () {
    currency.changeFirstCurrency(
      firstElementCurrency.options[firstElementCurrency.selectedIndex]
        .textContent
    );
    ui.changeFirst();
    exchangeAmount();
  };
  secondElementCurrency.onchange = function () {
    currency.changeSecondCurrency(
      secondElementCurrency.options[secondElementCurrency.selectedIndex]
        .textContent
    );
    ui.changeSecond();
    exchangeAmount();
  };
}

function exchangeAmount() {
  currency.changeAmount(amountElement.value);

  currency
    .exchange()
    .then((data) => ui.changeResult(data))
    .catch((err) => console.log(err));
}
