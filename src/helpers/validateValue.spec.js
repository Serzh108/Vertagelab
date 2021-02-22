import validateValue from './validateValue';

describe('validateValue', () => {
  it('valid data', () => {
    expect(validateValue({ start: '#edf345', end: '#333' })).toEqual(true);
  });

  it('wrong data length', () => {
    expect(validateValue({ start: '#edf345', end: '#33' })).toEqual(false);
  });

  it('wrong data simbol', () => {
    expect(validateValue({ start: '#edfx45', end: '#333' })).toEqual(false);
  });

  it('miss #', () => {
    expect(validateValue({ start: 'edf345', end: '#333' })).toEqual(false);
  });
});
