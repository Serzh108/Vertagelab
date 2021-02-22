import calcGradient from './calcGradient';

describe('calcGradient', () => {
  it('should return string', () => {
    expect(calcGradient('#fff', '#000')).toEqual(
      'linear-gradient(to right, #fff, #000)',
    );
  });

  it('should return string with one parametr', () => {
    expect(calcGradient('#fde')).toEqual(
      'linear-gradient(to right, #fde, undefined)',
    );
  });
});
