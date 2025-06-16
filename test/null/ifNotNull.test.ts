import { ifNotNull } from '../../src';

/********************************************************************************************************************
 * ifNotNull
 * ******************************************************************************************************************/
describe('ifNotNull', () => {
  it('빈 Object 인 경우 테스트', () => {
    expect(ifNotNull({}, 1)).toBe(1);
  });

  it('비어있지 않은 Object 인 경우 테스트', () => {
    expect(ifNotNull({ a: '1' }, 1)).toBe(1);
  });

  it('Symbol Object 인 경우 테스트', () => {
    expect(ifNotNull({ [Symbol('key')]: '1' }, 1)).toBe(1);
  });

  it('빈 Array 인 경우 테스트', () => {
    expect(ifNotNull([], 1)).toBe(1);
  });

  it('비어있지 않은 Array 인 경우 테스트', () => {
    expect(ifNotNull([1], 1)).toBe(1);
  });

  it('빈 String 인 경우 테스트', () => {
    expect(ifNotNull('', 1)).toBe(1);
  });

  it('비어있지 않은 String 인 경우 테스트', () => {
    expect(ifNotNull('text', 1)).toBe(1);
  });

  it('공백 있는 String 테스트', () => {
    expect(ifNotNull(' ', 1)).toBe(1);
  });

  it('null 인 경우 테스트', () => {
    expect(ifNotNull(null, 1)).toBe(null);
  });

  it('undefined 인 경우 테스트', () => {
    expect(ifNotNull(undefined, 1)).toBe(1);
  });

  it('Date 인 경우 테스트', () => {
    expect(ifNotNull(new Date(), 1)).toBe(1);
  });

  /********************************************************************************************************************
   * Type Check
   * ******************************************************************************************************************/
  const check = [
    (v: any) => {
      type Assert<T extends true> = T;

      {
        // 10
        const _ = ifNotNull(v as string, 10);
        type _ = Assert<Exclude<typeof _, 10> extends never ? true : false>;
      }
      {
        // 10 | null
        const _ = ifNotNull(v as string | null, 10);
        type _ = Assert<Exclude<typeof _, 10 | null> extends never ? true : false>;
      }
      {
        // 10
        const _ = ifNotNull(v as string | undefined, 10);
        type _ = Assert<Exclude<typeof _, 10> extends never ? true : false>;
      }
      {
        // 10 | null
        const _ = ifNotNull(v as string | null | undefined, 10);
        type _ = Assert<Exclude<typeof _, 10 | null> extends never ? true : false>;
      }

      {
        // 'default'
        const _ = ifNotNull(v as 'v1', 'default');
        type _ = Assert<Exclude<typeof _, 'default'> extends never ? true : false>;
      }
      {
        // 'default' | null
        const _ = ifNotNull(v as 'v1' | null, 'default');
        type _ = Assert<Exclude<typeof _, 'default' | null> extends never ? true : false>;
      }
      {
        // 'default'
        const _ = ifNotNull(v as 'v1' | undefined, 'default');
        type _ = Assert<Exclude<typeof _, 'default'> extends never ? true : false>;
      }
      {
        // 'default' | null
        const _ = ifNotNull(v as 'v1' | null | undefined, 'default');
        type _ = Assert<Exclude<typeof _, 'default' | null> extends never ? true : false>;
      }

      {
        // null
        const _ = ifNotNull(v as null, 'default');
        type _ = Assert<Exclude<typeof _, null> extends never ? true : false>;
      }
      {
        // 'default'
        const _ = ifNotNull(v as undefined, 'default');
        type _ = Assert<Exclude<typeof _, 'default'> extends never ? true : false>;
      }
    },
  ];
});
