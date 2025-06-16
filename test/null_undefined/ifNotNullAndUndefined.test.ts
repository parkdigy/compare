import { ifNotNullAndUndefined } from '../../src';

/********************************************************************************************************************
 * ifNotNullAndUndefined
 * ******************************************************************************************************************/
describe('ifNotNullAndUndefined', () => {
  it('빈 Object 인 경우 테스트', () => {
    expect(ifNotNullAndUndefined({}, 1)).toBe(1);
  });

  it('비어있지 않은 Object 인 경우 테스트', () => {
    expect(ifNotNullAndUndefined({ a: '1' }, 1)).toBe(1);
  });

  it('Symbol Object 인 경우 테스트', () => {
    expect(ifNotNullAndUndefined({ [Symbol('key')]: '1' }, 1)).toBe(1);
  });

  it('빈 Array 인 경우 테스트', () => {
    expect(ifNotNullAndUndefined([], 1)).toBe(1);
  });

  it('비어있지 않은 Array 인 경우 테스트', () => {
    expect(ifNotNullAndUndefined([1], 1)).toBe(1);
  });

  it('빈 String 인 경우 테스트', () => {
    expect(ifNotNullAndUndefined('', 1)).toBe(1);
  });

  it('비어있지 않은 String 인 경우 테스트', () => {
    expect(ifNotNullAndUndefined('text', 1)).toBe(1);
  });

  it('공백 있는 String 테스트', () => {
    expect(ifNotNullAndUndefined(' ', 1)).toBe(1);
  });

  it('null 인 경우 테스트', () => {
    expect(ifNotNullAndUndefined(null, 1)).toBe(null);
  });

  it('undefined 인 경우 테스트', () => {
    expect(ifNotNullAndUndefined(undefined, 1)).toBe(undefined);
  });

  it('Date 인 경우 테스트', () => {
    expect(ifNotNullAndUndefined(new Date(), 1)).toBe(1);
  });

  /********************************************************************************************************************
   * Type Check
   * ******************************************************************************************************************/
  const typeCheck = [
    (v: any) => {
      type Assert<T extends true> = T;

      {
        // 10
        const _ = ifNotNullAndUndefined(v as string, 10);
        type _ = Assert<Exclude<typeof _, 10> extends never ? true : false>;
      }
      {
        // 10 | null
        const _ = ifNotNullAndUndefined(v as string | null, 10);
        type _ = Assert<Exclude<typeof _, 10 | null> extends never ? true : false>;
      }
      {
        // 10 | undefined
        const _ = ifNotNullAndUndefined(v as string | undefined, 10);
        type _ = Assert<Exclude<typeof _, 10 | undefined> extends never ? true : false>;
      }
      {
        // 10 | null | undefined
        const _ = ifNotNullAndUndefined(v as string | null | undefined, 10);
        type _ = Assert<Exclude<typeof _, 10 | null | undefined> extends never ? true : false>;
      }

      {
        // 'default'
        const _ = ifNotNullAndUndefined(v as 'v1', 'default');
        type _ = Assert<Exclude<typeof _, 'default'> extends never ? true : false>;
      }
      {
        // 'default' | null
        const _ = ifNotNullAndUndefined(v as 'v1' | null, 'default');
        type _ = Assert<Exclude<typeof _, 'default' | null> extends never ? true : false>;
      }
      {
        // 'default' | undefined
        const _ = ifNotNullAndUndefined(v as 'v1' | undefined, 'default');
        type _ = Assert<Exclude<typeof _, 'default' | undefined> extends never ? true : false>;
      }
      {
        // 'default' | null | undefined
        const _ = ifNotNullAndUndefined(v as 'v1' | null | undefined, 'default');
        type _ = Assert<Exclude<typeof _, 'default' | null | undefined> extends never ? true : false>;
      }

      {
        // null
        const _ = ifNotNullAndUndefined(v as null, 'default');
        type _ = Assert<Exclude<typeof _, null> extends never ? true : false>;
      }
      {
        // undefined
        const _ = ifNotNullAndUndefined(v as undefined, 'default');
        type _ = Assert<Exclude<typeof _, undefined> extends never ? true : false>;
      }
      {
        // null | undefined
        const _ = ifNotNullAndUndefined(v as null | undefined, 'default');
        type _ = Assert<Exclude<typeof _, null | undefined> extends never ? true : false>;
      }
    },
  ];
});
