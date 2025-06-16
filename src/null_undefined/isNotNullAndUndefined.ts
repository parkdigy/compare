/********************************************************************************************************************
 * not null, undefined 확인 함수
 * @param v 확인할 값
 * @returns null, undefined 아니면 true, null 또는 undefined 이면 false 반환
 * ******************************************************************************************************************/
export function isNotNullAndUndefined<T>(v: T): v is Exclude<T, null | undefined> {
  return v != null;
}

export default isNotNullAndUndefined;
