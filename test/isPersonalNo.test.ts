import { isPersonalNo } from '../src';

describe('isPersonalNo', () => {
  it('주민등록번호 확인', () => {
    expect(isPersonalNo('0123456789012')).toBe(true);
    expect(isPersonalNo('012345-6789012')).toBe(true);

    expect(isPersonalNo('012345678901')).toBe(false);
    expect(isPersonalNo('0123456-789012')).toBe(false);
  });
});
