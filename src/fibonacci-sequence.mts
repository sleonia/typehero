import type { Equal, Expect } from "@type-challenges/utils";

type Fibonacci<
  T extends number,
  Index extends number[] = [1, 1],
  Prev1 extends number[] = [1],
  Prev2 extends number[] = [],
> = T extends 0 | 1
  ? T
  : T extends Index["length"]
    ? [...Prev1, ...Prev2]["length"]
    : Fibonacci<T, [...Index, 1], [...Prev1, ...Prev2], Prev1>;

// ------------------- Test section ---------------------

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
];
