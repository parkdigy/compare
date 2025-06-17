import { IsUnionInclude } from '../_types';
declare const SecretSymbol: unique symbol;
type T<Type> = Type & {
    [SecretSymbol]: any;
};
type FinalType<Type> = Type extends string ? T<Type> : Type extends object ? T<Type> : Extract<Type, NonNullable<Type>>;
type FinalTypeWithEmptyString<Type> = Type extends string ? Exclude<Type, ''> : Type extends object ? T<Type> : Extract<Type, NonNullable<Type>>;
/********************************************************************************************************************
 * 값이 비어있지 않은지 확인합니다.
 * - Array 값이 비어있지 않거나, Object 값이 비어있지 않거나, 문자열이 비어있지 않거나, null 또는 undefined 가 아닌 경우 true 반환
 * @param v 확인할 값
 * @returns 값이 비어있는지 여부
 * ******************************************************************************************************************/
declare function isNotEmpty<T>(v: T): v is IsUnionInclude<T, ''> extends true ? FinalTypeWithEmptyString<T> : FinalType<T>;
declare const notEmpty: typeof isNotEmpty;
export { isNotEmpty, notEmpty };
export default isNotEmpty;
