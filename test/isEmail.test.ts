import { isEmail } from '../src';

describe('isEmail', () => {
  it('이메일 확인', () => {
    expect(isEmail('id@domain.com')).toBe(true);
    expect(isEmail('id@domain.co.kr')).toBe(true);
    expect(isEmail('id@sub.domain.co.kr')).toBe(true);
    expect(isEmail('id@sub-domain.co.kr')).toBe(true);
    expect(isEmail('id.name@domain.co.kr')).toBe(true);
    expect(isEmail('id+name@domain.co.kr')).toBe(true);
    expect(isEmail('id-name@domain.co.kr')).toBe(true);
    expect(isEmail('id_name@domain.co.kr')).toBe(true);

    expect(isEmail('@domain.com')).toBe(false);
    expect(isEmail('id@domain')).toBe(false);
    expect(isEmail('id@.com')).toBe(false);
  });
});
