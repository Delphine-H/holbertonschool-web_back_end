import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency instanceof Currency ? currency : new Currency('USD', 'US Dollar');
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Setter for amount
  set amount(newAmount) {
    this._amount = newAmount;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Setter for currency
  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    } else {
      throw new TypeError('currency must be an instance of Currency');
    }
  }

  // Method to display full price
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default Pricing;
