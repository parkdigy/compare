import { isUndefined } from '../../src';

/********************************************************************************************************************
 * isUndefined
 * ******************************************************************************************************************/
describe('isUndefined', () => {
  it('빈 Object 인 경우, false 테스트', () => {
    expect(isUndefined({})).toBe(false);
  });

  it('비어있지 않은 Object 인 경우, false 테스트', () => {
    expect(isUndefined({ a: '1' })).toBe(false);
  });

  it('Symbol Object 인 경우, false 테스트', () => {
    expect(isUndefined({ [Symbol('key')]: '1' })).toBe(false);
  });

  it('빈 Array 인 경우, false 테스트', () => {
    expect(isUndefined([])).toBe(false);
  });

  it('비어있지 않은 Array 인 경우, false 테스트', () => {
    expect(isUndefined([1])).toBe(false);
  });

  it('빈 String 인 경우, false 테스트', () => {
    expect(isUndefined('')).toBe(false);
  });

  it('비어있지 않은 String 인 경우, false 테스트', () => {
    expect(isUndefined('text')).toBe(false);
  });

  it('공백 있는 String 테스트', () => {
    expect(isUndefined(' ')).toBe(false);
  });

  it('null 인 경우, false 테스트', () => {
    expect(isUndefined(null)).toBe(false);
  });

  it('undefined 인 경우, true 테스트', () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  it('Date 인 경우, false 테스트', () => {
    expect(isUndefined(new Date())).toBe(false);
  });
});
