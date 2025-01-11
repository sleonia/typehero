import type { Equal, Expect } from "@type-challenges/utils";

type IsAlphabet<S extends string> =
  Uppercase<S> extends Lowercase<S> ? false : true;

// ------------------- Test section ---------------------

type cases = [
  Expect<Equal<IsAlphabet<"A">, true>>,
  Expect<Equal<IsAlphabet<"z">, true>>,
  Expect<Equal<IsAlphabet<"9">, false>>,
  Expect<Equal<IsAlphabet<"!">, false>>,
  Expect<Equal<IsAlphabet<"😂">, false>>,
  Expect<Equal<IsAlphabet<"">, false>>,
];
