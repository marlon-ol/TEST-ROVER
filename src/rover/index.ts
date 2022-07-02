import Plateau from '../plateau';
import Move from './move';
import { cartesianPlane } from './move/types';
import { AvailableDirections } from './types';

export default class Rover extends Move {
  constructor(
    private initial_x: number,
    private initial_y: number,
    private initial_direction: AvailableDirections,
    private _plateau: Plateau,
  ) {
    super(initial_x, initial_y, initial_direction, _plateau);
  }

  getInitialPosition(): cartesianPlane {
    return { x: this.initial_x, y: this.initial_y };
  }

  getInitialDirection(): AvailableDirections {
    return this.initial_direction;
  }
}
