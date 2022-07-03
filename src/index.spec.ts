import StartNavigation from '.';

describe('Should create and use full application', () => {
  const mock_input = '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM';
  const mock_input_raw = `5 5
  1 2 N
  LMLMLMLMM
  3 3 E
  MMRMMRMRRM`;

  it('should create an instance of class', () => {
    const app = new StartNavigation(mock_input);
    expect(app).toBeDefined();
  });

  it('Should works when create an instance of class without correct input but not empty', () => {
    const app = new StartNavigation(`51
    1
    L
    3
    M`);
    app.dispatch();
  });

  it('Should throw error when create an instance of class without correct input (empty)', () => {
    expect(() => new StartNavigation('')).toThrow('Invalid input data');
  });

  it('should update inputData', () => {
    const app = new StartNavigation(mock_input);
    app.setCleanInput([]);
    expect(app.dispatch()).toBe('');
  });

  it('should process data and outputs what is expected', () => {
    const app = new StartNavigation(mock_input);
    console.info(mock_input);
    const dispatch = app.dispatch();
    console.info(dispatch);

    expect(dispatch).toBe('1 3 N\n5 1 E');
  });

  it('should process RAW data and outputs what is expected', () => {
    const app = new StartNavigation(mock_input_raw);
    const dispatch = app.dispatch();
    expect(dispatch).toBe('1 3 N\n5 1 E');
  });
});
