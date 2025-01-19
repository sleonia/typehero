import type { Equal, Expect } from "@type-challenges/utils";

type Join<
  T extends string[],
  U extends string | number = ",",
  Acc extends string = "",
> = T extends [infer F extends string, ...infer R extends string[]]
  ? R["length"] extends 0
    ? Join<R, U, `${Acc}${F}`>
    : Join<R, U, `${Acc}${F}${U}`>
  : Acc;

// ------------------- Test section ---------------------

type cases = [
  Expect<Equal<Join<["a", "p", "p", "l", "e"], "-">, "a-p-p-l-e">>,
  Expect<Equal<Join<["Hello", "World"], " ">, "Hello World">>,
  Expect<Equal<Join<["2", "2", "2"], 1>, "21212">>,
  Expect<Equal<Join<["o"], "u">, "o">>,
  Expect<Equal<Join<[], "u">, "">>,
  Expect<Equal<Join<["1", "1", "1"]>, "1,1,1">>,
];
