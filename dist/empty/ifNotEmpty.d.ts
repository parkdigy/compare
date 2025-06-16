import { IsStringLiteralUnion, IsUnionInclude } from '@pdg/types';
type FinalTypeWithEmptyString<T1, T2> = T1 extends null | undefined ? Extract<T1, null | undefined> | T2 : T1 extends string ? '' | T2 : T1 extends any[] ? Exclude<T1, []> : T1 extends object ? T1 : Extract<T1, '' | null | undefined> | T2;
type FinalType<T1, T2> = T1 extends null | undefined ? Extract<T1, null | undefined> | T2 : T1 extends string ? IsStringLiteralUnion<T1> extends true ? T2 : T1 | T2 : T1 extends object ? T1 | T2 : Extract<T1, null | undefined> | T2;
/********************************************************************************************************************
 * 값이 비어있지 않은 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/
export declare function ifNotEmpty<T1, T2>(v: T1, v2: T2): IsUnionInclude<T1, ''> extends true ? FinalTypeWithEmptyString<T1, T2> : FinalType<T1, T2>;
export default ifNotEmpty;
