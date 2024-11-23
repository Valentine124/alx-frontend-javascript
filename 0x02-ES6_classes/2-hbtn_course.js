export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

    if (typeof students !== 'object') {
      throw new TypeError('Length must be an object');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    if (typeof students !== 'object') {
      throw new TypeError('Length must be an object');
    }

    return this._students;
  }

  set name(value) {
    this._name = value;
  }

  set length(value) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

    this._length = value;
  }

  set students(value) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._students = value;
  }
}
