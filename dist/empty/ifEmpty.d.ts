import { IsStringLiteralUnion, IsUnionInclude } from '@pdg/types';
type FinalType<T1, T2> = T1 extends string ? IsStringLiteralUnion<T1> extends true ? T1 : T1 | T2 : T1 extends object ? T1 | T2 : Exclude<T1, null | undefined>;
/********************************************************************************************************************
 * 값이 비어있는 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/
export declare function ifEmpty<T1, T2>(v: T1, v2: T2): IsUnionInclude<T1, null> extends true ? Exclude<T1, '' | null | undefined> | T2 : IsUnionInclude<T1, undefined> extends true ? Exclude<T1, '' | null | undefined> | T2 : IsUnionInclude<T1, null | undefined> extends true ? Exclude<T1, '' | null | undefined> | T2 : IsUnionInclude<T1, ''> extends true ? Exclude<T1, '' | null | undefined> | T2 : IsUnionInclude<T1, '' | null | undefined> extends true ? Exclude<T1, '' | null | undefined> | T2 : FinalType<T1, T2>;
export default ifEmpty;
