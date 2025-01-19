import type { Equal, Expect } from "@type-challenges/utils";

type TrimRight<S extends string> = S extends `${infer F}${" " | "\n" | "\t"}`
  ? TrimRight<F>
  : S;

// ------------------- Test section ---------------------

type cases = [
  Expect<Equal<TrimRight<"str">, "str">>,
  Expect<Equal<TrimRight<"str ">, "str">>,
  Expect<Equal<TrimRight<"str     ">, "str">>,
  Expect<Equal<TrimRight<"     str     ">, "     str">>,
  Expect<Equal<TrimRight<"   foo bar  \n\t ">, "   foo bar">>,
  Expect<Equal<TrimRight<"">, "">>,
  Expect<Equal<TrimRight<"\n\t ">, "">>,
];
