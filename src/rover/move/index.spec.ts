import Move from '.';
import Plateau from '../../plateau';

describe('Should create and use move class', () => {
  let plateau_data: Plateau;
  let move: Move;
  const [x, y] = [1, 2];

  beforeEach(() => {
    const [width, height] = [5, 5];
    plateau_data = new Plateau(width, height);
    move = new Move(x, y, 'N', plateau_data);
  });

  it('Should use drive method', () => {
    move.drive();
    expect(move.getPosition()).toMatchObject({ x, y: y + 1 });
  });

  it('Should use turn LEFT method', () => {
    move.turn('L');
    expect(move.getDirection()).toBe('W');
  });

  it('Should use turn RIGHT method', () => {
    move.turn('R');
    expect(move.getDirection()).toBe('E');
  });

  it('Should fatal error when drive outside plateau', () => {
    const plateau_error = new Plateau(x, y);
    const move_error = new Move(x, y, 'N', plateau_error);

    expect(() => move_error.drive()).toThrow(
      'If I drive in this direction the vehicle will be destroyed',
    );
  });
});
