import { ifNotEmpty } from '../../src';

/********************************************************************************************************************
 * ifNotEmpty
 * ******************************************************************************************************************/
describe('ifNotEmpty', () => {
  it('빈 Object 인 경우 테스트', () => {
    expect(ifNotEmpty({}, 1)).toEqual({});
  });

  it('비어있지 않은 Object 인 경우 테스트', () => {
    expect(ifNotEmpty({ a: '1' }, 1)).toBe(1);
  });

  it('Symbol Object 인 경우 테스트', () => {
    expect(ifNotEmpty({ [Symbol('key')]: '1' }, 1)).toBe(1);
  });

  it('빈 Array 인 경우 테스트', () => {
    expect(ifNotEmpty([], 1)).toEqual([]);
  });

  it('비어있지 않은 Array 인 경우 테스트', () => {
    expect(ifNotEmpty([1], 1)).toBe(1);
  });

  it('빈 String 인 경우 테스트', () => {
    expect(ifNotEmpty('', 1)).toBe('');
  });

  it('비어있지 않은 String 인 경우 테스트', () => {
    expect(ifNotEmpty('text', 1)).toBe(1);
  });

  it('공백 있는 String 테스트', () => {
    expect(ifNotEmpty(' ', 1)).toBe(1);
  });

  it('null 인 경우 테스트', () => {
    expect(ifNotEmpty(null, 1)).toBe(null);
  });

  it('undefined 인 경우 테스트', () => {
    expect(ifNotEmpty(undefined, 1)).toBe(undefined);
  });

  it('Date 인 경우 테스트', () => {
    expect(ifNotEmpty(new Date(), 1)).toBe(1);
  });

  /********************************************************************************************************************
   * Type Check
   * ******************************************************************************************************************/
  const typeCheck = [
    (v: any) => {
      type Assert<T extends true> = T;

      {
        // string | 10
        const _ = ifNotEmpty(v as string, 10);
        type _ = Assert<Exclude<typeof _, string | 10> extends never ? true : false>;
      }
      {
        // string | 10 | null | undefined
        const _ = ifNotEmpty(v as string | null | undefined, 10);
        type _ = Assert<Exclude<typeof _, string | 10 | null | undefined> extends never ? true : false>;
      }

      {
        // '' | 'default'
        const _ = ifNotEmpty(v as '' | 'v1', 'default');
        type _ = Assert<Exclude<typeof _, '' | 'default'> extends never ? true : false>;
      }
      {
        // '' | 'default' | null | undefined
        const _ = ifNotEmpty(v as '' | 'v1' | null | undefined, 'default');
        type _ = Assert<Exclude<typeof _, '' | 'default' | null | undefined> extends never ? true : false>;
      }

      {
        // 'default'
        const _ = ifNotEmpty(v as 'v1' | 'v2', 'default');
        type _ = Assert<Exclude<typeof _, 'default'> extends never ? true : false>;
      }
      {
        // 'default' | null | undefined
        const _ = ifNotEmpty(v as 'v1' | 'v2' | null | undefined, 'default');
        type _ = Assert<Exclude<typeof _, 'default' | null | undefined> extends never ? true : false>;
      }

      {
        // 'default'
        const _ = ifNotEmpty(v as 10 | 20, 'default');
        type _ = Assert<Exclude<typeof _, 'default'> extends never ? true : false>;
      }
      {
        // 'default' | null | undefined
        const _ = ifNotEmpty(v as 10 | 20 | null | undefined, 'default');
        type _ = Assert<Exclude<typeof _, 'default' | null | undefined> extends never ? true : false>;
      }

      {
        // string[] | 'default'
        const _ = ifNotEmpty(v as string[], 'default');
        type _ = Assert<Exclude<typeof _, string[] | 'default'> extends never ? true : false>;
      }
      {
        // string[] | 'default' | null | undefined
        const _ = ifNotEmpty(v as string[] | null | undefined, 'default');
        type _ = Assert<Exclude<typeof _, string[] | 'default' | null | undefined> extends never ? true : false>;
      }

      {
        // 'default' | Record<string, any>
        const _ = ifNotEmpty(v as Record<string, any>, 'default');
        type _ = Assert<Exclude<typeof _, Record<string, any> | 'default'> extends never ? true : false>;
      }
      {
        // 'default' | Record<string, any> | null | undefined
        const _ = ifNotEmpty(v as Record<string, any> | null | undefined, 'default');
        type _ = Assert<
          Exclude<typeof _, Record<string, any> | 'default' | null | undefined> extends never ? true : false
        >;
      }

      {
        // 'default'
        const _ = ifNotEmpty(v as 'v1' | 'v2' | 10 | 20, 'default');
        type _ = Assert<Exclude<typeof _, 'default'> extends never ? true : false>;
      }
      {
        // '' | 'default'
        const _ = ifNotEmpty(v as '' | 'v1' | 'v2' | 10 | 20, 'default');
        type _ = Assert<Exclude<typeof _, '' | 'default'> extends never ? true : false>;
      }
      {
        // 'default' | null | undefined
        const _ = ifNotEmpty(v as 'v1' | 'v2' | 10 | 20 | null | undefined, 'default');
        type _ = Assert<Exclude<typeof _, 'default' | null | undefined> extends never ? true : false>;
      }
      {
        // '' | 'default' | null | undefined
        const _ = ifNotEmpty(v as '' | 'v1' | 'v2' | 10 | 20 | null | undefined, 'default');
        type _ = Assert<Exclude<typeof _, '' | 'default' | null | undefined> extends never ? true : false>;
      }

      {
        // string[] | 'default'
        const _ = ifNotEmpty(v as 'v1' | 'v2' | 10 | 20 | string[], 'default');
        type _ = Assert<Exclude<typeof _, string[] | 'default'> extends never ? true : false>;
      }
      {
        // '' | string[] | 'default'
        const _ = ifNotEmpty(v as '' | 'v1' | 'v2' | 10 | 20 | string[], 'default');
        type _ = Assert<Exclude<typeof _, '' | string[] | 'default'> extends never ? true : false>;
      }
      {
        // 'default' | Record<string, string>
        const _ = ifNotEmpty(v as 'v1' | 'v2' | 10 | 20 | Record<string, string>, 'default');
        type _ = Assert<Exclude<typeof _, Record<string, string> | 'default'> extends never ? true : false>;
      }
      {
        // '' | 'default' | Record<string, string>
        const _ = ifNotEmpty(v as '' | 'v1' | 'v2' | 10 | 20 | Record<string, string>, 'default');
        type _ = Assert<Exclude<typeof _, '' | Record<string, string> | 'default'> extends never ? true : false>;
      }
    },
  ];
});
