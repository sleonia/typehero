import type { Equal, Expect } from "@type-challenges/utils";

type EndsWith<T extends string, U extends string> = T extends `${infer _}${U}`
  ? true
  : false;

// ------------------- Test section ---------------------

type cases = [
  Expect<Equal<EndsWith<"abc", "bc">, true>>,
  Expect<Equal<EndsWith<"abc", "abc">, true>>,
  Expect<Equal<EndsWith<"abc", "d">, false>>,
  Expect<Equal<EndsWith<"abc", "ac">, false>>,
  Expect<Equal<EndsWith<"abc", "">, true>>,
  Expect<Equal<EndsWith<"abc", " ">, false>>,
];
