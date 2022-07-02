import Plateau from '../../plateau';
import { AvailableDirections, AvailableTurnDirections } from '../types';
import ISpin from './spin.interface';
import { cartesianPlane, driveAction } from './types';

export default class Move implements ISpin {
  constructor(
    private current_x: number,
    private current_y: number,
    private current_direction: AvailableDirections,
    private plateau_data: Plateau,
  ) {}

  private driveAction: driveAction = {
    N: { x: 0, y: 1 },
    S: { x: 0, y: -1 },
    E: { x: 1, y: 0 },
    W: { x: -1, y: 0 },
  };

  private spinAction: any = {
    L: {
      N: 'W',
      W: 'S',
      S: 'E',
      E: 'N',
    },
    R: {
      N: 'E',
      S: 'W',
      E: 'S',
      W: 'N',
    },
  };

  drive(): this {
    const driveDirectionAction: cartesianPlane =
      this.driveAction[this.current_direction];
    const { x, y } = this.plateau_data.getDimensions();

    if (
      this.current_x + driveDirectionAction.x > x ||
      this.current_y + driveDirectionAction.y > y
    ) {
      throw new Error(
        'If I drive in this direction the vehicle will be destroyed',
      );
    }

    [this.current_x, this.current_y] = [
      this.current_x + driveDirectionAction.x,
      this.current_y + driveDirectionAction.y,
    ];

    return this;
  }

  turn(turn: AvailableTurnDirections): this {
    this.current_direction = <AvailableDirections>(
      this.spinAction[turn][this.current_direction]
    );
    return this;
  }

  getPosition(): cartesianPlane {
    return { x: this.current_x, y: this.current_y };
  }

  getDirection(): AvailableDirections {
    return this.current_direction;
  }
}
