'use strict';Object.defineProperty(exports,'__esModule',{value:true});/********************************************************************************************************************
 * 값이 비어있는지 확인하는 함수
 * - Array 값이 비어있거나, Object 값이 비어있거나, 문자열이 비어있거나, null 또는 undefined 인 경우 true 반환
 * @param v 확인할 값
 * @returns 값이 비어있는지 여부
 * ******************************************************************************************************************/
function isEmpty(v) {
    if (v == null)
        return true;
    if (typeof v === 'string')
        return v === '';
    if (Array.isArray(v))
        return v.length === 0;
    if (v instanceof Date)
        return isNaN(v.getTime());
    if (v instanceof Map || v instanceof Set)
        return v.size === 0;
    if (v instanceof RegExp)
        return false;
    if (typeof v === 'object')
        return Reflect.ownKeys(v).length === 0;
    return false;
}
const empty = isEmpty;/********************************************************************************************************************
 * 값이 비어있는 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/
function ifEmpty(v, v2) {
    return empty(v) ? v2 : v;
}/********************************************************************************************************************
 * 값이 비어있지 않은지 확인합니다.
 * - Array 값이 비어있지 않거나, Object 값이 비어있지 않거나, 문자열이 비어있지 않거나, null 또는 undefined 가 아닌 경우 true 반환
 * @param v 확인할 값
 * @returns 값이 비어있는지 여부
 * ******************************************************************************************************************/
function isNotEmpty(v) {
    return !isEmpty(v);
}
const notEmpty = isNotEmpty;/********************************************************************************************************************
 * 값이 비어있지 않은 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/
function ifNotEmpty(v, v2) {
    return notEmpty(v) ? v2 : v;
}/********************************************************************************************************************
 * null 확인 함수
 * @param v 확인할 값
 * @returns null 이면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/
function isNull(v) {
    return v === null;
}/********************************************************************************************************************
 * 값이 null 인 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/
function ifNull(v, v2) {
    return v === null ? v2 : v;
}/********************************************************************************************************************
 * not null 확인 함수
 * @param v 확인할 값
 * @returns null 이 아니면 true, null 이면 false 반환
 * ******************************************************************************************************************/
function isNotNull(v) {
    return v !== null;
}/********************************************************************************************************************
 * 값이 null 아 아닌 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/
function ifNotNull(v, v2) {
    return v !== null ? v2 : v;
}/********************************************************************************************************************
 * undefined 확인 함수
 * @param v 확인할 값
 * @returns undefined 이면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/
function isUndefined(v) {
    return v === undefined;
}/********************************************************************************************************************
 * 값이 undefined 인 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/
function ifUndefined(v, v2) {
    return v === undefined ? v2 : v;
}/********************************************************************************************************************
 * not undefined 확인 함수
 * @param v 확인할 값
 * @returns undefined 이 아니면 true, undefined 이면 false 반환
 * ******************************************************************************************************************/
function isNotUndefined(v) {
    return v !== undefined;
}/********************************************************************************************************************
 * 값이 undefined 이 아닌 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/
function ifNotUndefined(v, v2) {
    return v !== undefined ? v2 : v;
}/********************************************************************************************************************
 * null 또는 undefined 확인 함수
 * @param v 확인할 값
 * @returns null 또는 undefined 이면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/
function isNullOrUndefined(v) {
    return v == null;
}/********************************************************************************************************************
 * 값이 null 또는 undefined 인 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/
function ifNullOrUndefined(v, v2) {
    return v == null ? v2 : v;
}/********************************************************************************************************************
 * not null, undefined 확인 함수
 * @param v 확인할 값
 * @returns null, undefined 아니면 true, null 또는 undefined 이면 false 반환
 * ******************************************************************************************************************/
function isNotNullAndUndefined(v) {
    return v != null;
}/********************************************************************************************************************
 * 값이 null 과 undefined 가 아닌 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/
function ifNotNullAndUndefined(v, v2) {
    return v != null ? v2 : v;
}/********************************************************************************************************************
 * 사업자번호 형식인지 확인하는 함수
 * @param v 확인할 값
 * @returns 사업자번호 형식이면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/
function isBusinessNo(v) {
    return /(([0-9]{3})([0-9]{2})([0-9]{5}))|(([0-9]{3})-([0-9]{2})-([0-9]{5}))/.test(v);
}/********************************************************************************************************************
 * 배열에 특정 값이 포함되어 있는지 확인하는 함수
 * @param list 확인할 배열
 * @param value 확인할 값
 * @returns 포함 여부
 * ******************************************************************************************************************/
function isContains(list, value) {
    return list.includes(value);
}
const contains = isContains;/********************************************************************************************************************
 * 이메일 형식인지 확인하는 함수
 * @param v 확인할 값
 * @returns 이메일 형식이면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/
function isEmail(v) {
    return new RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/, 'g').test(v);
}/********************************************************************************************************************
 * 두 값이 동일한지 확인하는 함수
 * @param v1 비교할 첫 번째 값
 * @param v2 비교할 두 번째 값
 * @returns 두 값이 동일한지 여부
 * ******************************************************************************************************************/
function isEqual(v1, v2) {
    if (v1 === v2)
        return true;
    if (typeof v1 !== typeof v2)
        return false;
    if (v1 == null || v2 == null)
        return false;
    if (typeof v1 === 'object' && typeof v2 === 'object') {
        try {
            return (JSON.stringify(v1) === JSON.stringify(v2) &&
                JSON.stringify(Object.entries(v1)) === JSON.stringify(Object.entries(v2)));
        }
        catch (_a) {
            return false;
        }
    }
    else {
        return v1 === v2;
    }
}
const equal = isEqual;/********************************************************************************************************************
 * 숫자가 Integer 인지 확인하는 함수
 * @param v 확인할 값
 * @returns 숫자가 Integer 면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/
function isInteger(v) {
    return Number.isInteger(v);
}/********************************************************************************************************************
 * 휴대전화번호 형식인지 확인하는 함수
 * @param v 확인할 값
 * @returns 휴대전화번호 형식이면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/
function isMobileNo(v) {
    return /(^(01(?:0|1|[6-9]))([0-9]{3,4})([0-9]{4,4})$)|(^(01(?:0|1|[6-9]))-([0-9]{3,4})-([0-9]{4,4})$)|(^\+(?:[-]?[0-9]){8,}$)/.test(v);
}/********************************************************************************************************************
 * 문자열에 숫자, -, +, . 만 포함되어 있는지 확인하는 함수
 * @param v 확인할 값
 * @param allowComma 콤마(,)를 허용할지 여부 (기본값: false)
 * @returns 숫자만 포함되어 있으면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/
function isNumericText(v, allowComma = false) {
    return (allowComma ? /^[+-]?([0-9]+([.,][0-9]+)?|[.,][0-9]+)$/ : /^[+-]?([0-9]+([.][0-9]+)?|[.][0-9]+)$/).test(v);
}/********************************************************************************************************************
 * 주민등록번호 형식인지 확인하는 함수
 * @param v 확인할 값
 * @returns 주민등록번호 형식이면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/
function isPersonalNo(v) {
    return /(([0-9]{6})([0-9]{7}))|(([0-9]{6})-([0-9]{7}))/.test(v);
}/********************************************************************************************************************
 * 전화번호 형식인지 확인하는 함수
 * @param v 확인할 값
 * @returns 전화번호 형식이면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/
function isTelNo(v) {
    return /(^([0-9]{2,3})([0-9]{3,4})([0-9]{4})$)|(^([0-9]{2,3})-([0-9]{3,4})-([0-9]{4})$)|(^([0-9]{4})-([0-9]{4})$)|(^\+(?:[-]?[0-9]){8,}$)|(^1[0-9]{7}$)/.test(v);
}function isUrl(v, allowProtocolsOrInnerUrl, allowInnerUrl) {
    const finalAllowProtocols = Array.isArray(allowProtocolsOrInnerUrl) ? allowProtocolsOrInnerUrl : undefined;
    const finalAllowInnerUrl = typeof allowProtocolsOrInnerUrl === 'boolean' ? allowProtocolsOrInnerUrl : allowInnerUrl;
    // 기본 허용 프로토콜
    const baseProtocols = ['http', 'https'];
    // 최종 프로토콜 목록 구성
    const protocols = finalAllowProtocols ? finalAllowProtocols : baseProtocols;
    const protocolPattern = protocols.map((p) => p.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|'); // 정규식 escape
    const fullUrlPattern = new RegExp(`^(?:(${protocolPattern}):\\/\\/)?[\\w.-]+(?:\\.[\\w.-]+)+[\\w\\-._~:/?#\\[\\]@!$&'%()*+,;=.]*$`);
    const innerUrlPattern = new RegExp(`^((?:(${protocolPattern}):\\/\\/)?[\\w.-]+(?:\\.[\\w.-]+)|\\/)+[\\w\\-._~:/?#\\[\\]@!$&'%()*+,;=.]*$`);
    return finalAllowInnerUrl ? innerUrlPattern.test(v) : fullUrlPattern.test(v);
}var index = {
    ifEmpty,
    ifNotEmpty,
    isEmpty,
    isNotEmpty,
    empty,
    notEmpty,
    ifNotNull,
    ifNull,
    isNotNull,
    isNull,
    ifNotUndefined,
    ifUndefined,
    isNotUndefined,
    isUndefined,
    ifNotNullAndUndefined,
    ifNullOrUndefined,
    isNotNullAndUndefined,
    isNullOrUndefined,
    isContains,
    contains,
    isEqual,
    equal,
    isBusinessNo,
    isEmail,
    isInteger,
    isMobileNo,
    isNumericText,
    isPersonalNo,
    isTelNo,
    isUrl,
};exports.contains=contains;exports.default=index;exports.empty=empty;exports.equal=equal;exports.ifEmpty=ifEmpty;exports.ifNotEmpty=ifNotEmpty;exports.ifNotNull=ifNotNull;exports.ifNotNullAndUndefined=ifNotNullAndUndefined;exports.ifNotUndefined=ifNotUndefined;exports.ifNull=ifNull;exports.ifNullOrUndefined=ifNullOrUndefined;exports.ifUndefined=ifUndefined;exports.isBusinessNo=isBusinessNo;exports.isContains=isContains;exports.isEmail=isEmail;exports.isEmpty=isEmpty;exports.isEqual=isEqual;exports.isInteger=isInteger;exports.isMobileNo=isMobileNo;exports.isNotEmpty=isNotEmpty;exports.isNotNull=isNotNull;exports.isNotNullAndUndefined=isNotNullAndUndefined;exports.isNotUndefined=isNotUndefined;exports.isNull=isNull;exports.isNullOrUndefined=isNullOrUndefined;exports.isNumericText=isNumericText;exports.isPersonalNo=isPersonalNo;exports.isTelNo=isTelNo;exports.isUndefined=isUndefined;exports.isUrl=isUrl;exports.notEmpty=notEmpty;