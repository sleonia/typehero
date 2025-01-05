import type { Equal, Expect } from "@type-challenges/utils";

type _LengthOfString<S extends string> =
  S extends `${infer _First}${infer Rest}` ? [1, ..._LengthOfString<Rest>] : [];

type LengthOfString<S extends string> = _LengthOfString<S>["length"];

// ------------------- Test section ---------------------

type cases = [
  Expect<Equal<LengthOfString<"">, 0>>,
  Expect<Equal<LengthOfString<"kumiko">, 6>>,
  Expect<Equal<LengthOfString<"reina">, 5>>,
  Expect<Equal<LengthOfString<"Sound! Euphonium">, 16>>,
];
