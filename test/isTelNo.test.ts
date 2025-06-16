import { isTelNo } from '../src';

describe('isTelNo', () => {
  it('전화번호 확인', () => {
    expect(isTelNo('01012345678')).toBe(true);
    expect(isTelNo('010-1234-5678')).toBe(true);
    expect(isTelNo('0101234567')).toBe(true);
    expect(isTelNo('010-123-4567')).toBe(true);
    expect(isTelNo('011-1234-5678')).toBe(true);
    expect(isTelNo('02-1234-5678')).toBe(true);
    expect(isTelNo('02-134-5789')).toBe(true);
    expect(isTelNo('031-1234-5678')).toBe(true);
    expect(isTelNo('031-124-5678')).toBe(true);
    expect(isTelNo('070-134-5789')).toBe(true);
    expect(isTelNo('1544-0000')).toBe(true);
    expect(isTelNo('15440000')).toBe(true);
    expect(isTelNo('+82212345678')).toBe(true);
    expect(isTelNo('+82-2-1234-5678')).toBe(true);

    expect(isTelNo('03-134-578')).toBe(false);
    expect(isTelNo('010-12345')).toBe(false);
    expect(isTelNo('01012-345')).toBe(false);
    expect(isTelNo('0101-234-5678')).toBe(false);
    expect(isTelNo('01-012345678')).toBe(false);
  });
});
