/********************************************************************************************************************
 * null 또는 undefined 확인 함수
 * @param v 확인할 값
 * @returns null 또는 undefined 이면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/
export declare function isNullOrUndefined(v: unknown): v is null | undefined;
export default isNullOrUndefined;
