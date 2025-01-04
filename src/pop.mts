import type { Equal, Expect } from "@type-challenges/utils";

type Pop<T extends any[]> = T extends [...infer Rest, infer _Last] ? Rest : [];

// ------------------- Test section ---------------------

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<["a", "b", "c", "d"]>, ["a", "b", "c"]>>,
  Expect<Equal<Pop<[]>, []>>,
];
