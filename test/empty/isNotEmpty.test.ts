import { isNotEmpty } from '../../src';

/********************************************************************************************************************
 * isNotEmpty
 * ******************************************************************************************************************/
describe('isNotEmpty', () => {
  it('빈 Object 인 경우, false 테스트', () => {
    expect(isNotEmpty({})).toBe(false);
  });

  it('비어있지 않은 Object 인 경우, true 테스트', () => {
    expect(isNotEmpty({ a: '1' })).toBe(true);
  });

  it('Symbol Object 인 경우, true 테스트', () => {
    expect(isNotEmpty({ [Symbol('key')]: '1' })).toBe(true);
  });

  it('빈 Array 인 경우, false 테스트', () => {
    expect(isNotEmpty([])).toBe(false);
  });

  it('비어있지 않은 Array 인 경우, true 테스트', () => {
    expect(isNotEmpty([1])).toBe(true);
  });

  it('빈 String 인 경우, false 테스트', () => {
    expect(isNotEmpty('')).toBe(false);
  });

  it('비어있지 않은 String 인 경우, true 테스트', () => {
    expect(isNotEmpty('text')).toBe(true);
  });

  it('공백 있는 String 테스트', () => {
    expect(isNotEmpty(' ')).toBe(true);
  });

  it('null 인 경우, false 테스트', () => {
    expect(isNotEmpty(null)).toBe(false);
  });

  it('undefined 인 경우, false 테스트', () => {
    expect(isNotEmpty(undefined)).toBe(false);
  });

  it('Date 인 경우, true 테스트', () => {
    expect(isNotEmpty(new Date())).toBe(true);
  });

  /********************************************************************************************************************
   * Type Check
   * ******************************************************************************************************************/
  type Assert<T extends true> = T;

  const check = [
    (v: string | null | undefined) => {
      if (isNotEmpty(v)) {
        const _ = v; // T<string>
        type _ = Assert<Exclude<typeof _, string> extends never ? true : false>;
      } else {
        const _ = v; // string | null | undefined
        type _ = Assert<Exclude<typeof _, string | null | undefined> extends never ? true : false>;
      }
    },

    (v: '' | '1' | '2' | undefined | null) => {
      if (isNotEmpty(v)) {
        const _ = v; // '1' | '2'
        type _ = Assert<Exclude<typeof _, '1' | '2'> extends never ? true : false>;
      } else {
        const _ = v; // '' | null | undefined
        type _ = Assert<Exclude<typeof _, '' | null | undefined> extends never ? true : false>;
      }
    },

    (v: 1 | 2 | 3 | undefined | null) => {
      if (isNotEmpty(v)) {
        const _ = v; // 1 | 2 | 3
        type _ = Assert<Exclude<typeof _, 1 | 2 | 3> extends never ? true : false>;
      } else {
        const _ = v; // null | undefined
        type _ = Assert<Exclude<typeof _, null | undefined> extends never ? true : false>;
      }
    },

    (v: string[] | undefined | null) => {
      if (isNotEmpty(v)) {
        const _ = v; // T<string[]>
        type _ = Assert<Exclude<typeof _, string[]> extends never ? true : false>;
      } else {
        const _ = v; // string[] | null | undefined
        type _ = Assert<Exclude<typeof _, string[] | null | undefined> extends never ? true : false>;
      }
    },

    (v: Record<string, any> | undefined | null) => {
      if (isNotEmpty(v)) {
        const _ = v; // T<Record<string, any>>
        type _ = Assert<Exclude<typeof _, Record<string, any>> extends never ? true : false>;
      } else {
        const _ = v; // Record<string, any> | null | undefined
        type _ = Assert<Exclude<typeof _, Record<string, any> | null | undefined> extends never ? true : false>;
      }
    },

    (v: { a?: any } | undefined | null) => {
      if (isNotEmpty(v)) {
        const _ = v; // T<{ a?: any }>
        type _ = Assert<Exclude<typeof _, { a?: any }> extends never ? true : false>;
      } else {
        const _ = v; // { a?: any } | null | undefined
        type _ = Assert<Exclude<typeof _, { a?: any } | null | undefined> extends never ? true : false>;
      }
    },

    (v: string | 1 | 2 | string[] | Record<string, any> | undefined | null) => {
      if (isNotEmpty(v)) {
        const _ = v; // 1 | T<string> | 2 < T<string[]> | T<Record<string, any>>
        type _ = Assert<
          Exclude<typeof _, 1 | string | 2 | string[] | Record<string, any>> extends never ? true : false
        >;
      } else {
        const _ = v; // string | string[] | Record<string, any> | null | undefined
        type _ = Assert<
          Exclude<typeof _, string | string[] | Record<string, any> | null | undefined> extends never ? true : false
        >;
      }
    },

    (v: '' | '1' | '2' | 1 | 2 | string[] | { a?: string } | undefined | null) => {
      if (isNotEmpty(v)) {
        const _ = v; // 1 | '1' | '2' | 2 | T<string[]> | T<{ a?: string }>
        type _ = Assert<Exclude<typeof _, 1 | '1' | '2' | 2 | string[] | { a?: string }> extends never ? true : false>;
      } else {
        const _ = v; // '' | string[] | { a?: string } | null | undefined
        type _ = Assert<
          Exclude<typeof _, '' | string[] | { a?: string } | null | undefined> extends never ? true : false
        >;
      }
    },
  ];
});
