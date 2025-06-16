import { isNotUndefined } from '../../src';

/********************************************************************************************************************
 * isNotUndefined
 * ******************************************************************************************************************/
describe('isNotUndefined', () => {
  it('빈 Object 인 경우, true 테스트', () => {
    expect(isNotUndefined({})).toBe(true);
  });

  it('비어있지 않은 Object 인 경우, true 테스트', () => {
    expect(isNotUndefined({ a: '1' })).toBe(true);
  });

  it('Symbol Object 인 경우, true 테스트', () => {
    expect(isNotUndefined({ [Symbol('key')]: '1' })).toBe(true);
  });

  it('빈 Array 인 경우, true 테스트', () => {
    expect(isNotUndefined([])).toBe(true);
  });

  it('비어있지 않은 Array 인 경우, true 테스트', () => {
    expect(isNotUndefined([1])).toBe(true);
  });

  it('빈 String 인 경우, true 테스트', () => {
    expect(isNotUndefined('')).toBe(true);
  });

  it('비어있지 않은 String 인 경우, true 테스트', () => {
    expect(isNotUndefined('text')).toBe(true);
  });

  it('공백 있는 String 테스트', () => {
    expect(isNotUndefined(' ')).toBe(true);
  });

  it('null 인 경우, true 테스트', () => {
    expect(isNotUndefined(null)).toBe(true);
  });

  it('undefined 인 경우, false 테스트', () => {
    expect(isNotUndefined(undefined)).toBe(false);
  });

  it('Date 인 경우, true 테스트', () => {
    expect(isNotUndefined(new Date())).toBe(true);
  });
});
