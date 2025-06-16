import { isBusinessNo } from '../src';

describe('isBusinessNo', () => {
  it('사업자등록번호 확인', () => {
    expect(isBusinessNo('1234567890')).toBe(true);
    expect(isBusinessNo('123-45-67890')).toBe(true);

    expect(isBusinessNo('12345678')).toBe(false);
    expect(isBusinessNo('123-4567890')).toBe(false);
    expect(isBusinessNo('12345-67890')).toBe(false);
  });
});
