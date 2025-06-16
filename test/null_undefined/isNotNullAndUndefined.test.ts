import { isNotNullAndUndefined } from '../../src';

/********************************************************************************************************************
 * isNotNullAndUndefined
 * ******************************************************************************************************************/
describe('isNotNullAndUndefined', () => {
  it('빈 Object 인 경우, true 테스트', () => {
    expect(isNotNullAndUndefined({})).toBe(true);
  });

  it('비어있지 않은 Object 인 경우, true 테스트', () => {
    expect(isNotNullAndUndefined({ a: '1' })).toBe(true);
  });

  it('Symbol Object 인 경우, true 테스트', () => {
    expect(isNotNullAndUndefined({ [Symbol('key')]: '1' })).toBe(true);
  });

  it('빈 Array 인 경우, true 테스트', () => {
    expect(isNotNullAndUndefined([])).toBe(true);
  });

  it('비어있지 않은 Array 인 경우, true 테스트', () => {
    expect(isNotNullAndUndefined([1])).toBe(true);
  });

  it('빈 String 인 경우, true 테스트', () => {
    expect(isNotNullAndUndefined('')).toBe(true);
  });

  it('비어있지 않은 String 인 경우, true 테스트', () => {
    expect(isNotNullAndUndefined('text')).toBe(true);
  });

  it('공백 있는 String 테스트', () => {
    expect(isNotNullAndUndefined(' ')).toBe(true);
  });

  it('null 인 경우, false 테스트', () => {
    expect(isNotNullAndUndefined(null)).toBe(false);
  });

  it('undefined 인 경우, false 테스트', () => {
    expect(isNotNullAndUndefined(undefined)).toBe(false);
  });

  it('Date 인 경우, true 테스트', () => {
    expect(isNotNullAndUndefined(new Date())).toBe(true);
  });
});
