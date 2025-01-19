import type { Equal, Expect } from "@type-challenges/utils";
type IsTuple<T> = [T] extends [never]
  ? false
  : T extends readonly [any] | []
    ? true
    : false;

// ------------------- Test section ---------------------

type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1 }>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
  Expect<Equal<IsTuple<never>, false>>,
];
