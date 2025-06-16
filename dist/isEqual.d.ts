/********************************************************************************************************************
 * 두 값이 동일한지 확인하는 함수
 * @param v1 비교할 첫 번째 값
 * @param v2 비교할 두 번째 값
 * @returns 두 값이 동일한지 여부
 * ******************************************************************************************************************/
declare function isEqual(v1: unknown, v2: unknown): boolean;
declare const equal: typeof isEqual;
export { isEqual, equal };
export default isEqual;
