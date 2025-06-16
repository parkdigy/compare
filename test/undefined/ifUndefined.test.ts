import { ifUndefined } from '../../src';

/********************************************************************************************************************
 * ifUndefined
 * ******************************************************************************************************************/
describe('ifUndefined', () => {
  it('빈 Object 인 경우 테스트', () => {
    expect(ifUndefined({}, 1)).toEqual({});
  });

  it('비어있지 않은 Object 인 경우 테스트', () => {
    expect(ifUndefined({ a: '1' }, 1)).toEqual({ a: '1' });
  });

  it('Symbol Object 인 경우 테스트', () => {
    const symbol = Symbol('key');
    expect(ifUndefined({ [symbol]: '1' }, 1)).toEqual({ [symbol]: '1' });
  });

  it('빈 Array 인 경우 테스트', () => {
    expect(ifUndefined([], 1)).toEqual([]);
  });

  it('비어있지 않은 Array 인 경우 테스트', () => {
    expect(ifUndefined([1], 1)).toEqual([1]);
  });

  it('빈 String 인 경우 테스트', () => {
    expect(ifUndefined('', 1)).toBe('');
  });

  it('비어있지 않은 String 인 경우 테스트', () => {
    expect(ifUndefined('text', 1)).toBe('text');
  });

  it('공백 있는 String 테스트', () => {
    expect(ifUndefined(' ', 1)).toBe(' ');
  });

  it('null 인 경우 테스트', () => {
    expect(ifUndefined(null, 1)).toBe(null);
  });

  it('undefined 인 경우 테스트', () => {
    expect(ifUndefined(undefined, 1)).toBe(1);
  });

  it('Date 인 경우 테스트', () => {
    const dt = new Date();
    expect(ifUndefined(dt, 1)).toEqual(dt);
  });

  /********************************************************************************************************************
   * Type Check
   * ******************************************************************************************************************/
  const check = [
    (v: any) => {
      type Assert<T extends true> = T;

      {
        // string
        const _ = ifUndefined(v as string, 10);
        type _ = Assert<Exclude<typeof _, string> extends never ? true : false>;
      }
      {
        // string | 10
        const _ = ifUndefined(v as string | undefined, 10);
        type _ = Assert<Exclude<typeof _, string | 10> extends never ? true : false>;
      }

      {
        // '' | 'v1'
        const _ = ifUndefined(v as '' | 'v1', 'default');
        type _ = Assert<Exclude<typeof _, '' | 'v1'> extends never ? true : false>;
      }
      {
        // '' | 'v1' | 'default'
        const _ = ifUndefined(v as '' | 'v1' | undefined, 'default');
        type _ = Assert<Exclude<typeof _, '' | 'v1' | 'default'> extends never ? true : false>;
      }

      {
        // 'v1' | 'v2'
        const _ = ifUndefined(v as 'v1' | 'v2', 'default');
        type _ = Assert<Exclude<typeof _, 'v1' | 'v2'> extends never ? true : false>;
      }
      {
        // 'v1' | 'default' | 'v2'
        const _ = ifUndefined(v as 'v1' | 'v2' | undefined, 'default');
        type _ = Assert<Exclude<typeof _, 'v1' | 'default' | 'v2'> extends never ? true : false>;
      }

      {
        // 10 | 20
        const _ = ifUndefined(v as 10 | 20, 'default');
        type _ = Assert<Exclude<typeof _, 10 | 20> extends never ? true : false>;
      }
      {
        // 10 | 'default' | 20
        const _ = ifUndefined(v as 10 | 20 | undefined, 'default');
        type _ = Assert<Exclude<typeof _, 10 | 'default' | 20> extends never ? true : false>;
      }

      {
        // string[]
        const _ = ifUndefined(v as string[], 'default');
        type _ = Assert<Exclude<typeof _, string[]> extends never ? true : false>;
      }
      {
        // string[] | 'default'
        const _ = ifUndefined(v as string[] | undefined, 'default');
        type _ = Assert<Exclude<typeof _, string[] | 'default'> extends never ? true : false>;
      }

      {
        // null
        const _ = ifUndefined(v as null, 'default');
        type _ = Assert<Exclude<typeof _, null> extends never ? true : false>;
      }
      {
        // 'default'
        const _ = ifUndefined(v as undefined, 'default');
        type _ = Assert<Exclude<typeof _, 'default'> extends never ? true : false>;
      }
      {
        // 'default' | null
        const _ = ifUndefined(v as null | undefined, 'default');
        type _ = Assert<Exclude<typeof _, 'default' | null> extends never ? true : false>;
      }
    },
  ];
});
