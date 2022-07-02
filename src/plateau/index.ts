import { cartesianPlane } from '../rover/move/types';

export default class Plateau {
  constructor(private width: number, private height: number) {}

  getDimensions(): cartesianPlane {
    return { x: this.width, y: this.height };
  }

  calculateArea(): number {
    return this.height * this.width;
  }
}
