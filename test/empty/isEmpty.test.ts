import { isEmpty } from '../../src';

/********************************************************************************************************************
 * isEmpty
 * ******************************************************************************************************************/
describe('isEmpty', () => {
  it('빈 Object 인 경우, true 테스트', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('비어있지 않은 Object 인 경우, true 테스트', () => {
    expect(isEmpty({ a: '1' })).toBe(false);
  });

  it('Symbol Object 인 경우, false 테스트', () => {
    expect(isEmpty({ [Symbol('key')]: '1' })).toBe(false);
  });

  it('빈 Array 인 경우, true 테스트', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('비어있지 않은 Array 인 경우, false 테스트', () => {
    expect(isEmpty([1])).toBe(false);
  });

  it('빈 String 인 경우, true 테스트', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('비어있지 않은 String 인 경우, false 테스트', () => {
    expect(isEmpty('text')).toBe(false);
  });

  it('공백 있는 String 테스트', () => {
    expect(isEmpty(' ')).toBe(false);
  });

  it('null 인 경우, true 테스트', () => {
    expect(isEmpty(null)).toBe(true);
  });

  it('undefined 인 경우, true 테스트', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  it('Date 인 경우, false 테스트', () => {
    expect(isEmpty(new Date())).toBe(false);
  });

  /********************************************************************************************************************
   * Type Check
   * ******************************************************************************************************************/
  type Assert<T extends true> = T;

  const check = [
    (v: string) => {
      if (isEmpty(v)) {
        const _ = v; // T<string>
        type _ = Assert<Exclude<typeof _, string> extends never ? true : false>;
      } else {
        const _ = v; // string
        type _ = Assert<Exclude<typeof _, string> extends never ? true : false>;
      }
    },

    (v: string | null | undefined) => {
      if (isEmpty(v)) {
        const _ = v; // T<string | null | undefined>
        type _ = Assert<Exclude<typeof _, string | null | undefined> extends never ? true : false>;
      } else {
        const _ = v; // string
        type _ = Assert<Exclude<typeof _, string> extends never ? true : false>;
      }
    },

    (v: '' | '1' | '2') => {
      if (isEmpty(v)) {
        const _ = v; // ''
        type _ = Assert<Exclude<typeof _, ''> extends never ? true : false>;
      } else {
        const _ = v; // '1' | '2'
        type _ = Assert<Exclude<typeof _, '1' | '2'> extends never ? true : false>;
      }
    },

    (v: '' | '1' | '2' | undefined | null) => {
      if (isEmpty(v)) {
        const _ = v; // '' | null | undefined
        type _ = Assert<Exclude<typeof _, '' | null | undefined> extends never ? true : false>;
      } else {
        const _ = v; // '1' | '2'
        type _ = Assert<Exclude<typeof _, '1' | '2'> extends never ? true : false>;
      }
    },

    (v: 1 | 2 | 3) => {
      if (isEmpty(v)) {
        const _ = v; // never
        type _ = Assert<Exclude<typeof _, never> extends never ? true : false>;
      } else {
        const _ = v; // 1 | 2 | 3
        type _ = Assert<Exclude<typeof _, 1 | 2 | 3> extends never ? true : false>;
      }
    },

    (v: 1 | 2 | 3 | undefined | null) => {
      if (isEmpty(v)) {
        const _ = v; // null | undefined
        type _ = Assert<Exclude<typeof _, null | undefined> extends never ? true : false>;
      } else {
        const _ = v; // 1 | 2 | 3
        type _ = Assert<Exclude<typeof _, 1 | 2 | 3> extends never ? true : false>;
      }
    },

    (v: string[]) => {
      if (isEmpty(v)) {
        const _ = v; // T<string[]>
        type _ = Assert<Exclude<typeof _, string[]> extends never ? true : false>;
      } else {
        const _ = v; // string[]
        type _ = Assert<Exclude<typeof _, string[]> extends never ? true : false>;
      }
    },

    (v: string[] | undefined | null) => {
      if (isEmpty(v)) {
        const _ = v; // T<string[] | undefined | null>
        type _ = Assert<Exclude<typeof _, string[] | null | undefined> extends never ? true : false>;
      } else {
        const _ = v; // string[]
        type _ = Assert<Exclude<typeof _, string[]> extends never ? true : false>;
      }
    },

    (v: Record<string, any>) => {
      if (isEmpty(v)) {
        const _ = v; // T<Record<string, any>>
        type _ = Assert<Exclude<typeof _, Record<string, any>> extends never ? true : false>;
      } else {
        const _ = v; // Record<string, any>
        type _ = Assert<Exclude<typeof _, Record<string, any>> extends never ? true : false>;
      }
    },

    (v: Record<string, any> | undefined | null) => {
      if (isEmpty(v)) {
        const _ = v; // T<Record<string, any> | undefined | null>
        type _ = Assert<Exclude<typeof _, Record<string, any> | null | undefined> extends never ? true : false>;
      } else {
        const _ = v; // Record<string, any>
        type _ = Assert<Exclude<typeof _, Record<string, any>> extends never ? true : false>;
      }
    },

    (v: { a?: any }) => {
      if (isEmpty(v)) {
        const _ = v; // T<{ a?: any }>
        type _ = Assert<Exclude<typeof _, { a?: any }> extends never ? true : false>;
      } else {
        const _ = v; // { a?: any }
        type _ = Assert<Exclude<typeof _, { a?: any }> extends never ? true : false>;
      }
    },

    (v: { a?: any } | undefined | null) => {
      if (isEmpty(v)) {
        const _ = v; // T<{ a?: any } | undefined | null>
        type _ = Assert<Exclude<typeof _, { a?: any } | null | undefined> extends never ? true : false>;
      } else {
        const _ = v; // { a?: any }
        type _ = Assert<Exclude<typeof _, { a?: any }> extends never ? true : false>;
      }
    },

    (v: string | 1 | 2 | string[] | Record<string, any> | undefined | null) => {
      if (isEmpty(v)) {
        const _ = v; // T<string> | T<string[]> | T<Record<string, any>> | null | undefined
        type _ = Assert<
          Exclude<typeof _, string | string[] | Record<string, any> | null | undefined> extends never ? true : false
        >;
      } else {
        const _ = v; // string | 1 | 2 | string[] | Record<string, any>
        type _ = Assert<
          Exclude<typeof _, string | 1 | 2 | string[] | Record<string, any>> extends never ? true : false
        >;
      }
    },

    (v: '' | '1' | '2' | 1 | 2 | string[] | { a?: string } | undefined | null) => {
      if (isEmpty(v)) {
        const _ = v; // '' | T<string[]> | T<{ a?: string }> | null | undefined
        type _ = Assert<
          Exclude<typeof _, '' | string[] | { a?: string } | null | undefined> extends never ? true : false
        >;
      } else {
        const _ = v; // '1' | '2' | 1 | 2 | string[] | { a?: string }
        type _ = Assert<Exclude<typeof _, '1' | '2' | 1 | 2 | string[] | { a?: string }> extends never ? true : false>;
      }
    },
  ];
});
