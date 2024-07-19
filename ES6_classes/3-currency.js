class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Setters
  set code(newCode) {
    if (typeof newCode === 'string') this._code = newCode;
  }

  set name(newName) {
    if (typeof newName === 'string') this._name = newName;
  }

  // Method to display full currency
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

export default Currency;
