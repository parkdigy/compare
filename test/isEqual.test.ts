import { isEqual } from '../src';

describe('isEqual', () => {
  it('Number 인 경우 테스트', () => {
    expect(isEqual(1, 1)).toBe(true);
    expect(isEqual(1, 1.0)).toBe(true);
    expect(isEqual(1 / 3, 1.0 / 3)).toBe(true);
    expect(isEqual(1, 2)).toBe(false);
  });

  it('String 인 경우 테스트', () => {
    expect(isEqual('1', '1')).toBe(true);
    expect(isEqual('1', '2')).toBe(false);
  });

  it('Number, String 인 경우 테스트', () => {
    expect(isEqual(1, '1')).toBe(false);
  });

  it('Date 인 경우 테스트', () => {
    expect(isEqual(new Date(), new Date())).toBe(true);
    expect(isEqual(new Date(), new Date(2025, 1, 1))).toBe(false);
  });

  it('Array 인 경우 테스트', () => {
    expect(isEqual([1, 2], [1, 2])).toBe(true);
    expect(isEqual([1, 1], [1, 2])).toBe(false);
  });

  it('Object 인 경우 테스트', () => {
    expect(isEqual({ a: '1' }, { a: '1' })).toBe(true);
    expect(isEqual({ a: '1' }, { a: '2' })).toBe(false);
    expect(isEqual({ a: '1' }, { a: '1', fun() {} })).toBe(false);
  });

  it('null 인 경우 테스트', () => {
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(null, undefined)).toBe(false);
  });

  it('undefined 인 경우 테스트', () => {
    expect(isEqual(undefined, undefined)).toBe(true);
    expect(isEqual(null, undefined)).toBe(false);
  });
});
