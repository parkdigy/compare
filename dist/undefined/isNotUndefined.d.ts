/********************************************************************************************************************
 * not undefined 확인 함수
 * @param v 확인할 값
 * @returns undefined 이 아니면 true, undefined 이면 false 반환
 * ******************************************************************************************************************/
export declare function isNotUndefined<T>(v: T): v is Exclude<T, undefined>;
export default isNotUndefined;
