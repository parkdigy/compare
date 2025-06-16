import { isInteger } from '../src';

describe('isInteger', () => {
  it('Integer 여부 확인', () => {
    expect(isInteger(0)).toBe(true);
    expect(isInteger(1)).toBe(true);
    expect(isInteger(1.0)).toBe(true);
    expect(isInteger(999)).toBe(true);
    expect(isInteger(999.0)).toBe(true);

    expect(isInteger(1.01)).toBe(false);
    expect(isInteger(1.0000000000001)).toBe(false);
  });
});
