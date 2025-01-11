import type { Equal, Expect } from "@type-challenges/utils";

type FindAll<
  T extends string,
  P extends string,
  Acc extends unknown[] = [],
> = P extends ""
  ? []
  : T extends `${infer F}${infer R}`
    ? T extends `${P}${infer _}`
      ? [Acc["length"], ...FindAll<R, P, [...Acc, F]>]
      : FindAll<R, P, [...Acc, F]>
    : [];

// ------------------- Test section ---------------------

type cases = [
  Expect<
    Equal<FindAll<"Collection of TypeScript type challenges", "Type">, [14]>
  >,
  Expect<
    Equal<FindAll<"Collection of TypeScript type challenges", "pe">, [16, 27]>
  >,
  Expect<Equal<FindAll<"Collection of TypeScript type challenges", "">, []>>,
  Expect<Equal<FindAll<"", "Type">, []>>,
  Expect<Equal<FindAll<"", "">, []>>,
  Expect<Equal<FindAll<"AAAA", "A">, [0, 1, 2, 3]>>,
  Expect<Equal<FindAll<"AAAA", "AA">, [0, 1, 2]>>,
];
