import type { Equal, Expect } from "@type-challenges/utils";

type _StartsWith<
  T extends string,
  U extends string,
> = T extends `${infer F}${infer R}` ? (F extends U ? R : never) : never;

/*
 * But it is also possible to do it with magic
 *
 * ```typescript
 type StartsWith<T extends string, U extends string> = T extends `${U}${string}` ? true : false;
 ```
 */
type StartsWith<T extends string, U extends string> = [T] extends [never]
  ? false
  : U extends `${infer F}${infer R}`
    ? StartsWith<_StartsWith<T, F>, R>
    : U extends ""
      ? true
      : false;

// ------------------- Test section ---------------------

type cases = [
  Expect<Equal<StartsWith<"abc", "ac">, false>>,
  Expect<Equal<StartsWith<"abc", "ab">, true>>,
  Expect<Equal<StartsWith<"abc", "abc">, true>>,
  Expect<Equal<StartsWith<"abc", "abcd">, false>>,
  Expect<Equal<StartsWith<"abc", "">, true>>,
  Expect<Equal<StartsWith<"abc", " ">, false>>,
  Expect<Equal<StartsWith<"", "">, true>>,
];
