import { isNullOrUndefined } from '../../src';

/********************************************************************************************************************
 * isNullOrUndefined
 * ******************************************************************************************************************/
describe('isNullOrUndefined', () => {
  it('빈 Object 인 경우, false 테스트', () => {
    expect(isNullOrUndefined({})).toBe(false);
  });

  it('비어있지 않은 Object 인 경우, false 테스트', () => {
    expect(isNullOrUndefined({ a: '1' })).toBe(false);
  });

  it('Symbol Object 인 경우, false 테스트', () => {
    expect(isNullOrUndefined({ [Symbol('key')]: '1' })).toBe(false);
  });

  it('빈 Array 인 경우, false 테스트', () => {
    expect(isNullOrUndefined([])).toBe(false);
  });

  it('비어있지 않은 Array 인 경우, false 테스트', () => {
    expect(isNullOrUndefined([1])).toBe(false);
  });

  it('빈 String 인 경우, false 테스트', () => {
    expect(isNullOrUndefined('')).toBe(false);
  });

  it('비어있지 않은 String 인 경우, false 테스트', () => {
    expect(isNullOrUndefined('text')).toBe(false);
  });

  it('공백 있는 String 테스트', () => {
    expect(isNullOrUndefined(' ')).toBe(false);
  });

  it('null 인 경우, true 테스트', () => {
    expect(isNullOrUndefined(null)).toBe(true);
  });

  it('undefined 인 경우, true 테스트', () => {
    expect(isNullOrUndefined(undefined)).toBe(true);
  });

  it('Date 인 경우, false 테스트', () => {
    expect(isNullOrUndefined(new Date())).toBe(false);
  });
});
