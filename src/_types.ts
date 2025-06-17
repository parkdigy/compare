export type IsUnionInclude<UnionType, TargetType> = [TargetType] extends [UnionType]
  ? [UnionType] extends [Exclude<UnionType, TargetType>]
    ? false
    : true
  : false;

export type IsStringLiteralUnion<U> = string extends U ? false : U extends string ? true : false;
