import { isNull } from '../../src';

/********************************************************************************************************************
 * isNull
 * ******************************************************************************************************************/
describe('isNull', () => {
  it('빈 Object 인 경우, false 테스트', () => {
    expect(isNull({})).toBe(false);
  });

  it('비어있지 않은 Object 인 경우, false 테스트', () => {
    expect(isNull({ a: '1' })).toBe(false);
  });

  it('Symbol Object 인 경우, false 테스트', () => {
    expect(isNull({ [Symbol('key')]: '1' })).toBe(false);
  });

  it('빈 Array 인 경우, false 테스트', () => {
    expect(isNull([])).toBe(false);
  });

  it('비어있지 않은 Array 인 경우, false 테스트', () => {
    expect(isNull([1])).toBe(false);
  });

  it('빈 String 인 경우, false 테스트', () => {
    expect(isNull('')).toBe(false);
  });

  it('비어있지 않은 String 인 경우, false 테스트', () => {
    expect(isNull('text')).toBe(false);
  });

  it('공백 있는 String 테스트', () => {
    expect(isNull(' ')).toBe(false);
  });

  it('null 인 경우, true 테스트', () => {
    expect(isNull(null)).toBe(true);
  });

  it('undefined 인 경우, false 테스트', () => {
    expect(isNull(undefined)).toBe(false);
  });

  it('Date 인 경우, false 테스트', () => {
    expect(isNull(new Date())).toBe(false);
  });
});
