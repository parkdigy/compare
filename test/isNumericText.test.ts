import { isNumericText } from '../src';

describe('isNumericText', () => {
  it('숫자 문자열 확인', () => {
    expect(isNumericText('0')).toBe(true);
    expect(isNumericText('1')).toBe(true);
    expect(isNumericText('01')).toBe(true);
    expect(isNumericText('1.0')).toBe(true);

    expect(isNumericText('-1000')).toBe(true);
    expect(isNumericText('+1000')).toBe(true);

    expect(isNumericText('1,000', true)).toBe(true);

    expect(isNumericText('1.2.3')).toBe(false);
    expect(isNumericText('1+000')).toBe(false);
    expect(isNumericText('1-000')).toBe(false);
    expect(isNumericText('1,000')).toBe(false);
  });
});
