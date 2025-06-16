import { isMobileNo } from '../src';

describe('isMobileNo', () => {
  it('휴대폰번호 확인', () => {
    expect(isMobileNo('01012345678')).toBe(true);
    expect(isMobileNo('010-1234-5678')).toBe(true);
    expect(isMobileNo('0101234567')).toBe(true);
    expect(isMobileNo('010-123-4567')).toBe(true);

    expect(isMobileNo('011-1234-5678')).toBe(true);
    expect(isMobileNo('016-1234-5678')).toBe(true);
    expect(isMobileNo('017-1234-5678')).toBe(true);
    expect(isMobileNo('018-1234-5678')).toBe(true);
    expect(isMobileNo('019-1234-5678')).toBe(true);

    expect(isMobileNo('012-1234-5678')).toBe(false);
    expect(isMobileNo('013-1234-5678')).toBe(false);
    expect(isMobileNo('014-1234-5678')).toBe(false);
    expect(isMobileNo('015-1234-5678')).toBe(false);
    expect(isMobileNo('010123456')).toBe(false);
    expect(isMobileNo('0101-234-5678')).toBe(false);
    expect(isMobileNo('01-012345678')).toBe(false);
  });
});
