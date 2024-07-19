class Building {
  constructor(sqft) {
    if (
      this.constructor !== Building
        && typeof this.evacuationWarningMessage !== 'function'
    ) {
      throw Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }

    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Method to be implemented by subclasses
  evacuationWarningMessage() {
    if (this.constructor === Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    // using `this` to avoid eslint error
    return this._sqft;
  }
}

export default Building;
