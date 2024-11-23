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
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    return this._name;
  }

  get length() {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

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
    this._length = value;
  }

  set students(value) {
    this._students = value;
  }
}
