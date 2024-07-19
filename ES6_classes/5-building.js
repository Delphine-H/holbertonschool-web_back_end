class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (new.target === Building) {
      throw new Error('Cannot instantiate an abstract class');
    }
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
