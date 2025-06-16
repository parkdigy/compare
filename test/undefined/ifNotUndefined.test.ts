import { ifNotUndefined } from '../../src';

/********************************************************************************************************************
 * ifNotUndefined
 * ******************************************************************************************************************/
describe('ifNotUndefined', () => {
  it('빈 Object 인 경우 테스트', () => {
    expect(ifNotUndefined({}, 1)).toBe(1);
  });

  it('비어있지 않은 Object 인 경우 테스트', () => {
    expect(ifNotUndefined({ a: '1' }, 1)).toBe(1);
  });

  it('Symbol Object 인 경우 테스트', () => {
    expect(ifNotUndefined({ [Symbol('key')]: '1' }, 1)).toBe(1);
  });

  it('빈 Array 인 경우 테스트', () => {
    expect(ifNotUndefined([], 1)).toBe(1);
  });

  it('비어있지 않은 Array 인 경우 테스트', () => {
    expect(ifNotUndefined([1], 1)).toBe(1);
  });

  it('빈 String 인 경우 테스트', () => {
    expect(ifNotUndefined('', 1)).toBe(1);
  });

  it('비어있지 않은 String 인 경우 테스트', () => {
    expect(ifNotUndefined('text', 1)).toBe(1);
  });

  it('공백 있는 String 테스트', () => {
    expect(ifNotUndefined(' ', 1)).toBe(1);
  });

  it('null 인 경우 테스트', () => {
    expect(ifNotUndefined(null, 1)).toBe(1);
  });

  it('undefined 인 경우 테스트', () => {
    expect(ifNotUndefined(undefined, 1)).toBe(undefined);
  });

  it('Date 인 경우 테스트', () => {
    expect(ifNotUndefined(new Date(), 1)).toBe(1);
  });

  /********************************************************************************************************************
   * Type Check
   * ******************************************************************************************************************/
  const check = [
    (v: any) => {
      type Assert<T extends true> = T;

      {
        // 10
        const _ = ifNotUndefined(v as string, 10);
        type _ = Assert<Exclude<typeof _, 10> extends never ? true : false>;
      }
      {
        // 10
        const _ = ifNotUndefined(v as string | null, 10);
        type _ = Assert<Exclude<typeof _, 10> extends never ? true : false>;
      }
      {
        // 10 | undefined
        const _ = ifNotUndefined(v as string | undefined, 10);
        type _ = Assert<Exclude<typeof _, 10 | undefined> extends never ? true : false>;
      }
      {
        // 10 | undefined
        const _ = ifNotUndefined(v as string | null | undefined, 10);
        type _ = Assert<Exclude<typeof _, 10 | undefined> extends never ? true : false>;
      }

      {
        // 'default'
        const _ = ifNotUndefined(v as 'v1', 'default');
        type _ = Assert<Exclude<typeof _, 'default'> extends never ? true : false>;
      }
      {
        // 'default'
        const _ = ifNotUndefined(v as 'v1' | null, 'default');
        type _ = Assert<Exclude<typeof _, 'default'> extends never ? true : false>;
      }
      {
        // 'default' | undefined
        const _ = ifNotUndefined(v as 'v1' | undefined, 'default');
        type _ = Assert<Exclude<typeof _, 'default' | undefined> extends never ? true : false>;
      }
      {
        // 'default' | undefined
        const _ = ifNotUndefined(v as 'v1' | null | undefined, 'default');
        type _ = Assert<Exclude<typeof _, 'default' | undefined> extends never ? true : false>;
      }

      {
        // 'default'
        const _ = ifNotUndefined(v as null, 'default');
        type _ = Assert<Exclude<typeof _, 'default'> extends never ? true : false>;
      }
      {
        // undefined
        const _ = ifNotUndefined(v as undefined, 'default');
        type _ = Assert<Exclude<typeof _, undefined> extends never ? true : false>;
      }
    },
  ];
});
