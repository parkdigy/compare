/********************************************************************************************************************
 * URL 형식인지 확인하는 함수 (http, https 프로토콜 허용, 허용 프로콜을 변경하려면 isUrl(v, allowProtocols) 형태로 사용)
 * @param v 확인할 값
 * @returns URL 형식이면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/
export declare function isUrl(v: string): boolean;
/********************************************************************************************************************
 * URL 형식인지 확인하는 함수
 * @param v 확인할 값
 * @param allowProtocols 허용할 프로토콜 목록
 * @returns URL 형식이면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/
export declare function isUrl(v: string, allowProtocols: string[]): boolean;
/********************************************************************************************************************
 * URL 형식인지 확인하는 함수
 * @param v 확인할 값
 * @param allowProtocols 허용할 프로토콜 목록
 * @param allowInnerUrl '/' 로 시작하는 내부 URL을 허용할지 여부
 * @returns URL 형식이면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/
export declare function isUrl(v: string, allowProtocols: string[], allowInnerUrl: boolean): boolean;
/********************************************************************************************************************
 * URL 형식인지 확인하는 함수 (http, https 프로토콜 허용, 허용 프로콜을 변경하려면 isUrl(v, allowProtocols, allowInnerUrl) 형태로 사용)
 * @param v 확인할 값
 * @param allowInnerUrl '/' 로 시작하는 내부 URL을 허용할지 여부
 * @returns URL 형식이면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/
export declare function isUrl(v: string, allowInnerUrl: boolean): boolean;
export default isUrl;
