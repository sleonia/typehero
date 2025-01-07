import type { Equal, Expect } from "@type-challenges/utils";

type Shift<T extends Array<any>> = T extends [infer _, ...infer R] ? R : [];

// ------------------- Test section ---------------------

type cases = [
  // @ts-expect-error
  Shift<unknown>,
  Expect<Equal<Shift<[]>, []>>,
  Expect<Equal<Shift<[1]>, []>>,
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<["a", "b", "c", "d"]>, ["b", "c", "d"]>>,
];
