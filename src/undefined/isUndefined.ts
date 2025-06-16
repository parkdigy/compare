/********************************************************************************************************************
 * undefined 확인 함수
 * @param v 확인할 값
 * @returns undefined 이면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/

export function isUndefined(v: unknown): v is undefined {
  return v === undefined;
}

export default isUndefined;
