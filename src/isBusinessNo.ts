/********************************************************************************************************************
 * 사업자번호 형식인지 확인하는 함수
 * @param v 확인할 값
 * @returns 사업자번호 형식이면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/
export function isBusinessNo(v: string): boolean {
  return /(([0-9]{3})([0-9]{2})([0-9]{5}))|(([0-9]{3})-([0-9]{2})-([0-9]{5}))/.test(v);
}

export default isBusinessNo;
