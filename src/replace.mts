import type { Equal, Expect } from "@type-challenges/utils";

type Replace<
  S extends string,
  From extends string,
  To extends string,
> = S extends `${infer Before}${Exclude<From, "">}${infer After}`
  ? `${Before}${To}${After}`
  : S;

// ------------------- Test section ---------------------

type cases = [
  Expect<Equal<Replace<"foobar", "bar", "foo">, "foofoo">>,
  Expect<Equal<Replace<"foobarbar", "bar", "foo">, "foofoobar">>,
  Expect<Equal<Replace<"foobarbar", "", "foo">, "foobarbar">>,
  Expect<Equal<Replace<"foobarbar", "bar", "">, "foobar">>,
  Expect<Equal<Replace<"foobarbar", "bra", "foo">, "foobarbar">>,
  Expect<Equal<Replace<"", "", "">, "">>,
];
