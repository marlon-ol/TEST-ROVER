import Rover from '.';
import Plateau from '../plateau';
import { AvailableDirections } from './types';

describe('Should use class Rover', () => {
  let plateau: Plateau;
  let rover: Rover;
  const [width, height, initial_x, initial_y, initial_direction] = [
    5,
    5,
    1,
    2,
    <AvailableDirections>'N',
  ];

  beforeEach(() => {
    plateau = new Plateau(width, height);

    rover = new Rover(initial_x, initial_y, initial_direction, plateau);
  });

  it('should use getInitialPosition method', () => {
    expect(rover.getInitialPosition()).toMatchObject({
      x: initial_x,
      y: initial_y,
    });
  });

  it('should use getInitialDirection method', () => {
    expect(rover.getInitialDirection()).toBe(initial_direction);
  });
});
