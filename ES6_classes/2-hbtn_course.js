class HolbertonCourse {
  constructor(name, length, students) {
    // Type validation
    HolbertonCourse._validateString(name, 'Name');
    HolbertonCourse._validateNumber(length, 'Length');
    HolbertonCourse._validateStringArray(students, 'Students');

    // Initialize attributes
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setters
  set name(newName) {
    HolbertonCourse._validateString(newName, 'Name');
    this._name = newName;
  }

  set length(newLength) {
    HolbertonCourse._validateNumber(newLength, 'Length');
    this._length = newLength;
  }

  set students(newStudents) {
    HolbertonCourse._validateStringArray(newStudents, 'Students');
    this._students = newStudents;
  }

  // Static method to validate string type
  static _validateString(value, fieldName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${fieldName} must be a string`);
    }
  }

  // Static method to validate number type
  static _validateNumber(value, fieldName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${fieldName} must be a number`);
    }
  }

  // Static method to validate array of strings
  static _validateStringArray(value, fieldName) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      throw new TypeError(`${fieldName} must be an array of strings`);
    }
  }
}

export default HolbertonCourse;
