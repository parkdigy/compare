type Value = string | number | boolean | null | undefined | bigint;
/********************************************************************************************************************
 * 배열에 특정 값이 포함되어 있는지 확인하는 함수
 * @param list 확인할 배열
 * @param value 확인할 값
 * @returns 포함 여부
 * ******************************************************************************************************************/
declare function isContains<T extends Value, List extends ReadonlyArray<T>>(list: List, value: T): value is List[number];
declare const contains: typeof isContains;
export { isContains, contains };
export default isContains;
