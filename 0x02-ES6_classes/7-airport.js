export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  set name(value) {
    this._name = value;
  }

  set code(value) {
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
