import { ifNull } from '../../src';

/********************************************************************************************************************
 * ifNull
 * ******************************************************************************************************************/
describe('ifNull', () => {
  it('빈 Object 인 경우 테스트', () => {
    expect(ifNull({}, 1)).toEqual({});
  });

  it('비어있지 않은 Object 인 경우 테스트', () => {
    expect(ifNull({ a: '1' }, 1)).toEqual({ a: '1' });
  });

  it('Symbol Object 인 경우 테스트', () => {
    const symbol = Symbol('key');
    expect(ifNull({ [symbol]: '1' }, 1)).toEqual({ [symbol]: '1' });
  });

  it('빈 Array 인 경우 테스트', () => {
    expect(ifNull([], 1)).toEqual([]);
  });

  it('비어있지 않은 Array 인 경우 테스트', () => {
    expect(ifNull([1], 1)).toEqual([1]);
  });

  it('빈 String 인 경우 테스트', () => {
    expect(ifNull('', 1)).toBe('');
  });

  it('비어있지 않은 String 인 경우 테스트', () => {
    expect(ifNull('text', 1)).toBe('text');
  });

  it('공백 있는 String 테스트', () => {
    expect(ifNull(' ', 1)).toBe(' ');
  });

  it('null 인 경우 테스트', () => {
    expect(ifNull(null, 1)).toBe(1);
  });

  it('undefined 인 경우 테스트', () => {
    expect(ifNull(undefined, 1)).toBe(undefined);
  });

  it('Date 인 경우 테스트', () => {
    const dt = new Date();
    expect(ifNull(dt, 1)).toEqual(dt);
  });

  /********************************************************************************************************************
   * Type Check
   * ******************************************************************************************************************/
  const check = [
    (v: any) => {
      type Assert<T extends true> = T;

      {
        // string
        const _ = ifNull(v as string, 10);
        type _ = Assert<Exclude<typeof _, string> extends never ? true : false>;
      }
      {
        // string | 10
        const _ = ifNull(v as string | null, 10);
        type _ = Assert<Exclude<typeof _, string | 10> extends never ? true : false>;
      }

      {
        // '' | 'v1'
        const _ = ifNull(v as '' | 'v1', 'default');
        type _ = Assert<Exclude<typeof _, '' | 'v1'> extends never ? true : false>;
      }
      {
        // '' | 'v1' | 'default'
        const _ = ifNull(v as '' | 'v1' | null, 'default');
        type _ = Assert<Exclude<typeof _, '' | 'v1' | 'default'> extends never ? true : false>;
      }

      {
        // 'v1' | 'v2'
        const _ = ifNull(v as 'v1' | 'v2', 'default');
        type _ = Assert<Exclude<typeof _, 'v1' | 'v2'> extends never ? true : false>;
      }
      {
        // 'v1' | 'default' | 'v2'
        const _ = ifNull(v as 'v1' | 'v2' | null, 'default');
        type _ = Assert<Exclude<typeof _, 'v1' | 'default' | 'v2'> extends never ? true : false>;
      }

      {
        // 10 | 20
        const _ = ifNull(v as 10 | 20, 'default');
        type _ = Assert<Exclude<typeof _, 10 | 20> extends never ? true : false>;
      }
      {
        // 10 | 'default' | 20
        const _ = ifNull(v as 10 | 20 | null, 'default');
        type _ = Assert<Exclude<typeof _, 10 | 'default' | 20> extends never ? true : false>;
      }

      {
        // string[]
        const _ = ifNull(v as string[], 'default');
        type _ = Assert<Exclude<typeof _, string[]> extends never ? true : false>;
      }
      {
        // string[] | 'default'
        const _ = ifNull(v as string[] | null, 'default');
        type _ = Assert<Exclude<typeof _, string[] | 'default'> extends never ? true : false>;
      }

      {
        // 'default'
        const _ = ifNull(v as null, 'default');
        type _ = Assert<Exclude<typeof _, 'default'> extends never ? true : false>;
      }
      {
        // undefined
        const _ = ifNull(v as undefined, 'default');
        type _ = Assert<Exclude<typeof _, undefined> extends never ? true : false>;
      }
      {
        // 'default' | undefined
        const _ = ifNull(v as null | undefined, 'default');
        type _ = Assert<Exclude<typeof _, 'default' | undefined> extends never ? true : false>;
      }
    },
  ];
});
