import Building from './5-building';

export default class skyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }
}
