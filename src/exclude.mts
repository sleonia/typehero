import type { Equal, Expect } from "@type-challenges/utils";

type MyExclude<T, U> = T extends U ? never : T;

// ------------------- Test section ---------------------

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<
    Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >,
];
