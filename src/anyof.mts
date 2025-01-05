import type { Equal, Expect } from "@type-challenges/utils";

type IsTruthyNumber<T extends number> = T extends 0 ? false : true;
type IsTruthyContainer<T extends Array<any> | string> = T extends "" | []
  ? false
  : true;
type IsTruthyObject<T extends object> = keyof T extends never ? false : true;

type IsTruthy<T extends any> = T extends number
  ? IsTruthyNumber<T>
  : T extends string | Array<any>
    ? IsTruthyContainer<T>
    : T extends object
      ? IsTruthyObject<T>
      : T extends true
        ? true
        : false;

type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer Rest]
  ? IsTruthy<F> extends true
    ? true
    : AnyOf<Rest>
  : false;

// ------------------- Test section ---------------------

type cases = [
  Expect<
    Equal<AnyOf<[1, "test", true, [1], { name: "test" }, { 1: "test" }]>, true>
  >,
  Expect<Equal<AnyOf<[1, "", false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "test", false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [], { name: "test" }]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [], { 1: "test" }]>, true>>,
  Expect<
    Equal<AnyOf<[0, "", false, [], { name: "test" }, { 1: "test" }]>, true>
  >,
  Expect<Equal<AnyOf<[0, "", false, [], {}, undefined, null]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
];
