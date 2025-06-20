import { IsUnionInclude } from '../_types';

/********************************************************************************************************************
 * 값이 null 아 아닌 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/
export function ifNotNull<T1, T2>(
  v: T1,
  v2: T2
): IsUnionInclude<T1, null> extends true
  ? Exclude<T1, null> extends never
    ? Extract<T1, null> // only null
    : Extract<T1, null> | T2 // includes null
  : T2 {
  return v !== null ? (v2 as any) : (v as any);
}

export default ifNotNull;
