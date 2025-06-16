import { ifNullOrUndefined } from '../../src';

/********************************************************************************************************************
 * ifNullOrUndefined
 * ******************************************************************************************************************/
describe('ifNullOrUndefined', () => {
  it('빈 Object 인 경우 테스트', () => {
    expect(ifNullOrUndefined({}, 1)).toEqual({});
  });

  it('비어있지 않은 Object 인 경우 테스트', () => {
    expect(ifNullOrUndefined({ a: '1' }, 1)).toEqual({ a: '1' });
  });

  it('Symbol Object 인 경우 테스트', () => {
    const symbol = Symbol('key');
    expect(ifNullOrUndefined({ [symbol]: '1' }, 1)).toEqual({ [symbol]: '1' });
  });

  it('빈 Array 인 경우 테스트', () => {
    expect(ifNullOrUndefined([], 1)).toEqual([]);
  });

  it('비어있지 않은 Array 인 경우 테스트', () => {
    expect(ifNullOrUndefined([1], 1)).toEqual([1]);
  });

  it('빈 String 인 경우 테스트', () => {
    expect(ifNullOrUndefined('', 1)).toBe('');
  });

  it('비어있지 않은 String 인 경우 테스트', () => {
    expect(ifNullOrUndefined('text', 1)).toBe('text');
  });

  it('공백 있는 String 테스트', () => {
    expect(ifNullOrUndefined(' ', 1)).toBe(' ');
  });

  it('null 인 경우 테스트', () => {
    expect(ifNullOrUndefined(null, 1)).toBe(1);
  });

  it('undefined 인 경우 테스트', () => {
    expect(ifNullOrUndefined(undefined, 1)).toBe(1);
  });

  it('Date 인 경우 테스트', () => {
    const dt = new Date();
    expect(ifNullOrUndefined(dt, 1)).toEqual(dt);
  });

  /********************************************************************************************************************
   * Type Check
   * ******************************************************************************************************************/
  const typeCheck = [
    (v: any) => {
      type Assert<T extends true> = T;

      {
        // string
        const _ = ifNullOrUndefined(v as string, 10);
        type _ = Assert<Exclude<typeof _, string> extends never ? true : false>;
      }

      // string | 10
      {
        const _ = ifNullOrUndefined(v as string | null, 10);
        type _ = Assert<Exclude<typeof _, string | 10> extends never ? true : false>;
      }
      {
        // string | 10
        const _ = ifNullOrUndefined(v as string | undefined, 10);
        type _ = Assert<Exclude<typeof _, string | 10> extends never ? true : false>;
      }
      {
        // string | 10
        const _ = ifNullOrUndefined(v as string | null | undefined, 10);
        type _ = Assert<Exclude<typeof _, string | 10> extends never ? true : false>;
      }

      {
        // 'default'
        const _ = ifNullOrUndefined(v as null, 'default');
        type _ = Assert<Exclude<typeof _, 'default'> extends never ? true : false>;
      }
      {
        // 'default'
        const _ = ifNullOrUndefined(v as undefined, 'default');
        type _ = Assert<Exclude<typeof _, 'default'> extends never ? true : false>;
      }
      {
        // 'default'
        const _ = ifNullOrUndefined(v as null | undefined, 'default');
        type _ = Assert<Exclude<typeof _, 'default'> extends never ? true : false>;
      }
    },
  ];
});
