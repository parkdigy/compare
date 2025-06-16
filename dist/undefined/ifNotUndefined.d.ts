import { IsUnionInclude } from '../@types';
/********************************************************************************************************************
 * 값이 undefined 이 아닌 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/
export declare function ifNotUndefined<T1, T2>(v: T1, v2: T2): IsUnionInclude<T1, undefined> extends true ? Exclude<T1, undefined> extends never ? Extract<T1, undefined> : Extract<T1, undefined> | T2 : T2;
export default ifNotUndefined;
