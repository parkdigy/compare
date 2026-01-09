import { type IsUnionInclude } from '../_types';
declare const SecretSymbol: unique symbol;
type T<Type> = Type & {
    [SecretSymbol]: any;
};
type FinalTypeWithEmptyString<Type> = Type extends '' ? Extract<Type, ''> : Type extends object ? T<Type> : Exclude<Type, NonNullable<Type>>;
type FinalType<Type> = Type extends string ? T<Type> : Type extends object ? T<Type> : Exclude<Type, NonNullable<Type>>;
/********************************************************************************************************************
 * 값이 비어있는지 확인하는 함수
 * - Array 값이 비어있거나, Object 값이 비어있거나, 문자열이 비어있거나, null 또는 undefined 인 경우 true 반환
 * @param v 확인할 값
 * @returns 값이 비어있는지 여부
 * ******************************************************************************************************************/
declare function isEmpty<T>(v: T): v is IsUnionInclude<T, ''> extends true ? FinalTypeWithEmptyString<T> : FinalType<T>;
declare const empty: typeof isEmpty;
export { isEmpty, empty };
export default isEmpty;
