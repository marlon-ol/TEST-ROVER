import Plateau from '.';

describe('Should create and use Plateau', () => {
  let plateau: Plateau;
  const [width, height] = [5, 5];

  beforeEach(() => {
    plateau = new Plateau(width, height);
  });

  it('should use Plateau calculateArea method', () => {
    expect(plateau.calculateArea()).toBe(width * height);
  });

  it('should use Plateau getDimensions method', () => {
    expect(plateau.getDimensions()).toMatchObject({ x: width, y: height });
  });
});
