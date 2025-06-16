import { contains } from '../src';

describe('contains', () => {
  it('Type 이 정해진 경우, true 테스트', () => {
    function test(value: 'v1' | 'v2' | 'v3') {
      return contains(['v1', 'v2', 'v3'], value);
    }
    expect(test('v2')).toBe(true);
  });

  it('Type 이 정해진 경우, false 테스트', () => {
    function test(value: 'v1' | 'v2' | 'v3') {
      return contains(['v1', 'v3'], value);
    }
    expect(test('v2')).toBe(false);
  });

  it('Type 이 정해지지 않은 경우, true 테스트', () => {
    function test(value: string) {
      return contains(['v1', 'v2', 'v3'], value);
    }
    expect(test('v2')).toBe(true);
  });

  it('Type 이 정해지지 않은 경우, false 테스트', () => {
    function test(value: string) {
      return contains(['v1', 'v2', 'v3'], value);
    }
    expect(test('v4')).toBe(false);
  });

  it('null, true 테스트', () => {
    function test(value: string | null) {
      return contains([null], value);
    }
    expect(test(null)).toBe(true);
  });

  it('null, false 테스트', () => {
    function test(value: string | null) {
      return contains(['v1', 'v2', 'v3'], value);
    }
    expect(test(null)).toBe(false);
  });

  it('undefined, true 테스트', () => {
    function test(value: string | undefined) {
      return contains([undefined], value);
    }
    expect(test(undefined)).toBe(true);
  });

  it('undefined, false 테스트', () => {
    function test(value: string | undefined) {
      return contains(['v1', 'v2', 'v3'], value);
    }
    expect(test(undefined)).toBe(false);
  });
});
