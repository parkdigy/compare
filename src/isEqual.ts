/********************************************************************************************************************
 * 두 값이 동일한지 확인하는 함수
 * @param v1 비교할 첫 번째 값
 * @param v2 비교할 두 번째 값
 * @returns 두 값이 동일한지 여부
 * ******************************************************************************************************************/
function isEqual(v1: unknown, v2: unknown): boolean {
  if (v1 === v2) return true;
  if (typeof v1 !== typeof v2) return false;
  if (v1 == null || v2 == null) return false;
  if (typeof v1 === 'object' && typeof v2 === 'object') {
    try {
      return (
        JSON.stringify(v1) === JSON.stringify(v2) &&
        JSON.stringify(Object.entries(v1)) === JSON.stringify(Object.entries(v2))
      );
    } catch {
      return false;
    }
  } else {
    return v1 === v2;
  }
}

const equal = isEqual;

export { isEqual, equal };

export default isEqual;
