class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Override valueOf method to return the size
  valueOf() {
    return this._size;
  }

  // Override toString method to return the location
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
