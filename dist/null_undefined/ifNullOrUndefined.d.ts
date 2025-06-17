import { IsUnionInclude } from '../_types';
/********************************************************************************************************************
 * 값이 null 또는 undefined 인 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/
export declare function ifNullOrUndefined<T1, T2>(v: T1, v2: T2): IsUnionInclude<T1, null | undefined> extends true ? Exclude<T1, null | undefined> | T2 : IsUnionInclude<T1, null> extends true ? Exclude<T1, null> | T2 : IsUnionInclude<T1, undefined> extends true ? Exclude<T1, undefined> | T2 : T1;
export default ifNullOrUndefined;
