import { isNotNull } from '../../src';

/********************************************************************************************************************
 * isNotNull
 * ******************************************************************************************************************/
describe('isNotNull', () => {
  it('빈 Object 인 경우, true 테스트', () => {
    expect(isNotNull({})).toBe(true);
  });

  it('비어있지 않은 Object 인 경우, true 테스트', () => {
    expect(isNotNull({ a: '1' })).toBe(true);
  });

  it('Symbol Object 인 경우, true 테스트', () => {
    expect(isNotNull({ [Symbol('key')]: '1' })).toBe(true);
  });

  it('빈 Array 인 경우, true 테스트', () => {
    expect(isNotNull([])).toBe(true);
  });

  it('비어있지 않은 Array 인 경우, true 테스트', () => {
    expect(isNotNull([1])).toBe(true);
  });

  it('빈 String 인 경우, true 테스트', () => {
    expect(isNotNull('')).toBe(true);
  });

  it('비어있지 않은 String 인 경우, true 테스트', () => {
    expect(isNotNull('text')).toBe(true);
  });

  it('공백 있는 String 테스트', () => {
    expect(isNotNull(' ')).toBe(true);
  });

  it('null 인 경우, false 테스트', () => {
    expect(isNotNull(null)).toBe(false);
  });

  it('undefined 인 경우, true 테스트', () => {
    expect(isNotNull(undefined)).toBe(true);
  });

  it('Date 인 경우, true 테스트', () => {
    expect(isNotNull(new Date())).toBe(true);
  });
});
