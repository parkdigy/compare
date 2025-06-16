import { ifEmpty } from '../../src';

/********************************************************************************************************************
 * ifEmpty
 * ******************************************************************************************************************/
describe('ifEmpty', () => {
  it('빈 Object 인 경우 테스트', () => {
    expect(ifEmpty({}, 1)).toBe(1);
  });

  it('비어있지 않은 Object 인 경우 테스트', () => {
    expect(ifEmpty({ a: '1' }, 1)).toEqual({ a: '1' });
  });

  it('Symbol Object 인 경우 테스트', () => {
    const symbol = Symbol('key');
    expect(ifEmpty({ [symbol]: '1' }, 1)).toEqual({ [symbol]: '1' });
  });

  it('빈 Array 인 경우 테스트', () => {
    expect(ifEmpty([], 1)).toBe(1);
  });

  it('비어있지 않은 Array 인 경우 테스트', () => {
    expect(ifEmpty([1], 1)).toEqual([1]);
  });

  it('빈 String 인 경우 테스트', () => {
    expect(ifEmpty('', 1)).toBe(1);
  });

  it('비어있지 않은 String 인 경우 테스트', () => {
    expect(ifEmpty('text', 1)).toBe('text');
  });

  it('공백 있는 String 테스트', () => {
    expect(ifEmpty(' ', 1)).toBe(' ');
  });

  it('null 인 경우 테스트', () => {
    expect(ifEmpty(null, 1)).toBe(1);
  });

  it('undefined 인 경우 테스트', () => {
    expect(ifEmpty(undefined, 1)).toBe(1);
  });

  it('Date 인 경우 테스트', () => {
    const dt = new Date();
    expect(ifEmpty(dt, 1)).toEqual(dt);
  });

  /********************************************************************************************************************
   * Type Check
   * ******************************************************************************************************************/
  const typeCheck = [
    (v: any) => {
      type Assert<T extends true> = T;

      {
        // string | 10
        const _ = ifEmpty(v as string, 10);
        type _ = Assert<Exclude<typeof _, string | 10> extends never ? true : false>;
      }
      {
        // string | 10
        const _ = ifEmpty(v as string | null | undefined, 10);
        type _ = Assert<Exclude<typeof _, string | 10> extends never ? true : false>;
      }
      {
        // 'v1' | 'default'
        const _ = ifEmpty(v as '' | 'v1', 'default');
        type _ = Assert<Exclude<typeof _, 'v1' | 'default'> extends never ? true : false>;
      }
      {
        // 'v1' | 'default'
        const _ = ifEmpty(v as '' | 'v1' | null | undefined, 'default');
        type _ = Assert<Exclude<typeof _, 'v1' | 'default'> extends never ? true : false>;
      }
      {
        // 'v1' | 'v2'
        const _ = ifEmpty(v as 'v1' | 'v2', 'default');
        type _ = Assert<Exclude<typeof _, 'v1' | 'v2'> extends never ? true : false>;
      }
      {
        // 'v1' | 'default' | 'v2'
        const _ = ifEmpty(v as 'v1' | 'v2' | null | undefined, 'default');
        type _ = Assert<Exclude<typeof _, 'v1' | 'v2' | 'default'> extends never ? true : false>;
      }

      {
        // 10 | 20
        const _ = ifEmpty(v as 10 | 20, 'default');
        type _ = Assert<Exclude<typeof _, 10 | 20> extends never ? true : false>;
      }
      {
        // 10 | 'default' | 20
        const _ = ifEmpty(v as 10 | 20 | null | undefined, 'default');
        type _ = Assert<Exclude<typeof _, 10 | 20 | 'default'> extends never ? true : false>;
      }

      {
        // string[] | 'default'
        const _ = ifEmpty(v as string[], 'default');
        type _ = Assert<Exclude<typeof _, string[] | 'default'> extends never ? true : false>;
      }
      {
        // string[] | 'default'
        const _ = ifEmpty(v as string[] | null | undefined, 'default');
        type _ = Assert<Exclude<typeof _, string[] | 'default'> extends never ? true : false>;
      }

      {
        // 'default' | Record<string, any>
        const _ = ifEmpty(v as Record<string, any>, 'default');
        type _ = Assert<Exclude<typeof _, Record<string, any> | 'default'> extends never ? true : false>;
      }
      {
        // 'default' | Record<string, any>
        const _ = ifEmpty(v as Record<string, any> | null | undefined, 'default');
        type _ = Assert<Exclude<typeof _, Record<string, any> | 'default'> extends never ? true : false>;
      }

      {
        // 10 | 'v1' | 'v2' | 20
        const _ = ifEmpty(v as 'v1' | 'v2' | 10 | 20, 'default');
        type _ = Assert<Exclude<typeof _, 10 | 20 | 'v1' | 'v2'> extends never ? true : false>;
      }
      {
        // 10 | 'v1' | 'default' | 'v2' | 20
        const _ = ifEmpty(v as '' | 'v1' | 'v2' | 10 | 20, 'default');
        type _ = Assert<Exclude<typeof _, 10 | 20 | 'v1' | 'v2' | 'default'> extends never ? true : false>;
      }
      {
        // 10 | 'v1' | 'default' | 'v2' | 20
        const _ = ifEmpty(v as 'v1' | 'v2' | 10 | 20 | null | undefined, 'default');
        type _ = Assert<Exclude<typeof _, 10 | 20 | 'v1' | 'v2' | 'default'> extends never ? true : false>;
      }
      {
        // 10 | 'v1' | 'default' | 'v2' | 20
        const _ = ifEmpty(v as '' | 'v1' | 'v2' | 10 | 20 | null | undefined, 'default');
        type _ = Assert<Exclude<typeof _, 10 | 20 | 'v1' | 'v2' | 'default'> extends never ? true : false>;
      }

      {
        // 10 | string[] | 'v1' | 'default' | 'v2' | 20
        const _ = ifEmpty(v as 'v1' | 'v2' | 10 | 20 | string[], 'default');
        type _ = Assert<Exclude<typeof _, 10 | 20 | 'v1' | 'v2' | 'default' | string[]> extends never ? true : false>;
      }
      {
        // 10 | string[] | 'v1' | 'default' | 'v2' | 20
        const _ = ifEmpty(v as '' | 'v1' | 'v2' | 10 | 20 | string[], 'default');
        type _ = Assert<Exclude<typeof _, 10 | 20 | 'v1' | 'v2' | 'default' | string[]> extends never ? true : false>;
      }
      {
        // 10 | 'v1' | 'default' | 'v2' | 20 | Record<string, string>
        const _ = ifEmpty(v as 'v1' | 'v2' | 10 | 20 | Record<string, string>, 'default');
        type _ = Assert<
          Exclude<typeof _, 10 | 20 | 'v1' | 'v2' | 'default' | Record<string, string>> extends never ? true : false
        >;
      }
      {
        // 10 | 'v1' | 'default' | 'v2' | 20 | Record<string, string>
        const _ = ifEmpty(v as 'v1' | 'v2' | 10 | 20 | Record<string, string>, 'default');
        type _ = Assert<
          Exclude<typeof _, 10 | 20 | 'v1' | 'v2' | 'default' | Record<string, string>> extends never ? true : false
        >;
      }
    },
  ];
});
